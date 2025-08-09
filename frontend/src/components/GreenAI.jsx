import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './GreenAI.css';

export default function GreenAI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'Hello! I\'m GreenAI, your AI assistant for all things related to gardening, plants, and sustainable living. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('idle'); // idle, testing, connected, failed
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // API configuration
  const API_KEY = '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';
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const testConnection = async () => {
    setConnectionStatus('testing');
    try {
      const response = await axios.post(
        API_URL,
        {
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [
            {
              role: 'user',
              content: 'Hello, this is a connection test.'
            }
          ],
          temperature: 0.1,
          max_tokens: 10
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'GreenAI Assistant'
          }
        }
      );
      
      if (response.data && response.data.choices) {
        setConnectionStatus('connected');
        setError(null);
      }
    } catch (err) {
      setConnectionStatus('failed');
      console.error('Connection test failed:', err);
      setError(`Connection test failed: ${err.response?.status || 'Unknown error'}`);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  // Simple offline fallback responses
  const getOfflineResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('plant') || lowerMessage.includes('grow')) {
      return "🌱 For successful plant growth, ensure your plants have adequate light, water, and nutrients. Most plants need well-draining soil and consistent care. What specific plants are you interested in growing?";
    }
    if (lowerMessage.includes('water')) {
      return "💧 Watering is crucial! Most plants prefer deep, less frequent watering rather than daily light watering. Check soil moisture by inserting your finger 1-2 inches deep - if it's dry, it's time to water.";
    }
    if (lowerMessage.includes('soil')) {
      return "🌍 Good soil is the foundation of healthy plants! Use well-draining potting mix for containers, and consider adding compost to improve soil structure and nutrients.";
    }
    if (lowerMessage.includes('seed')) {
      return "🌰 Starting from seeds is rewarding! Make sure to plant at the right depth (usually 2-3 times the seed's width), keep soil moist but not soggy, and provide adequate warmth and light.";
    }
    if (lowerMessage.includes('pest') || lowerMessage.includes('bug')) {
      return "🐛 For natural pest control, try neem oil, insecticidal soap, or companion planting. Encouraging beneficial insects like ladybugs can also help control harmful pests.";
    }
    
    return "🌿 I'm currently running in offline mode with limited responses. For the best gardening advice, please check your internet connection and try again. In the meantime, remember that most plant problems stem from watering issues - too much or too little!";
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Try different models as fallbacks
    const models = [
      'meta-llama/llama-3.1-8b-instruct:free',
      'microsoft/phi-3-mini-128k-instruct:free',
      'google/gemma-2-9b-it:free'
    ];

    let lastError = null;
    let success = false;

    for (const model of models) {
      try {
        const response = await axios.post(
          API_URL,
          {
            model: model,
            messages: [
              {
                role: 'system',
                content: 'You are GreenAI, a helpful AI assistant specializing in gardening, plants, agriculture, sustainability, and environmental topics. Provide informative, practical, and encouraging advice to help users with their green living journey.'
              },
              ...messages.slice(-10).map(msg => ({ // Keep last 10 messages for context
                role: msg.role,
                content: msg.content
              })),
              {
                role: 'user',
                content: userMessage.content
              }
            ],
            temperature: 0.7,
            max_tokens: 1000
          },
          {
            headers: {
              'Authorization': `Bearer ${API_KEY}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': window.location.origin,
              'X-Title': 'GreenAI Assistant'
            }
          }
        );

        const aiMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: response.data.choices[0].message.content,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, aiMessage]);
        setConnectionStatus('connected');
        success = true;
        break; // Success, exit the loop
      } catch (err) {
        lastError = err;
        console.error(`Error with model ${model}:`, err);
        continue; // Try next model
      }
    }

    if (!success) {
      // All API models failed, use offline fallback
      console.error('All models failed, using offline fallback. Last error:', lastError);
      setConnectionStatus('failed');
      
      const offlineResponse = getOfflineResponse(userMessage.content);
      
      const fallbackMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: offlineResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
      
      if (lastError?.response?.status === 401) {
        setError('API key authentication failed. Using offline mode.');
      } else if (lastError?.response?.status === 429) {
        setError('Rate limit exceeded. Using offline mode.');
      } else {
        setError('Connection failed. Using offline mode with basic responses.');
      }
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        role: 'assistant',
        content: 'Hello! I\'m GreenAI, your AI assistant for all things related to gardening, plants, and sustainable living. How can I help you today?',
        timestamp: new Date()
      }
    ]);
    setError(null);
    setConnectionStatus('idle');
  };

  return (
    <div className="green-ai-container">
      <div className="green-ai-header">
        <div className="header-content">
          <h2>🌱 GreenAI Assistant</h2>
          <div className="header-actions">
            <button 
              onClick={testConnection} 
              className={`connection-test-btn ${connectionStatus}`}
              title="Test API Connection"
              disabled={connectionStatus === 'testing'}
            >
              {connectionStatus === 'testing' ? '⏳' : 
               connectionStatus === 'connected' ? '✅' : 
               connectionStatus === 'failed' ? '❌' : '🔗'}
            </button>
            <button onClick={clearChat} className="clear-chat-btn" title="Clear Chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.role}`}>
            <div className="message-avatar">
              {message.role === 'assistant' ? '🤖' : '👤'}
            </div>
            <div className="message-content">
              <div 
                className="message-text" 
                dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
              />
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message assistant">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="error-message">
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)} className="error-close">×</button>
        </div>
      )}

      <div className="chat-input-container">
        <div className="input-wrapper">
          <textarea
            ref={textareaRef}
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
              adjustTextareaHeight();
            }}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about gardening, plants, or sustainable living..."
            className="chat-input"
            disabled={isLoading}
            rows={1}
          />
          <button 
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="send-button"
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function GreenAI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant powered by DeepSeek. I can help you with coding, problem-solving, creative tasks, and much more. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('idle');
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // API configuration
  const API_KEY = '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';
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const MODEL_ID = 'tngtech/deepseek-r1t2-chimera:free';

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
          model: MODEL_ID,
          messages: [
            {
              role: 'user',
              content: 'Hello, this is a connection test.'
            }
          ],
          temperature: 0.1,
          max_tokens: 50
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'AI Assistant'
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

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const response = await axios.post(
        API_URL,
        {
          model: MODEL_ID,
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses. Help users with their questions and tasks to the best of your ability.'
            },
            ...messages.slice(-10).map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: userMessage.content
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'AI Assistant'
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
    } catch (err) {
      console.error('Error calling AI API:', err);
      setConnectionStatus('failed');
      
      let errorMessage = 'Sorry, I encountered an error while processing your request. Please try again.';
      
      if (err.response?.status === 401) {
        errorMessage = 'Authentication failed. Please check the API key configuration.';
        setError('API key authentication failed.');
      } else if (err.response?.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment before trying again.';
        setError('Rate limit exceeded. Please wait.');
      } else if (err.response?.status === 400) {
        errorMessage = 'Invalid request. Please try rephrasing your message.';
        setError('Request format error.');
      } else {
        setError('Connection failed. Please try again.');
      }
      
      const errorResponseMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: errorMessage,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponseMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-light p-1 rounded">$1</code>')
      .replace(/\n/g, '<br>');
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        role: 'assistant',
        content: 'Hello! I\'m your AI assistant powered by DeepSeek. I can help you with coding, problem-solving, creative tasks, and much more. How can I assist you today?',
        timestamp: new Date()
      }
    ]);
    setError(null);
    setConnectionStatus('idle');
  };

  return (
    <div className="container-fluid vh-100 p-0" style={{ minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 70%, 100% { opacity: 0.4; transform: scale(1); }
            35% { opacity: 1; transform: scale(1.1); }
          }
          .ai-gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
          .btn-ai { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            border: none; 
            transition: all 0.3s ease;
          }
          .btn-ai:hover { 
            background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%); 
            transform: translateY(-1px); 
          }
          .typing-dot { animation: pulse 1.5s ease-in-out infinite; }
          .typing-dot:nth-child(2) { animation-delay: 0.5s; }
          .typing-dot:nth-child(3) { animation-delay: 1s; }
          .overflow-auto::-webkit-scrollbar { width: 6px; }
          .overflow-auto::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; }
          .overflow-auto::-webkit-scrollbar-thumb { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            border-radius: 3px; 
          }
          .message-bubble { 
            border-radius: 18px; 
            max-width: 70%; 
            word-wrap: break-word; 
          }
          .form-control:focus { 
            box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25); 
            border-color: #667eea; 
          }
          @media (max-width: 768px) {
            .message-bubble { max-width: 85%; }
            .px-4 { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
          }
        `
      }} />
      
      <div className="row h-100 g-0">
        <div className="col-12">
          <div className="card h-100 border-0 rounded-0 ai-gradient shadow-lg">
            
            {/* Header */}
            <div className="card-header border-0 text-white py-3 px-4">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <i className="bi bi-robot fs-3 me-3"></i>
                  <h4 className="mb-0 fw-bold">🌱 Green AI Assistant</h4>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  <button
                    onClick={testConnection}
                    disabled={connectionStatus === 'testing'}
                    className={`btn btn-sm rounded-pill px-3 ${
                      connectionStatus === 'connected' ? 'btn-success' :
                      connectionStatus === 'failed' ? 'btn-danger' :
                      connectionStatus === 'testing' ? 'btn-warning' : 'btn-light'
                    }`}
                    title="Test Connection"
                  >
                    {connectionStatus === 'testing' ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-1"></span>
                        Testing
                      </>
                    ) : connectionStatus === 'connected' ? (
                      <>
                        <i className="bi bi-check-circle me-1"></i>
                        Connected
                      </>
                    ) : connectionStatus === 'failed' ? (
                      <>
                        <i className="bi bi-x-circle me-1"></i>
                        Failed
                      </>
                    ) : (
                      <>
                        <i className="bi bi-link me-1"></i>
                        Test
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={clearChat}
                    className="btn btn-outline-light btn-sm rounded-pill px-3"
                    title="Clear Chat"
                  >
                    <i className="bi bi-trash me-1"></i>
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="card-body bg-light p-0 d-flex flex-column" style={{ height: 'calc(100vh - 160px)' }}>
              <div className="flex-grow-1 overflow-auto py-3 px-2 px-md-4">
                {messages.map((message) => (
                  <div key={message.id} className={`d-flex mb-3 ${message.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className={`d-flex align-items-start gap-2 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div 
                        className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${
                          message.role === 'user' ? 'bg-success' : 'bg-primary'
                        } text-white`} 
                        style={{ width: '36px', height: '36px' }}
                      >
                        <i className={`bi ${message.role === 'user' ? 'bi-person-fill' : 'bi-robot'}`} style={{ fontSize: '16px' }}></i>
                      </div>
                      
                      {/* Message Bubble */}
                      <div className="message-bubble">
                        <div className={`p-3 shadow-sm ${
                          message.role === 'user' 
                            ? 'bg-success text-white' 
                            : 'bg-white border'
                        }`} style={{ borderRadius: '18px' }}>
                          <div 
                            dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                          />
                        </div>
                        <small className={`text-muted d-block mt-1 px-2 ${message.role === 'user' ? 'text-end' : 'text-start'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isLoading && (
                  <div className="d-flex justify-content-start mb-3">
                    <div className="d-flex align-items-start gap-2">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                        <i className="bi bi-robot" style={{ fontSize: '16px' }}></i>
                      </div>
                      <div className="bg-white border shadow-sm p-3" style={{ borderRadius: '18px' }}>
                        <div className="d-flex gap-1 align-items-center">
                          <div className="bg-primary rounded-circle typing-dot" style={{ width: '8px', height: '8px' }}></div>
                          <div className="bg-primary rounded-circle typing-dot" style={{ width: '8px', height: '8px' }}></div>
                          <div className="bg-primary rounded-circle typing-dot" style={{ width: '8px', height: '8px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Error Alert */}
              {error && (
                <div className="alert alert-warning alert-dismissible mx-2 mx-md-4 mb-2">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                  <button type="button" className="btn-close" onClick={() => setError(null)}></button>
                </div>
              )}

              {/* Input Area */}
              <div className="bg-white border-top p-3">
                <div className="input-group d-flex align-items-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <input
                    ref={textareaRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask me anything... I can help with coding, writing, analysis, and more!"
                    className="form-control border-0 shadow-sm"
                    disabled={isLoading}
                    style={{ 
                      borderRadius: '25px 0 0 25px',
                      height: '45px',
                      lineHeight: '45px',
                      width: 'calc(100% - 80px)'
                    }}
                  />
                  <button 
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="btn btn-ai text-white px-4 flex-shrink-0"
                    style={{ 
                      borderRadius: '0 25px 25px 0',
                      height: '45px',
                      lineHeight: '1',
                      minWidth: '60px'
                    }}
                  >
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <i className="bi bi-send-fill"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

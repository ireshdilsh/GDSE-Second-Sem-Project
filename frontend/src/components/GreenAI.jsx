import React, { useState, useRef, useEffect } from 'react';

const GreenAI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "🌱 Hello! I'm GreenAI, your personal gardening assistant. I can help you with plant care, gardening tips, plant identification, pest control, and plant matching for swaps. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [quickActions] = useState([
    { text: "How often should I water my monstera?", icon: "💧" },
    { text: "Identify this plant disease", icon: "🔍" },
    { text: "Best plants for low light", icon: "🌿" },
    { text: "When to repot my snake plant?", icon: "🪴" }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'GreenAI Gardening Assistant'
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            {
              role: "system",
              content: "You are GreenAI, a specialized gardening assistant. You ONLY help with gardening, plant care, plant identification, pest control, plant diseases, plant matching for swaps/trades, indoor/outdoor gardening, soil care, fertilizers, watering schedules, plant propagation, and related botanical topics. If asked about anything else, politely redirect to gardening topics. Keep responses helpful, friendly, and concise. Use plant emojis when appropriate. Focus on practical advice."
            },
            {
              role: "user",
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "Sorry, I couldn't process your request. Please try again.";

      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('API Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: "🌱 Sorry, I'm having trouble connecting right now. Please try again in a moment. In the meantime, remember that most houseplants prefer indirect sunlight and watering when the top inch of soil feels dry!",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, errorMessage]);
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

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Chat Section */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100 d-flex flex-column">
            {/* Header */}
            <div className="card-header bg-gradient text-white border-0" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)'}}>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <i className="fas fa-robot fs-3"></i>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold">GreenAI Assistant</h5>
                  <small className="opacity-75">Your Personal Gardening Expert</small>
                </div>
                <div className="ms-auto">
                  <span className="badge bg-light text-success">
                    <i className="fas fa-circle me-1" style={{fontSize: '0.5rem'}}></i>
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="card-body flex-grow-1 overflow-auto" style={{height: '400px'}}>
              <div className="messages-container">
                {messages.map((message) => (
                  <div key={message.id} className={`mb-3 d-flex ${message.type === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className={`d-flex align-items-start ${message.type === 'user' ? 'flex-row-reverse' : ''}`} style={{maxWidth: '80%'}}>
                      <div className={`rounded-circle d-flex align-items-center justify-content-center me-2 ms-2 ${message.type === 'user' ? 'ms-0 me-2' : 'me-2 ms-0'}`} style={{width: '35px', height: '35px', backgroundColor: message.type === 'user' ? '#3b82f6' : '#22c55e'}}>
                        <i className={`fas ${message.type === 'user' ? 'fa-user' : 'fa-robot'} text-white`}></i>
                      </div>
                      <div className={`p-3 rounded-3 ${message.type === 'user' ? 'bg-primary text-white' : 'bg-light'}`}>
                        <div className="message-content">
                          {message.content}
                        </div>
                        <small className={`d-block mt-1 ${message.type === 'user' ? 'text-white-50' : 'text-muted'}`}>
                          {message.timestamp}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="mb-3 d-flex justify-content-start">
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '35px', height: '35px', backgroundColor: '#22c55e'}}>
                        <i className="fas fa-robot text-white"></i>
                      </div>
                      <div className="bg-light p-3 rounded-3">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="card-footer bg-white border-0">
              <div className="d-flex align-items-center gap-2">
                <input
                  type="text"
                  className="form-control border-0 bg-light"
                  placeholder="Ask me anything about gardening, plant care, or plant identification..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="btn btn-success px-4"
                  onClick={() => sendMessage()}
                  disabled={isLoading || !inputMessage.trim()}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="row g-3">
            {/* Quick Actions */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h6 className="mb-0 fw-bold">Quick Questions</h6>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    {quickActions.map((action, index) => (
                      <button 
                        key={index}
                        className="btn btn-outline-success text-start"
                        onClick={() => sendMessage(action.text)}
                      >
                        <span className="me-2">{action.icon}</span>
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Features */}
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h6 className="mb-0 fw-bold">AI Features</h6>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item border-0 px-0">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-seedling text-success me-3"></i>
                        <div>
                          <div className="fw-medium">Plant Care Tips</div>
                          <small className="text-muted">Personalized care advice</small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-search text-info me-3"></i>
                        <div>
                          <div className="fw-medium">Plant Identification</div>
                          <small className="text-muted">Describe your plant</small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-bug text-warning me-3"></i>
                        <div>
                          <div className="fw-medium">Pest & Disease Help</div>
                          <small className="text-muted">Diagnosis & treatment</small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-exchange-alt text-primary me-3"></i>
                        <div>
                          <div className="fw-medium">Plant Matching</div>
                          <small className="text-muted">Perfect swap suggestions</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-gradient text-white" style={{background: 'linear-gradient(135deg, #16a34a, #15803d)'}}>
                <div className="card-body text-center">
                  <i className="fas fa-lightbulb fs-2 mb-3"></i>
                  <h6 className="fw-bold mb-2">Pro Tip</h6>
                  <p className="small mb-0 opacity-90">
                    Be specific when describing your plants or problems. Include details like leaf color, size, and growing conditions for better AI assistance!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          animation: typing 1.4s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
        .messages-container {
          min-height: 100%;
        }
      `}</style>
    </div>
  );
};

export default GreenAI;

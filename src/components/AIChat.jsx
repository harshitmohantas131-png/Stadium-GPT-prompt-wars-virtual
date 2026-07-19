import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/AIChat.module.css';
import { IoSend } from 'react-icons/io5';
import { BsStars } from 'react-icons/bs';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import SuggestedPrompts from './SuggestedPrompts';
import { sendMessage } from '../services/gemini';
import { buildContext } from '../utils/buildContextPrompt';
import { getRecommendations } from '../services/recommendations';
import { STADIUMS } from '../data/stadiums';
import { MATCHES } from '../data/matches';

const INITIAL_MESSAGE = `👋 Welcome to StadiumGPT!
I'm your AI Match Day Companion.
I can help you with:
• Stadium navigation
• Crowd guidance
• Transportation
• Accessibility
• Match information
• Emergency assistance
• Food recommendations
• Translation support

How can I help you today?`;

const AIChat = ({ role, stadium, matchStage }) => {
  const [messages, setMessages] = useState([
    { role: 'model', text: INITIAL_MESSAGE, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Create user message
    const userMsg = {
      role: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Format history for Gemini SDK
      // The API expects history to alternate and start with user. We exclude the initial welcome message.
      const historyForGemini = messages
        .filter((_, index) => index !== 0)
        .map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }));

      const context = buildContext(role, STADIUMS[stadium], MATCHES[matchStage]);
      const aiResponseText = await sendMessage(userMsg.text, historyForGemini, context);

      const aiMsg = {
        role: 'model',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg = {
        role: 'model',
        text: 'Unable to contact the AI assistant right now. Please try again.',
        isError: true,
        retryText: userMsg.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className={`${styles.chatContainer} glass-card fade-in`} id="ai-assistant">
      <header className={styles.chatHeader}>
        <BsStars className={styles.headerIcon} />
        <div>
          <h2 className={styles.title}>StadiumGPT AI Assistant</h2>
          <p className={styles.subtitle}>Ask anything about your match day.</p>
        </div>
      </header>

      {role && stadium && matchStage && (
        <div className={styles.recommendationsArea} style={{ padding: '0.5rem 1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {getRecommendations(role, STADIUMS[stadium], MATCHES[matchStage]).map((rec, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', padding: '0.4rem 0.8rem', borderRadius: '12px', fontSize: '0.85rem', color: '#60a5fa' }}>
              💡 {rec}
            </div>
          ))}
        </div>
      )}

      <div className={styles.chatArea}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <ChatMessage message={msg} />
            {msg.isError && (
              <button 
                onClick={() => handleSend(msg.retryText)}
                style={{ marginLeft: '1rem', padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '-0.5rem', marginBottom: '1rem' }}
              >
                Retry
              </button>
            )}
          </div>
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        {messages.length === 1 && <SuggestedPrompts onSelectPrompt={handleSend} />}
        
        <div className={styles.inputWrapper}>
          <textarea
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            disabled={isLoading}
            rows={1}
            aria-label="Chat input"
          />
          <button 
            className={styles.sendButton} 
            onClick={() => handleSend()}
            disabled={isLoading || !inputValue.trim()}
            aria-label="Send message"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIChat;

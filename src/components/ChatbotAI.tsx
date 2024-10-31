import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ChatBotAI.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import GoBack from './Goback';
const Chatbot: React.FC = () => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');

  // Function to start the chat
  const handleStartChat = () => {
    setIsChatStarted(true);
  };

  // Function to send message to OpenAI API
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the chat
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
    
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions', 
        {
          prompt: input,
          max_tokens: 50,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const botResponse = response.data.choices[0].text.trim();
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { text: 'Error connecting to AI', sender: 'bot' }]);
    }

    setInput('');
  };

  return (
    <div className={styles.chatbotContainer}>
      {!isChatStarted ? (
        // Welcome Screen
        <div className={styles.welcomeScreen}>
        
          <FontAwesomeIcon icon={faRobot} className={styles.robotIcon} />
          <h2>Hello!</h2>
          <p>My name is Robbie and I’m here to help you</p>
          <button className={styles.askButton} onClick={handleStartChat}>Ask Robbie</button>
        </div>
      ) : (
        // Chat Screen
        <div className={styles.chatScreen}>
          <div className={styles.header}>
          <GoBack/>
            <h3>Robbie</h3>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : ''}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ChatbotAI.module.css';
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
    <div className={`${styles.chatbotContainer} w-full max-w-3xl mx-auto p-4`}>
      {!isChatStarted ? (
        // Welcome Screen
        <div className={`${styles.welcomeScreen} text-center`}>
          <FontAwesomeIcon icon={faRobot} className={`${styles.robotIcon} text-4xl`} />
          <h2 className="text-2xl font-semibold mt-4">Hello!</h2>
          <p className="mt-2 text-lg">My name is Robbie and I’m here to help you</p>
          <button
            className={`${styles.askButton} mt-4 bg-blue-500 text-white px-6 py-2 rounded-full text-lg sm:px-4 sm:py-1 sm:text-md`}
            onClick={handleStartChat}
          >
            Ask Robbie
          </button>
        </div>
      ) : (
        // Chat Screen
        <div className={`${styles.chatScreen} flex flex-col h-[80vh] sm:h-[70vh]`}>
          <div className="flex justify-between items-center p-4 border-b">
            <GoBack />
            <h3 className="text-xl font-semibold">Robbie</h3>
          </div>
          <div className={`${styles.chatMessages} flex-1 overflow-y-auto p-4 space-y-4`}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : ''} 
                  ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.inputContainer} flex items-center p-4 border-t`}>
            <input
              type="text"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`${styles.input} flex-1 px-4 py-2 border rounded-full`}
            />
            <button
              onClick={handleSendMessage}
              className={`${styles.sendButton} ml-2 text-blue-500 text-xl sm:text-lg`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

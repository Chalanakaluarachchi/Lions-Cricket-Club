import React, { useState } from 'react';
import img1 from "../../assets/bot.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);

    // Simulate response from the bot
    setTimeout(() => {
      let botResponse;
      switch (message.toLowerCase()) {
        case 'hello':
          botResponse = 'Hi! How can I help you today?';
          break;
        case 'problems':
          botResponse = 'Sure, here are some common problems and solutions:\n1. Batting technique: Practice proper stance and shot selection.\n2. Bowling accuracy: Focus on consistent line and length.\n3. Fielding skills: Work on agility and positioning.';
          break;
        // Add more cases for different user inputs
        default:
          botResponse = "I'm sorry, I don't understand that. How can I assist you?";
          break;
      }
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {isOpen && (
        <div className="w-80 max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">Cricket Club Chatbot</span>
            <button className="text-white" onClick={toggleChatbot}>
              X
            </button>
          </div>
          <div className="p-4 bg-gray-200 h-48 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`text-sm py-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-4 flex items-center bg-gray-100">
            <input className="flex-grow mr-2 py-2 px-3 rounded-md border border-gray-300 focus:outline-none" type="text" placeholder="Type your message..." onKeyPress={(e) => {if (e.key === 'Enter') handleSendMessage(e.target.value)}} />
            <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => handleSendMessage('Hello')}>Send</button>
          </div>
        </div>
      )}
      
        <img src={img1} alt="Chatbot Icon" style={{ width: '70px', height: '50px' }} onClick={toggleChatbot}/>
      
    </div>
  );
};

export default Chatbot;

import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa'; // Icon for chat button and close button

const ViewReport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Add user's message to chat
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");

      // Simulate a bot response after 1 second
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response", sender: "bot" }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="relative h-screen">
      {/* PDF iframe */}
      <iframe
        src="https://pdfobject.com/pdf/sample.pdf"
        width="100%"
        height="100%"
        title="Example PDF"
        className="w-full h-full"
      >
        Your browser does not support iframes.
      </iframe>

      {/* Chatbox Toggle Button (Conditional Rendering) */}
      {!isChatOpen && (
        <div
          className="absolute bottom-5 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
          onClick={() => setIsChatOpen(true)}
        >
          <FaComments size={34} /> {/* Chat icon */}
        </div>
      )}

      {/* Chatbox */}
      {isChatOpen && (
        <div className="absolute bottom-5 right-5 w-[450px] bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-y-0">
          <div className="bg-blue-500 text-white flex justify-between items-center p-2 rounded-t-lg">
            <span>Chat with PDF</span>
            <FaTimes
              size={20}
              className="cursor-pointer"
              onClick={() => setIsChatOpen(false)} // Close chatbox on click
            />
          </div>
          <div className="h-[500px] overflow-y-auto p-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg mt-5 ${
                  message.sender === "user"
                    ? "bg-blue-300 ml-10 text-white text-right" // Lightened background for user
                    : "bg-gray-300 mr-10 text-black text-left pl-4" // Added padding for bot messages
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 h-12 border-none focus:outline-none" // Increased height
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 h-12 hover:bg-blue-600 -ml-3" // Shifted left with negative margin
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewReport;

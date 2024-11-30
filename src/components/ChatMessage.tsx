import React from 'react';
import { Message } from '../types/Message';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const messageClass = message.isUser
    ? 'ml-auto bg-green-100 text-gray-800'
    : 'mr-auto bg-gray-100 text-gray-800';

  return (
    <div className={`max-w-[80%] rounded-lg p-3 ${messageClass}`}>
      <p className="whitespace-pre-wrap">{message.text}</p>
    </div>
  );
}
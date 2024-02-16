import { useEffect, useState } from "react";

import './TeacherChatModule.css'; // Import CSS file for styling


interface TeacherChatModuleProps {
    initialMessages: string[];
}

export default function TeacherChatModule({initialMessages}: TeacherChatModuleProps) {

    const [chatMessages, setChatMessages] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');

    const startChat = () => {
        // Start the chat with the initial message
        setChatMessages(initialMessages);
    }

    useEffect(() => {
        startChat();
    }, );


    const handleSendMessage = () => {
        console.log(message)
        // if (message.trim() !== '') {
        //     setChatMessages([...chatMessages, message]);
        //     // Here you can send the message to the AI and receive a response
        //     // For demonstration purposes, let's echo the message back
        //     setMessage('');
        // }
    }

    return (
    <>
        <div className="chat-container">
            <h2>AI Chat</h2>
            <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                    <div 
                        key={index} 
                        className="chat-message"
                        >
                        {msg}
                    </div>
                    )
                )}

                <p>---This is a solution---</p> 
                <p>
                <button className="generate-solutions-button">Use this solution</button>
                <button className="generate-solutions-button">Reject this solution</button>
                </p>
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
            <button className="generate-solutions-button">Ask to generate solutions</button>

        </div>

    </>
    )


}
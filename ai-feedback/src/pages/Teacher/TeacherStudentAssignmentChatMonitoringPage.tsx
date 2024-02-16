import { useState } from "react";


export default function TeacherStudentAssignmentChatMonitoringPage() {

    const [chatMessages, setChatMessages] = useState<string[]>(["Thank you for your submssion, here is feedback....", "Oke bedankt, kan je die meer uitleggen aub???"]);


    const handleSendMessage = () => {
        // console.log(message)
        setChatMessages(chatMessages)
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

                <div>Hier is meer feedback \n ...feedback uitleg...</div> 
                <p>Rating: 
                    <label htmlFor="rating">Rate the feedback:</label>
                <input
                    type="number"
                    id="rating"
                    min="1"
                    max="5"
                    />
                    </p>
            </div>

            <div className="chat-input">
                {/* <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                /> */}
                <button onClick={handleSendMessage}>Can&apos;t send here</button>
            </div>

        </div>

    </>
    )
}
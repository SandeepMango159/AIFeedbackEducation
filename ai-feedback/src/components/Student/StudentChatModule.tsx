export default function StudentChatModule() {


    return (
        <>
            <div className="chat-container">
                <h2>AI Chat</h2>
                <div className="chat-messages">
                        <div className="chat-message">
                            Hello I&apos;ll assist you for this assignment                            
                        </div>
                        <div className="chat-message">
                            Hi here is my solution                           
                        </div>
                        <div className="chat-message">
                            Hello here is some feedback                          
                        </div>
                </div>
    
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                    />
                    <button 
                    // onClick={handleSendMessage}
                    >Send</button>
                </div>
                <button className="generate-solutions-button">Upload files to submit a solution</button>
    
            </div>
    
        </>
        )
}
import './ChatRoom.css'
export default function ChatRoom({ user }) {
    return (
        <div className="container">
            <div className="sidebar">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="default avatar" className="avatar" />
                <h2 >{user.username}</h2>
                <p>{user.email}</p>
                <p>Status: {user.status}</p>

            </div>
            <div className="chatArea">
                <div className="messageFeed"></div>
                <div className="inputArea">
                    <input type="text" placeholder="Type your message..." className="input" />
                    <button className="button">Send</button>
                </div>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./components/Messages";
import MessagesInput from "./components/MessageInput";

import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">React Chat</header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessagesInput socket={socket} />
        </div>
      ) : (
        <div>No connection</div>
      )}
    </div>
  );
}

export default App;

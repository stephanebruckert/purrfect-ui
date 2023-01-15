import React, { useEffect, useState } from 'react';
import './App.css';
import useWebSocket from 'react-use-websocket';
import Chart from './Chart'

function App() {
  const [socketUrl] = useState('ws://localhost:3000/ws');

  useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap['message']) => fetchData()
  });

  const [user, setUser] = useState({
    'total_cancelled': '',
    'total_orders': ''
  });

  const fetchData = () => {
    return fetch("http://localhost:3000/totals")
        .then((response) => response.json())
        .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Total cancelled: {user['total_cancelled']}</li>
          <li>Total orders: {user['total_orders']}</li>
        </ul>
        <Chart />
      </header>
    </div>
  );
}

export default App;

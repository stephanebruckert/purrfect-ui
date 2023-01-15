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
    'total_orders': '',
    'total_last_month': '',
    'total_in_progress': '',
    'revenue': '',
  });

  const fetchData = () => {
    return fetch("http://localhost:3000/stats")
        .then((response) => response.json())
        .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <p>Hi Alice, here are your live statistics:</p>
        <ul>
          <li>{user['total_orders']} total orders</li>
          <li>{user['total_last_month']} orders in the last month</li>
          <li>{user['total_in_progress']} orders in progress</li>
          <li>£{user['revenue']} revenue</li>
        </ul>
        <Chart />
      </header>
    </div>
  );
}

export default App;

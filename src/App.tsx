import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
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
      </header>
    </div>
  );
}

export default App;

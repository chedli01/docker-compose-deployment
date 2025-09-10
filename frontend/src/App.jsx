import { useState, useEffect } from "react";

function App() {
  const [orders, setOrders] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));

    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React Frontend</h1>
      <h2>Orders API response:</h2>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
      <h2>Users API response:</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default App;

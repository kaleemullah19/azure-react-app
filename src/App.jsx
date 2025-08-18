import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Welcome to My Azure Demo App</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          <button type="submit" className="submit-btn">
            Say Hello
          </button>
        </form>
        {submitted && name && (
          <div className="greeting">
            <h2>Hello, {name}!</h2>
            <p>Thanks for visiting my Azure-hosted React app!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

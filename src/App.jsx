import { useState } from "react";
import "./App.css";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      "InstrumentationKey=de4b59f1-23d3-4473-b394-55531f920b64;IngestionEndpoint=https://centralus-2.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/;ApplicationId=7888b6a3-b815-4db9-aa84-bda007beb79a",
    enableAutoRouteTracking: true,
  },
});
appInsights.loadAppInsights();

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

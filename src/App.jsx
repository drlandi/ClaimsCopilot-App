import React from 'react';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #232f3e', marginBottom: '20px' }}>
        <h1 style={{ color: '#232f3e' }}>ClaimsCopilot: Evaluator Cockpit</h1>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Mocking the logic we defined in our Plan */}
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h2>Current Claim Queue</h2>
          <p>Processing 1 document...</p>
          <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '4px' }}>
            <strong>Status:</strong> <span style={{ color: 'orange' }}>PROCESSING</span>
          </div>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: '#eef6ff' }}>
          <h2>Explainable AI Insights</h2>
          <p>Waiting for Groq API response...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
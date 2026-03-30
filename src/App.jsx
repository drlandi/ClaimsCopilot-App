import React, { useState } from 'react';

// Temporary mock components for our 3 views
const CustomerView = () => <div style={{padding: '20px', background: '#e3f2fd'}}><h2>Customer: Upload Claim</h2><p>Drag & Drop PDF Here...</p></div>;
const EvaluatorView = () => <div style={{padding: '20px', background: '#f3e5f5'}}><h2>Evaluator: Decision Cockpit</h2><p>AI Analysis vs. Document...</p></div>;
const BrokerView = () => <div style={{padding: '20px', background: '#e8f5e9'}}><h2>Broker: Client Overview</h2><p>Urgency Table...</p></div>;

function App() {
  const [role, setRole] = useState('customer'); // Default role

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
      {/* PROFESSIONAL TOP BAR */}
      <nav style={{ background: '#232f3e', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between' }}>
        <strong>ClaimsCopilot</strong>
        <div>
          <span style={{marginRight: '15px'}}>Role: <strong>{role.toUpperCase()}</strong></span>
          <button onClick={() => setRole('customer')}>As Customer</button>
          <button onClick={() => setRole('evaluator')}>As Evaluator</button>
          <button onClick={() => setRole('broker')}>As Broker</button>
        </div>
      </nav>

      {/* DYNAMIC VIEW ROUTER */}
      <main style={{ padding: '40px' }}>
        {role === 'customer' && <CustomerView />}
        {role === 'evaluator' && <EvaluatorView />}
        {role === 'broker' && <BrokerView />}
      </main>
    </div>
  );
}

export default App;
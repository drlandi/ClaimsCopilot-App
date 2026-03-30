import React, { useState } from 'react';
// IMPORT: This tells React to fetch the specific 'CustomerPortal' logic from your new file
import CustomerPortal from './components/CustomerPortal';

function App() {
  // STATE: This is our 'Mock Identity'. 
  // In the final version, AWS Cognito will set this value.
  const [role, setRole] = useState('customer');

  return (
    <div style={containerStyle}>
      {/* GLOBAL NAVIGATION BAR */}
      <nav style={navStyle}>
        <div style={logoStyle}>ClaimsCopilot <span style={betaTag}>v1.0-MVP</span></div>
        
        {/* ROLE SWITCHER: For development/brainstorming purposes */}
        <div style={switcherStyle}>
          <span style={{marginRight: '15px', fontSize: '12px', opacity: 0.8}}>SIMULATE ROLE:</span>
          <button 
            onClick={() => setRole('customer')} 
            style={role === 'customer' ? activeBtn : inactiveBtn}>
            Customer
          </button>
          <button 
            onClick={() => setRole('evaluator')} 
            style={role === 'evaluator' ? activeBtn : inactiveBtn}>
            Evaluator
          </button>
          <button 
            onClick={() => setRole('broker')} 
            style={role === 'broker' ? activeBtn : inactiveBtn}>
            Broker
          </button>
        </div>
      </nav>

      {/* DYNAMIC CONTENT AREA: This is the 'Router' logic */}
      <main style={mainContentStyle}>
        {/* CONDITIONAL RENDERING: Only show the component if the role matches */}
        {role === 'customer' && <CustomerPortal />}
        
        {role === 'evaluator' && (
          <div style={placeholderStyle}>
            <h2>Evaluator Dashboard</h2>
            <p>Status: 🚧 Under Construction (Front-End Path)</p>
          </div>
        )}

        {role === 'broker' && (
          <div style={placeholderStyle}>
            <h2>Broker Overview</h2>
            <p>Status: 🚧 Under Construction (Front-End Path)</p>
          </div>
        )}
      </main>
    </div>
  );
}

// --- ARCHITECTURAL STYLES (Inline for Clean Single-File Logic) ---
const containerStyle = {
  fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  minHeight: '100vh',
  backgroundColor: '#f0f2f5',
  color: '#1c1e21'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 40px',
  height: '70px',
  backgroundColor: '#232f3e', // Amazon Dark Blue
  color: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const logoStyle = { fontSize: '22px', fontWeight: 'bold', letterSpacing: '-0.5px' };
const betaTag = { fontSize: '10px', background: '#ff9900', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px', color: '#232f3e' };
const switcherStyle = { display: 'flex', alignItems: 'center' };
const mainContentStyle = { padding: '40px' };
const placeholderStyle = { textAlign: 'center', marginTop: '100px', color: '#888' };

const baseBtn = {
  padding: '8px 16px',
  marginLeft: '8px',
  cursor: 'pointer',
  borderRadius: '6px',
  border: '1px solid rgba(255,255,255,0.3)',
  transition: 'all 0.2s ease'
};

const activeBtn = { ...baseBtn, backgroundColor: 'white', color: '#232f3e', fontWeight: 'bold' };
const inactiveBtn = { ...baseBtn, backgroundColor: 'transparent', color: 'white' };

export default App;
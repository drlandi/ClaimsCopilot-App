import React, { useState } from 'react';
import AuthScreen from './components/AuthScreen';
import CustomerPortal from './components/CustomerPortal';
import BrokerOverview from './components/BrokerOverview';
import EvaluatorDashboard from './components/EvaluatorDashboard';

function App() {
  const [user, setUser] = useState(null); // Keeps track of who is logged in

  // If no user is logged in, show the Auth screen
  if (!user) {
    return (
      <div style={{ background: '#f0f2f5', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <AuthScreen onLogin={(userData) => setUser(userData)} />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      {/* GLOBAL NAVIGATION */}
      <nav style={{ background: '#232f3e', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>ClaimsCopilot | Seguros Horizonte</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '12px', opacity: 0.8 }}>Logged in as: <strong>{user.role.toUpperCase()}</strong></span>
          <button 
            onClick={() => setUser(null)} 
            style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '5px 12px', cursor: 'pointer', borderRadius: '4px' }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* ROLE-BASED DASHBOARD ROUTING */}
      <main style={{ padding: '40px' }}>
        {user.role === 'customer' && <CustomerPortal user={user} />}
        {user.role === 'broker' && <BrokerOverview />}
        {user.role === 'evaluator' && <EvaluatorDashboard />}
      </main>
    </div>
  );
}

export default App;
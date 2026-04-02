import React, { useState } from 'react';
import { ACTIVE_POLICIES } from '../data/mockPolicies';

const AuthScreen = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState('customer');
  const [idValue, setIdValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering && role === 'customer') {
      const policy = ACTIVE_POLICIES.find(p => p.policyId === idValue);
      if (!policy) return alert("ERROR: Policy Number not found.");
      if (policy.status === 'EXPIRED') return alert("ERROR: Policy is EXPIRED.");
      alert(`SUCCESS: Welcome, ${policy.holder}!`);
    }
    onLogin({ role, idValue });
  };

  return (
    <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '400px', margin: '100px auto' }}>
      <h2 style={{ textAlign: 'center', color: '#232f3e' }}>{isRegistering ? 'Join Seguros Horizonte' : 'Partner Login'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label style={{fontSize: '12px', fontWeight: 'bold'}}>I am a:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} style={{padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}}>
          <option value="customer">Policy Holder (Customer)</option>
          <option value="broker">Certified Broker (Corretor)</option>
          <option value="evaluator">Company Employee</option>
        </select>
        {isRegistering && (
          <input required type="text" placeholder={role === 'customer' ? "Policy # (e.g. POL-7788)" : "SUSEP / Employee ID"} 
                 style={{padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}} 
                 value={idValue} onChange={(e) => setIdValue(e.target.value)} />
        )}
        <input type="email" placeholder="Email" style={{padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}} required />
        <input type="password" placeholder="Password" style={{padding: '12px', borderRadius: '4px', border: '1px solid #ddd'}} required />
        <button type="submit" style={{ background: '#ff9900', color: '#232f3e', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
          {isRegistering ? 'Verify & Register' : 'Sign In'}
        </button>
      </form>
      <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '20px' }}>
        <span onClick={() => setIsRegistering(!isRegistering)} style={{ color: '#007eb9', cursor: 'pointer', fontWeight: 'bold' }}>
          {isRegistering ? 'Back to Login' : 'New? Register here'}
        </span>
      </p>
    </div>
  );
};

export default AuthScreen;
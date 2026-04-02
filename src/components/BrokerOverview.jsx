import React, { useState } from 'react';
import { PROSPECT_SCENARIOS } from '../data/prospects';

const BrokerOverview = () => {
  const [activeTab, setActiveTab] = useState('claims');
  const [carValue, setCarValue] = useState(50000);
  const [riskResult, setRiskResult] = useState(null);

  const runSimulation = () => {
    let grade = 'GREEN', msg = 'Instant Approval.', color = '#27ae60', premium = carValue * 0.05;
    if (carValue > 150000) { grade = 'YELLOW'; msg = 'Manual Review: High Value Asset.'; color = '#f39c12'; premium = carValue * 0.07; }
    if (carValue > 400000) { grade = 'RED'; msg = 'Declined: Exceeds Risk Capacity.'; color = '#e74c3c'; premium = 0; }
    setRiskResult({ premium: premium.toLocaleString('pt-BR'), grade, msg, color });
  };

  return (
    <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('claims')} style={{padding: '10px 20px', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === 'claims' ? '3px solid #ff9900' : 'none'}}>Claims</button>
        <button onClick={() => setActiveTab('simulator')} style={{padding: '10px 20px', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === 'simulator' ? '3px solid #ff9900' : 'none'}}>Simulator</button>
      </div>

      {activeTab === 'simulator' ? (
        <div style={{textAlign: 'center'}}>
          <h3>Risk Admissibility Engine</h3>
          <select onChange={(e) => setCarValue(PROSPECT_SCENARIOS.find(s => s.name === e.target.value)?.data.vehicleValue || 50000)} style={{padding: '8px', marginBottom: '15px'}}>
            <option value="">-- Load Stress Test --</option>
            {PROSPECT_SCENARIOS.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
          <input type="number" value={carValue} onChange={(e) => setCarValue(e.target.value)} style={{display: 'block', margin: '10px auto', padding: '10px'}} />
          <button onClick={runSimulation} style={{background: '#232f3e', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer'}}>Calculate Risk</button>
          {riskResult && (
            <div style={{marginTop: '20px', padding: '20px', borderLeft: `10px solid ${riskResult.color}`, background: '#f8f9fa', textAlign: 'left'}}>
              <strong>RESULT: {riskResult.grade}</strong> - {riskResult.msg}<br />
              Premium: R$ {riskResult.premium}
            </div>
          )}
        </div>
      ) : (
        <div><h3>Active Portfolio Claims</h3><p>Showing clients linked to your SUSEP ID...</p></div>
      )}
    </div>
  );
};

export default BrokerOverview;
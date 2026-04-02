import React, { useState } from 'react';

const EvaluatorDashboard = () => {
  const [selectedClaim] = useState({
    id: "CLM-7788-01",
    policy: "POL-7788",
    holder: "Daniel Landi",
    vehicle: "Toyota Corolla 2024",
    aiConfidence: 94,
    aiFindings: [
      { issue: "Receipt Authenticity", status: "VERIFIED", detail: "Digital signature matches shop CNPJ." },
      { issue: "Coverage Limit", status: "WARNING", detail: "Requested R$ 4.200. Policy limit is R$ 4.000." },
      { issue: "Fraud Check", status: "PASS", detail: "No duplicate receipts found in database." }
    ]
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '80vh' }}>
      {/* LEFT: THE DOCUMENT VIEWPORT */}
      <div style={{ background: '#333', borderRadius: '12px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #444' }}>
        <div style={{ textAlign: 'center', opacity: 0.5 }}>
          <span style={{ fontSize: '50px' }}>📄</span>
          <p>Document Preview: medical_receipt_001.pdf</p>
        </div>
      </div>

      {/* RIGHT: THE AI ANALYSIS COCKPIT */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          <h2 style={{ margin: 0 }}>AI Audit Report</h2>
          <div style={{ background: '#2ecc71', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
            Confidence: 94%
          </div>
        </div>
        <p><strong>Claimant:</strong> {selectedClaim.holder} | <strong>Asset:</strong> {selectedClaim.vehicle}</p>
        {selectedClaim.aiFindings.map((f, i) => (
          <div key={i} style={{ borderLeft: '4px solid #ddd', padding: '10px', marginBottom: '15px', background: '#f8f9fa' }}>
            <strong>{f.issue}:</strong> <span style={{color: f.status === 'WARNING' ? '#e67e22' : '#27ae60'}}>{f.status}</span>
            <p style={{fontSize: '13px', margin: '5px 0'}}>{f.detail}</p>
          </div>
        ))}
        <button style={{ width: '100%', background: '#2ecc71', color: 'white', padding: '15px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          Approve & Pay (Pix)
        </button>
      </div>
    </div>
  );
};

export default EvaluatorDashboard;
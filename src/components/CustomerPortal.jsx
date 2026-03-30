import React, { useState } from 'react';

const CustomerPortal = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState(0); // 0: Idle, 1: Uploading, 2: OCR, 3: AI Analysis, 4: Done

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate the AWS Pipeline steps
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setUploadStep(step);
      if (step === 4) {
        clearInterval(interval);
        setTimeout(() => setIsUploading(false), 2000);
      }
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
      
      {/* LEFT COLUMN: UPLOAD BOX */}
      <section style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginTop: 0, color: '#232f3e' }}>Upload New Claim</h2>
        <p style={{ color: '#666' }}>Submit your medical or repair receipts for AI verification.</p>
        
        <div style={{ 
          border: '2px dashed #007eb9', 
          borderRadius: '8px', 
          padding: '40px', 
          textAlign: 'center',
          background: '#f0faff',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📄</div>
          <strong>Drag & Drop PDF Here</strong>
          <p style={{ fontSize: '12px', color: '#888' }}>Max file size: 10MB</p>
          <button 
            onClick={handleUpload}
            disabled={isUploading}
            style={{ 
              background: '#007eb9', color: 'white', border: 'none', 
              padding: '10px 25px', borderRadius: '4px', fontWeight: 'bold',
              cursor: isUploading ? 'not-allowed' : 'pointer' 
            }}
          >
            {isUploading ? 'Processing...' : 'Select File'}
          </button>
        </div>

        {/* STEPPER UI: THE "ANXIETY REDUCER" */}
        {isUploading && (
          <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <h4>Claim Processing Pipeline</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: uploadStep >= 1 ? '#2ecc71' : '#ccc' }}>● Uploaded</span>
              <span style={{ color: uploadStep >= 2 ? '#2ecc71' : '#ccc' }}>● OCR (Text)</span>
              <span style={{ color: uploadStep >= 3 ? '#2ecc71' : '#ccc' }}>● AI Logic</span>
              <span style={{ color: uploadStep >= 4 ? '#2ecc71' : '#ccc' }}>● Complete</span>
            </div>
          </div>
        )}
      </section>

      {/* RIGHT COLUMN: RECENT HISTORY */}
      <section style={{ background: '#f9f9f9', padding: '20px', borderRadius: '12px' }}>
        <h3 style={{ marginTop: 0 }}>Recent Claims</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { id: 'CLM-982', date: 'Mar 28', status: 'Approved', color: '#27ae60' },
            { id: 'CLM-981', date: 'Mar 25', status: 'Processing', color: '#f39c12' },
            { id: 'CLM-980', date: 'Mar 20', status: 'Manual Review', color: '#e67e22' }
          ].map(claim => (
            <div key={claim.id} style={{ background: 'white', padding: '15px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `5px solid ${claim.color}` }}>
              <div>
                <strong>{claim.id}</strong>
                <div style={{ fontSize: '12px', color: '#888' }}>Submitted: {claim.date}</div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: claim.color }}>{claim.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerPortal;
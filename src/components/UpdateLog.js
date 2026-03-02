// components/UpdateLog.js
import React, { useState } from 'react';

const UpdateLog = ({ updates }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!updates || updates.length === 0) return null;

  return (
    <div className="update-log">
      <div className="update-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="update-title">Update Log</h3>
        <span className="update-toggle">{isExpanded ? '▼' : '▶'}</span>
      </div>
      <div className={`update-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <ul className="update-list">
          {updates.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpdateLog;
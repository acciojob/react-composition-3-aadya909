import React, { useState } from 'react';
import '../styles/App.css'; // Adjust path to match actual file location

function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <span data-testid="tooltip-text" className="tooltiptext">
          {text}
        </span>
      )}
    </div>
  );
}

export default Tooltip;

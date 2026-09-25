import React from 'react';

export default function MarginCells() {
  // Fixed cellular coordinates scattered along the left and right margins
  const leftCells = [
    { top: '15%', left: '2%', color: '#4A5471', size: 14, rounded: true },
    { top: '16.5%', left: '2.8%', color: '#1FA9A0', size: 14, rounded: true },
    { top: '18%', left: '2%', color: '#C23E77', size: 14, rounded: true },
    { top: '35%', left: '1.5%', color: '#1FA9A0', size: 14, rounded: true },
    { top: '36.5%', left: '2.5%', color: '#4A5471', size: 14, rounded: true },
    { top: '55%', left: '3%', color: '#C23E77', size: 14, rounded: true },
    { top: '56.5%', left: '2%', color: '#1FA9A0', size: 14, rounded: true },
    { top: '75%', left: '2.5%', color: '#4A5471', size: 14, rounded: true },
    { top: '76.5%', left: '1.8%', color: '#C23E77', size: 14, rounded: true },
  ];

  const rightCells = [
    { top: '20%', right: '2.5%', color: '#C23E77', size: 14, rounded: true },
    { top: '21.5%', right: '1.8%', color: '#1FA9A0', size: 14, rounded: true },
    { top: '23%', right: '2.6%', color: '#4A5471', size: 14, rounded: true },
    { top: '42%', right: '2%', color: '#1FA9A0', size: 14, rounded: true },
    { top: '43.5%', right: '3%', color: '#C23E77', size: 14, rounded: true },
    { top: '65%', right: '2.2%', color: '#4A5471', size: 14, rounded: true },
    { top: '66.5%', right: '3.1%', color: '#1FA9A0', size: 14, rounded: true },
    { top: '82%', right: '2%', color: '#C23E77', size: 14, rounded: true },
    { top: '83.5%', right: '2.7%', color: '#4A5471', size: 14, rounded: true },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40 hidden xl:block">
      {/* Left margin cells */}
      {leftCells.map((cell, idx) => (
        <div
          key={`l-${idx}`}
          style={{
            position: 'absolute',
            top: cell.top,
            left: cell.left,
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            backgroundColor: cell.color,
            borderRadius: '4px',
          }}
        />
      ))}

      {/* Right margin cells */}
      {rightCells.map((cell, idx) => (
        <div
          key={`r-${idx}`}
          style={{
            position: 'absolute',
            top: cell.top,
            right: cell.right,
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            backgroundColor: cell.color,
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
}

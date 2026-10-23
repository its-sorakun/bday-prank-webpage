/*
 * Stage 2: Human Verification CAPTCHA and chaotic age selector.
 * Presents a 3x3 grid of relatable late-night developer/student degenerate habits.
 * Fails validation regardless of selection to simulate an impossible Turing test.
 * Features an unstable age slider with fluctuating multipliers.
 */

import { useState } from 'react';

const CAPTCHA_TILES = [
  { id: 1, label: 'Doomscrolling reels at 3:42 AM', icon: '📱' },
  { id: 2, label: 'Remembering embarrassing memory from 2017', icon: '🧠' },
  { id: 3, label: 'Black coffee instead of breakfast', icon: '☕' },
  { id: 4, label: 'Setting 12 alarms spaced 3 mins apart', icon: '⏰' },
  { id: 5, label: 'Staring blankly at ceiling at 4:15 AM', icon: '👁️' },
  { id: 6, label: 'Midnight kitchen raid for shredded cheese', icon: '🧀' },
  { id: 7, label: 'Sleeping 13 hours and waking up more tired', icon: '🛌' },
  { id: 8, label: 'Watching 3-hour video essay on Roman concrete', icon: '🏛️' },
  { id: 9, label: 'Saying "Just one more match" at 2:30 AM', icon: '🎮' },
];

export default function CaptchaModal({ recipientName, recipientNickname, initialAge = 22, onComplete, onShake }) {
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [failCount, setFailCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [age, setAge] = useState(initialAge);

  const toggleTile = (id) => {
    if (navigator.vibrate) navigator.vibrate(20);
    setSelectedTiles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleVerify = () => {
    if (navigator.vibrate) navigator.vibrate([100, 40, 100]);
    if (onShake) onShake();

    const newFails = failCount + 1;
    setFailCount(newFails);

    const errors = [
      '❌ VERIFICATION FAILED: Zero healthy sleep schedules detected.',
      '❌ INCORRECT: User biometric pattern matches chronic caffeine consumer.',
      '❌ FAILED: Algorithm detected high probability of scrolling TikTok until sunrise.',
      '❌ CAPTCHA REJECTED: Akshat Sinha (AKS) has never once gone to bed at 10:00 PM.',
    ];

    setErrorMessage(errors[newFails % errors.length]);
  };

  const handleAgeChange = (e) => {
    const rawVal = parseInt(e.target.value, 10);
    // Add jitter to make slider feel cursed and chaotic
    const jitter = Math.floor((Math.random() - 0.45) * 6);
    const clamped = Math.max(18, Math.min(99, rawVal + jitter));
    setAge(clamped);
  };

  return (
    <div className="win-window">
      <div className="win-titlebar">
        <div className="win-title-left">
          <span>🛡️</span>
          <span>HUMAN VERIFICATION: {recipientNickname}</span>
        </div>
        <div className="win-title-btn">?</div>
      </div>

      <div className="win-body">
        <div className="win-inset" style={{ marginBottom: '12px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px' }}>
            Select all squares containing a <span style={{ color: '#d9534f', textDecoration: 'underline' }}>HEALTHY SLEEP SCHEDULE</span>:
          </p>
          <p style={{ fontSize: '0.78rem', color: '#666' }}>
            If none are present, click verify anyway to test your delusion level.
          </p>
        </div>

        {/* 3x3 CAPTCHA Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '6px',
          marginBottom: '12px'
        }}>
          {CAPTCHA_TILES.map((tile) => {
            const isSelected = selectedTiles.includes(tile.id);
            return (
              <div
                key={tile.id}
                onClick={() => toggleTile(tile.id)}
                style={{
                  background: isSelected ? '#a0c4ff' : '#ffffff',
                  border: isSelected ? '3px solid #000080' : '2px solid #808080',
                  padding: '6px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '75px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  position: 'relative',
                  userSelect: 'none',
                }}
              >
                {isSelected && (
                  <span style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    fontSize: '10px',
                    background: '#000080',
                    color: '#fff',
                    borderRadius: '2px',
                    padding: '1px 3px',
                  }}>
                    ✓
                  </span>
                )}
                <span style={{ fontSize: '1.4rem', marginBottom: '2px' }}>{tile.icon}</span>
                <span style={{ fontSize: '0.65rem', lineHeight: '1.1', fontWeight: isSelected ? 'bold' : 'normal' }}>
                  {tile.label}
                </span>
              </div>
            );
          })}
        </div>

        {errorMessage && (
          <div style={{
            background: '#ffdddd',
            border: '2px solid #b22222',
            padding: '6px 8px',
            fontSize: '0.8rem',
            color: '#8b0000',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            {errorMessage}
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <button
            type="button"
            className="win-btn win-btn-primary"
            onClick={handleVerify}
            style={{ flex: 1, fontSize: '0.85rem' }}
          >
            🔍 Verify Sleep Schedule
          </button>

          {failCount >= 2 && (
            <button
              type="button"
              className="win-btn"
              onClick={() => setFailCount(99)}
              style={{ fontSize: '0.8rem', background: '#fff2a8' }}
            >
              🏳️ Skip (I'm Cooked)
            </button>
          )}
        </div>

        {/* Age Selector Section */}
        <div className="win-inset" style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 'bold' }}>Declared Age Counter:</span>
            <span style={{
              background: '#000',
              color: '#00ff66',
              fontFamily: 'var(--font-mono)',
              padding: '2px 6px',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}>
              {age} YRS
            </span>
          </div>

          <input
            type="range"
            min="18"
            max="80"
            value={age}
            onChange={handleAgeChange}
            style={{ width: '100%', cursor: 'pointer' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#555', marginTop: '4px' }}>
            <span>Young Adult</span>
            <span>Unc Territory</span>
            <span>Ancient Fossil</span>
          </div>

          <div style={{
            marginTop: '8px',
            fontSize: '0.75rem',
            background: '#f0f0f0',
            padding: '4px 6px',
            border: '1px solid #ccc'
          }}>
            ⚡ Estimated joint stiffness rating: <strong>{Math.round(age * 2.1)}%</strong>
          </div>
        </div>

        <button
          type="button"
          className="win-btn win-btn-primary"
          onClick={() => onComplete(age)}
          style={{ width: '100%', marginTop: '12px', padding: '10px', fontSize: '0.95rem' }}
        >
          🎂 PROCEED TO BIRTHDAY CAKE CUTTING 🎂
        </button>
      </div>
    </div>
  );
}

/*
 * Stage 2: JoJo D'Arby Casino verification challenge and Hamon calibration slider.
 * Presents a 3x3 grid of iconic JoJo references, manga habits, and shrimp posture behaviors.
 * Features D'Arby soul gamble rejections and JoJo part-themed power calibration.
 */

import { useState } from 'react';

const JOJO_CAPTCHA_TILES = [
  { id: 1, label: 'Bizarre pose in bathroom mirror', icon: '🕺' },
  { id: 2, label: 'Saying "Oh? You\'re approaching me?" to a bug', icon: '🚶' },
  { id: 3, label: 'Inspecting doorknobs for Killer Queen', icon: '💣' },
  { id: 4, label: 'Screaming ZA WARUDO when Wi-Fi lags', icon: '⏳' },
  { id: 5, label: 'Pirating 400GB of manga on qBittorrent', icon: '📂' },
  { id: 6, label: 'Licking a cherry at 600 RPM (Rero Rero)', icon: '🍒' },
  { id: 7, label: 'Shrimp posture so curved it counts as a pose', icon: '🦐' },
  { id: 8, label: 'Losing 50/50 in Genshin and blaming Dio', icon: '🧛' },
  { id: 9, label: 'Asking "Is that a JoJo reference?!"', icon: '❓' },
];

export default function CaptchaModal({ recipientName, recipientNickname, initialAge = 22, onComplete, onShake }) {
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [failCount, setFailCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [age, setAge] = useState(initialAge);

  const toggleTile = (id) => {
    if (navigator.vibrate) navigator.vibrate(25);
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
      '❌ D\'ARBY: "GOOD! Your bet is invalid! You did not pose hard enough!"',
      '❌ FAILED: Star Platinum analyzed your spine and detected critical shrimp posture.',
      '❌ INCORRECT: 0 Seeders detected on your Hamon network connection.',
      '❌ KONO DIO DA: D\'Arby turned your birthday token into a poker chip!',
    ];

    setErrorMessage(errors[newFails % errors.length]);
  };

  const handleAgeChange = (e) => {
    const rawVal = parseInt(e.target.value, 10);
    const jitter = Math.floor((Math.random() - 0.45) * 4);
    const clamped = Math.max(18, Math.min(80, rawVal + jitter));
    setAge(clamped);
  };

  const handleHermitPurpleSkip = () => {
    if (navigator.vibrate) navigator.vibrate([100, 50, 200]);
    if (onShake) onShake();
    setErrorMessage('🔮 HERMIT PURPLE OVERDRIVE: Joseph Joestar spirit-photographed the cake! Bypassing verification...');
    setTimeout(() => {
      onComplete(age);
    }, 550);
  };

  return (
    <div className="win-window">
      <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #1e1b4b, #4338ca)' }}>
        <div className="win-title-left">
          <span>🎲</span>
          <span>D'ARBY CASINO: STAND TEST - {recipientNickname}</span>
        </div>
        <div className="win-title-btn">?</div>
      </div>

      <div className="win-body">
        <div className="win-inset" style={{ marginBottom: '12px', background: '#f5f3ff', border: '2px solid #6366f1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: '900', fontSize: '0.88rem', color: '#312e81' }}>
              Select all squares containing an <span style={{ color: '#ec4899', textDecoration: 'underline' }}>UNDENIABLE JOJO REFERENCE</span>:
            </span>
            <span className="jojo-menacing" style={{ fontSize: '1.1rem' }}>ゴゴ</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#4338ca', marginTop: '3px' }}>
            D'Arby demands proof that your Stand is worthy of cutting the cake.
          </p>
        </div>

        {/* 3x3 CAPTCHA Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '6px',
          marginBottom: '12px'
        }}>
          {JOJO_CAPTCHA_TILES.map((tile) => {
            const isSelected = selectedTiles.includes(tile.id);
            return (
              <div
                key={tile.id}
                onClick={() => toggleTile(tile.id)}
                style={{
                  background: isSelected ? '#ddd6fe' : '#ffffff',
                  border: isSelected ? '3px solid #6b21a8' : '2px solid #94a3b8',
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
                    background: '#6b21a8',
                    color: '#fff',
                    borderRadius: '2px',
                    padding: '1px 4px',
                    fontWeight: 'bold'
                  }}>
                    ゴ
                  </span>
                )}
                <span style={{ fontSize: '1.4rem', marginBottom: '2px' }}>{tile.icon}</span>
                <span style={{ fontSize: '0.64rem', lineHeight: '1.15', fontWeight: isSelected ? '900' : 'normal', color: '#1e1b4b' }}>
                  {tile.label}
                </span>
              </div>
            );
          })}
        </div>

        {errorMessage && (
          <div style={{
            background: errorMessage.startsWith('🔮') ? '#f0fdf4' : '#fee2e2',
            border: errorMessage.startsWith('🔮') ? '2px solid #22c55e' : '2px solid #ef4444',
            padding: '6px 8px',
            fontSize: '0.78rem',
            color: errorMessage.startsWith('🔮') ? '#166534' : '#991b1b',
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
            style={{ flex: 1, fontSize: '0.85rem', background: '#312e81' }}
          >
            ⭐️ Check My Stand Power
          </button>

          {failCount >= 2 && (
            <button
              type="button"
              className="win-btn"
              onClick={handleHermitPurpleSkip}
              style={{ fontSize: '0.78rem', background: '#fef08a', color: '#854d0e', fontWeight: 'bold' }}
            >
              🔮 Use Hermit Purple (Skip)
            </button>
          )}
        </div>

        {/* JoJo Part Age Calibration */}
        <div className="win-inset" style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Your Age is:</span>
            <span style={{
              background: '#312e81',
              color: '#facc15',
              fontFamily: 'var(--font-mono)',
              padding: '2px 8px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
            }}>
              LEVEL {age}
            </span>
          </div>

          <input
            type="range"
            min="18"
            max="60"
            value={age}
            onChange={handleAgeChange}
            style={{ width: '100%', cursor: 'pointer' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#475569', marginTop: '3px' }}>
            <span>Phantom Blood</span>
            <span>Stardust Crusader</span>
            <span>Golden Wind</span>
          </div>

          <div style={{
            marginTop: '8px',
            fontSize: '0.75rem',
            background: '#e0e7ff',
            padding: '4px 6px',
            border: '1px solid #c7d2fe',
            color: '#3730a3'
          }}>
            ⚡ Stand Energy: <strong>+{age * 120} Hamon Units</strong> | Seeder Aura: <strong>MAX</strong>
          </div>
        </div>

        <button
          type="button"
          className="win-btn win-btn-primary"
          onClick={() => onComplete(age)}
          style={{ width: '100%', marginTop: '12px', padding: '10px', fontSize: '0.92rem', background: '#4c1d95' }}
        >
          🎂 OH? APPROACH THE BIRTHDAY CAKE! 🎂
        </button>
      </div>
    </div>
  );
}

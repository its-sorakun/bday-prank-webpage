/*
 * Stage 5: Grand Finale Birthday Shrine for Akshat Sinha (AKS).
 * Renders an official certificate of aging, dank meme accolades,
 * real-time interactive confetti triggers, and mobile-friendly celebratory widgets.
 */

import { useState } from 'react';

export default function BirthdayShrine({ recipientName, recipientNickname, age, onTriggerConfetti, onShake }) {
  const [activeToast, setActiveToast] = useState('');

  const showToast = (msg) => {
    if (navigator.vibrate) navigator.vibrate(50);
    if (onShake) onShake();
    setActiveToast(msg);
    setTimeout(() => setActiveToast(''), 3500);
  };

  return (
    <div style={{ paddingBottom: '70px', width: '100%' }}>
      {/* Top Banner Windows Window */}
      <div className="win-window" style={{ maxWidth: '650px' }}>
        <div className="win-titlebar">
          <div className="win-title-left">
            <span>👑</span>
            <span>OFFICIAL BIRTHDAY DECREE: {recipientName}</span>
          </div>
          <div className="win-title-btn">★</div>
        </div>

        <div className="win-body" style={{ textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(90deg, #ff007f, #7928ca, #00f0ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.6rem',
            fontWeight: '900',
            lineHeight: '1.2',
            marginBottom: '8px'
          }}>
            🎉 HAPPY BIRTHDAY {recipientNickname.toUpperCase()}! 🎉
          </div>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: '#1a1a1a',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>
            Congratulations to <strong style={{ color: '#000080' }}>{recipientName}</strong> on unlocking Level {age}!
          </p>

          <div className="win-inset" style={{
            background: '#fffae6',
            border: '3px solid #d4af37',
            padding: '16px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#d4af37',
              color: '#000',
              fontWeight: '900',
              fontSize: '0.75rem',
              padding: '3px 10px',
              borderRadius: '2px',
              marginBottom: '8px',
              letterSpacing: '1px'
            }}>
              OFFICIAL CERTIFICATE OF AGING
            </div>

            <h3 style={{ fontSize: '1.2rem', color: '#8b0000', margin: '4px 0 10px' }}>
              SENIOR CITIZEN IN-TRAINING
            </h3>

            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#333', marginBottom: '12px' }}>
              This certifies that <strong>{recipientName} ({recipientNickname})</strong> has successfully endured another 365 days of tech debugging, zero-resin Genshin grinding, terrible sleeping posture, and adult responsibilities without causing a fatal kernel panic.
            </p>

            {/* Stats Breakdown Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              textAlign: 'left',
              fontSize: '0.8rem',
              background: '#fff',
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '12px'
            }}>
              <div>📊 <strong>Current Level:</strong> {age} Yrs</div>
              <div>⚡ <strong>Agility:</strong> -40% (Knee crunch)</div>
              <div>🧠 <strong>Wisdom:</strong> +15 (Knows when to sleep)</div>
              <div>✨ <strong>50/50 Luck:</strong> 0.001% (Qiqi Magnet)</div>
              <div>☕ <strong>Caffeine Reliance:</strong> 99.8%</div>
              <div>🛡️ <strong>Unc Rank:</strong> Verified Elite</div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#666', fontStyle: 'italic' }}>
              Issued on: {new Date().toLocaleDateString()} | Seal ID: #AKS-{age}-HBD
            </div>
          </div>

          {/* Interactive Button Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginTop: '14px'
          }}>
            <button
              type="button"
              className="win-btn win-btn-primary"
              onClick={onTriggerConfetti}
              style={{ fontSize: '0.85rem' }}
            >
              🎆 MORE CONFETTI!
            </button>

            <button
              type="button"
              className="win-btn"
              onClick={() => showToast('💊 Prescription filled: 800mg Ibuprofen & 1x Afternoon Nap.')}
              style={{ fontSize: '0.85rem' }}
            >
              💊 Virtual Painkillers
            </button>

            <button
              type="button"
              className="win-btn"
              onClick={() => showToast('🧚 Paimon: "Happy Birthday AKS! May all your future 50/50s not be Qiqi!"')}
              style={{ fontSize: '0.85rem' }}
            >
              🧚 Consult Paimon
            </button>
          </div>

          {activeToast && (
            <div style={{
              marginTop: '12px',
              background: '#e0f2fe',
              border: '2px solid #0284c7',
              padding: '8px',
              fontSize: '0.85rem',
              color: '#0369a1',
              fontWeight: 'bold',
              animation: 'shake 0.3s'
            }}>
              {activeToast}
            </div>
          )}
        </div>
      </div>

      {/* Dank Meme Accolades Container */}
      <div className="win-window" style={{ maxWidth: '650px', marginTop: '14px' }}>
        <div className="win-titlebar">
          <div className="win-title-left">
            <span>🗿</span>
            <span>HALL OF DANK MEMES - AKS EDITION</span>
          </div>
          <div className="win-title-btn">_</div>
        </div>

        <div className="win-body">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '12px'
          }}>
            {/* GigaChad Card */}
            <div className="win-inset" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '6px' }}>🗿</div>
              <h4 style={{ fontSize: '0.95rem', color: '#000080', marginBottom: '4px' }}>
                AVERAGE AKS ENJOYER
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#444', lineHeight: '1.4' }}>
                Refuses to acknowledge passage of time.
                Converts birthday candles directly into compute power.
                Absolute legend.
              </p>
            </div>

            {/* Doge Wisdom Card */}
            <div className="win-inset" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '6px' }}>🐕</div>
              <h4 style={{ fontSize: '0.95rem', color: '#b8860b', marginBottom: '4px' }}>
                DOGE CHRONO AUDIT
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#444', lineHeight: '1.4', fontFamily: 'var(--font-retro)' }}>
                wow. much birthday. very akshat. such sinha. level {age} reached. such milestone. very unc. wow.
              </p>
            </div>
          </div>

          <div className="win-inset" style={{ marginTop: '12px', background: '#f8fafc', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', fontWeight: 'bold', color: '#334155' }}>
              Wishing you an epic year ahead filled with win-streaks, zero back pain, and guaranteed 5-star pulls! 🚀🎂
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

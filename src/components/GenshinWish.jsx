/*
 * Stage 4: Genshin Impact 50/50 Gacha Wish simulator.
 * Simulates an authentic single-pull gacha wish banner with Primogem deduction.
 * Features a golden meteor animation sequence followed by losing the 50/50 to Qiqi
 * and a cursed 5-star aging artifact with flat defense stats.
 */

import { useState } from 'react';

export default function GenshinWish({ recipientName, recipientNickname, age, onComplete, onShake }) {
  // states: 'banner', 'meteor', 'reveal'
  const [phase, setPhase] = useState('banner');
  const [meteorColor, setMeteorColor] = useState('blue');

  const startWish = () => {
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    if (onShake) onShake();
    setPhase('meteor');
    setMeteorColor('blue');

    // Transition meteor trail from blue to purple to gold
    setTimeout(() => setMeteorColor('purple'), 700);
    setTimeout(() => {
      setMeteorColor('gold');
      if (onShake) onShake();
      if (navigator.vibrate) navigator.vibrate([150, 50, 200]);
    }, 1500);

    // Transition to reveal
    setTimeout(() => {
      setPhase('reveal');
      if (onShake) onShake();
    }, 2800);
  };

  return (
    <div className="win-window" style={{ maxWidth: '600px' }}>
      <div className="win-titlebar">
        <div className="win-title-left">
          <span>✨</span>
          <span>GENSHIN BIRTHDAY BANNER: {recipientNickname}</span>
        </div>
        <div className="win-title-btn">✕</div>
      </div>

      <div className="win-body" style={{ background: '#131826', color: '#f0f4f8', padding: '12px' }}>
        {/* Banner Top Currency Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#1e293b',
          border: '2px solid #334155',
          padding: '6px 12px',
          marginBottom: '10px',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#00f0ff' }}>💧 Resin:</span>
            <span style={{ fontWeight: 'bold' }}>0/160</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#e5b95c' }}>✦ Primogems:</span>
            <span style={{ fontWeight: 'bold', color: '#ffd700' }}>160</span>
          </div>
        </div>

        {phase === 'banner' && (
          <div>
            {/* Banner Artwork Container */}
            <div style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
              border: '3px solid #e5b95c',
              padding: '16px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '12px'
            }}>
              <div style={{
                position: 'absolute',
                top: '6px',
                left: '8px',
                background: '#e5b95c',
                color: '#1a1a1a',
                fontSize: '0.7rem',
                fontWeight: '900',
                padding: '2px 8px',
                borderRadius: '2px'
              }}>
                EVENT WISH
              </div>

              <div style={{
                position: 'absolute',
                top: '6px',
                right: '8px',
                background: '#ef4444',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                padding: '2px 6px',
              }}>
                RATE UP 100%
              </div>

              <h2 style={{
                color: '#ffd700',
                fontSize: '1.3rem',
                marginTop: '16px',
                textShadow: '0 0 10px rgba(255,215,0,0.5)',
                fontWeight: '900'
              }}>
                ETERNAL YOUTH BANNER
              </h2>

              <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: '6px 0 12px' }}>
                Featured 5★ Character: <strong style={{ color: '#38bdf8' }}>{recipientName} ({recipientNickname})</strong>
              </p>

              {/* Character Silhouette / Icon Showcase */}
              <div style={{
                display: 'inline-block',
                background: '#0f172a',
                border: '2px solid #64748b',
                padding: '12px 20px',
                marginBottom: '12px',
                borderRadius: '4px'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '4px' }}>🧙‍♂️⚡</div>
                <div style={{ fontWeight: 'bold', color: '#e5b95c', fontSize: '0.9rem' }}>
                  Akshat Sinha - Youth Archon
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  Element: Anemo (Blowing Candles) | Weapon: Mechanical Keyboard
                </div>
              </div>

              <div style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid #475569',
                padding: '6px',
                fontSize: '0.72rem',
                color: '#94a3b8'
              }}>
                ℹ️ Guaranteed 5-Star on this exact pull! No hard pity required!
              </div>
            </div>

            {/* Wish Action Button */}
            <button
              type="button"
              onClick={startWish}
              style={{
                width: '100%',
                background: 'linear-gradient(180deg, #f59e0b, #d97706)',
                border: '3px solid #fef3c7',
                padding: '14px',
                color: '#1a1a1a',
                fontWeight: '900',
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 10px rgba(217, 119, 6, 0.5)'
              }}
            >
              <span>✦</span>
              <span>WISH x1 (Cost: 160 Primogems)</span>
            </button>
          </div>
        )}

        {/* Phase: Shooting Meteor Animation */}
        {phase === 'meteor' && (
          <div style={{
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#020617',
            border: '2px solid #1e293b',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '900',
              color: meteorColor === 'gold' ? '#ffd700' : meteorColor === 'purple' ? '#c084fc' : '#38bdf8',
              marginBottom: '20px',
              textShadow: '0 0 15px currentColor'
            }}>
              {meteorColor === 'gold' ? '🌟 5-STAR GOLDEN WISH INCOMING! 🌟' : '🌠 WISHING UPON THE CELESTIAL SKY...'}
            </div>

            {/* Visual Meteor Element */}
            <div style={{
              fontSize: '4rem',
              filter: meteorColor === 'gold'
                ? 'drop-shadow(0 0 20px #ffd700)'
                : meteorColor === 'purple'
                ? 'drop-shadow(0 0 15px #a855f7)'
                : 'drop-shadow(0 0 10px #38bdf8)',
              transform: 'rotate(-45deg)',
              animation: 'shake 0.2s infinite'
            }}>
              💫
            </div>

            <div style={{
              marginTop: '25px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: '#94a3b8'
            }}>
              Connecting to Teyvat Servers...
            </div>
          </div>
        )}

        {/* Phase: 50/50 Lost Rug-Pull Reveal */}
        {phase === 'reveal' && (
          <div>
            <div style={{
              background: '#450a0a',
              border: '3px solid #ef4444',
              padding: '12px',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#fca5a5', fontWeight: 'bold' }}>
                💔 50/50 GACHA RESULTS
              </div>
              <h3 style={{
                color: '#fee2e2',
                fontSize: '1.25rem',
                margin: '6px 0',
                fontWeight: '900'
              }}>
                YOU LOST THE 50/50 TO: QIQI & AGING!
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#fecaca' }}>
                Hard pity wasted! Guaranteed eternal youth pushed back to next year.
              </p>
            </div>

            {/* Cursed Artifact Card */}
            <div style={{
              background: '#1e293b',
              border: '2px solid #e5b95c',
              padding: '12px',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ffd700', fontWeight: '900', fontSize: '0.95rem' }}>
                  ★ ★ ★ ★ ★ BIRTHDAY CAKE
                </span>
                <span style={{ fontSize: '0.75rem', background: '#334155', padding: '2px 6px' }}>
                  Plume of Chrono Decay
                </span>
              </div>

              <div style={{ margin: '8px 0', borderBottom: '1px solid #475569', paddingBottom: '6px' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>MAIN STAT:</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8' }}>
                  Current Age: +1 (Now Level {age})
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: '#cbd5e1' }}>• Flat DEF: <strong style={{ color: '#22c55e' }}>+999</strong> (Stubbornness)</div>
                <div style={{ color: '#cbd5e1' }}>• Lower Back Cracking: <strong style={{ color: '#ef4444' }}>+85.4%</strong></div>
                <div style={{ color: '#cbd5e1' }}>• Morning Energy: <strong style={{ color: '#ef4444' }}>-99.0%</strong></div>
                <div style={{ color: '#cbd5e1' }}>• Bonus 3★ Weapon: <strong>1x Debate Club (R99)</strong></div>
              </div>
            </div>

            {/* Paimon Dialogue Box */}
            <div style={{
              background: '#0f172a',
              border: '2px solid #64748b',
              padding: '10px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '14px'
            }}>
              <div style={{ fontSize: '2rem' }}>🧚‍♀️</div>
              <div style={{ fontSize: '0.78rem', color: '#e2e8f0', lineHeight: '1.3' }}>
                <strong style={{ color: '#f59e0b' }}>Paimon: </strong>
                "How about we explore the area ahead of us later? Paimon thinks {recipientNickname} should take some ibuprofen and rest those knees first!"
              </div>
            </div>

            <button
              type="button"
              className="win-btn win-btn-primary"
              onClick={onComplete}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.95rem',
                backgroundColor: '#000080',
                color: '#fff'
              }}
            >
              💀 ACCEPT 50/50 LOSS & CLAIM OFFICIAL CERTIFICATE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

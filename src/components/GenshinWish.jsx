/*
 * Stage 4: Genshin Impact gacha simulator integrated with JoJo and torrent pirate lore.
 * Features rate-up banner for Stand Master Akshat Sinha (AKS), a golden shooting meteor,
 * and a Kono Dio Da rug-pull awarding a Stone Mask of Shrimp Posture artifact.
 */

import { useState } from 'react';

export default function GenshinWish({ recipientName, recipientNickname, age, onComplete, onShake }) {
  const [phase, setPhase] = useState('banner');
  const [meteorColor, setMeteorColor] = useState('blue');

  const startWish = () => {
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
    if (onShake) onShake();
    setPhase('meteor');
    setMeteorColor('blue');

    setTimeout(() => setMeteorColor('purple'), 700);
    setTimeout(() => {
      setMeteorColor('gold');
      if (onShake) onShake();
      if (navigator.vibrate) navigator.vibrate([150, 50, 200]);
    }, 1500);

    setTimeout(() => {
      setPhase('reveal');
      if (onShake) onShake();
    }, 2800);
  };

  return (
    <div className="win-window" style={{ maxWidth: '600px' }}>
      <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #1e1b4b, #312e81)' }}>
        <div className="win-title-left">
          <span>✨</span>
          <span>GENSHIN EVENT WISH: STAND MASTER {recipientNickname}</span>
        </div>
        <div className="win-title-btn">✕</div>
      </div>

      <div className="win-body" style={{ background: '#0b0f19', color: '#f0f4f8', padding: '12px' }}>
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
            <div style={{
              background: 'linear-gradient(135deg, #2e1065 0%, #3b0764 50%, #581c87 100%)',
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
                STAND EVENT WISH
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
                fontSize: '1.25rem',
                marginTop: '16px',
                textShadow: '0 0 10px rgba(255,215,0,0.5)',
                fontWeight: '900'
              }}>
                STAND MASTER BANNER: {recipientNickname.toUpperCase()}
              </h2>

              <p style={{ fontSize: '0.8rem', color: '#e9d5ff', margin: '4px 0 12px' }}>
                Featured 5★ Character: <strong style={{ color: '#facc15' }}>{recipientName}</strong>
              </p>

              <div style={{
                display: 'inline-block',
                background: '#0f172a',
                border: '2px solid #7c3aed',
                padding: '10px 18px',
                marginBottom: '12px',
                borderRadius: '4px'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '2px' }}>⚡🧙‍♂️🏴‍☠️</div>
                <div style={{ fontWeight: '900', color: '#e5b95c', fontSize: '0.92rem' }}>
                  Akshat Sinha - Stand: [ qBit Platinum ]
                </div>
                <div style={{ fontSize: '0.72rem', color: '#c084fc' }}>
                  Weapon: FitGirl Mechanical Keyboard | Element: Hamon (Overclocked)
                </div>
              </div>

              <div style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid #6b21a8',
                padding: '6px',
                fontSize: '0.72rem',
                color: '#d8b4fe'
              }}>
                ℹ️ Guaranteed 5-Star on this exact pull! Powered by the Speedwagon Foundation.
              </div>
            </div>

            <button
              type="button"
              onClick={startWish}
              style={{
                width: '100%',
                background: 'linear-gradient(180deg, #d97706, #b45309)',
                border: '3px solid #fef3c7',
                padding: '14px',
                color: '#fff',
                fontWeight: '900',
                fontSize: '1.05rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 10px rgba(180, 83, 9, 0.5)'
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
            border: '2px solid #312e81',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              fontSize: '1.15rem',
              fontWeight: '900',
              color: meteorColor === 'gold' ? '#ffd700' : meteorColor === 'purple' ? '#c084fc' : '#38bdf8',
              marginBottom: '20px',
              textShadow: '0 0 15px currentColor'
            }}>
              {meteorColor === 'gold' ? '🌟 5-STAR GOLDEN WISH INCOMING! 🌟' : '🌠 WISHING UPON THE CELESTIAL SKY...'}
            </div>

            <div style={{
              fontSize: '4.2rem',
              filter: meteorColor === 'gold'
                ? 'drop-shadow(0 0 25px #ffd700)'
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
              fontSize: '0.82rem',
              color: '#c084fc'
            }}>
              ゴゴゴ Connecting to Speedwagon Satellite... ゴゴゴ
            </div>
          </div>
        )}

        {/* Phase: 50/50 Lost Rug-Pull Reveal */}
        {phase === 'reveal' && (
          <div>
            <div style={{
              background: '#4a044e',
              border: '3px solid #f43f5e',
              padding: '12px',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#fbcfe8', fontWeight: 'bold' }}>
                💔 50/50 GACHA RUG PULL
              </div>
              <h3 style={{
                color: '#fff',
                fontSize: '1.2rem',
                margin: '6px 0',
                fontWeight: '900'
              }}>
                YOU THOUGHT YOU GOT A 5-STAR, BUT KONO DIO DA! (And C9 Qiqi)
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#fce7f3' }}>
                Lost the 50/50! Hard pity wasted on Dio Brando and a cursed artifact.
              </p>
            </div>

            {/* Cursed Artifact Card */}
            <div style={{
              background: '#1e1b4b',
              border: '2px solid #e5b95c',
              padding: '12px',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ffd700', fontWeight: '900', fontSize: '0.9rem' }}>
                  ★ ★ ★ ★ ★ STONE MASK OF SHRIMP POSTURE
                </span>
                <span style={{ fontSize: '0.72rem', background: '#312e81', color: '#c7d2fe', padding: '2px 6px' }}>
                  FitGirl Repack Tier
                </span>
              </div>

              <div style={{ margin: '8px 0', borderBottom: '1px solid #4338ca', paddingBottom: '6px' }}>
                <div style={{ fontSize: '0.7rem', color: '#a5b4fc' }}>MAIN STAT:</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#facc15' }}>
                  Stand Power Level: {age} (+1 Level Up)
                </div>
              </div>

              <div style={{ fontSize: '0.78rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: '#e0e7ff' }}>• Destructive Power: <strong style={{ color: '#22c55e' }}>A (Mechanical Keyboard Clacks)</strong></div>
                <div style={{ color: '#e0e7ff' }}>• Lumbar Spine Angle: <strong style={{ color: '#ef4444' }}>-85.4% (Pure Shrimp)</strong></div>
                <div style={{ color: '#e0e7ff' }}>• qBittorrent Download: <strong style={{ color: '#38bdf8' }}>45 MB/s (1337x VIP)</strong></div>
                <div style={{ color: '#e0e7ff' }}>• Weapon Drop: <strong>3★ Debate Club (FitGirl Edition R99)</strong></div>
              </div>
            </div>

            {/* Jotaro Paimon Dialogue Box */}
            <div style={{
              background: '#0f172a',
              border: '2px solid #6366f1',
              padding: '10px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '14px'
            }}>
              <div style={{ fontSize: '2rem' }}>🧚‍♂️🧢</div>
              <div style={{ fontSize: '0.78rem', color: '#e2e8f0', lineHeight: '1.3' }}>
                <strong style={{ color: '#f59e0b' }}>Jotaro Paimon: </strong>
                "Yare Yare Daze... Paimon thinks AKS should fix that curved shrimp posture, stop torrenting 500GB of manga on 1337x, and accept the birthday tribute!"
              </div>
            </div>

            <button
              type="button"
              className="win-btn win-btn-primary"
              onClick={onComplete}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.92rem',
                backgroundColor: '#4338ca',
                color: '#fff'
              }}
            >
              👊 ARI ARI ARRIVEDERCI! ADVANCE TO REBOOT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

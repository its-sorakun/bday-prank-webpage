/*
 * Stage 1: JoJo-themed Stand Encounter and Terms of Existence modal.
 * Forces acceptance of gamer posture, pirate torrenting, and manga/JoJo clauses.
 * Features an evasive 'Nigerundayo' decline button and explicit subtext on the confirmation button.
 */

import { useState, useRef } from 'react';

export default function CookieModal({ recipientName, recipientNickname, onAccept, onShake }) {
  const [agreedItems, setAgreedItems] = useState({
    shrimpPosture: false,
    torrentSeeder: false,
    jojoOpening: false,
    yareYare: false,
  });

  const [declineOffset, setDeclineOffset] = useState({ x: 0, y: 0 });
  const [trollMessage, setTrollMessage] = useState('');
  const declineBtnRef = useRef(null);

  const toggleCheck = (key) => {
    setAgreedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allAgreed = Object.values(agreedItems).every(Boolean);

  const dodgeDecline = (e) => {
    e.preventDefault();
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    if (onShake) onShake();

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 500;
    const maxDeltaX = isMobile ? 35 : 85;
    const maxDeltaY = isMobile ? 25 : 55;
    const randomX = (Math.random() - 0.5) * maxDeltaX * 2;
    const randomY = (Math.random() - 0.5) * maxDeltaY * 2;

    setDeclineOffset({ x: randomX, y: randomY });

    const insults = [
      'MUDA MUDA MUDA! Aging is unavoidable!',
      'KONO DIO DA! You cannot escape this birthday!',
      'NIGERUNDAYO didn\'t work! Joseph Joestar is disappointed!',
      'ZA WARUDO! The Decline button has been frozen!',
      'WRYYYYYY! Stand proud and accept your fate, AKS!',
    ];
    setTrollMessage(insults[Math.floor(Math.random() * insults.length)]);
  };

  return (
    <div className="win-window" style={{ marginTop: '15px' }}>
      <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #4c1d95, #7c3aed)' }}>
        <div className="win-title-left">
          <span>⭐️</span>
          <span>STAND BATTLE: {recipientName} ({recipientNickname})</span>
        </div>
        <div className="win-title-btn" onClick={dodgeDecline}>✕</div>
      </div>

      <div className="win-body">
        <div className="win-inset" style={{ marginBottom: '12px', background: '#faf5ff', border: '2px solid #7c3aed' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontWeight: '900', color: '#6b21a8', fontSize: '0.9rem' }}>
              ゴゴゴ ENEMY STAND ENCOUNTER ゴゴゴ
            </span>
            <span className="jojo-menacing" style={{ fontSize: '1.2rem' }}>ゴゴゴ</span>
          </div>
          <p style={{ fontSize: '0.82rem', lineHeight: '1.4', color: '#3b0764' }}>
            You thought this was an ordinary birthday website, but <strong>KONO DIO DA!</strong> An enemy Stand has intercepted <strong>{recipientName} (AKS)</strong>. Verify your credentials below to proceed.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '14px' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.82rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.shrimpPosture}
              onChange={() => toggleCheck('shrimpPosture')}
              style={{ marginTop: '2px' }}
            />
            <span>I acknowledge that my coding & gaming posture resembles a curved JoJo pose (Shrimp Edition) 🦐</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.82rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.torrentSeeder}
              onChange={() => toggleCheck('torrentSeeder')}
              style={{ marginTop: '2px' }}
            />
            <span>I swear upon the Speedwagon Foundation that my 24/7 qBittorrent seeding is purely academic 🏴‍☠️</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.82rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.jojoOpening}
              onChange={() => toggleCheck('jojoOpening')}
              style={{ marginTop: '2px' }}
            />
            <span>I accept that skipping any JoJo opening theme is an unpardonable sin punished by a 7-page Muda ⭐️</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.82rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.yareYare}
              onChange={() => toggleCheck('yareYare')}
              style={{ marginTop: '2px' }}
            />
            <span>I confirm that whenever code doesn't compile on the first try, I sigh and mutter "Yare Yare Daze".</span>
          </label>
        </div>

        {trollMessage && (
          <div style={{
            background: '#fef2f2',
            border: '2px dashed #ef4444',
            padding: '6px 8px',
            color: '#b91c1c',
            fontWeight: 'bold',
            fontSize: '0.82rem',
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            {trollMessage}
          </div>
        )}

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'stretch',
          position: 'relative',
          minHeight: '110px',
          justifyContent: 'center'
        }}>
          {/* Primary Accept Button with specific required text */}
          <button
            type="button"
            className="win-btn win-btn-primary"
            disabled={!allAgreed}
            onClick={onAccept}
            style={{
              padding: '12px 8px',
              opacity: allAgreed ? 1 : 0.6,
              backgroundColor: allAgreed ? '#5b21b6' : '#808080',
              color: '#fff',
              cursor: allAgreed ? 'pointer' : 'not-allowed',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px'
            }}
          >
            <span style={{ fontSize: '0.95rem', fontWeight: '900' }}>
              {allAgreed ? '✅ ACCEPT REALITY & CLAIM GIFT' : '⚠️ CHECK ALL BOXES TO PROCEED'}
            </span>
            <span style={{ fontSize: '0.75rem', fontStyle: 'italic', opacity: 0.9 }}>
              (also I accept that I am akhand tatti)
            </span>
          </button>

          {/* Evasive Nigerundayo Runaway Button */}
          <div style={{ position: 'relative', textAlign: 'center', height: '40px' }}>
            <button
              ref={declineBtnRef}
              type="button"
              className="win-btn win-btn-danger"
              onMouseEnter={dodgeDecline}
              onTouchStart={dodgeDecline}
              onClick={dodgeDecline}
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                transform: `translate(calc(-50% + ${declineOffset.x}px), ${declineOffset.y}px)`,
                transition: 'transform 0.15s ease-out',
                zIndex: 10,
                fontSize: '0.85rem',
                whiteSpace: 'nowrap'
              }}
            >
              🏃‍♂️ NIGERUNDAYO! (Escape Birthday)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

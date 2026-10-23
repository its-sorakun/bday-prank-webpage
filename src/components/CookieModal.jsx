/*
 * Stage 1: Mandatory Life Audit and Terms of Existence modal.
 * Forces the user to accept aging checkboxes before continuing.
 * Includes an evasive Decline button that translates away from touches/pointers
 * and emits haptic feedback when interacted with on supported devices.
 */

import { useState, useRef } from 'react';

export default function CookieModal({ recipientName, recipientNickname, onAccept, onShake }) {
  const [agreedItems, setAgreedItems] = useState({
    neckPain: false,
    uncStatus: false,
    sleepLie: false,
    loudMusic: false,
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

    const maxDelta = 120;
    const randomX = (Math.random() - 0.5) * maxDelta * 2;
    const randomY = (Math.random() - 0.5) * maxDelta * 2;

    setDeclineOffset({ x: randomX, y: randomY });

    const insults = [
      'Nice try, aging is mandatory!',
      'Button escaped!',
      'Error 403: Time travel forbidden',
      'The years start coming and they do not stop coming!',
      'Cannot decline reality, AKS!',
    ];
    setTrollMessage(insults[Math.floor(Math.random() * insults.length)]);
  };

  return (
    <div className="win-window" style={{ marginTop: '20px' }}>
      <div className="win-titlebar">
        <div className="win-title-left">
          <span>⚠️</span>
          <span>SYSTEM AUDIT: {recipientName} ({recipientNickname})</span>
        </div>
        <div className="win-title-btn" onClick={dodgeDecline}>✕</div>
      </div>

      <div className="win-body">
        <div className="win-inset" style={{ marginBottom: '14px', background: '#ffffd0', border: '2px solid #b8860b' }}>
          <p style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#8b0000', marginBottom: '6px' }}>
            🔔 URGENT NOTICE FOR AKSHAT SINHA (AKS)
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
            System scan detected an illegal increment to your Age counter.
            To claim your annual birthday privileges, you must consent to the updated Terms of Existence.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.neckPain}
              onChange={() => toggleCheck('neckPain')}
              style={{ marginTop: '3px' }}
            />
            <span>I acknowledge that sleeping in the wrong posture will incur 3-5 business days of neck stiffness.</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.uncStatus}
              onChange={() => toggleCheck('uncStatus')}
              style={{ marginTop: '3px' }}
            />
            <span>I agree that Akshat Sinha (AKS) has officially crossed into the "Unc" category.</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.sleepLie}
              onChange={() => toggleCheck('sleepLie')}
              style={{ marginTop: '3px' }}
            />
            <span>I admit that "I will fix my sleep schedule tonight" has been pure fiction since 2019.</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
            <input
              type="checkbox"
              checked={agreedItems.loudMusic}
              onChange={() => toggleCheck('loudMusic')}
              style={{ marginTop: '3px' }}
            />
            <span>I authorize the state to send me unsolicited brochure mailings for orthopedic mattresses.</span>
          </label>
        </div>

        {trollMessage && (
          <div style={{
            background: '#ffdddd',
            border: '2px dashed #d9534f',
            padding: '6px 10px',
            color: '#a94442',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            textAlign: 'center',
            marginBottom: '12px'
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
          minHeight: '100px',
          justifyContent: 'center'
        }}>
          <button
            type="button"
            className="win-btn win-btn-primary"
            disabled={!allAgreed}
            onClick={onAccept}
            style={{
              padding: '12px',
              opacity: allAgreed ? 1 : 0.6,
              fontSize: '1rem',
              backgroundColor: allAgreed ? '#2e7d32' : '#808080',
              color: '#fff',
              cursor: allAgreed ? 'pointer' : 'not-allowed'
            }}
          >
            {allAgreed ? '✅ ACCEPT REALITY & CLAIM GIFT' : '⚠️ CHECK ALL BOXES TO PROCEED'}
          </button>

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
              🚫 Decline & Stay 18 Forever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

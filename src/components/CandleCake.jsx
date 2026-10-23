/*
 * Stage 3: Interactive Birthday Cake with unextinguishable trick candles.
 * Tapping candle elements turns off flame graphics momentarily before reigniting them.
 * Triggers screen vibrations and retro Windows warning banners until the fallback extinguisher is triggered.
 */

import { useState } from 'react';

export default function CandleCake({ recipientName, recipientNickname, age, onComplete, onShake }) {
  // 5 candles state: true means lit, false means temporarily out
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [tapCount, setTapCount] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [extinguishedAll, setExtinguishedAll] = useState(false);

  const blowCandle = (index) => {
    if (extinguishedAll) return;
    if (navigator.vibrate) navigator.vibrate([60, 30, 60]);
    if (onShake) onShake();

    const newTaps = tapCount + 1;
    setTapCount(newTaps);

    // Turn off this candle
    setCandles((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });

    const errorToasts = [
      '🔥 CANDLE_EXCEPTION: Trick candles detected! Flame restored.',
      '⚠️ ERROR 502: Candle refuses to acknowledge mortality.',
      '💨 Wind power insufficient! Hit the gym, AKS!',
      '🔥 RE-IGNITION TRIGGERED: Each extinguished candle adds +1 lower back crack.',
      '🛑 PERMISSION DENIED: Akshat Sinha is legally required to stay lit.',
    ];
    setToastMessage(errorToasts[newTaps % errorToasts.length]);

    // Resurrect candle after 500ms
    setTimeout(() => {
      setCandles((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    }, 550);
  };

  const handleIndustrialBlower = () => {
    if (navigator.vibrate) navigator.vibrate([150, 50, 150, 50, 300]);
    if (onShake) onShake();

    setCandles([false, false, false, false, false]);
    setExtinguishedAll(true);
    setToastMessage('🚨 EMERGENCY FIRE SUPPRESSION DEPLOYED! CAKE SECURED!');

    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <div className="win-window">
      <div className="win-titlebar">
        <div className="win-title-left">
          <span>🎂</span>
          <span>TRADITIONAL CAKE CEREMONY: {recipientName}</span>
        </div>
        <div className="win-title-btn">✕</div>
      </div>

      <div className="win-body" style={{ textAlign: 'center' }}>
        <div className="win-inset" style={{ marginBottom: '12px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '0.92rem', color: '#000080' }}>
            🎂 TAP THE CANDLES TO BLOW THEM OUT! 🎂
          </p>
          <p style={{ fontSize: '0.78rem', color: '#555', marginTop: '2px' }}>
            Standard operating procedure for age verification: Extinguish all 5 flames.
          </p>
        </div>

        {/* Visual Cake Graphic */}
        <div style={{
          position: 'relative',
          width: '280px',
          height: '210px',
          margin: '0 auto 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          {/* Candles Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '200px',
            marginBottom: '2px',
            position: 'relative',
            zIndex: 5
          }}>
            {candles.map((isLit, i) => (
              <div
                key={i}
                onClick={() => blowCandle(i)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '4px',
                  userSelect: 'none',
                }}
              >
                {/* Flame or Smoke */}
                <div style={{
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isLit ? '1.3rem' : '1rem',
                  filter: isLit ? 'drop-shadow(0 0 6px #ff9900)' : 'none',
                  transform: isLit ? 'scaleY(1.1)' : 'scaleY(0.7)',
                  transition: 'all 0.15s ease-out'
                }}>
                  {isLit ? '🔥' : '💨'}
                </div>

                {/* Candle Stick */}
                <div style={{
                  width: '12px',
                  height: '38px',
                  background: i % 2 === 0 ? 'repeating-linear-gradient(45deg, #ff4d4d, #ff4d4d 5px, #ffffff 5px, #ffffff 10px)' : 'repeating-linear-gradient(45deg, #3b82f6, #3b82f6 5px, #ffffff 5px, #ffffff 10px)',
                  border: '1px solid #333',
                  borderRadius: '2px'
                }} />
              </div>
            ))}
          </div>

          {/* Top Tier Cake */}
          <div style={{
            width: '200px',
            height: '45px',
            background: '#ffb3ba',
            border: '3px solid #4a154b',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#4a154b'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '10px',
              background: '#ffffff',
              borderRadius: '8px 8px 0 0',
              borderBottom: '2px dashed #ff80bf'
            }} />
            <span style={{ position: 'relative', zIndex: 2 }}>★ {recipientNickname} ★</span>
          </div>

          {/* Bottom Tier Cake */}
          <div style={{
            width: '250px',
            height: '65px',
            background: '#bae1ff',
            border: '3px solid #1a365d',
            borderRadius: '6px 6px 0 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.88rem',
            fontWeight: '900',
            color: '#1a365d'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '12px',
              background: '#ffffff',
              borderBottom: '3px dotted #63b3ed'
            }} />
            <span style={{ position: 'relative', zIndex: 2 }}>LEVEL {age} REACHED</span>
          </div>

          {/* Cake Plate */}
          <div style={{
            width: '280px',
            height: '12px',
            background: '#e2e8f0',
            border: '2px solid #718096',
            borderRadius: '10px'
          }} />
        </div>

        {toastMessage && (
          <div style={{
            background: extinguishedAll ? '#d4edda' : '#fff3cd',
            border: extinguishedAll ? '2px solid #28a745' : '2px solid #ffc107',
            padding: '6px 8px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: extinguishedAll ? '#155724' : '#856404',
            marginBottom: '10px'
          }}>
            {toastMessage}
          </div>
        )}

        <div style={{ fontSize: '0.8rem', marginBottom: '10px', color: '#444' }}>
          Candles Extinguished: <strong>0 / 5</strong> (Respawn rate: 100%)
        </div>

        {tapCount >= 5 && !extinguishedAll && (
          <button
            type="button"
            className="win-btn win-btn-danger"
            onClick={handleIndustrialBlower}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '0.9rem',
              animation: 'pulse 1s infinite alternate'
            }}
          >
            🚨 DEPLOY INDUSTRIAL LEAF BLOWER (FORCE EXTINGUISH)
          </button>
        )}
      </div>
    </div>
  );
}

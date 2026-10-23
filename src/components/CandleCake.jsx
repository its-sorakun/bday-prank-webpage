/*
 * Stage 3: JoJo Menacing Birthday Cake with resurrecting trick candles.
 * Embeds animated JoJo menacing katakana (ゴゴゴ) and iconic battle dialogue.
 * Triggers pirate repack and posture error toasts when candles are tapped.
 * Provides a 7-Page Muda / Ora Ora emergency blower override.
 */

import { useState } from 'react';

export default function CandleCake({ recipientName, recipientNickname, age, onComplete, onShake }) {
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

    setCandles((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });

    const jojoToasts = [
      '🔥 KONO CAKE DA! The flame resurrects with immortal Stand power!',
      '⚠️ FITGIRL REPACK WARNING: Candle decompressed at 99.8% — DO NOT PANIC.',
      '🦐 POSTURE POLICE: Stand user spine angle critically curved! Straighten up, AKS!',
      '⏳ ZA WARUDO! Time froze for 0.5s to restore the candle flame!',
      '🏴‍☠️ qBit_Platinum_Error: 0 seeders found for flame extinction.',
      '👊 YARE YARE DAZE: Star Platinum cannot extinguish trick candles with normal wind.',
    ];
    setToastMessage(jojoToasts[newTaps % jojoToasts.length]);

    setTimeout(() => {
      setCandles((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    }, 550);
  };

  const handleMudaExtinguish = () => {
    if (navigator.vibrate) navigator.vibrate([150, 50, 150, 50, 300]);
    if (onShake) onShake();

    setCandles([false, false, false, false, false]);
    setExtinguishedAll(true);
    setToastMessage('🚨 ARI ARI ARI ARI ARRIVEDERCI! 7-PAGE MUDA BLOW DEPLOYED! CAKE CLEARED!');

    setTimeout(() => {
      onComplete();
    }, 1300);
  };

  return (
    <div className="win-window">
      <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #4c1d95, #6d28d9)' }}>
        <div className="win-title-left">
          <span>🎂</span>
          <span>OH? YOU\'RE APPROACHING THE CAKE, {recipientNickname}?</span>
        </div>
        <div className="win-title-btn">✕</div>
      </div>

      <div className="win-body" style={{ textAlign: 'center' }}>
        <div className="win-inset" style={{ marginBottom: '12px', background: '#faf5ff', border: '2px solid #8b5cf6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <span className="jojo-menacing" style={{ fontSize: '1.4rem' }}>ゴゴゴ</span>
            <div>
              <p style={{ fontWeight: '900', fontSize: '0.88rem', color: '#4c1d95' }}>
                "Instead of running away with Nigerundayo..."
              </p>
              <p style={{ fontSize: '0.75rem', color: '#6d28d9', fontStyle: 'italic' }}>
                "...you're coming right to blow out the birthday candles?"
              </p>
            </div>
            <span className="jojo-menacing" style={{ fontSize: '1.4rem' }}>ゴゴゴ</span>
          </div>
        </div>

        {/* Visual Cake Graphic with floating Menacing signs */}
        <div style={{
          position: 'relative',
          width: '290px',
          height: '210px',
          margin: '0 auto 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          {/* Side Menacing Kanji */}
          <div style={{ position: 'absolute', top: '10px', left: '0', zIndex: 10 }}>
            <span className="jojo-menacing" style={{ fontSize: '1.6rem' }}>ゴ</span>
          </div>
          <div style={{ position: 'absolute', top: '25px', right: '5px', zIndex: 10 }}>
            <span className="jojo-menacing" style={{ fontSize: '1.8rem' }}>ゴ</span>
          </div>

          {/* Candles Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '210px',
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
                <div style={{
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isLit ? '1.3rem' : '1rem',
                  filter: isLit ? 'drop-shadow(0 0 7px #ff9900)' : 'none',
                  transform: isLit ? 'scaleY(1.1)' : 'scaleY(0.7)',
                  transition: 'all 0.15s ease-out'
                }}>
                  {isLit ? '🔥' : '💨'}
                </div>

                <div style={{
                  width: '12px',
                  height: '38px',
                  background: i % 2 === 0
                    ? 'repeating-linear-gradient(45deg, #7c3aed, #7c3aed 5px, #facc15 5px, #facc15 10px)'
                    : 'repeating-linear-gradient(45deg, #ec4899, #ec4899 5px, #ffffff 5px, #ffffff 10px)',
                  border: '1px solid #333',
                  borderRadius: '2px'
                }} />
              </div>
            ))}
          </div>

          {/* Top Tier Cake */}
          <div style={{
            width: '210px',
            height: '45px',
            background: '#c084fc',
            border: '3px solid #3b0764',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.82rem',
            fontWeight: '900',
            color: '#3b0764'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '10px',
              background: '#fef08a',
              borderRadius: '8px 8px 0 0',
              borderBottom: '2px dashed #9333ea'
            }} />
            <span style={{ position: 'relative', zIndex: 2 }}>★ STAND: [ qBit Platinum ] ★</span>
          </div>

          {/* Bottom Tier Cake */}
          <div style={{
            width: '260px',
            height: '65px',
            background: '#818cf8',
            border: '3px solid #1e1b4b',
            borderRadius: '6px 6px 0 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.88rem',
            fontWeight: '900',
            color: '#1e1b4b'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '12px',
              background: '#ffffff',
              borderBottom: '3px dotted #4338ca'
            }} />
            <span style={{ position: 'relative', zIndex: 2 }}>{recipientNickname} • LEVEL {age} AWAKENED</span>
          </div>

          {/* Cake Plate */}
          <div style={{
            width: '290px',
            height: '12px',
            background: '#e2e8f0',
            border: '2px solid #718096',
            borderRadius: '10px'
          }} />
        </div>

        {toastMessage && (
          <div style={{
            background: extinguishedAll ? '#dcfce7' : '#fef9c3',
            border: extinguishedAll ? '2px solid #22c55e' : '2px solid #eab308',
            padding: '6px 8px',
            fontSize: '0.78rem',
            fontWeight: 'bold',
            color: extinguishedAll ? '#166534' : '#854d0e',
            marginBottom: '10px'
          }}>
            {toastMessage}
          </div>
        )}

        <div style={{ fontSize: '0.78rem', marginBottom: '10px', color: '#475569' }}>
          Candles Extinguished: <strong>0 / 5</strong> (Enemy Stand respawn rate: 100%)
        </div>

        {tapCount >= 5 && !extinguishedAll && (
          <button
            type="button"
            className="win-btn win-btn-danger"
            onClick={handleMudaExtinguish}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '0.88rem',
              background: '#701a75',
              borderColor: '#d946ef #3b0764 #3b0764 #d946ef'
            }}
          >
            👊 7-PAGE MUDA / ORA ORA BLOWER (FORCE EXTINGUISH)
          </button>
        )}
      </div>
    </div>
  );
}

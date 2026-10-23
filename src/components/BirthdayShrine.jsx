/*
 * Stage 5: Grand Finale JoJo Birthday Shrine for Akshat Sinha (AKS).
 * Renders an official JoJo Stand Profile ([ qBit Platinum Over Heaven ]),
 * Stand parameter statistics (speed, posture durability, gacha luck),
 * and pirate/manga meme accolades with interactive celebratory triggers.
 */

import { useState, useRef } from 'react';

export default function BirthdayShrine({ recipientName, recipientNickname, age, onTriggerConfetti, onShake }) {
  const [activeToast, setActiveToast] = useState('');
  const [timeFrozen, setTimeFrozen] = useState(false);
  const [paimonPopupOpen, setPaimonPopupOpen] = useState(false);
  const toastTimeoutRef = useRef(null);

  const showToast = (msg) => {
    if (navigator.vibrate) navigator.vibrate(50);
    if (onShake) onShake();
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setActiveToast(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setActiveToast('');
    }, 4500);
  };

  const handleZaWarudo = () => {
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    if (onShake) onShake();
    setTimeFrozen(true);
    showToast('⏳ ZA WARUDO! Toki wo Tomare! Time is frozen for 2.5 seconds!');
    setTimeout(() => {
      setTimeFrozen(false);
      showToast('▶️ Soshite, toki wa ugokidasu! Time resumes.');
    }, 2500);
  };

  return (
    <div style={{ paddingBottom: '70px', width: '100%', filter: timeFrozen ? 'invert(0.85) contrast(1.4)' : 'none', transition: 'filter 0.2s ease' }}>
      {/* Top Banner Windows Window */}
      <div className="win-window" style={{ maxWidth: '650px' }}>
        <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #581c87, #7c3aed)' }}>
          <div className="win-title-left">
            <span>⭐️</span>
            <span>STAND AWAKENING DECREE: {recipientName}</span>
          </div>
          <div className="win-title-btn">★</div>
        </div>

        <div className="win-body" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <span className="jojo-menacing" style={{ fontSize: '1.4rem' }}>ゴゴ</span>
            <div style={{
              background: 'linear-gradient(90deg, #d946ef, #8b5cf6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
              fontWeight: '900',
              lineHeight: '1.2'
            }}>
              🎉 HAPPY BIRTHDAY {recipientNickname.toUpperCase()}! 🎉
            </div>
            <span className="jojo-menacing" style={{ fontSize: '1.4rem' }}>ゴゴ</span>
          </div>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: '#1a1a1a',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            STAND MASTER: <strong style={{ color: '#4c1d95' }}>{recipientName}</strong> | STAND: <strong style={{ color: '#7c3aed' }}>[ qBit Platinum Over Heaven ]</strong>
          </p>

          {/* Official JoJo Stand Assessment Certificate */}
          <div className="win-inset" style={{
            background: '#faf5ff',
            border: '3px solid #7c3aed',
            padding: '16px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#7c3aed',
              color: '#fff',
              fontWeight: '900',
              fontSize: '0.72rem',
              padding: '3px 10px',
              borderRadius: '2px',
              marginBottom: '8px',
              letterSpacing: '1px'
            }}>
              OFFICIAL SPEEDWAGON FOUNDATION ASSESSMENT
            </div>

            <h3 style={{ fontSize: '1.15rem', color: '#4c1d95', margin: '4px 0 10px', fontWeight: '900' }}>
              STAND MASTER LEVEL {age} AWAKENED
            </h3>

            <p style={{ fontSize: '0.82rem', lineHeight: '1.5', color: '#333', marginBottom: '12px' }}>
              This document certifies that <strong>{recipientName} ({recipientNickname})</strong> has survived another year of the simulation with an undefeated Stand record. Endured endless code bugs, 0-resin Genshin droughts, 1337x torrent downloads, curved shrimp posture, and questionable sleep cycles with maximum aura.
            </p>

            {/* Stand Stats Breakdown (JoJo Parameters) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
              gap: '8px',
              textAlign: 'left',
              fontSize: '0.78rem',
              background: '#fff',
              border: '2px solid #ddd6fe',
              padding: '10px',
              marginBottom: '12px'
            }}>
              <div>💥 <strong>Destructive Power:</strong> A (Keyboard clacks)</div>
              <div>⚡ <strong>Download Speed:</strong> A (1337x VIP)</div>
              <div>🦐 <strong>Spine Durability:</strong> E (Pure shrimp posture)</div>
              <div>🎯 <strong>Gacha Luck:</strong> F (50/50 Qiqi magnet)</div>
              <div>⭐️ <strong>JoJo Posing Aura:</strong> S+ (God tier)</div>
              <div>🧠 <strong>Tech IQ:</strong> 999 (StackOverflow ninja)</div>
            </div>

            <div style={{ fontSize: '0.72rem', color: '#6b7280', fontStyle: 'italic' }}>
              Sealed by: Speedwagon Foundation & FitGirl Repacks Official Seal | ID: #AKS-{age}-JOJO
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
              style={{ fontSize: '0.82rem', background: '#581c87' }}
            >
              🎆 MORE HAMON (CONFETTI)
            </button>

            <button
              type="button"
              className="win-btn"
              onClick={handleZaWarudo}
              style={{ fontSize: '0.82rem', background: '#fef08a' }}
            >
              ⏳ ZA WARUDO! (FREEZE)
            </button>

            <button
              type="button"
              className="win-btn"
              onClick={() => showToast('🦐 POSTURE BOT: Straighten your neck, AKS! The Speedwagon Foundation cares about your spine.')}
              style={{ fontSize: '0.82rem' }}
            >
              🦐 Posture Check
            </button>

            <button
              type="button"
              className="win-btn"
              onClick={() => {
                if (onShake) onShake();
                if (navigator.vibrate) navigator.vibrate(50);
                setPaimonPopupOpen(true);
              }}
              style={{ fontSize: '0.82rem', background: '#e0e7ff', color: '#3730a3', fontWeight: 'bold' }}
            >
              🧚 Consult Paimon
            </button>
          </div>

          {activeToast && (
            <div style={{
              marginTop: '12px',
              background: '#fae8ff',
              border: '2px solid #d946ef',
              padding: '8px 12px',
              fontSize: '0.82rem',
              color: '#86198f',
              fontWeight: 'bold',
              animation: 'shake 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px'
            }}>
              <span>{activeToast}</span>
              <button
                type="button"
                onClick={() => setActiveToast('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#86198f',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  lineHeight: '1'
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Persistent Jotaro Paimon Dialogue Window */}
      {paimonPopupOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '12px'
        }}>
          <div className="win-window" style={{
            width: '340px',
            maxWidth: '94vw',
            boxShadow: '6px 6px 0px rgba(0,0,0,0.8)',
            margin: '0 auto'
          }}>
            <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #4c1d95, #6d28d9)' }}>
              <div className="win-title-left">
                <span>🧚‍♂️</span>
                <span>JOTARO PAIMON ADVICE • {recipientNickname}</span>
              </div>
              <div className="win-title-btn" onClick={() => setPaimonPopupOpen(false)}>✕</div>
            </div>

            <div className="win-body" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3.2rem', margin: '4px 0 8px' }}>🧚‍♂️🧢</div>
              <div className="win-inset" style={{ background: '#fdf4ff', border: '2px solid #c084fc', marginBottom: '12px' }}>
                <p style={{ fontWeight: '900', color: '#581c87', fontSize: '0.92rem', marginBottom: '6px' }}>
                  "Yare Yare Daze, {recipientNickname}..."
                </p>
                <p style={{ fontSize: '0.82rem', color: '#3b0764', lineHeight: '1.45' }}>
                  May all your future 1337x torrents have 100+ seeders, your shrimp spine uncurl, and may you never lose a 50/50 to Qiqi ever again! Paimon commands you to have an epic birthday!
                </p>
              </div>

              <button
                type="button"
                className="win-btn win-btn-primary"
                onClick={() => setPaimonPopupOpen(false)}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '0.88rem',
                  background: '#6d28d9',
                  color: '#fff'
                }}
              >
                ⭐️ ARIGATO, PAIMON! (CLOSE)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dank Meme Accolades Container */}
      <div className="win-window" style={{ maxWidth: '650px', marginTop: '14px' }}>
        <div className="win-titlebar" style={{ background: 'linear-gradient(90deg, #1e1b4b, #312e81)' }}>
          <div className="win-title-left">
            <span>🗿</span>
            <span>HALL OF DANK MEMES - JOJO & PIRATE EDITION</span>
          </div>
          <div className="win-title-btn">_</div>
        </div>

        <div className="win-body">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '12px'
          }}>
            {/* GigaChad JoJo Card */}
            <div className="win-inset" style={{ textAlign: 'center', background: '#fdf4ff' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '6px' }}>🗿⭐️</div>
              <h4 style={{ fontSize: '0.9rem', color: '#4c1d95', marginBottom: '4px' }}>
                AVERAGE STAND ENJOYER
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#444', lineHeight: '1.4' }}>
                Refuses to acknowledge biological limits.
                Poses menacingly at compiler warnings.
                True Stand Master of the squad.
              </p>
            </div>

            {/* Pirate Seeder Card */}
            <div className="win-inset" style={{ textAlign: 'center', background: '#f0fdf4' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '6px' }}>🏴‍☠️⚡</div>
              <h4 style={{ fontSize: '0.9rem', color: '#166534', marginBottom: '4px' }}>
                1337X PIRATE KING
              </h4>
              <p style={{ fontSize: '0.76rem', color: '#444', lineHeight: '1.4' }}>
                qBittorrent running 24/7.
                Decompresses 80GB repacks with 0 errors.
                Manga collection bigger than the Library of Alexandria.
              </p>
            </div>
          </div>

          <div className="win-inset" style={{ marginTop: '12px', background: '#f8fafc', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', fontWeight: 'bold', color: '#312e81' }}>
              Happy Birthday Akshat Sinha (AKS)! May your pulls be golden, your torrents fast, and your posture un-shrimped! 🚀🎂
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

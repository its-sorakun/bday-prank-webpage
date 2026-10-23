/*
 * Stage 5: Grand Finale JoJo Birthday Shrine for Akshat Sinha (AKS).
 * Renders an official JoJo Stand Profile ([ qBit Platinum Over Heaven ]),
 * Stand parameter statistics (speed, posture durability, gacha luck),
 * and pirate/manga meme accolades with interactive celebratory triggers.
 */

import { useState } from 'react';

export default function BirthdayShrine({ recipientName, recipientNickname, age, onTriggerConfetti, onShake }) {
  const [activeToast, setActiveToast] = useState('');
  const [timeFrozen, setTimeFrozen] = useState(false);

  const showToast = (msg) => {
    if (navigator.vibrate) navigator.vibrate(50);
    if (onShake) onShake();
    setActiveToast(msg);
    setTimeout(() => setActiveToast(''), 3800);
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
              onClick={() => showToast('🧚 Jotaro Paimon: "Yare Yare Daze... May all your future torrents have 100+ seeders and zero Qiqis!"')}
              style={{ fontSize: '0.82rem' }}
            >
              🧚 Consult Paimon
            </button>
          </div>

          {activeToast && (
            <div style={{
              marginTop: '12px',
              background: '#fae8ff',
              border: '2px solid #d946ef',
              padding: '8px',
              fontSize: '0.82rem',
              color: '#86198f',
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

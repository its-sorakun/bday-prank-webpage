/*
 * Root application coordinator for Akshat Sinha's prank birthday website.
 * Manages the multi-stage interactive progression state machine (Cookie -> Captcha -> Cake -> Genshin -> BSOD -> Finale).
 * Handles URL parameter parsing for personalized names/ages, triggers screen-shake CSS classes,
 * and maintains the persistent retro Windows marquee and taskbar.
 */

import { useState, useEffect } from 'react';
import CookieModal from './components/CookieModal';
import CaptchaModal from './components/CaptchaModal';
import CandleCake from './components/CandleCake';
import GenshinWish from './components/GenshinWish';
import BsodModal from './components/BsodModal';
import BirthdayShrine from './components/BirthdayShrine';
import ConfettiCanvas from './components/ConfettiCanvas';

export default function App() {
  // Query param parsing with defaults for Akshat Sinha (AKS)
  const [recipientName, setRecipientName] = useState('Akshat Sinha');
  const [recipientNickname, setRecipientNickname] = useState('AKS');
  const [age, setAge] = useState(22);

  // Flow stages: 'cookie' | 'captcha' | 'cake' | 'genshin' | 'bsod' | 'finale'
  const [stage, setStage] = useState('cookie');
  const [isShaking, setIsShaking] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Extract query parameters if present
    const params = new URLSearchParams(window.location.search);
    const qName = params.get('name');
    const qNick = params.get('nickname');
    const qAge = params.get('age');

    if (qName) setRecipientName(qName);
    if (qNick) setRecipientNickname(qNick);
    if (qAge && !isNaN(parseInt(qAge, 10))) setAge(parseInt(qAge, 10));

    // Clock update
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 380);
  };

  const triggerExtraConfetti = () => {
    setConfettiActive(false);
    setTimeout(() => setConfettiActive(true), 50);
  };

  const handleBsodTransition = () => {
    setStage('bsod');
  };

  const handleRebootToFinale = () => {
    setStage('finale');
    setConfettiActive(true);
    triggerShake();
  };

  return (
    <div className={isShaking ? 'screen-shake' : ''} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Scrolling Retro Marquee */}
      <div className="retro-marquee" style={{ background: '#7c3aed', color: '#facc15', borderBottom: '3px solid #000' }}>
        <div className="marquee-content">
          🚨 ゴゴゴ JOJO STAND ALERT: STAND USER DETECTED IN PROXIMITY 🚨 STAND: [ qBit Platinum Over Heaven ] 🚨 MASTER: {recipientName.toUpperCase()} ({recipientNickname.toUpperCase()}) 🚨 KONO DIO DA 🚨 NIGERUNDAYO SMOKEY 🚨 1337X SEED RATIO: 0.01 🚨
        </div>
      </div>
      {/* Main Content Area */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 8px 75px',
        width: '100%',
      }}>
        {stage === 'cookie' && (
          <CookieModal
            recipientName={recipientName}
            recipientNickname={recipientNickname}
            onAccept={() => setStage('captcha')}
            onShake={triggerShake}
          />
        )}

        {stage === 'captcha' && (
          <CaptchaModal
            recipientName={recipientName}
            recipientNickname={recipientNickname}
            initialAge={age}
            onComplete={(confirmedAge) => {
              setAge(confirmedAge);
              setStage('cake');
            }}
            onShake={triggerShake}
          />
        )}

        {stage === 'cake' && (
          <CandleCake
            recipientName={recipientName}
            recipientNickname={recipientNickname}
            age={age}
            onComplete={() => setStage('genshin')}
            onShake={triggerShake}
          />
        )}

        {stage === 'genshin' && (
          <GenshinWish
            recipientName={recipientName}
            recipientNickname={recipientNickname}
            age={age}
            onComplete={handleBsodTransition}
            onShake={triggerShake}
          />
        )}

        {stage === 'bsod' && (
          <BsodModal
            recipientName={recipientName}
            recipientNickname={recipientNickname}
            age={age}
            onReboot={handleRebootToFinale}
          />
        )}

        {stage === 'finale' && (
          <>
            {confettiActive && <ConfettiCanvas />}
            <BirthdayShrine
              recipientName={recipientName}
              recipientNickname={recipientNickname}
              age={age}
              onTriggerConfetti={triggerExtraConfetti}
              onShake={triggerShake}
            />
          </>
        )}
      </main>

      {/* Retro Windows Taskbar */}
      <footer className="win-taskbar">
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className="taskbar-start"
            onClick={() => setStartMenuOpen(!startMenuOpen)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M1 2.5L7 1.5V7.5L1 8V2.5Z" fill="#ff3333" />
              <path d="M8.5 1.5L15 2.5V8L8.5 7.5V1.5Z" fill="#33cc33" />
              <path d="M1 9L7 8.5V14.5L1 13.5V9Z" fill="#3399ff" />
              <path d="M8.5 8.5L15 9V14.5L8.5 13.5V8.5Z" fill="#ffcc00" />
            </svg>
            <span>Start</span>
          </button>

          {startMenuOpen && (
            <div style={{
              position: 'absolute',
              bottom: '42px',
              left: '0',
              width: '240px',
              maxWidth: '90vw',
              background: 'var(--win-gray)',
              borderTop: '2px solid var(--win-light)',
              borderLeft: '2px solid var(--win-light)',
              borderRight: '2px solid #000',
              borderBottom: '2px solid #000',
              boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
              zIndex: 10000,
              fontSize: '0.82rem'
            }}>
              <div style={{
                background: 'linear-gradient(180deg, #4c1d95, #6d28d9)',
                color: '#facc15',
                padding: '8px 10px',
                fontWeight: '900',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                borderBottom: '2px solid #3b0764'
              }}>
                SPEEDWAGON OS 2026 • AKS
              </div>

              <div
                className="start-menu-item"
                onClick={() => {
                  alert("🗑️ RECYCLE BIN ERROR:\nSleep schedule was permanently shredded in 2019.\nReason: 'Just one more episode / game'.\nRecovery: IMPOSSIBLE.");
                  setStartMenuOpen(false);
                }}
              >
                <span>🗑️</span>
                <span>Sleep Schedule.bin</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => {
                  alert("🏴‍☠️ qBittorrent v4.6.0:\nDownloading: JoJo_Part_9_Full_Color_[FitGirl_Repack].torrent\nDownloaded: 99.8%\nSeeders: 0 | Leechers: 142\nETA: 48 years, 3 months.");
                  setStartMenuOpen(false);
                }}
              >
                <span>🏴‍☠️</span>
                <span>qBittorrent (120GB)</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => {
                  alert("🦐 CRITICAL POSTURE WARNING:\nSpine.dll has crashed.\nCurrent posture angle: 120° (Boiled Tiger Shrimp).\nPlease stand up and crack joints immediately.");
                  setStartMenuOpen(false);
                }}
              >
                <span>🦐</span>
                <span>Posture_Fix.exe</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => {
                  alert("🧚 Paimon:\nResin: 0/160 | Primogems: 0 | Pity: 0\nPaimon suggests touching actual grass and eating birthday cake.");
                  setStartMenuOpen(false);
                }}
              >
                <span>🧚</span>
                <span>Genshin_Pain.lnk</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => {
                  triggerShake();
                  alert("⭐️ STAND ENERGY RELEASED!\nゴゴゴ Menacing aura increased by 10,000 units!\nAkshat Sinha has assumed the Chad pose.");
                  setStartMenuOpen(false);
                }}
              >
                <span>⭐️</span>
                <span>JoJo_Poses.bat</span>
              </div>

              <div
                className="start-menu-item"
                style={{ color: '#b91c1c', fontWeight: 'bold' }}
                onClick={() => {
                  setStage('bsod');
                  setStartMenuOpen(false);
                }}
              >
                <span>⚠️</span>
                <span>Trigger Stand Crash (BSOD)</span>
              </div>
            </div>
          )}
        </div>

        <div style={{
          flex: 1,
          maxWidth: '220px',
          margin: '0 8px',
          background: '#dcdcdc',
          borderTop: '2px solid #808080',
          borderLeft: '2px solid #808080',
          borderRight: '2px solid #fff',
          borderBottom: '2px solid #fff',
          padding: '2px 8px',
          fontSize: '0.8rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontWeight: 'bold'
        }}>
          🎁 {recipientNickname}'s Birthday Portal.exe
        </div>

        <div className="taskbar-tray">
          <span>💧 0/160</span>
          <span>{currentTime || '12:00 PM'}</span>
        </div>
      </footer>
    </div>
  );
}

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
      <div className="retro-marquee">
        <div className="marquee-content">
          🚨 CRITICAL AUDIT: {recipientName.toUpperCase()} ({recipientNickname.toUpperCase()}) BIRTHDAY SYSTEM IN EFFECT 🚨 DO NOT POWER OFF YOUR DEVICE 🚨 RESINLESS BEHAVIOR DETECTED 🚨
        </div>
      </div>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 10px 60px',
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
            <span>🪟</span>
            <span>Start</span>
          </button>

          {startMenuOpen && (
            <div style={{
              position: 'absolute',
              bottom: '42px',
              left: '0',
              width: '210px',
              background: 'var(--win-gray)',
              borderTop: '2px solid var(--win-light)',
              borderLeft: '2px solid var(--win-light)',
              borderRight: '2px solid #000',
              borderBottom: '2px solid #000',
              boxShadow: '3px 3px 6px rgba(0,0,0,0.4)',
              zIndex: 10000,
              fontSize: '0.85rem'
            }}>
              <div style={{
                background: 'linear-gradient(180deg, #000080, #1084d0)',
                color: '#fff',
                padding: '8px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-mono)'
              }}>
                AKS OS 2026.0
              </div>
              <div
                style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid #aaa' }}
                onClick={() => {
                  alert(`User: ${recipientName} (${recipientNickname})\nStatus: Level ${age}\nDiagnosis: Knee joints require WD-40.`);
                  setStartMenuOpen(false);
                }}
              >
                📁 Diagnostic Health Audit
              </div>
              <div
                style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid #aaa' }}
                onClick={() => {
                  alert('Resin: 0/160. Primogems: 0. Pity: 0. Paimon says eat cake.');
                  setStartMenuOpen(false);
                }}
              >
                ✨ Genshin Status Check
              </div>
              <div
                style={{ padding: '8px 12px', cursor: 'pointer', color: '#b22222', fontWeight: 'bold' }}
                onClick={() => {
                  setStage('bsod');
                  setStartMenuOpen(false);
                }}
              >
                ⚠️ Force Crash (BSOD)
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

/*
 * JoJo-themed Windows Blue Screen of Death (BSOD) transition component.
 * Displays custom Stand crash stop codes, shrimp posture alerts, and the iconic
 * vintage 'To Be Continued' arrow. Tapping triggers a reboot into the finale shrine.
 */

export default function BsodModal({ recipientName, recipientNickname, age, onReboot }) {
  return (
    <div
      onClick={onReboot}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0000aa',
        color: '#ffffff',
        fontFamily: 'Consolas, "Courier New", monospace',
        padding: '24px 18px',
        zIndex: 99999,
        cursor: 'pointer',
        overflowY: 'auto',
        lineHeight: '1.4',
        fontSize: '0.88rem',
      }}
    >
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#aaaaaa',
          color: '#0000aa',
          display: 'inline-block',
          padding: '2px 8px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          WINDOWS STAND_OVERFLOW_EXCEPTION
        </div>

        <p style={{ marginBottom: '14px' }}>
          A critical Stand clash occurred and system execution was halted to prevent irreversible damage to <strong>{recipientName} ({recipientNickname})</strong>'s shrimp posture.
        </p>

        <p style={{ marginBottom: '14px' }}>
          The fault was triggered by the following driver: <code>qbit_platinum.sys</code>
        </p>

        <p style={{ marginBottom: '14px', color: '#ffff55', fontWeight: 'bold' }}>
          STOP_CODE: 0x00000JOJO (KONO_DIO_DA_DETECTED, LEVEL {age})
        </p>

        <p style={{ marginBottom: '10px' }}>
          If this is the first time you've experienced this Stand crash:
        </p>

        <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
          <li>Killer Queen has already touched your lumbar spine. Straighten your back immediately.</li>
          <li>Pause all 47 active qBittorrent manga downloads and check your seeder ratio.</li>
          <li>If symptoms of yelling "ZA WARUDO" during code compilation persist, consult Jotaro Kujo.</li>
        </ul>

        <p style={{ marginBottom: '14px' }}>
          Technical Information:
        </p>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '22px', color: '#a0c4ff' }}>
          *** STOP: 0x00000JOJO (0xKONO_DIO_DA, 0xSHRIMP_POSTURE, 0x1337X_TORRENT, 0xLEVEL_{age})<br/>
          *** speedwagon_core.dll - Base at 0xF86B5000, DateStamp 20261023
        </p>

        {/* JoJo To Be Continued Arrow */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '20px'
        }}>
          <div className="jojo-tbc-arrow">
            <span>⬅️</span>
            <span>To Be Continued</span>
          </div>

          <div style={{
            color: '#ffff00',
            fontWeight: 'bold',
            animation: 'pulse 1s infinite alternate'
          }}>
            👉 [ TAP ANYWHERE TO REBOOT INTO FINALE ] 👈
          </div>
        </div>
      </div>
    </div>
  );
}

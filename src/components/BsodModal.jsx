/*
 * Retro Windows Blue Screen of Death (BSOD) transition component.
 * Displays a realistic Windows crash screen with customized age-related stop codes.
 * Tapping or clicking triggers a simulated reboot into the grand finale shrine.
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
        fontSize: '0.9rem',
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
          WINDOWS YOUTH_EXCEPTION
        </div>

        <p style={{ marginBottom: '14px' }}>
          A problem has been detected and YOUTH has been shut down to prevent damage to <strong>{recipientName} ({recipientNickname})</strong>'s lower back.
        </p>

        <p style={{ marginBottom: '14px' }}>
          The problem seems to be caused by the following driver: <code>unc_status.sys</code>
        </p>

        <p style={{ marginBottom: '14px', color: '#ffff55', fontWeight: 'bold' }}>
          ERROR_CODE: AGE_OVERFLOW_EXCEPTION (Level {age} Detected)
        </p>

        <p style={{ marginBottom: '10px' }}>
          If this is the first time you've experienced this birthday Stop error:
        </p>

        <ul style={{ marginLeft: '20px', marginBottom: '16px' }}>
          <li>Ensure that sufficient ibuprofen and orthopedic pillows are installed.</li>
          <li>Disable any attempts to pull an all-nighter or jump down stairs two steps at a time.</li>
          <li>If symptoms of asking "Who is playing this loud music?" persist, contact your nearest geriatric center.</li>
        </ul>

        <p style={{ marginBottom: '14px' }}>
          Technical Information:
        </p>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '20px', color: '#a0c4ff' }}>
          *** STOP: 0x00000OLD (0x00000AKS, 0x00000HBD, 0x00000AGE{age}, 0xCRACKING_KNEES)<br/>
          *** unc_status.sys - Address F86B5A8E base at F86B5000, DateStamp 20261023
        </p>

        <div style={{
          border: '2px dashed #ffffff',
          padding: '12px',
          textAlign: 'center',
          backgroundColor: '#000088',
          animation: 'pulse 1s infinite alternate'
        }}>
          👉 [ TAP ANYWHERE TO REBOOT INTO BIRTHDAY CELEBRATION ] 👈
        </div>
      </div>
    </div>
  );
}

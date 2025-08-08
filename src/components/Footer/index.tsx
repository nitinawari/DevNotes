import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#303846',
        color: 'white',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        {/* Your social links with icons or text */}
        <a
          href="https://github.com/nitinawari"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: 'white' }}
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/nitinawari22"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: 'white' }}
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/nitinawari"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: 'white' }}
        >
          LinkedIn
        </a>
      </div>
      <div>© {new Date().getFullYear()} DevNotes</div>
    </footer>
  );
}

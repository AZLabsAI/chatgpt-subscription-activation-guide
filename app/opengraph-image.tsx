import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'ChatGPT Subscription Activation Guide';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background: 'linear-gradient(135deg, #2c1d0d 0%, #795228 45%, #d6a86a 100%)',
          color: '#fffaf4',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, fontWeight: 600 }}>AZ Labs Guide</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: '88%' }}>
            ChatGPT Subscription Activation Guide
          </div>
          <div style={{ display: 'flex', fontSize: 28, lineHeight: 1.35, maxWidth: '78%', color: 'rgba(255,250,244,0.9)' }}>
            Browser-based activation steps, screenshots, and troubleshooting.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: 'rgba(255,250,244,0.82)' }}>
          Start on ChatGPT in a browser, then open the session endpoint.
        </div>
      </div>
    ),
    size,
  );
}

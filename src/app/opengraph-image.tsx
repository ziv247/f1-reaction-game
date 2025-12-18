import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'F1 Reaction Game - Test Your Formula 1 Reflexes';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Racing stripes background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(230, 0, 0, 0.03) 80px, rgba(230, 0, 0, 0.03) 160px)',
            display: 'flex',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #e60000 0%, #ff4444 50%, #e60000 100%)',
            display: 'flex',
          }}
        />

        {/* F1 Lights */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #ff0000 0%, #cc0000 50%, #990000 100%)',
                boxShadow: '0 0 40px rgba(255, 0, 0, 0.8), 0 0 80px rgba(255, 0, 0, 0.4), inset 0 -8px 20px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                }}
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-2px',
            marginBottom: '16px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            display: 'flex',
          }}
        >
          F1 REACTION GAME
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 500,
            color: '#888888',
            marginBottom: '40px',
            display: 'flex',
          }}
        >
          Can you beat the lights?
        </div>

        {/* CTA */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#ffffff',
            background: 'linear-gradient(135deg, #e60000 0%, #cc0000 100%)',
            padding: '16px 48px',
            borderRadius: '50px',
            boxShadow: '0 8px 32px rgba(230, 0, 0, 0.4)',
            display: 'flex',
          }}
        >
          TEST YOUR REFLEXES NOW
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#666666',
            fontSize: '18px',
          }}
        >
          <span style={{ display: 'flex' }}>🏎️</span>
          <span style={{ display: 'flex' }}>f1-reaction-game.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


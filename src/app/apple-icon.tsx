import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #e60000 0%, #cc0000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {/* F1 Lights */}
          <div
            style={{
              display: 'flex',
              gap: '5px',
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                }}
              />
            ))}
          </div>
          {/* F1 Text */}
          <div
            style={{
              fontSize: '44px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-2px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              display: 'flex',
            }}
          >
            F1
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}



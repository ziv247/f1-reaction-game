import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 192,
  height: 192,
};
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* F1 Lights */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: '24px',
                  height: '24px',
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
              fontSize: '48px',
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


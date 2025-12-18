import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
          borderRadius: '100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.3)',
                  boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontSize: '128px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-4px',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              display: 'flex',
            }}
          >
            F1
          </div>
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}


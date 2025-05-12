import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || '';
  const date = searchParams.get('date') || '';
  const tag = searchParams.get('tag') || '';

  const interFont = await fetch(
    new URL('/public/fonts/Inter_24pt-Bold.ttf', import.meta.url).toString()
  ).then((res) => res.arrayBuffer());

  const interRegular = await fetch(
    new URL('/public/fonts/Inter_24pt-Regular.ttf', import.meta.url).toString()
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#f9fafb',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 60px',
          lineHeight: 1.2,
        }}>
        <div
          style={{
            display: 'flex',
            borderLeft: '8px solid black',
            height: '50%',
            marginRight: '20px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
            }}>
            <div
              style={{
                fontSize: '14px',
                backgroundColor: '#e5e5e5',
                borderRadius: '6px',
                padding: '4px 8px',
                textAlign: 'center',
                fontFamily: 'InterRegular',
                color: 'black',
              }}>
              {tag}
            </div>
            <div style={{ display: 'flex', fontFamily: 'InterRegular' }}>
              {new Date(date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
          <p
            style={{
              fontSize: 72,
              fontFamily: 'InterBold',
              textAlign: 'start',
            }}>
            {title}
          </p>
          <p
            style={{
              fontSize: 24,
              fontFamily: 'InterRegular',
              textAlign: 'start',
              marginTop: 0,
              textDecoration: 'underline',
              textUnderlineOffset: '16px',
              color: 'grey',
            }}>
            itsnotquitemidnight.xyz
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'InterBold',
          data: interFont,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'InterRegular',
          data: interRegular,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );
}

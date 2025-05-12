import { ImageResponse } from 'next/og';
export const runtime = 'edge';

async function loadGoogleFont(text: string, weight: 400 | 700) {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;

  try {
    const css = await (await fetch(url)).text();
    const resource = css.match(
      /src: url\((.+)\) format\('(opentype|truetype)'\)/
    );

    if (resource) {
      const response = await fetch(resource[1]);
      if (response.status === 200) {
        return await response.arrayBuffer();
      }
    }

    throw new Error('Failed to load font resource');
  } catch (error) {
    console.error('Font loading error:', error);
    throw error;
  }
}

async function loadInterRegular(text: string) {
  return loadGoogleFont(text, 400);
}

async function loadInterBold(text: string) {
  return loadGoogleFont(text, 700);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || '';
  const date = searchParams.get('date') || '';
  const tag = searchParams.get('tag') || '';

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
                fontFamily: 'Inter',
                fontWeight: 400,
                color: 'black',
              }}>
              {tag}
            </div>
            <div
              style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 400 }}>
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
              fontFamily: 'Inter',
              fontWeight: 700,
              textAlign: 'start',
            }}>
            {title.length > 100 ? `${title.substring(0, 100)}...` : title}
          </p>
          <p
            style={{
              fontSize: 24,
              fontFamily: 'Inter',
              fontWeight: 400,
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
          name: 'Inter',
          data: await loadInterRegular(title + date + tag),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: await loadInterBold(title),
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}

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

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#f9fafb',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          padding: '60px',
          lineHeight: 1.2,
        }}>
          <p
            style={{
              fontSize: 85,
              fontFamily: 'Inter',
              fontWeight: 700,
              textAlign: 'start',
              borderLeft: 'solid 8px black',
              paddingLeft: '20px',
            }}>
            {title.length > 70 ? `${title.substring(0, 70)}...` : title}
          </p>
         
        
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await loadInterRegular(title),
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

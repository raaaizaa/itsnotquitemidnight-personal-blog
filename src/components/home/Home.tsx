import { getPosts } from '@/services/posts';
import ClarityProvider from '../shared/clarity/ClarityProvider';
import Landing from './landing/Landing';

const BASE_URL = 'https://itsnotquitemidnight.com';

function getSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: 'Raiza Rahman',
        description: 'Shared personal archive in form of text',
        inLanguage: 'en',
        publisher: {
          '@id': `${BASE_URL}/#person`,
        },
        about: {
          '@id': `${BASE_URL}/#person`,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${BASE_URL}/#profile`,
        url: `${BASE_URL}/`,
        name: 'Raiza Rahman — Personal Website',
        mainEntity: {
          '@id': `${BASE_URL}/#person`,
        },
        isPartOf: {
          '@id': `${BASE_URL}/#website`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Raiza Rahman',
        givenName: 'Raiza',
        familyName: 'Rahman',
        url: `${BASE_URL}/`,
        sameAs: [
          'https://www.instagram.com/raaizar/',
          'https://x.com/raaaizaa',
        ],
        mainEntityOfPage: {
          '@id': `${BASE_URL}/#profile`,
        },
      },
    ],
  };
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="bg-[#1a1a1a]">
      <Landing posts={posts} />
      <ClarityProvider />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema()).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  );
}

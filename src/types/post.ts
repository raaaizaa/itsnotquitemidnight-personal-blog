export interface PostProps {
  id: string;
  url: string;
  slug: string;
  content: {
    headline: string;
    tag: string;
    cutted_description: string;
    created_at: string;
    first_image: string;
  };
}

export interface PostDetailProps {
  content?: string;
  tag?: string;
  created_at?: string;
}

export interface PostSEOProps {
  headline: string;
  image: string;
  description: string;
  url: string;
}

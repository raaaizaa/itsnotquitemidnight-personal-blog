export interface PostProps {
  id: string;
  url: string;
  tag?: string;
  cutted_description: string;
  first_image: string;
  headline: string;
  created_at: string;
}

export interface PostDetailProps {
  content?: string;
  tag?: string;
  created_at?: string;
}

export interface PostSEOProps{
  headline: string,
  image: string,
  description: string,
  url: string,
}
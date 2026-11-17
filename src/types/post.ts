interface TextNode {
  type: 'text';
  text: string;
}

interface ImageNode {
  type: 'image';
  url: string;
  alt: string;
  title: string | null;
}

interface StrongNode {
  type: 'strong';
  children: InlineNode[];
}

interface EmphasisNode {
  type: 'emphasis';
  children: InlineNode[];
}

interface LinkNode {
  type: 'link';
  url: string;
  children: InlineNode[];
}

export type InlineNode =
  | TextNode
  | ImageNode
  | StrongNode
  | EmphasisNode
  | LinkNode;

interface HeadingNode {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: InlineNode[];
}

interface ParagraphNode {
  type: 'paragraph';
  children: InlineNode[];
}

interface BlockquoteNode {
  type: 'blockquote';
  children: InlineNode[];
}

interface EmbedNode {
  type: 'embed';
  url: string;
}

interface ListItemNode {
  type: 'listItem';
  checked: boolean | null;
  children: BlockNode[];
}

interface ListNode {
  type: 'list';
  ordered: boolean;
  start: number | null;
  children: ListItemNode[];
}

export type BlockNode =
  | HeadingNode
  | ParagraphNode
  | BlockquoteNode
  | EmbedNode
  | ListNode;

export interface PostContent {
  content: BlockNode[];
}

export type PostNode = BlockNode | InlineNode | ListItemNode;

export interface PostDetailProps extends Partial<PostContent> {
  tag?: string;
  created_at?: string;
}

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

export interface PostSEOProps {
  headline: string;
  image: string;
  description: string;
  url: string;
}

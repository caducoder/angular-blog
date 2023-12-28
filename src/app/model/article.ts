export interface Source {
  id: string;
  name: string;
}
export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
}
export interface NewsApi {
  articles?: Article[] | null;
}

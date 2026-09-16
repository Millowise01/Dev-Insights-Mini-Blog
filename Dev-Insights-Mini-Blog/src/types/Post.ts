export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  /** ISO date string, e.g. "2026-09-15T10:00:00.000Z" */
  datePosted: string;
}
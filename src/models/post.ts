import { Author } from './author';
export interface Post {
    id?: number;
    title: string;
    body: string;
    timeRead: string;
    tags: [];
    author?: Author;
    authorId: number;
    createdAt?: string;
    updatedAt?: string;
}
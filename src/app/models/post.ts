import { Author } from './author';
import { Tag } from './tag';
export interface Post {
    id: number;
    title: string;
    body: string;
    posted_at: string;
    author: Author;
    tagList:Tag[];
}

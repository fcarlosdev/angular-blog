import { Post } from "./post";

export interface Author {
    id:number;
    name: string;
    email: string;
    posts: Post[];
}

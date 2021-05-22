import { User } from './user';

export interface Post {
    id?: number;
    title: string;
    body: string;
    timeRead: string;
    tags: [];
    comments?:number[];
    likes?:number[];
    user?: User;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
}
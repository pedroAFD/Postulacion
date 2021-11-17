import { Tag } from "./tag";

export class Image {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    tags: Tag[];
    imageURL: string;
    thumbnailURL: string;
}

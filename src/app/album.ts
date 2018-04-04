import { release } from "os";

export interface Album {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks Track[];

}

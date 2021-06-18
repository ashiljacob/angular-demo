
export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: string;
    genres: Array<Genre>;
    parent_platform: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Ratings>;
    screenshots: Array<ScreenShots>;
    trailers: Array<Trailer>;
}

export interface APIResponse<T> {
    results: Array<T>;
}
interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        name: string;
    }
}

interface Publishers {
    name: string;
}

interface Ratings {
    id: string;
    count: number;
    title: string;
}
interface ScreenShots {
    image: string
}
interface Trailer {
    data: {
        max: string;
    };
}
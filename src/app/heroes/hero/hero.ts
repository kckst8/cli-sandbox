export class Hero {
    id: number;
    name: string;
    specialty: string;
    roles: Array<string>;
}

export class HeroesResponse {
    heroes: Hero[];
}
export type Raiting = {
    count: number,
    rate: number
}
export type Product  = {
    id: number;
    category: string;
    description: string;
    img: string;
    title: string;
    rating : Raiting
}
export type menuItems = {
    menuItems:[Product]
}
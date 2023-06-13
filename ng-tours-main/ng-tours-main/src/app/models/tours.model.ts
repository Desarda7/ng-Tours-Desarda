export interface Tour {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    destination: string;
    departurePlace: string;
    image: string;
    departureDate: string | Date;
    arrivalDate: string | Date;
    gallery: string[]
    
}
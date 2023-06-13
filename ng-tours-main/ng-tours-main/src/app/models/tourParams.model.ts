export interface TourParams{
    title:string ;
    destination:string;
    departurePlace:string;
    minPrice:number;
    maxPrice:number;
    departureDate: string | Date;
    arrivalDate: string | Date; 
    quantity:number;
}
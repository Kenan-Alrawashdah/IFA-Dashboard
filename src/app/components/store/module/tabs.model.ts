export interface TabModel{
         id: number;
         name: string;
         description: string;
         numberOfGroups: number;
         garments?:Garment[];
}
export class Garment{
   constructor(
     public id: number,
       public  name: string,
       public  description: null,
       public  brand: string,
       public  price: number,
       public  createdAt: Date,
       public  storeId: number,
       public  categoryId: number,
       public  category: null,
       public  colors: null,
       public  images: string[],
       public  properties: null,
       public  sizes: null,
       public  storeApiDto: null,
   ){

   }
       
}
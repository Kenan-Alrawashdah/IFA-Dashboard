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
       public  description: string,
       public  brand: string,
       public  price: number,
       public  createdAt: Date,
       public  storeId: number,
       public  categoryId: number,
       public  colors: number[],
       public  colorsOfId: number[],
       public  images: string[],
       public  properties: null,
       public  sizesOfId: number[],
   ){

   }
       
}
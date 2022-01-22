export class AddStoreModel {
  id:          number;
  firstName:   string;
  lastName:    string;
  email:       string;
  password:    string;
  birthDate:   Date;
  storeName:   string;
  username:    string;
  locations:   Location[];
  createdAt:   Date;


}

export class Location {
  constructor( private country: string, private city:string, private street:string,private phoneNumber: string ){}
}

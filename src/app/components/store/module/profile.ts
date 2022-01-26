export interface Profile {
  id:         number;
  firstName:  string;
  lastName:   string;
  email:      string;
  password:string;
  storeName:  string;
  stroePhoto: string;
  rank:       number;
  username:   string;
  locations:  LocationModel[];
  createdAt:  Date;
}
export interface LocationModel {
  id:          number;
  country:     string;
  city:        string;
  street:      string;
  phoneNumber: string;
  storeId:     number;
}



export interface Profile {
  id:         number;
  firstName:  string;
  lastName:   string;
  email:      string;
  storeName:  string;
  stroePhoto: string;
  rank:       number;
  username:   string;
  locations:  Location[];
  createdAt:  Date;
}
export interface Location {
  id:          number;
  country:     string;
  city:        string;
  street:      string;
  phoneNumber: string;
  storeId:     number;
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResponse } from "../../../constants/api.response.model";
import { Constants } from "../../../constants/constants";
import { Garment, TabModel } from "../module/tabs.model";


@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private http: HttpClient) {}
  GetAllCategories() {
    return this.http.get<TabModel[]>(Constants.BaseURL +'category');
      
  }
  GetStoreItemByCategoryId(id: number) {
    return this.http.get<ApiResponse<Garment[]>>(Constants.BaseURL +'store/GetGarmentsByCategory?categoryId='+ id);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResponse } from "../../../constants/api.response.model";
import { GetAllCategories } from "../module/get-all-categories.model";
import { GetStoreItem } from "../module/get-store-item.model";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private http: HttpClient) {}
  GetAllCategories() {
    return this.http.get<ApiResponse<GetAllCategories[]>>("");
  }
  GetStoreItemByCategoryId(id: number) {
    return this.http.post<ApiResponse<GetStoreItem[]>>("", id);
  }
}

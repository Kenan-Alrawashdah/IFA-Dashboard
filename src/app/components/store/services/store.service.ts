import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { constants } from "buffer";
import { ApiResponse } from "../../../constants/api.response.model";
import { Constants } from "../../../constants/constants";
import { CategoryModel } from "../../admin/models/category.model";
import { PropertyModel } from "../../admin/models/property.model";
import { ColorModel } from "../module/color.model";
import { GarmentModel } from "../module/Garment.model";
import { GroupModel } from "../module/GroupWithProperty.model";
import { SizeModel } from "../module/size.model";
import { Garment, TabModel } from "../module/tabs.model";


@Injectable({
  providedIn: "root",
})
export class StoreService {

  categories:CategoryModel[];
  properties:PropertyModel[];
  colors:ColorModel[];
  garment:Garment;
  constructor(private http: HttpClient) {}
  GatTabs() {
    return this.http.get<ApiResponse<TabModel[]>>(Constants.BaseURL +'category');
      
  }
  public GetAllCategories()
  {
    return this.http.get<ApiResponse<CategoryModel[]>>(Constants.BaseURL + 'category')
  }
  GetStoreItemByCategoryId(id: number) {
    return this.http.get<ApiResponse<Garment[]>>(Constants.BaseURL +'store/GetGarmentsByCategory?categoryId='+ id);
  }

  public AddGarment(body:FormData)
  {
    return this.http.post<ApiResponse<GarmentModel>>(Constants.BaseURL+'garment/CreateGarment',body)
  }

  public GetAllProperties()
  {
    return this.http.get<ApiResponse<PropertyModel[]>>(Constants.BaseURL+ 'property')
  }

  public GetAllColors()
  {
    return this.http.get<ApiResponse<ColorModel[]>>(Constants.BaseURL+ 'garment/GetColors')
  }

  public GetSizeByCategoryId(id:number)
  {
    return this.http.get<ApiResponse<SizeModel[]>>(Constants.BaseURL+'garment/GetSizeByCategory/'+id);
  }

  public EditGarment(model:FormData)
  {
    return this.http.put<ApiResponse<Garment>>(Constants.BaseURL+'garment',model)
  }

  public GetGroups(id:number)
  {
    return this.http.get<ApiResponse<GroupModel[]>>(Constants.BaseURL+ 'group/GetGroupByCategory?id='+id)
  }
}

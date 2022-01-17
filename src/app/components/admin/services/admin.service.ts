import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../../constants/api.response.model';
import { Constants } from '../../../constants/constants';
import { CategoryModel } from '../models/category.model';
import { GroupModel } from '../models/group.model';
import { PropertyModel } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string = Constants.BaseURL;
  constructor(
    private http:HttpClient
  ) { }

  // Category services
  public CreateCategory(model:CategoryModel)
  {
   return this.http.post<ApiResponse<CategoryModel>>(this.baseUrl+'category',model);
  }

  public EditCategory(model:CategoryModel)
  {
   return this.http.put<ApiResponse<CategoryModel>>(this.baseUrl+'category',model);
  }

  public GetAllCategories()
  {
    return this.http.get<ApiResponse<CategoryModel[]>>(this.baseUrl + 'category')
  }

  public DeleteCategory(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'category?id='+id)
  }

  //Group services
  public GetAllGroups()
  {
    return this.http.get<ApiResponse<GroupModel[]>>(this.baseUrl + 'group')
  }

  public CreateGroup(model:GroupModel)
  {
    model.numberOfPropriety = null;
    return this.http.post<ApiResponse<GroupModel>>(this.baseUrl+'group',model);
  }

  public EditGroup(model:GroupModel)
  {
    model.numberOfPropriety = null;
    return this.http.put<ApiResponse<GroupModel>>(this.baseUrl+'group',model);
  }

  public DeleteGroup(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'group?id='+id)
  }

  // Property services
  public GetAllProperties()
  {
    return this.http.get<ApiResponse<PropertyModel[]>>(this.baseUrl + 'property')
  }

  public CreateProperty(model:PropertyModel)
  {
    return this.http.post<ApiResponse<GroupModel>>(this.baseUrl+'property',model);
  }

  public EditProperty(model:PropertyModel)
  {
    return this.http.put<ApiResponse<GroupModel>>(this.baseUrl+'property',model);
  }

  public DeleteProperty(id:number)
  {
    return this.http.delete<ApiResponse<number>>(this.baseUrl + 'property?id='+id)
  }

  
}

import { DescribtionMeal } from './../interfaces/describtion-meal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';
import { Meal } from '../interfaces/meal';
@Injectable({
  providedIn: 'root'
})
export class GetRecipService {

  constructor(private _HttpClient:HttpClient) { }

getRecipes():Observable<{meals: Meal[]}>{
  return this._HttpClient.get<{meals: Meal[]}>(enviroment.ApiRecip) ; 
}
getDetailsMeal(id:string):Observable<{meals:[{DescribtionMeal:string}]}>{
  return this._HttpClient.get<{meals:[{DescribtionMeal:string}]}>(`enviroment.detailMealById${id}`)
}


}

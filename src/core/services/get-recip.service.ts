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
getDetailsMeal(id:number):Observable<{meals:any[]}>{
  return this._HttpClient.get<{meals:any[]}>(enviroment.detailMealById+id)
}



}

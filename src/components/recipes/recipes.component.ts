
import {NgxPaginationModule} from 'ngx-pagination';
import { Meal } from '../../core/interfaces/meal';
import { GetRecipService } from './../../core/services/get-recip.service';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-recipes',
standalone : true,
  imports: [NgxPaginationModule , RouterLink],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  meals:Meal[] = [];

  constructor( private  _GetRecipService:GetRecipService , private _Router:Router){}
  ngOnInit(): void {
      this._GetRecipService.getRecipes().subscribe({
        next:(res)=>{
          console.log(res);
          this.meals =res.meals;
          console.log('meals=>' , this.meals);
          
          
        } ,  
        error : (err)=>{
          console.log(err);
          
        }
      })
      
  }


goToMealDetails(id:string):void{
  this._Router.navigate(['/meal-details'])
}


}


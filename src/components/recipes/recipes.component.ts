
import {NgxPaginationModule} from 'ngx-pagination';
import { Meal } from '../../core/interfaces/meal';
import { GetRecipService } from './../../core/services/get-recip.service';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-recipes',
standalone : true,
  imports: [NgxPaginationModule ],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  meals:Meal[] = [];

  constructor( private  _GetRecipService:GetRecipService){}
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

getDescription(id:string):void{
  this._GetRecipService.getDetailsMeal(id).subscribe({
    next:(res)=>{
      console.log(res);
      
    } , error:(err)=>{
      console.log(err)
    }
  })
}



}


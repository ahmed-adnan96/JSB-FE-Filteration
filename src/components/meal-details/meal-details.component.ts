import { Component, OnInit } from '@angular/core';
import { GetRecipService } from '../../core/services/get-recip.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  imports: [RouterLink],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent implements OnInit {
constructor(private  _GetRecipService:GetRecipService , private _ActivatedRoute:ActivatedRoute ){}
id:any ;
mealDetails: any ;
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.id = res.get('id')
      }
    })
    
      this._GetRecipService.getDetailsMeal(this.id).subscribe({
        next:(res)=>{
          this.mealDetails = res.meals[0] ; 
          console.log(this.mealDetails);
          
        } , error:(err)=>{
          console.log(err)
        }
      })
  
    
}

}

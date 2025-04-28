import { ContactService } from './../../core/services/contact.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule , ReactiveFormsModule ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contact:FormGroup ; 
  constructor( private  _ContactService:ContactService){
    this.contact = new FormGroup({
      email : new FormControl ("" , [Validators.required]) , 
      phone : new FormControl ("" , [Validators.required]) , 
      name : new FormControl ("" , [Validators.required])
    })
  }

  contactFun():void{
    console.log(this.contact.value);
    this._ContactService.contact(this.contact.value).subscribe({
      next : (res)=>{
        console.log(res)
      } , error :(err)=>{
        console.log(err);
        
      }
    })
  }


}

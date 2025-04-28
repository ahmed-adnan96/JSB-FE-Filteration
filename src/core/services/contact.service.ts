import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'  
})
export class ContactService {

  constructor( private _HttpClient:HttpClient) { }

  contact(contactDetails:object):Observable<any>{
    return this._HttpClient.post(enviroment.contactApi , contactDetails)
  }
}

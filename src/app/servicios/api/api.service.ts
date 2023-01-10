import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../../modelos/login.interface';
import { RegisterI } from '../../modelos/register.interface';
import { ResponseI } from '../../modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	url:string = "http://localhost:8000/api/"

  constructor(private http:HttpClient) { }

	loginByEmail(form:LoginI):Observable<ResponseI>{
		let direccion = this.url + "login";

		return this.http.post<ResponseI>(direccion, form);
	}
	
	registerByEmail(form:RegisterI):Observable<ResponseI>{
		let direccion = this.url + "register";
		
		return this.http.post<ResponseI>(direccion, form);
	}
}

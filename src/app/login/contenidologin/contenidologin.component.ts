import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';



@Component({
  selector: 'app-contenidologin',
  templateUrl: './contenidologin.component.html',
  styleUrls: ['./contenidologin.component.css']
})

export class ContenidologinComponent implements OnInit {
	loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private api:ApiService, private router:Router) { 
		this.buildForm();  
  }

  ngOnInit(): void { }
  
  private buildForm(){
		this.loginForm = this.formBuilder.group({
		email : ['', [Validators.required,Validators.email]],
		password : ['', Validators.required]
	});  
  }

	onLogin(event: Event, form:LoginI){
		event.preventDefault();	
		
		if(this.loginForm.valid){
			this.api.loginByEmail(form).subscribe(data =>{
		
				if(data.status == 200){
					localStorage.setItem("token", data.accessToken);
					this.router.navigate(['dashboard']);
				}
			});
		}

	}

}//fin de clase

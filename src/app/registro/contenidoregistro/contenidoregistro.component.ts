import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { RegisterI } from '../../modelos/register.interface';
import { ResponseI } from '../../modelos/response.interface';

@Component({
  selector: 'app-contenidoregistro',
  templateUrl: './contenidoregistro.component.html',
  styleUrls: ['./contenidoregistro.component.css']
})

export class ContenidoregistroComponent implements OnInit {
	registerForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private api:ApiService,  private router:Router) { 
		this.buildForm();    
  }

  ngOnInit(): void {  }
  
  private buildForm(){
		this.registerForm = this.formBuilder.group({
			email : ['', [Validators.required,Validators.email]],
			password : ['', [Validators.required, Validators.min(8)]],
			passwordConfirm : ['', [Validators.required, Validators.min(8)]],
			terminos: ["", Validators.requiredTrue]
		});  
  }
  

	onRegister(event: Event, form:RegisterI){
		event.preventDefault();	
		
		if(this.registerForm.valid){
			this.api.registerByEmail(form).subscribe(data =>{
		
				if(data.status == 200){
					this.router.navigate(['login']);
				}
			});
		}

	}
	
	
	get aceptaTerminos(){
		return this.registerForm.get('terminos');	
	}

}

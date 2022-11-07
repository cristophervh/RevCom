import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexhomeComponent } from './home/indexhome/indexhome.component';
import { IndexproductoComponent } from './producto/indexproducto/indexproducto.component';
import { IndexcarritoComponent } from './carro/indexcarrito/indexcarrito.component';
import { IndextiendaComponent } from './tienda/indextienda/indextienda.component';

const routes: Routes = [

  { path: 'home', component: IndexhomeComponent },
  { path: 'producto', component: IndexproductoComponent },
  { path: 'carrito', component: IndexcarritoComponent },
  { path: 'tienda', component: IndextiendaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

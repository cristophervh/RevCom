import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexhomeComponent } from './home/indexhome/indexhome.component';
import { IndexproductoComponent } from './producto/indexproducto/indexproducto.component';
import { IndexcarritoComponent } from './carro/indexcarrito/indexcarrito.component';
import { IndextiendaComponent } from './tienda/indextienda/indextienda.component';
import { IndexperfilComponent } from './perfil/indexperfil/indexperfil.component';
import { IndexcomprasComponent } from './compras/indexcompras/indexcompras.component';
import { IndexloginComponent } from './login/indexlogin/indexlogin.component';
import { IndexregistroComponent } from './registro/indexregistro/indexregistro.component';
import { IndexcheckoutComponent } from './checkout/indexcheckout/indexcheckout.component';
import { IndexspeiComponent } from './checkout/indexspei/indexspei.component';
import { IndextdcComponent } from './checkout/indextdc/indextdc.component';
import { IndexseguimientoComponent } from './checkout/indexseguimiento/indexseguimiento.component';
import { IndexsaldoComponent } from './saldo/indexsaldo/indexsaldo.component';

const routes: Routes = [

  { path: 'home', component: IndexhomeComponent },
  { path: '', component: IndexhomeComponent },
  { path: 'producto', component: IndexproductoComponent },
  { path: 'carrito', component: IndexcarritoComponent },
  { path: 'tienda', component: IndextiendaComponent },
  { path: 'perfil', component: IndexperfilComponent },
  { path: 'compras', component: IndexcomprasComponent },
  { path: 'login', component: IndexloginComponent },
  { path: 'registro', component: IndexregistroComponent },
  { path: 'checkout', component: IndexcheckoutComponent },
  { path: 'spei', component: IndexspeiComponent },
  { path: 'tdc', component: IndextdcComponent },
  { path: 'seguimiento', component: IndexseguimientoComponent },
  { path: 'dashboard', component: IndexsaldoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

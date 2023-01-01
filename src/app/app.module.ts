import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MenuComponent } from './home/menu/menu.component';
import { FooterComponent } from './home/footer/footer.component';
import { RevcomComponent } from './home/revcom/revcom.component';
import { BannersComponent } from './home/banners/banners.component';
import { DescuentosComponent } from './home/descuentos/descuentos.component';
import { ProductosComponent } from './home/productos/productos.component';
import { IndexhomeComponent } from './home/indexhome/indexhome.component';
import { IndexproductoComponent } from './producto/indexproducto/indexproducto.component';
import { PreguntasComponent } from './producto/preguntas/preguntas.component';
import { ItemComponent } from './producto/item/item.component';
import { DescripcionComponent } from './producto/descripcion/descripcion.component';
import { IndexcarritoComponent } from './carro/indexcarrito/indexcarrito.component';
import { BolsaComponent } from './carro/bolsa/bolsa.component';
import { IndextiendaComponent } from './tienda/indextienda/indextienda.component';
import { TabsComponent } from './tienda/tabs/tabs.component';
import { ContenidotiendaComponent } from './tienda/contenidotienda/contenidotienda.component';
import { RangeventaComponent } from './tienda/rangeventa/rangeventa.component';
import { RangeprecioComponent } from './tienda/rangeprecio/rangeprecio.component';
import { IndexperfilComponent } from './perfil/indexperfil/indexperfil.component';
import { ContenidoperfilComponent } from './perfil/contenidoperfil/contenidoperfil.component';
import { IndexcomprasComponent } from './compras/indexcompras/indexcompras.component';
import { ContenidocomprasComponent } from './compras/contenidocompras/contenidocompras.component';
import { IndexloginComponent } from './login/indexlogin/indexlogin.component';
import { ContenidologinComponent } from './login/contenidologin/contenidologin.component';
import { IndexregistroComponent } from './registro/indexregistro/indexregistro.component';
import { ContenidoregistroComponent } from './registro/contenidoregistro/contenidoregistro.component';
import { QuantitybuttonComponent } from './carro/quantitybutton/quantitybutton.component';
import { IndexcheckoutComponent } from './checkout/indexcheckout/indexcheckout.component';
import { ContenidocheckoutComponent } from './checkout/contenidocheckout/contenidocheckout.component';
import { IndexspeiComponent } from './checkout/indexspei/indexspei.component';
import { ContenidospeiComponent } from './checkout/contenidospei/contenidospei.component';
import { IndextdcComponent } from './checkout/indextdc/indextdc.component';
import { ContenidotdcComponent } from './checkout/contenidotdc/contenidotdc.component';
import { IndexseguimientoComponent } from './checkout/indexseguimiento/indexseguimiento.component';
import { ContenidoseguimientoComponent } from './checkout/contenidoseguimiento/contenidoseguimiento.component';
import { IndexsaldoComponent } from './saldo/indexsaldo/indexsaldo.component';
import { ContenidosaldoComponent } from './saldo/contenidosaldo/contenidosaldo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    RevcomComponent,
    BannersComponent,
    DescuentosComponent,
    ProductosComponent,
    IndexhomeComponent,
    IndexproductoComponent,
    PreguntasComponent,
    ItemComponent,
    DescripcionComponent,
    IndexcarritoComponent,
    BolsaComponent,
    IndextiendaComponent,
    TabsComponent,
    ContenidotiendaComponent,
    RangeventaComponent,
    RangeprecioComponent,
    IndexperfilComponent,
    ContenidoperfilComponent,
    IndexcomprasComponent,
    ContenidocomprasComponent,
    IndexloginComponent,
    ContenidologinComponent,
    IndexregistroComponent,
    ContenidoregistroComponent,
    QuantitybuttonComponent,
    IndexcheckoutComponent,
    ContenidocheckoutComponent,
    IndexspeiComponent,
    ContenidospeiComponent,
    IndextdcComponent,
    ContenidotdcComponent,
    IndexseguimientoComponent,
    ContenidoseguimientoComponent,
    IndexsaldoComponent,
    ContenidosaldoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




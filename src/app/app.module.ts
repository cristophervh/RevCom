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




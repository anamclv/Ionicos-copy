import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { LayoutModule } from './layout/layout.module';
import { JuegopptComponent } from './components/juegoppt/juegoppt.component';

//ng g c components/dni
@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent,
    JuegopptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule// bombilla e importar de layout.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

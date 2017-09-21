import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableProductosComponent } from './table-productos/table-productos.component';
import { TabelaMotoresComponent } from './tabela-motores/tabela-motores.component';

@NgModule({
  declarations: [
    AppComponent,
    TableProductosComponent,
    TabelaMotoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

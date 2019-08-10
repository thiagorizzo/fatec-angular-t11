import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProdutoComponent } from 'src/produto/listar-produto.component';
import { TaoqueisPipe } from './pipes/taoqueis.pipe';
import { ApresentaProdutoPipe } from './pipes/apresenta-produto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    TaoqueisPipe,
    ApresentaProdutoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

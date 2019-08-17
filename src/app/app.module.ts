import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProdutoComponent } from 'src/produto/listar-produto.component';
import { TaoqueisPipe } from './pipes/taoqueis.pipe';
import { ApresentaProdutoPipe } from './pipes/apresenta-produto.pipe';
import { AvaliacaoComponent } from 'src/avaliacao/avaliacao.component';
import { DetalheProdutoComponent } from 'src/produto/detalhe-produto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    TaoqueisPipe,
    ApresentaProdutoPipe,
    AvaliacaoComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

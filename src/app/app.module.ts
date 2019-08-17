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
import { RouterModule } from '@angular/router';
import { ProdutoEditDeactivateGuardService } from 'src/router-guards/ProdutoEditDeactivateGuardService';
import { HighlightDirective } from 'src/directives/HighlightDirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    TaoqueisPipe,
    ApresentaProdutoPipe,
    AvaliacaoComponent,
    DetalheProdutoComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'produto', component: DetalheProdutoComponent },
      { path: 'produto/:id', canDeactivate: [ ProdutoEditDeactivateGuardService ] , component: DetalheProdutoComponent },
      { path: 'produtos', component: ListarProdutoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

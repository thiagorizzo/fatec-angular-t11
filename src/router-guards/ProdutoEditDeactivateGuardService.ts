import { CanDeactivate } from '@angular/router';
import { DetalheProdutoComponent } from 'src/produto/detalhe-produto.component';
import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root'}
)
export class ProdutoEditDeactivateGuardService implements CanDeactivate<DetalheProdutoComponent> {
    
    canDeactivate(component: DetalheProdutoComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        /*console.log(component.formulario);
        return !component.formulario.dirty;*/

        alert("não pode desativar");
        return false;
    }
}
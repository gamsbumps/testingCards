import { DetalhesProdutosComponent } from './produtos/detalhes-produtos/detalhes-produtos.component';
import { HomePage } from './home/home.page';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage
  },
  {
    path: 'produtos',
    pathMatch: 'full',
    component: ProdutosComponent
  },
  {
    path: 'produtos/:id',
    pathMatch: 'full',
    component: DetalhesProdutosComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

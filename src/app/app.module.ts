import { ProdutosModule } from './produtos/produtos.module';
import { DetalhesProdutosComponent } from './produtos/detalhes-produtos/detalhes-produtos.component';
import { HeaderComponent } from './header/header.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomePage } from './home/home.page';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomePage, ProdutosComponent, HeaderComponent, DetalhesProdutosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ProdutosModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

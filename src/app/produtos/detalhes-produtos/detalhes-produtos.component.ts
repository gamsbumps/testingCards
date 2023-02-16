import { CarrinhoService } from './../../carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.scss'],
})
export class DetalhesProdutosComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
    console.log(produtoId);
    console.log(this.produto);
  }

  adicionarAoCarrinho() {
    this.presentToast('top');
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Produto adicionado com sucesso!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}

import { ProdutosService } from './../produtos.service';
import { IProduto } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;
  constructor(private route: ActivatedRoute, private produtosService: ProdutosService, private router: Router) { }

  ngOnInit() {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();
      if(descricao) {
        this.produtos = produtos.filter((produto) =>
        produto.descricao.toLowerCase().includes(descricao))

        return;
      }

      this.produtos = produtos;
      console.log(this.produtos)
    })
  }
}

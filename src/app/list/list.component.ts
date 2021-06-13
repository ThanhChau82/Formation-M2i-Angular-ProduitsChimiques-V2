import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  produits : Produit[];

  constructor(private produitService : ProduitService) {
    this.produits = produitService.getAll();
  }

  ngOnInit(): void {
  }

}

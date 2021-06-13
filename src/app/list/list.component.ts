import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, DoCheck  {
  produits : Produit[];

  constructor(private produitService : ProduitService) {
    this.produits = produitService.getAll();
  }

  ngDoCheck(): void { // pour détecter les changements de valeur
    this.produits = this.produitService.getAll();
  }

  ngOnInit(): void {
  }

  delete(id : number) : void {
    if (confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      this.produitService.delete(id);
    }
  }

}

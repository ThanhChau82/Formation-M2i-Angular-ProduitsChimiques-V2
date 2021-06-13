import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[];

  constructor() {
    this.produits = [
      new Produit(1, "n-Butyllithium solution", "109-72-8", "CH3(CH2)3Li", 64.06, "1.6M in hexanes", 3, "LSO-S305"),
      new Produit(2, "Methanol", "67-56-1", "CH3OH", 32.04, "Methanol, anhydrous, 99.8%", 5, "LSO-S101")
    ];
  }

  getAll() : Produit[] {
    return [...this.produits]; // Retourner une copie de valeur de tableau de produits.
  }

  getById(id : number) : Produit {
    return <Produit>{...this.produits.find(p => p.id == id)};
  }

  add(produit : Produit) : void {
    this.produits.push(produit);
  }

  modify(produit : Produit) : void {
    let indice = this.produits.findIndex(p => p.id == produit.id);
    this.produits[indice] = produit;
  }

  delete(id : number) : void {
    this.produits = this.produits.filter(p => p.id != id);
  }

}

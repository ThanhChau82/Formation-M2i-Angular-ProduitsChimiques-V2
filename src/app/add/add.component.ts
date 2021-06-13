import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private produitService : ProduitService, private router : Router) { }

  ngOnInit(): void {
  }

  ajouter(f : NgForm) {
    let produit = new Produit(f.value.id, f.value.nom, f.value.cas, f.value.formule, f.value.masse, f.value.description, f.value.quantite, f.value.localisation);
    this.produitService.add(produit);
    this.router.navigate(["/list"]);
  }
}

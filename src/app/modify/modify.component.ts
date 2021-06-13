import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit-service.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  produit : Produit;

  constructor(private produitService : ProduitService, private route : ActivatedRoute, private router : Router) {
    this.produit = <Produit>{};
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametres => {
        this.produit = this.produitService.getById(parametres['id']);
      }
    );
  }

  modifier(f : NgForm) : void {
    this.produit.nom = f.value.nom;
    this.produit.cas = f.value.cas;
    this.produit.formule = f.value.formule;
    this.produit.masseMoleculaire = f.value.masse;
    this.produit.description = f.value.description;
    this.produit.quantite = f.value.quantite;
    this.produit.localisation = f.value.localisation;

    this.produitService.modify(this.produit);
    console.log(this.produitService.getById(this.produit.id));

    this.router.navigate(["/list"]); // l'utilisation [routerlink]="['/list']" dans le composant button Valider du formulaire ne permet pas de synchroniser les changements au niveau de la liste.
  }

}

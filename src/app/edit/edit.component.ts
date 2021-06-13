import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  produit : Produit;

  constructor(private produitService : ProduitService, private route : ActivatedRoute) {
    this.produit = <Produit>{};
  }

  ngOnInit(): void {
    this.route.params.subscribe( // inscire aux observables pour intercepter le flux de paramètres
      parametres => {
        // Récupérer le produit à modifier.
        this.produit = this.produitService.getById(parametres['id']);
      }
    );
  }


}

export class Produit {
  id : number;
  nom : string;
  cas : string;
  formule : string;
  masseMoleculaire : number;
  description : string;
  quantite : number;
  localisation : string;

  constructor(id : number, nom : string, cas : string, formule : string, masseMoleculaire : number, description : string, quantite : number, localisation : string) {
    this.id = id;
    this.nom = nom;
    this.cas = cas;
    this.formule = formule;
    this.masseMoleculaire = masseMoleculaire;
    this.description = description;
    this.quantite = quantite;
    this.localisation = localisation;
  }
}


import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../service/catalogue.service";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  // @ts-ignore
  public currentProduit: Produit;
  // @ts-ignore
  private url: string;



  constructor(private router:Router, private activatedRoute:ActivatedRoute,
              private catService:CatalogueService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.id)
    this.catService.getResource(this.url)
      .subscribe(data=>{
        this.currentProduit=data;
      },err=>{
        console.log(err);
      })
  }


  onUpdateProduits(value: any) {
    this.catService.updateResource(this.url,value)
      .subscribe(data=>{
        alert("Mise à jour effectuée avec succes")
        this.router.navigateByUrl("/produits")
      },err=>{
        console.log(err)
      })

  }
}

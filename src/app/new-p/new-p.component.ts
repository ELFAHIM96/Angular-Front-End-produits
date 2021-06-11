import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";
import {Router} from "@angular/router";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-new-p',
  templateUrl: './new-p.component.html',
  styleUrls: ['./new-p.component.css']
})
export class NewPComponent implements OnInit {
  // @ts-ignore
  currentProduit: Produit;
  public mode: number=1;

  constructor(private catService:CatalogueService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveProduits(data: any) {
    this.catService.saveResource(this.catService
      .host+"/produits", data)
      .subscribe(res=>{
        //this.router.navigateByUrl("/produits");
        this.currentProduit=res;
        this.mode=2
      }, err=>{
        console.log(err);
      })


  }

  onNewProduit() {
    this.mode==1;
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogueService} from "../service/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
   public produits:any;
   p: any;
   public size:number=5;
   public currentpage:number=0;

   // @ts-ignore
  public totalPages:number;
  // @ts-ignore
  public pages:Array<number>;
  i: any;
  private currentKeyword: String="";
  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetProduits() {
    this.catService.getProduits(this.currentpage, this.size)
      .subscribe(data=>{

        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits=data;
      },err=>{
        console.log(err);
      });

  }

  onPageProduit(i: number) {
    this.currentpage=i;
    this.onGetProduits();
    this.chercherProduits();

  }
  onChercher(form: any){
    this.currentpage=0;
    this.currentKeyword=form.keywords;
    this.chercherProduits();
  }

  chercherProduits() {
    // @ts-ignore
    this.catService.getProduitwByKeywords(this.currentKeyword,this.currentpage, this.size)
      .subscribe(data=>{

        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits=data;
      },err=>{
        console.log(err);
      });

  }


  onDeleteProduits(p: any) {
    let conf=confirm("etes vous sure ?");
    if(conf) {
      this.catService.deleteResource(p._links.self.href)
        .subscribe(data=>{
          this.chercherProduits();

        }, err => {
          console.log(err);

        })
    }

  }

  onEditProduits(p:any) {
    let url=p._links.self.href;

    this.router.navigateByUrl("/edit-produit/"+btoa(url));


  }
}

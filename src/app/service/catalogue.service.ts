import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
 public host:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  public getProduits(page:number, size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }

  public getProduitwByKeywords(mc:string, page:number, size:number){
    http://localhost:8080/produits/search/byDesignationPage?mc=HP&page=0&size=3
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }
  // @ts-ignore
  public deleteResource(url){
      return this.httpClient.delete(url);
  }

  // @ts-ignore
  public saveResource(url,data):Observable<Produit> {
    // @ts-ignore
    return this.httpClient.post<Produit>(url, data)
  }

  // @ts-ignore
  public getResource(url):Observable<Produit>{
    // @ts-ignore
    return this.httpClient.get<Produit>(url)
  }
  // @ts-ignore
  public updateResource(url,data){
    // @ts-ignore
    return this.httpClient.put(url,data)
  }

}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NewPComponent} from "./new-p/new-p.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";


const routes: Routes = [

  {
    path:"produits",
    component:ProduitsComponent
  },
  {
    path:"new-p",
    component:NewPComponent
  },
  {
  path:"",redirectTo:"/produits",pathMatch:'full'
  },
  {
    path:"edit-produit/:id", component:EditProduitComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

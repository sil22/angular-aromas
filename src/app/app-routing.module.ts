import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AromasAboutComponent } from './aromas-about/aromas-about.component';
import { AromasProductsComponent } from './aromas-products/aromas-products.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products", 
    component: AromasProductsComponent
  },
  {
    path: "about", 
    component: AromasAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

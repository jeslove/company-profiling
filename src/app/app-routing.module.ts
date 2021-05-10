import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './info/about/about.component';
import { ContactComponent } from './info/contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'products', component:ProductListComponent},
  {path: 'teams', component:TeamsComponent},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

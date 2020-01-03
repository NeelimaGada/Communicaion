import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'',loadChildren: () => import('./communication/communication.module').then(m => m.CommunicationModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

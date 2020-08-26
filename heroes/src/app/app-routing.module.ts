import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {path : 'heroes', component: HeroesComponent},
  {path : 'details/:id', component: DetailsComponent},
  {path:'**',pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

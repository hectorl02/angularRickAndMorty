import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { UpdateCharacterComponent } from './characters/update-character/update-character.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children: [
    {path:'crear',component:CreateComponent },
    {path:'personajes',component:CharactersComponent },
    {path:'personajes/:id',component:UpdateCharacterComponent },
    {path: 'ubicaciones', component:LocationsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

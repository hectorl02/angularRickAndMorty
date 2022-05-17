import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { UpdateCharacterComponent } from './characters/update-character/update-character.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CharactersComponent,
    LocationsComponent,
    UpdateCharacterComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
})
export class DashboardModule { }

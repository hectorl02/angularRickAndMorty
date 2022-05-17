import { Component, OnInit } from '@angular/core';
import { DataCharacterService } from '../../services/data-character.service';
import { DataEpisodeService } from '../../services/data-episode.service';
import { DataLocationService } from '../../services/data-location.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataServiceCharacter: DataCharacterService,
    private dataServiceEpisode: DataEpisodeService,
    private dataServiceLocation: DataLocationService,
  ) { }

  ngOnInit(): void {
    this.dataServiceCharacter.getCharacters();
    this.dataServiceEpisode.getEpisodes();
    this.dataServiceLocation.getLocations();
  }

  init(){}

}

import { Component, OnInit } from '@angular/core';
import { DataLocationService } from '../../../services/data-location.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  localList: [] = [];

  constructor(
    private dataServiceLocation: DataLocationService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    // Se hace llamado al api para cargar ubicaciones
    this.localList = this.dataServiceLocation.listLocations.results
  }

  displayedColumns: string[] = [ 'id' ,'name', 'type', 'dimension', 'created', 'url'];

}

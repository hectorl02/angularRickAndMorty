import { Component, OnInit } from '@angular/core';
import { DataCharacterService } from '../../../services/data-character.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  localList: any = [];

  constructor(
    private dataServiceCharacter: DataCharacterService,
  ) { }

  ngOnInit(): void {
    // Se hace llamado al api para cargar personajes
    this.localList = this.dataServiceCharacter.listCharacters
  }

  deleteCharacter(id:string):void {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'La información se ha borrado.',
          'success'
          )
          this.dataServiceCharacter.deleteCharacter(id);
      }
    })
  }

}

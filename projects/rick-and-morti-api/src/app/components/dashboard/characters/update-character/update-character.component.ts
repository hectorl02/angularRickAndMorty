import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataCharacterService } from 'projects/rick-and-morti-api/src/app/services/data-character.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css'],
})
export class UpdateCharacterComponent implements OnInit {

  form!: FormGroup;
  character: any = [];
  id: string = '';
  dataimage: any = '';
  statusCharacter;
  genderCharacter;

  constructor(
    private formBuilder: FormBuilder,
    private dataServiceCharacter: DataCharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      species: ['', Validators.required],
      type: [''],
      gender: ['', Validators.required],
      image: ['', Validators.required],
      created: ['', Validators.required],
      origin: this.formBuilder.group({
        name: ['', Validators.required],
        url: ['', Validators.required],
      }),
      location: this.formBuilder.group({
        name: ['', Validators.required],
        url: ['', Validators.required],
      }),
    });
  }

  get name() {
    return this.form.get('origin')?.get('name');
  }

  get url() {
    return this.form.get('origin')?.get('url');
  }

  get namel() {
    return this.form.get('location')?.get('name');
  }

  get urll() {
    return this.form.get('location')?.get('url');
  }

  ngOnInit(): void {
    // data para campos select
    this.statusCharacter = this.dataServiceCharacter.status;
    this.genderCharacter = this.dataServiceCharacter.gender;

    //se obtiene parametro id, para hacer el llamado al apilocal por el id
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.fetchCharacter(this.id);
    });
  }

  // metodo para poblar inputs con la informacion del apiLocal
  fetchCharacter(id: string) {
    this.character = this.dataServiceCharacter.getCharacter(id);
    this.form.patchValue({
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      type: this.character.type,
      image: this.character.image,
      gender: this.character.gender,
      created: this.character.created.split('T')[0],
      origin: {
        name: this.character.origin.name,
        url: this.character.origin.url,
      },
      location: {
        name: this.character.location.name,
        url: this.character.location.url,
      },
    });
  }

  //método para convertir jpg a blob
  imgInputChange(fileInputEvent: any): void {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      image.onload = (rs) => {
        let imgBase64Path = e.target.result;
        this.dataimage = imgBase64Path;
      };
    };
    reader.readAsDataURL(fileInputEvent.target.files[0]);
  }

  //método para limpiar campo imagen
  clean(): void {
    this.dataimage = '';
  }

  //método para actualizar apilocal y volver a la pantalla de personajes
  updateCharacter(id: string): void {
    let updateForm = this.form.value,
    index = { id: id };
    let updateCharacter = Object.assign(updateForm, index);

    Swal.fire({
      title: 'Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!!', '', 'success')
        this.dataServiceCharacter.updateCharacter(this.id, updateCharacter);
        this.router.navigate(['/dashboard/personajes']);
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guadados', '', 'info')
      }
    })
  }
}

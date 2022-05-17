import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataCharacterService } from '../../../services/data-character.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  dataimage:any = '';
  date: string = '';
  statusCharacter;
  genderCharacter;


  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'Choose File';

  constructor(
    private formBuilder: FormBuilder,
    private dataServiceCharacter: DataCharacterService,
    private router: Router,

  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      species: ['', Validators.required],
      type: [''],
      gender: ['', Validators.required],
      image: ['', Validators.required],
      created: [new Date, Validators.required],
      origin: this.formBuilder.group({
        name: ['', Validators.required],
        url:['', Validators.required],
      }),
      location: this.formBuilder.group({
        name: ['', Validators.required],
        url:['', Validators.required],
      })
    })
  }

  get name() {
    return this.form.get("origin")?.get('name');
  }

  get url() {
    return this.form.get("origin")?.get('url');
  }

  get namel() {
    return this.form.get("origin")?.get('name');
  }

  get urll() {
    return this.form.get("origin")?.get('url');
  }

  ngOnInit(): void {
    // carga select input
    this.statusCharacter = this.dataServiceCharacter.status
    this.genderCharacter = this.dataServiceCharacter.gender
  }

  create():void {
    this.form.value.created = this.form.value.created.toISOString();// convierte formato de fecha
    this.form.value.image = this.dataServiceCharacter.image// se adiciona imagen almacemada en servicio
    Swal.fire({
      title: 'Estas seguro de guardar?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
        this.dataServiceCharacter.createChararcter(this.form.value);
        this.router.navigate(['/dashboard/personajes']);
      } else if (result.isDenied) {
        Swal.fire('Datos no guardados', '', 'info')
      }
    })
  }

  //evento para leer el cambio de fecha
  dateChanged($event):void {
    this.date = $event.target.value.toISOString();
  }

  // metodo para convertir img a blob
  imgInputChange(fileInputEvent: any):void {
    let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(fileInputEvent.target.files[0]);
  }

  //método para limpiar input imagen
  clean():void{
    this.dataimage = '';
  }

}

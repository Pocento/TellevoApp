import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  correo:String ="";
  nombreCompleto:String ="";
  contraseña:String ="";

  usuario = new FormGroup({
    elcorreo : new FormControl(''),
    elnombreCompleto : new FormControl(''),
    lacontraseña : new FormControl ('')

  });
  lista_usuarios = new Array();
  cambiarDatos(){
    console.log(this.lista_usuarios);
  }
  grabar(){
    console.log(this.usuario.value);
  }
  ngOnInit() {
  }
}

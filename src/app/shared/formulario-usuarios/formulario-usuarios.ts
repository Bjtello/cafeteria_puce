import { Component, inject, signal } from '@angular/core';
import { UsuarioServicio } from '../../services/usuario-servicio';
import { Usuario } from '../../model/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuarios',
  imports: [FormsModule],
  templateUrl: './formulario-usuarios.html',
  styleUrl: './formulario-usuarios.css',
})
export class FormularioUsuarios {

  private usuarioService = inject(UsuarioServicio);

  listaUsuarios = signal<Usuario[]>([]);  //signal enviar senaes en tiempo real estan ingresando es para que actualice mas rapido el front

  nuevoUsuario : Usuario ={
    nombre: '',
    email:'',
    telefono: '',
    direccion: ''
  }

  registrarUsuario(){
    this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(res =>{
      this.listaUsuarios.set([res, ... this.listaUsuarios()]); // ... sprit se llama los puntos sirve apra apilar los datos 
      this.nuevoUsuario={nombre:'', email: '', telefono: '', direccion:''};
      console.log('Usuario Registrado');
    })
  }
}

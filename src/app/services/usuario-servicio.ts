import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  private http = inject(HttpClient);

  private API_USUARIOS = 'https://cafeteria-aeccd-default-rtdb.firebaseio.com/usuairos.json';

  //METODO POST // observable es perezoso va tener un metodo para que establezca la conexio
  postUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.API_USUARIOS , usuario);
  }
}

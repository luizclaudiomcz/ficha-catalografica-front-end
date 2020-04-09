import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Helena Pimentel"
    usuario.email = "helena.pimentel@gmail.com"

    return usuario
  }

  public listaUsuario():Usuario[]{
    return [
      {
        nome:"Helena Pimentel",
        email:"helena.pimentel@gmail.com"
      },
      {
        nome:"Maria",
        email:"maria.paiva@gmail.com"
      },
      {
        nome:"Laura",
        email:"laura@gmail.com"
      },
      {
        nome:"Jéssica",
        email:"jessica.paiva@gmail.com"
      },
    ]
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre = "";
  apellido = "";
  entradas: any[];

  constructor(){
    this.entradas =[
      {
        titulo: "Python, cada día más presente"
      },
      {
        titulo: "JAVA, presente en más de 20 años"
      },
      {
        titulo: "JavaScript, cada vez más funcional"
      }
    ];
  }

  registrar_usuario(){
    this.mensaje = "Usuario registrado exitosamente";
    this.registrado = true;
  }
}

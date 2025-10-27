import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { EventosComponent } from "./eventos/eventos.component";
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventosComponent, PalestrantesComponent, HttpClientModule, CommonModule, NavComponent, CollapseModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProEventos-App');
}




              import { Component, OnInit } from '@angular/core';
              import { CommonModule } from '@angular/common';
              import { HttpClient } from '@angular/common/http';
              import { CollapseDirective } from "ngx-bootstrap/collapse";
              import { FormsModule } from '@angular/forms';
              interface Evento {

                      eventoId: number;

                      local: string;

                      dataEvento: string;

                      tema: string;

                      qtdPessoas: number;

                      lote: string;

                      imagemURL: string;

                      opcoes: string | null;

              }
              @Component({
                selector: 'app-eventos',
                standalone: true,
                imports: [CommonModule, FormsModule],
                templateUrl: './eventos.component.html',
                styleUrls: ['./eventos.component.scss']
              })
              export class EventosComponent implements OnInit {

                public eventos: Evento[] = [];
                public eventosFiltrados: Evento[] = [];
                      larguraImagem: number = 150;
                      margemImagem: number = 2;
                      exibirImagem: boolean = true;
                    private _filtroLista: string = '';

                    public get filtroLista(): string {
                      return this._filtroLista;

                      }




                    public filtrarEventos (filtrarPor: string): any {
                      filtrarPor = filtrarPor.toLowerCase();
                      console.log(filtrarPor);
                      console.log(this.eventos);
                      let eventosFiltrados =
                      this.eventos.filter(
                        e => e.tema.toLowerCase().includes(filtrarPor) ||
                        e.local.toLowerCase().includes(filtrarPor)
                      );
                      console.log(eventosFiltrados);

                      if (filtrarPor === '') {
                        return this.eventos;}
                      return eventosFiltrados;
                    }

                    public set filtroLista(value: string) {
                      this._filtroLista = value;
                      this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
                    }
                  //public set filtroLista(value: string) {
                    //this._filtroLista = value;
                    //this.eventos = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;


                    //O problema é que o método filtrarEventos() não retorna nada (void), mas você está tentando atribuir o resultado dele a this.eventos.

                constructor(private http: HttpClient) { }

                ngOnInit(): void {
                  this.getEventos();
                }

                alterarImagem(): void {
                  this.exibirImagem = !this.exibirImagem;
                }

                public getEventos(): void{

                    this.http.get<Evento[]>('https://localhost:5001/api/eventos').subscribe(
                    (response) => {this.eventos = response; this.eventosFiltrados = response;},
                    error => console.log(error)
                );

                }
              }

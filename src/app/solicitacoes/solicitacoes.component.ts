import { Component, OnInit } from '@angular/core';
import { SolicitacoesService } from '../solicitacoes.service';
import { Solicitacao } from 'src/domain/solicitacao';
import {SelectItem } from 'primeng/api';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})

export class SolicitacoesComponent implements OnInit {
  
  solicitacoes:Solicitacao[]

  cols:any[];

  unidades: SelectItem[];

  constructor(private solicitacoesService:SolicitacoesService) { }

  ngOnInit() {

    this.solicitacoesService.getSolicitacoes().subscribe(
      response => {
        this.solicitacoes = response
      }
    )

    this.unidades = [
      { label: 'Centro de Educação', value: 'Centro de Educação' },
      { label: 'Instituto de Computação', value: 'Instituto de Computação' },
      { label: 'Instituto das Brincadeiras', value: 'Instituto das Brincadeiras' }
   ];

    this.cols = [
      { field: 'email', header: 'Email do Solicitante' },
      { field: 'nome', header: 'Nome do Solicitante' },
      { field: 'titulo', header: 'Título da Obra' },
      { field: 'unidade', header: 'Unidade' },
      { field: 'campus', header: 'Campus' },
      { field: 'curso', header: 'Curso' }
    ];

  }

  public confirmar(){
    alert("Código MARC 21 copiado com sucesso!\n\nCole o conteúdo no Pergamum para finalizar o cadastro.")
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacoesComponent } from './solicitacoes.component';
import { SolicitacoesRoutingModule } from './solicitacoes.routing.module';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [SolicitacoesComponent],
  imports: [
    CommonModule,
    SolicitacoesRoutingModule,
    TableModule,
    MultiSelectModule
  ]
})
export class SolicitacoesModule { }


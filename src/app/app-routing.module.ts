import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren:'./home/home.module#HomeModule'
  },
  { 
    path: 'usuario',
    loadChildren:'./usuario/usuario.module#UsuarioModule'
  },
  { 
    path: 'solicitacoes',
    loadChildren:'./solicitacoes/solicitacoes.module#SolicitacoesModule'
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

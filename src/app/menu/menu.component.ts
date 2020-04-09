import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items:MenuItem[]

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [{
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink:'home'
        },
        ]
      },
      {
        label: 'Usuários',
        icon: 'pi pi-fw pi-user',
        routerLink:'usuario'
      },
      {
        label: 'Solicitações de Ficha',
        icon: 'pi pi-fw pi-list',
        routerLink:'solicitacoes'
      }

    ];

  }


}

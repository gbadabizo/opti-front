import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Tableau de bord',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }
}

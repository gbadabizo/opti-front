import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  value: string | undefined;

  value1: number = 42723;

  value2: number = 58151;

  value3: number = 2351.35;

  value4: number = 50;

  ngOnInit() {}
}

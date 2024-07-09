import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideComponent } from './layout/aside/aside.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutModule,
    NavComponent,
    HeaderComponent,
    AsideComponent,
    BreadcrumbComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'opti-front';
}

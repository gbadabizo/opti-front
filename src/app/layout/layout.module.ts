import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, NavComponent, PrimengModule],
})
export class LayoutModule {}

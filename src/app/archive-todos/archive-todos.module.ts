import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArchiveTodosPage } from './archive-todos.page';

const routes: Routes = [
  {
    path: '',
    component: ArchiveTodosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArchiveTodosPage]
})
export class ArchiveTodosPageModule {}

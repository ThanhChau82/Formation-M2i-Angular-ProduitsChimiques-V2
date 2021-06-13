import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  {path : 'list', component : ListComponent},
  {path : 'edit/:id', component : EditComponent},
  {path : 'modify/:id', component : ModifyComponent},
  {path : 'add', component : AddComponent},
  {path : '', redirectTo : 'list', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

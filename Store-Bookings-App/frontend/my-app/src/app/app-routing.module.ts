import { UpdateTableComponent } from './components/update-table/update-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: 'books', component:FormComponent},
  {path: 'table', component:TableComponent },
  {path: 'table/:id', component:UpdateTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

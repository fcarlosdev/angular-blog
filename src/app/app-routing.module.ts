import { PostListComponent } from './components/post-list/post-list.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'sign-up', component:AuthorFormComponent},
  {path: 'posts', component:PostListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

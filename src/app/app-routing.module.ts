import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactCreateComponent } from './pages/contact-create/contact-create.component';
import { BulkUploadComponent } from './pages/bulk-upload/bulk-upload.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contacts', component: ContactsListComponent },
      { path: 'contacts/create', component: ContactCreateComponent },
      { path: 'contacts/bulk', component: BulkUploadComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

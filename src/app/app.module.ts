import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactCreateComponent } from './pages/contact-create/contact-create.component';
import { BulkUploadComponent } from './pages/bulk-upload/bulk-upload.component';
import { MainLayoutComponent } from './layout/main-layout.component'; // ✅ agregado
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactsListComponent,
    ContactCreateComponent,
    BulkUploadComponent,
    MainLayoutComponent // ✅ agregado aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

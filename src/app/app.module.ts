import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginEntrepriseComponent } from './login-entreprise/login-entreprise.component';
import { DashboardDEComponent } from './dashboard-de/dashboard-de.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardDsComponent } from './dashboard-ds/dashboard-ds.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginEntrepriseComponent,
    DashboardDEComponent,
    RegisterComponent,
    LoginComponent,
    DashboardDsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

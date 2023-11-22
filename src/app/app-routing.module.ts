import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginEntrepriseComponent } from './login-entreprise/login-entreprise.component';
import { DashboardDEComponent } from './dashboard-de/dashboard-de.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardDsComponent } from './dashboard-ds/dashboard-ds.component';


const routes: Routes = [
  {path: "acceuil", component : AcceuilComponent},
  {path: "loginEnt", component : LoginEntrepriseComponent},
  {path: "dashDE", component : DashboardDEComponent},
  {path: "dashDS", component : DashboardDsComponent},
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "", redirectTo: "acceuil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

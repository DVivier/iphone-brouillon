import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffectationDetailsComponent } from './container/affectation-details/affectation-details.component';
import { AffectationFormComponent } from './container/affectation-form/affectation-form.component';
import { AffectationListeComponent } from './container/affectation-liste/affectation-liste.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
   {path : '', redirectTo:'container', pathMatch: 'full'},
   {path : 'container', 
   component: ContainerComponent,
     children : [
      //  { path: '', component: ContactListComponent},
      //  { path: '', redirectTo: 'detail/1', pathMatch: 'full' },
       { path: 'liste', component: AffectationListeComponent},
       { path: 'creation', component: AffectationFormComponent},
       { path: 'details/id', component: AffectationDetailsComponent},
      //  { path: 'creation', component: ContactFormComponent},
     ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

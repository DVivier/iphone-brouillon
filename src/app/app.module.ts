import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AffectationListeComponent } from './container/affectation-liste/affectation-liste.component';
import { AffectationDetailsComponent } from './container/affectation-details/affectation-details.component';
import { AffectationFormComponent } from './container/affectation-form/affectation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidebarComponent,
    AffectationListeComponent,
    AffectationDetailsComponent,
    AffectationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentPageComponent,
    DirectivesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

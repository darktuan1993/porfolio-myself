import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponentComponent} from "./header-component/header-component.component";
import {IntroComponentComponent} from "./intro-component/intro-component.component";
import { CertComponentComponent } from './cert-component/cert-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    IntroComponentComponent,
    CertComponentComponent,
    ProjectComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TopContentComponent } from './top-content/top-content.component';
import { BottomContentComponent } from './bottom-content/bottom-content.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    TopContentComponent,
    BottomContentComponent,
    FooterComponent,
    MiddleContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
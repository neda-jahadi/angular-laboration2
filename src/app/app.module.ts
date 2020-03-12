import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsidanComponent } from './startsidan/startsidan.component';
import { SenasteArtiklarComponent } from './senaste-artiklar/senaste-artiklar.component';
import { AllaComponent } from './alla/alla.component';
import { LoggaInComponent } from './logga-in/logga-in.component';
import { AddArtikelComponent } from './add-artikel/add-artikel.component';
import { FormsModule } from '@angular/forms';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    StartsidanComponent,
    SenasteArtiklarComponent,
    AllaComponent,
    LoggaInComponent,
    AddArtikelComponent,
    DeleteArticleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviePhotoPipe } from './pipes/movie-photo.pipe';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MovieComponent,
    MoviePhotoPipe,
    MovieDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

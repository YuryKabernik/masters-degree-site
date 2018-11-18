import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EssayComponent } from './essay/essay.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EssayComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AboutMeComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'essay', component: EssayComponent },
      { path: 'presentation', component: PresentationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

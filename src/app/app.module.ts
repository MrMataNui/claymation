import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { InktoberComponent } from './inktober/inktober.component';
import { SculpturesComponent } from './sculptures/sculptures.component';

const appRoutes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'inktober', component: InktoberComponent },
  { path: 'sculptures', component: SculpturesComponent },
  { path: '', redirectTo: '/sculptures', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    VideosComponent,
    InktoberComponent,
    SculpturesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

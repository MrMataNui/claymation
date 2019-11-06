import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { InktoberComponent } from './inktober/inktober.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'inktober', component: InktoberComponent },
  { path: 'sculptures', component: SculpturesComponent },
  { path: '', redirectTo: '/sculptures', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(appRoutes)
   ],
   declarations: [
      AppComponent,
      VideosComponent,
      InktoberComponent,
      SculpturesComponent,
      PageNotFoundComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

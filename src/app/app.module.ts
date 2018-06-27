import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CourseCubeComponent } from './container/course-cube/course-cube.component';
import { LeftNavComponent } from './container/left-nav/left-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseCubeService } from './service/course-cube.service';
import { CardComponent } from './container/course-cube/card/card.component';

const appRoute: Routes=[
{
  path: 'course-cube',
  component: CourseCubeComponent
},
{
  path: '',
  redirectTo: '/course-cube',
  pathMatch: 'full'
},
{
  path: '**',
  component: CourseCubeComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    CourseCubeComponent,
    LeftNavComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule

  ],
  providers: [CourseCubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

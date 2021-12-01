import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Top navbar imports
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';

// Left navbar import 
import { ImagesComponent } from './components/images/images.component';

// Import for photographer login once sing-in is authenticated
import { PhotographerDashboardComponent } from './components/photographer-dashboard/photographer-dashboard.component';

// Import for authentification of photographer login
import { AuthguardService } from './services/authguard.service';
// Import to display the messages in the photographer dashboard
import { MessageComponent } from './components/message/message.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

const routes: Routes = [
{ path: '',   redirectTo: '/home', pathMatch: 'full' }, 
// This above section of code will make the landing page the home page
// The above line of code is for if there is no match route found then it will redirect back to the home route
{ path: 'home', component: HomeComponent},
{ path: 'contact-us', component: ContactUsComponent},
{ path: 'login', component: LoginComponent},

{ path: 'images', component: ImagesComponent},

{ path: 'photographer-dashboard', component: PhotographerDashboardComponent, canActivate: [AuthguardService]},

{ path: 'message', component: MessageComponent},
{ path: 'image-upload', component: ImageUploadComponent},

{ path: '**', component: HomeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

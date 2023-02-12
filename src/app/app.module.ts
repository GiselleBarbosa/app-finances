import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginModalComponent } from './core/components/login-modal/login-modal.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginModalComponent,
    /*

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
        */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

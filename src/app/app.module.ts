import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DateService } from './date.service';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { EditInfoComponent } from './edit-info/edit-info.component';

const routes: Routes = [
  {
    path: 'edit-info',
    component: EditInfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent, EditInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    UserModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: DateService,
      useClass: DateService
    }
    // DateService co the thay the object o tren bang cai nay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

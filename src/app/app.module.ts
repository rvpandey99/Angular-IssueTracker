import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { AddnewComponent } from './addnew/addnew.component';
import { UpdateComponent } from './update/update.component';
import { FilterComponent } from './filter/filter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LocaljsonService } from './localjson.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssuesComponent,
    AddnewComponent,
    UpdateComponent,
    FilterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LocaljsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

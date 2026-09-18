import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './components/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-dashboard/todo-list/todo-list.component';

import{MatIconModule} from '@angular/material/icon'
import{MatSnackBarModule} from '@angular/material/snack-bar'
import{MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';

import { StdDashboardComponent } from './components/std-dashboard/std-dashboard.component';
import { StdFormComponent } from './components/std-dashboard/std-form/std-form.component';
import { StdTableComponent } from './components/std-dashboard/std-table/std-table.component';
import { GetconfirmComponent } from './components/getconfirm/getconfirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './components/post-dashboard/post-form/post-form.component';
import { PostCardComponent } from './components/post-dashboard/post-card/post-card.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StdDashboardComponent,
    StdFormComponent,
    StdTableComponent,
    GetconfirmComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

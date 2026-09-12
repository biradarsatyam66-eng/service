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



@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StdDashboardComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

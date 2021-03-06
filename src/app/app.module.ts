import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { JoinPipe } from './join.pipe';
import { StudentsModule } from './modules/students/students.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    StudentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

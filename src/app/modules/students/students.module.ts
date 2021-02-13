import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsCompComponent } from './students-comp/students-comp.component';
import { SplitStrPipe } from './splitstr.pipe';



@NgModule({
  declarations: [StudentsCompComponent, SplitStrPipe],
  imports: [
    CommonModule
  ],
  exports: [StudentsCompComponent]
})
export class StudentsModule { }

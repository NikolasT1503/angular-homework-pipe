import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-comp',
  templateUrl: './students-comp.component.html',
  styleUrls: ['./students-comp.component.css']
})
export class StudentsCompComponent implements OnInit {

  @Input() student: string;
  @Input() ind: number;
  tdClass: object = {'td': true};

  constructor() { }

  ngOnInit(): void {
  }

}

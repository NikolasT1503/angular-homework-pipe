import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-comp',
  templateUrl: './students-comp.component.html',
  styleUrls: ['./students-comp.component.css']
})
export class StudentsCompComponent implements OnInit {

  students: string[] = ['Иванов Иван Иванович, 35, 5', 'Петров Петр Петрович, 28, 3', 'Сидоров Сидр Сидорович, 43, 4'];

  tdClass: object = {'td': true};

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-homework-pipe';

  students: string[] = ['Иванов Иван Иванович, 35, 5', 'Петров Петр Петрович, 28, 3', 'Сидоров Сидр Сидорович, 43, 4'];

  filterStr: string ='';
}

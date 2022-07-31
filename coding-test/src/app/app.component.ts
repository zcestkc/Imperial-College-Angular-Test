import { Component, OnInit } from '@angular/core';
import { Task } from './result.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tasks: Array<Task>= [];

  constructor(
    private readonly taskService: TaskService,
  ) {

  }
  title = 'coding-test';

  ngOnInit() {
    this.taskService.getTask().subscribe(result => {
        this.tasks = result
      }
    );
  }

  parser(txt: string) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(txt, 'text/html'); 
    return htmlDoc;
  }
}

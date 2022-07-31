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
  comment = "<p><em><strong>abc</strong></em></p>";

  constructor(
    private readonly taskService: TaskService,
  ) {

  }
  title = 'coding-test';

  ngOnInit() {
    this.taskService.getTask().subscribe(result => {
        this.tasks = result;
      }
    );
  }
}

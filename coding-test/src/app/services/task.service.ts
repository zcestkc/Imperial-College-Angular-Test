import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../result.model';

@Injectable()
export class TaskService {
    constructor(
        private readonly http: HttpClient,
    ) { }
    
    /**
     * Returns an array of tasks to be completed
     */
    getTask(): Observable<Array<Task>> {
        return this.http.get<Array<Task>>('https://demo.minder.care/interview/task');
    }
}

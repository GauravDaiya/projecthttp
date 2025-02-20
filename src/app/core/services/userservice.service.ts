import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private taskSubject = new BehaviorSubject([]);
  tasks$ = this.taskSubject.asObservable();

  

  constructor(
    private http: HttpClient,
    // private spinner: NgxSpinnerService
  ) {
    this.getAllTasks()
  }

  
  createTask(data: any) {
    return this.http.post('http://localhost:3000/tasks', data).subscribe(() => {
      this.getAllTasks(); 
    });
  }

  deleteTask(id:number) {
    return this.http.delete(`http://localhost:3000/tasks/${id}`).subscribe(() => {
      this.getAllTasks();
    })
  }

  
  getAllTasks() {
    
    this.http.get<any[]>('http://localhost:3000/tasks').subscribe((tasks:any) => {
      this.taskSubject.next(tasks); 
    });
  }

  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, delay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private taskSubject = new BehaviorSubject([]);
  tasks$ = this.taskSubject.asObservable();
  private baseUrl = environment.apiUrl;


  constructor(
    private http: HttpClient,
    // private spinner: NgxSpinnerService
  ) {
    this.getAllTasks()
  }


  createTask(data: any) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`); 
  }

  getAllTasks() {
    return this.http.get<any>(`${this.baseUrl}`);  
  }


}

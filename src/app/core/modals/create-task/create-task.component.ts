import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserserviceService } from '../../services/userservice.service';
import { taskStore } from '@layout';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  public userForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private userSrv: UserserviceService,
    private store: taskStore
  ) {
    this.userForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      assignTo: new FormControl('', [Validators.required]),
      createdAt: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }

  formatDate(date: any): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || ''; 
  }

  createTask() {
    const formattedDate = this.formatDate(this.userForm.get('createdAt')?.value);
    const UserFormRes = { ...this.userForm.value, createdAt: formattedDate };
    console.log(this.userForm.value);
    this.store.createTask(this.userForm.value)
    // this.userSrv.createTask(this.userForm.value);
    this.userForm.reset()
    this.closeModal()
  }

 

  closeModal(): void {
    this.dialogRef.close(); 
  }
}

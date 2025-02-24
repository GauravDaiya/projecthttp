import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../../../core/modals/create-task/create-task.component';
import { UserserviceService } from '../../../core/services/userservice.service';
import { AnimationOptions } from 'ngx-lottie';
import { LoaderserviceService } from '../../../core/services/loaderservice.service';
import { taskStore } from '@layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  options: AnimationOptions = {
    path: 'assets/loader.json',
    autoplay: true,
    loop: true
  };
  styles: Partial<CSSStyleDeclaration> = {
    width: '300px',
    height: '300px',
    borderRadius: '10px',
    margin: '0 auto',
    backgroundColor: '#ffffff98'
  };

  readonly dialog = inject(MatDialog);
  public AllTaskData!: any [];
  public LoaderStatus!: boolean;

  constructor(
    private userSrv: UserserviceService,
    private loaderSrv: LoaderserviceService,
    private store: taskStore
  ) {}

  ngOnInit(): void {
    // this.userSrv.tasks$.subscribe((res) => {
    //   this.AllTaskData = res
    // })
    this.store.fetchAllTask();
    this.store.tasks$.subscribe((res) => {
      console.log(res)
      this.AllTaskData = res
    })
    this.loaderSrv.loaderStatus$.subscribe((res) => {
      this.LoaderStatus = res;
    })
  }

  DeleteTask(id:number) {
    this.store.DeleteTask(id);
    // this.userSrv.deleteTask(id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '800px',
      maxWidth: '2000px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

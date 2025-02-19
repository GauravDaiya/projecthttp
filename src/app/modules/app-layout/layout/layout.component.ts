import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../../../core/modals/create-task/create-task.component';
import { UserserviceService } from '../../../core/services/userservice.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  public AllTaskData!: any [];
  public LoaderStatus!: boolean;

  constructor(
    private userSrv: UserserviceService
  ) {}

  ngOnInit(): void {
    this.userSrv.tasks$.subscribe((res) => {
      this.AllTaskData = res
    })
    // this.userSrv.loaderStatus$.subscribe((res) => {
    //   this.LoaderStatus = res;
    // })
  }

  DeleteTask(id:number) {
    this.userSrv.deleteTask(id);
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

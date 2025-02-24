import { trigger } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ComponentStore } from '@ngrx/component-store';
import { Observable, switchMap, tap } from "rxjs";
import { UserserviceService } from "../../../core/services/userservice.service";
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface taskState {
    tasks: Task[]
}

@Injectable()

export class taskStore extends ComponentStore<taskState> {

    constructor(private userSrv: UserserviceService,) {
        super({ tasks: [] });

    }

    readonly tasks$ = this.select((state) => state.tasks);

    readonly fetchAllTask = this.effect((trigger$: Observable<void>) =>
        trigger$.pipe(
            switchMap(() => this.userSrv.getAllTasks()),
            tap((tasks: any) => {
                console.log(tasks)
                return this.patchState({ tasks })
            })
        )
    )

    readonly DeleteTask = this.effect((taskId$: Observable<number>) =>
        taskId$.pipe(
            switchMap((id) =>
                this.userSrv.deleteTask(id).pipe(
                    tap(() => {
                        this.patchState((state:any) => ({
                            tasks: state.tasks.filter((task: any) => task.id !== id) // Remove the deleted task
                        }));
                    })
                )
            )
        )
    );

    readonly createTask = this.effect((task$: Observable<any>) =>
        task$.pipe(
            switchMap((newTask) =>
                this.userSrv.createTask(newTask).pipe(
                    tap((createdTask) => {
                        this.patchState((state:any) => ({
                            tasks: [...state.tasks, createdTask] // Add new task to state
                        }));
                    })
                )
            )
        )
    );

}
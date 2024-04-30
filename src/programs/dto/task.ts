// DTO for task.

export class TaskDto {
    id: string;
    todoCategoryId: string;
    todoPriorityId: string;

    taskName: string;
    taskSort: number;
    isCompleted: boolean;
    isArchived: boolean;

    syncDt: string;
    createdDt: string;
    dueDt: string;   
    /*
    A standard DTO for task. No special functions.
    A lot of shit in here.
    */
    constructor(id: string, taskName: string, 
        taskSort: number, createdDt: string, 
        dueDt: string, isCompleted: boolean, 
        isArchived: boolean, todoCategoryId: string, 
        todoPriorityId: string, syncDt: string) {

        this.id = id;
        this.taskName = taskName;
        this.taskSort = taskSort;
        this.syncDt = syncDt;
        this.createdDt = createdDt;
        this.dueDt = dueDt;
        this.isCompleted = isCompleted;
        this.isArchived = isArchived;
        this.todoCategoryId = todoCategoryId;
        this.todoPriorityId = todoPriorityId;

    }
}
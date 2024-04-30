// DTO for priority.

export class PriorityDto {
    id: string;
    appUserId: string;
    priorityName: string;
    prioritySort: number;
    syncDt: string;
    tag: string;
    /*
    A standard DTO for priority. No special functions.
    */
    constructor(id: string, appUserId: string, priorityName: string, prioritySort: number, syncDt: string, tag: string) {
        this.id = id;
        this.appUserId = appUserId;
        this.priorityName = priorityName;
        this.prioritySort = prioritySort;
        this.syncDt = syncDt;
        this.tag = tag;
    }
}
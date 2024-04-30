// DTO for category.

export class CategoryDto {
    id: string;
    categoryName: string;
    categorySort: number;
    syncDt: string;
    tag: string;
    /*
    A standard DTO for category. No special functions.
    */
    constructor(id: string, categoryName: string, categorySort: number, syncDt: string, tag: string) {
        this.id = id;
        this.categoryName = categoryName;
        this.categorySort = categorySort;
        this.syncDt = syncDt;
        this.tag = tag;
    }
}
import { Component } from '@angular/core';
import { Course } from './course';
import { EnrollmentService } from './enrollment.service';

@Component({
    selector: 'course-component',
    template: `
<div class="container-fluid">
  <h1>Add Course Form</h1>
  <form #courseForm="ngForm" (ngSubmit)="onSubmit()" novalidate>


    <div class="form-group">
      <label>Name:</label>
      <input type="text" #name="ngModel" [class.is-invalid]="name.invalid && name.touched" class="form-control" name="courseName" [(ngModel)]="courseModel.courseName">
      <small [class.d-none]="name.valid || name.untouched"> Course is required </small>
    </div>
    
    <div class="form-group">
      <label>Department:</label>
      <input type="text" #department="ngModel" [class.is-invalid]="department.invalid && department.touched" class="form-control" name="departmentName" [(ngModel)]="courseModel.department">
      <small [class.d-none]="department.valid || department.untouched"> Department is required </small> 
   </div>
    
    
    <button class="btn btn-primary" type="submit">Submit</button>

  </form>
</div>

`,
})
export class CourseComponent {

    courseModel = new Course("", "")
    private _url2: string = "http://localhost:62751/api/courses";
    public postStatus: any
    constructor(private _enrollmentService: EnrollmentService) { }
    onSubmit() {
        this._enrollmentService.newStudents(this._url2, this.courseModel)
            .subscribe((status) => { this.postStatus = status })

        console.log(this.courseModel)
        console.log(this.postStatus)
    }
}

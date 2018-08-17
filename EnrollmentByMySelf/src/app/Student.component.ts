import { Component } from '@angular/core';
import { Student } from './student';
import { EnrollmentService } from './enrollment.service';

@Component({
    selector: 'student-component',
    template: `
            <div class="container-fluid">
               <h1>Student Registration Form</h1>
               <form #studentForm="ngForm" (ngSubmit)="onSubmit()" novalidate>
                    

                   <div class="form-group">
                       <label>Name:</label>
                       <input type="text" #name="ngModel" [class.is-invalid]="name.invalid && name.touched" class="form-control" name="userName" [(ngModel)]="studentModel.studentName">
                       <small [class.d-none]="name.valid || name.untouched"> Name is required </small>
                   </div>
    
                   <div class="form-group">
                       <label>Email:</label>
                       <input type="email" class="form-control" name="userEmail" [(ngModel)]="studentModel.email">
                   </div>
    
                   <div class="form-group">
                       <label>Phone:</label>
                       <input type="tel" class="form-control" name="userPhone" [(ngModel)]="studentModel.phone">
                   </div>
                  
                    <div class="form-group">
                       <label>Age:</label>
                       <input type="text" class="form-control" name="studentAge" [(ngModel)]="studentModel.age">
                   </div>

    
                   <button  class="btn btn-primary" type="submit">Submit</button>

             </form>
        </div>

`,
})
export class StudentComponent {
    courseHasError = true
    studentModel = new Student("", "", "", 45)
    private _url: string = "http://localhost:62751/api/students";
    public postStatus: any;

    constructor(private _enrollmentServices: EnrollmentService) { }

    validateCourse(value: any) {
        if (value == 'default') {
            this.courseHasError = true
        } else {
            this.courseHasError = false
        }
    }
    onSubmit() {
        this._enrollmentServices.newStudents(this._url, this.studentModel)
            .subscribe((status) => {
                this.postStatus = status
            }

            )
        console.log(this.studentModel)
        console.log(this.postStatus)
    }
    
}

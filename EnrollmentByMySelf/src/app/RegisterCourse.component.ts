import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Register } from './registration';
import { EnrollmentService } from './enrollment.service';
import { Response } from '_debugger';
import { Student } from './student';
import { Course } from './course';

@Component({
    selector: 'student-component',
    template: `
            <div class="container-fluid">
               <h1>Student Registration Form</h1>
               <form #registerForm="ngForm" (ngSubmit)="onSubmit()" novalidate>
                     
                   <div class="form-group">
                       <select (blur)="validateStudent(student.value)" (change)="validateStudent(student.value)" class="custom-select" #student="ngModel" [class.is-invalid]="stuudentHasError && student.touched" name="selectedStudent" [(ngModel)]="studentModel.studentName">
                           <option value="">Choose Course</option>
                           <option *ngFor="let sttd of stdd">{{sttd.studentName}}</option>
                       </select>
                   </div>
                   

                   <div class="form-group">
                       <select (blur)="validateCourse(course.value)" (change)="validateCourse(course.value)" class="custom-select" #course="ngModel" [class.is-invalid]="courseHasError && course.touched" name="selectedCourse" [(ngModel)]="courseModel.courseName">
                           <option value="">Choose Course</option>
                           <option *ngFor="let Coursee of crs">{{Coursee.courseName}}</option>
                       </select>
                   </div>

                   <div class="form-group">
                       <label>Starting Date:</label>
                       <input type="text" #date="ngModel" class="form-control" name="startingDate" [(ngModel)]="registerModel.startingDate">
                   </div>
    
                   <button class="btn btn-primary" type="submit">Submit</button>

             </form>
        </div>

`,
})
export class RegisterCourseComponent {


    public stdd: any = []
    public crs: any = []
    public submitModel: any = []
    public studentModel = new Student("", "", "", 45)
    public courseModel = new Course("", "")
    courseHasError = true
    stuudentHasError = true
    public startingDate: any = this._datePipe.transform(new Date(), 'yyyy-MM-dd')
    registerModel = new Register(this.studentModel, this.courseModel, this.startingDate)
    private _url: string = "http://localhost:62751/api/students";
    private _url2: string = "http://localhost:62751/api/courses";
    private _url3: string = "http://localhost:62751/api/teachings";
    public postStatus: any
    public selectedStudentID: any
    public selectedCourseID: any

    constructor(private _enrollmentServices: EnrollmentService, private _datePipe: DatePipe) { }

    validateCourse(value: any): Course {
        for (var cors of this.crs) {
            if (cors.courseName == value) {
                this.courseModel.courseName = cors.courseName
                this.courseModel.department = cors.department
            } else {
                console.log(this.courseModel)
            }
        }
        return this.courseModel
    }
    validateStudent(value: any): Student {
        for (var stud of this.stdd) {
            if (stud.studentName == value) {
                this.studentModel.studentName = stud.studentName
                this.studentModel.email = stud.email
                this.studentModel.phone = stud.phone
                this.studentModel.age = stud.age
            } else {
                console.log(this.studentModel)
            }
        }
        return this.studentModel
    }

    ngOnInit() {
        this._enrollmentServices.getStudents(this._url)
            .subscribe((res: Response) => { this.stdd = res })
        this._enrollmentServices.getStudents(this._url2)
            .subscribe((res: Response) => { this.crs = res })
    }
    onSubmit() {
        this.studentModel = this.validateStudent(this.studentModel.studentName)
        this.courseModel = this.validateCourse(this.courseModel.courseName)
        this.startingDate = this.registerModel.startingDate
        //this.submitModel = [this.validateStudent(this.registerModel.student), this.validateCourse(this.registerModel.course), new Date()]
        this.registerModel = new Register(this.studentModel, this.courseModel, this.startingDate)
        this._enrollmentServices.newStudents(this._url3, this.registerModel)
            .subscribe((status) => {
                this.postStatus = status
            })
        console.log(this.stdd)
        console.log(this.crs)
        console.log(this.studentModel)
        console.log(this.courseModel)
        console.log(this.startingDate)
        console.log(this.registerModel)
    }
}

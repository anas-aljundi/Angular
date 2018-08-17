import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EnrollmentService } from './enrollment.service';
import { Student } from './student';

@Component({
    selector: 'app-students-details',
    template: `
    <h2 (click)="onChoose()">you selected the student : {{studentIID}}</h2>
    <span>{{studentModel1.studentName}}<span>-<span>{{studentModel1.email}}</span>-<span>{{studentModel1.phone}}</span>-<span>{{studentModel1.age}}</span>
    <p>
      <button (click)="showOverView()">OverView</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>
    <div>
    <button (click)="goBackToDepartments()">Back</button>
    </div>
    
  `,
    styles: []
})
export class StudentsDetailsComponent  {
    public Student1: any = []
    private _url: string = "http://localhost:62751/api/students";
    public studentModel = new Student("", "", "", 5)
    public studentModel1: Student
    
    

    public studentIID: any;
    constructor(private _enrollmentServices: EnrollmentService, private routeer: ActivatedRoute, private routeeer: Router) { }

    ngOnInit() {
        this.routeer.paramMap.subscribe((params: ParamMap) => {
            let id = parseInt(params.get('id'));
            this.studentIID = id;
        })
        this._enrollmentServices.getStudents(this._url)
            .subscribe(
                (res: Response) => {
                    this.Student1 = res
                    console.log(this.Student1);
                }
        )
        
    }

    public selectedStudent(id: number): Student {
        for (var sttd of this.Student1) {
            if (sttd.studentID == id) {
                this.studentModel.studentName = sttd.studentName
                this.studentModel.email = sttd.email
                this.studentModel.phone = sttd.phone
                this.studentModel.age = sttd.age
            } else {
                alert("Wrong Selection")
            }
        }
        console.log(this.studentModel)
        return this.studentModel
    }

    onChoose() {
        this.studentModel1 = this.selectedStudent(this.studentIID)
        console.log(this.studentModel1)
    }

    

    goPrevious() {
        let previousID = this.studentIID - 1;
        this.routeeer.navigate(['/studentDetails', previousID]);
    }

    goNext() {
        let nextID = this.studentIID + 1;
        this.routeeer.navigate(['/studentDetails', nextID]);
    }

    goBackToDepartments() {
        let selectedID = this.studentIID ? this.studentIID : null;
        //this.routeeer.navigate(['/departments', {id:selectedID}]);
        this.routeeer.navigate(['../', { id: selectedID }], { relativeTo: this.routeer });
    }

    //showOverView() {
    //    this.routeeer.navigate(['overview'], { relativeTo: this.routeer });
    //}

    //showContact() {
    //    this.routeeer.navigate(['contact'], { relativeTo: this.routeer });
    //}

}

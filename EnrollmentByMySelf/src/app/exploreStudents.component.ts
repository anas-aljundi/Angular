import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EnrollmentService } from './enrollment.service';

@Component({
    selector: 'exploreStudent-component',
    template: `
     <p>Exploring Sttudents</p>
     <h2>Welcome to Sttudents List with details</h2>
     <ul *ngFor="let std of Student">
         <li (click)="onSelect(std)"><span class="badge">{{std.studentID}}</span> {{std.studentName}}</li>
     </ul>
`,
})
export class ExploreStudentComponent {
    public Student: any = []
    private _url: string = "http://localhost:62751/api/students";
    constructor(private _enrollmentServices: EnrollmentService, private router: Router, private acrouter: ActivatedRoute) { }
    

    ngOnInit() {
        this._enrollmentServices.getStudents(this._url)
            .subscribe(
            (res: Response) => {
                this.Student = res
                console.log(this.Student);
            })
        //this.acrouter.paramMap.subscribe((params: ParamMap) => {
        //    let id = parseInt(params.get('id'));
        //    this.selectedID = id;
        //})
    }

    onSelect(std: any) {
        //this.router.navigate(['/departments', department.id]);
        this.router.navigate([std.studentID], { relativeTo: this.acrouter });
    }

}

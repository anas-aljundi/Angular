import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
           <div style="text-align:center">
               <h1>This is Enrollment Application</h1>
           </div>
           <nav>
                 <a routerLink="/addStudent" routerLinkActive="active" class="btn btn-primary">Add Student</a>
                 <a routerLink="/addCourse" routerLinkActive="active" class="btn btn-primary">Add Course</a>
                 <a routerLink="/registerCourse" routerLinkActive="active" class="btn btn-primary">Registration</a>
                 <a routerLink="/explorestudent" routerLinkActive="active" class="btn btn-primary">Explore Student</a>
           </nav>
           <router-outlet></router-outlet>
`,
})
export class AppComponent
{

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './Student.component';
import { CourseComponent } from './Course.component';
import { ExploreStudentComponent } from './exploreStudents.component';
import { RegisterCourseComponent } from './RegisterCourse.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StudentsDetailsComponent } from './students-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/explorestudent', pathMatch: 'full' },
    { path: 'explorestudent', component: ExploreStudentComponent },
    { path: 'explorestudent/:id', component: StudentsDetailsComponent},
    { path: 'addStudent', component: StudentComponent },
    { path: 'addCourse', component: CourseComponent },
    { path: 'registerCourse', component: RegisterCourseComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    StudentComponent,
    CourseComponent,
    PageNotFoundComponent,
    ExploreStudentComponent,
    RegisterCourseComponent,
    StudentsDetailsComponent
]

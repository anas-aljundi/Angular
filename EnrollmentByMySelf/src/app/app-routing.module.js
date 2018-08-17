"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Student_component_1 = require("./Student.component");
var Course_component_1 = require("./Course.component");
var exploreStudents_component_1 = require("./exploreStudents.component");
var RegisterCourse_component_1 = require("./RegisterCourse.component");
var page_not_found_component_1 = require("./page-not-found.component");
var students_details_component_1 = require("./students-details.component");
var routes = [
    { path: '', redirectTo: '/explorestudent', pathMatch: 'full' },
    { path: 'explorestudent', component: exploreStudents_component_1.ExploreStudentComponent },
    { path: 'explorestudent/:id', component: students_details_component_1.StudentsDetailsComponent },
    { path: 'addStudent', component: Student_component_1.StudentComponent },
    { path: 'addCourse', component: Course_component_1.CourseComponent },
    { path: 'registerCourse', component: RegisterCourse_component_1.RegisterCourseComponent },
    { path: "**", component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [
    Student_component_1.StudentComponent,
    Course_component_1.CourseComponent,
    page_not_found_component_1.PageNotFoundComponent,
    exploreStudents_component_1.ExploreStudentComponent,
    RegisterCourse_component_1.RegisterCourseComponent,
    students_details_component_1.StudentsDetailsComponent
];
//# sourceMappingURL=app-routing.module.js.map
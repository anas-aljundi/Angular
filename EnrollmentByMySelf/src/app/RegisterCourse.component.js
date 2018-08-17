"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var registration_1 = require("./registration");
var enrollment_service_1 = require("./enrollment.service");
var student_1 = require("./student");
var course_1 = require("./course");
var RegisterCourseComponent = /** @class */ (function () {
    function RegisterCourseComponent(_enrollmentServices, _datePipe) {
        this._enrollmentServices = _enrollmentServices;
        this._datePipe = _datePipe;
        this.stdd = [];
        this.crs = [];
        this.submitModel = [];
        this.studentModel = new student_1.Student("", "", "", 45);
        this.courseModel = new course_1.Course("", "");
        this.courseHasError = true;
        this.stuudentHasError = true;
        this.startingDate = this._datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.registerModel = new registration_1.Register(this.studentModel, this.courseModel, this.startingDate);
        this._url = "http://localhost:62751/api/students";
        this._url2 = "http://localhost:62751/api/courses";
        this._url3 = "http://localhost:62751/api/teachings";
    }
    RegisterCourseComponent.prototype.validateCourse = function (value) {
        for (var _i = 0, _a = this.crs; _i < _a.length; _i++) {
            var cors = _a[_i];
            if (cors.courseName == value) {
                this.courseModel.courseName = cors.courseName;
                this.courseModel.department = cors.department;
            }
            else {
                console.log(this.courseModel);
            }
        }
        return this.courseModel;
    };
    RegisterCourseComponent.prototype.validateStudent = function (value) {
        for (var _i = 0, _a = this.stdd; _i < _a.length; _i++) {
            var stud = _a[_i];
            if (stud.studentName == value) {
                this.studentModel.studentName = stud.studentName;
                this.studentModel.email = stud.email;
                this.studentModel.phone = stud.phone;
                this.studentModel.age = stud.age;
            }
            else {
                console.log(this.studentModel);
            }
        }
        return this.studentModel;
    };
    RegisterCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._enrollmentServices.getStudents(this._url)
            .subscribe(function (res) { _this.stdd = res; });
        this._enrollmentServices.getStudents(this._url2)
            .subscribe(function (res) { _this.crs = res; });
    };
    RegisterCourseComponent.prototype.onSubmit = function () {
        var _this = this;
        this.studentModel = this.validateStudent(this.studentModel.studentName);
        this.courseModel = this.validateCourse(this.courseModel.courseName);
        this.startingDate = this.registerModel.startingDate;
        //this.submitModel = [this.validateStudent(this.registerModel.student), this.validateCourse(this.registerModel.course), new Date()]
        this.registerModel = new registration_1.Register(this.studentModel, this.courseModel, this.startingDate);
        this._enrollmentServices.newStudents(this._url3, this.registerModel)
            .subscribe(function (status) {
            _this.postStatus = status;
        });
        console.log(this.stdd);
        console.log(this.crs);
        console.log(this.studentModel);
        console.log(this.courseModel);
        console.log(this.startingDate);
        console.log(this.registerModel);
    };
    RegisterCourseComponent = __decorate([
        core_1.Component({
            selector: 'student-component',
            template: "\n            <div class=\"container-fluid\">\n               <h1>Student Registration Form</h1>\n               <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                     \n                   <div class=\"form-group\">\n                       <select (blur)=\"validateStudent(student.value)\" (change)=\"validateStudent(student.value)\" class=\"custom-select\" #student=\"ngModel\" [class.is-invalid]=\"stuudentHasError && student.touched\" name=\"selectedStudent\" [(ngModel)]=\"studentModel.studentName\">\n                           <option value=\"\">Choose Course</option>\n                           <option *ngFor=\"let sttd of stdd\">{{sttd.studentName}}</option>\n                       </select>\n                   </div>\n                   \n\n                   <div class=\"form-group\">\n                       <select (blur)=\"validateCourse(course.value)\" (change)=\"validateCourse(course.value)\" class=\"custom-select\" #course=\"ngModel\" [class.is-invalid]=\"courseHasError && course.touched\" name=\"selectedCourse\" [(ngModel)]=\"courseModel.courseName\">\n                           <option value=\"\">Choose Course</option>\n                           <option *ngFor=\"let Coursee of crs\">{{Coursee.courseName}}</option>\n                       </select>\n                   </div>\n\n                   <div class=\"form-group\">\n                       <label>Starting Date:</label>\n                       <input type=\"text\" #date=\"ngModel\" class=\"form-control\" name=\"startingDate\" [(ngModel)]=\"registerModel.startingDate\">\n                   </div>\n    \n                   <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\n             </form>\n        </div>\n\n",
        }),
        __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService, common_1.DatePipe])
    ], RegisterCourseComponent);
    return RegisterCourseComponent;
}());
exports.RegisterCourseComponent = RegisterCourseComponent;
//# sourceMappingURL=RegisterCourse.component.js.map
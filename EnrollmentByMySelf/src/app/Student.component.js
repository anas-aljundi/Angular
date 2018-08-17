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
var student_1 = require("./student");
var enrollment_service_1 = require("./enrollment.service");
var StudentComponent = /** @class */ (function () {
    function StudentComponent(_enrollmentServices) {
        this._enrollmentServices = _enrollmentServices;
        this.courseHasError = true;
        this.studentModel = new student_1.Student("", "", "", 45);
        this._url = "http://localhost:62751/api/students";
    }
    StudentComponent.prototype.validateCourse = function (value) {
        if (value == 'default') {
            this.courseHasError = true;
        }
        else {
            this.courseHasError = false;
        }
    };
    StudentComponent.prototype.onSubmit = function () {
        var _this = this;
        this._enrollmentServices.newStudents(this._url, this.studentModel)
            .subscribe(function (status) {
            _this.postStatus = status;
        });
        console.log(this.studentModel);
        console.log(this.postStatus);
    };
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'student-component',
            template: "\n            <div class=\"container-fluid\">\n               <h1>Student Registration Form</h1>\n               <form #studentForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                    \n\n                   <div class=\"form-group\">\n                       <label>Name:</label>\n                       <input type=\"text\" #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"studentModel.studentName\">\n                       <small [class.d-none]=\"name.valid || name.untouched\"> Name is required </small>\n                   </div>\n    \n                   <div class=\"form-group\">\n                       <label>Email:</label>\n                       <input type=\"email\" class=\"form-control\" name=\"userEmail\" [(ngModel)]=\"studentModel.email\">\n                   </div>\n    \n                   <div class=\"form-group\">\n                       <label>Phone:</label>\n                       <input type=\"tel\" class=\"form-control\" name=\"userPhone\" [(ngModel)]=\"studentModel.phone\">\n                   </div>\n                  \n                    <div class=\"form-group\">\n                       <label>Age:</label>\n                       <input type=\"text\" class=\"form-control\" name=\"studentAge\" [(ngModel)]=\"studentModel.age\">\n                   </div>\n\n    \n                   <button  class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\n             </form>\n        </div>\n\n",
        }),
        __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService])
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=Student.component.js.map
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
var course_1 = require("./course");
var enrollment_service_1 = require("./enrollment.service");
var CourseComponent = /** @class */ (function () {
    function CourseComponent(_enrollmentService) {
        this._enrollmentService = _enrollmentService;
        this.courseModel = new course_1.Course("", "");
        this._url2 = "http://localhost:62751/api/courses";
    }
    CourseComponent.prototype.onSubmit = function () {
        var _this = this;
        this._enrollmentService.newStudents(this._url2, this.courseModel)
            .subscribe(function (status) { _this.postStatus = status; });
        console.log(this.courseModel);
        console.log(this.postStatus);
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course-component',
            template: "\n<div class=\"container-fluid\">\n  <h1>Add Course Form</h1>\n  <form #courseForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n\n    <div class=\"form-group\">\n      <label>Name:</label>\n      <input type=\"text\" #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" name=\"courseName\" [(ngModel)]=\"courseModel.courseName\">\n      <small [class.d-none]=\"name.valid || name.untouched\"> Course is required </small>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>Department:</label>\n      <input type=\"text\" #department=\"ngModel\" [class.is-invalid]=\"department.invalid && department.touched\" class=\"form-control\" name=\"departmentName\" [(ngModel)]=\"courseModel.department\">\n      <small [class.d-none]=\"department.valid || department.untouched\"> Department is required </small> \n   </div>\n    \n    \n    <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\n  </form>\n</div>\n\n",
        }),
        __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=Course.component.js.map
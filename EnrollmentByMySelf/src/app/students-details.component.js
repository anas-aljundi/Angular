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
var router_1 = require("@angular/router");
var enrollment_service_1 = require("./enrollment.service");
var student_1 = require("./student");
var StudentsDetailsComponent = /** @class */ (function () {
    function StudentsDetailsComponent(_enrollmentServices, routeer, routeeer) {
        this._enrollmentServices = _enrollmentServices;
        this.routeer = routeer;
        this.routeeer = routeeer;
        this.Student1 = [];
        this._url = "http://localhost:62751/api/students";
        this.studentModel = new student_1.Student("", "", "", 5);
    }
    StudentsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeer.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this.studentIID = id;
        });
        this._enrollmentServices.getStudents(this._url)
            .subscribe(function (res) {
            _this.Student1 = res;
            console.log(_this.Student1);
        });
    };
    StudentsDetailsComponent.prototype.selectedStudent = function (id) {
        for (var _i = 0, _a = this.Student1; _i < _a.length; _i++) {
            var sttd = _a[_i];
            if (sttd.studentID == id) {
                this.studentModel.studentName = sttd.studentName;
                this.studentModel.email = sttd.email;
                this.studentModel.phone = sttd.phone;
                this.studentModel.age = sttd.age;
            }
            else {
                alert("Wrong Selection");
            }
        }
        console.log(this.studentModel);
        return this.studentModel;
    };
    StudentsDetailsComponent.prototype.onChoose = function () {
        this.studentModel1 = this.selectedStudent(this.studentIID);
        console.log(this.studentModel1);
    };
    StudentsDetailsComponent.prototype.goPrevious = function () {
        var previousID = this.studentIID - 1;
        this.routeeer.navigate(['/studentDetails', previousID]);
    };
    StudentsDetailsComponent.prototype.goNext = function () {
        var nextID = this.studentIID + 1;
        this.routeeer.navigate(['/studentDetails', nextID]);
    };
    StudentsDetailsComponent.prototype.goBackToDepartments = function () {
        var selectedID = this.studentIID ? this.studentIID : null;
        //this.routeeer.navigate(['/departments', {id:selectedID}]);
        this.routeeer.navigate(['../', { id: selectedID }], { relativeTo: this.routeer });
    };
    StudentsDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-students-details',
            template: "\n    <h2 (click)=\"onChoose()\">you selected the student : {{studentIID}}</h2>\n    <span>{{studentModel1.studentName}}<span>-<span>{{studentModel1.email}}</span>-<span>{{studentModel1.phone}}</span>-<span>{{studentModel1.age}}</span>\n    <p>\n      <button (click)=\"showOverView()\">OverView</button>\n      <button (click)=\"showContact()\">Contact</button>\n    </p>\n    <p>\n    <button (click)=\"goPrevious()\">Previous</button>\n    <button (click)=\"goNext()\">Next</button>\n    </p>\n    <div>\n    <button (click)=\"goBackToDepartments()\">Back</button>\n    </div>\n    \n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService, router_1.ActivatedRoute, router_1.Router])
    ], StudentsDetailsComponent);
    return StudentsDetailsComponent;
}());
exports.StudentsDetailsComponent = StudentsDetailsComponent;
//# sourceMappingURL=students-details.component.js.map
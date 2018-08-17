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
var ExploreStudentComponent = /** @class */ (function () {
    function ExploreStudentComponent(_enrollmentServices, router, acrouter) {
        this._enrollmentServices = _enrollmentServices;
        this.router = router;
        this.acrouter = acrouter;
        this.Student = [];
        this._url = "http://localhost:62751/api/students";
    }
    ExploreStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._enrollmentServices.getStudents(this._url)
            .subscribe(function (res) {
            _this.Student = res;
            console.log(_this.Student);
        });
        //this.acrouter.paramMap.subscribe((params: ParamMap) => {
        //    let id = parseInt(params.get('id'));
        //    this.selectedID = id;
        //})
    };
    ExploreStudentComponent.prototype.onSelect = function (std) {
        //this.router.navigate(['/departments', department.id]);
        this.router.navigate([std.studentID], { relativeTo: this.acrouter });
    };
    ExploreStudentComponent = __decorate([
        core_1.Component({
            selector: 'exploreStudent-component',
            template: "\n     <p>Exploring Sttudents</p>\n     <h2>Welcome to Sttudents List with details</h2>\n     <ul *ngFor=\"let std of Student\">\n         <li (click)=\"onSelect(std)\"><span class=\"badge\">{{std.studentID}}</span> {{std.studentName}}</li>\n     </ul>\n",
        }),
        __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService, router_1.Router, router_1.ActivatedRoute])
    ], ExploreStudentComponent);
    return ExploreStudentComponent;
}());
exports.ExploreStudentComponent = ExploreStudentComponent;
//# sourceMappingURL=exploreStudents.component.js.map
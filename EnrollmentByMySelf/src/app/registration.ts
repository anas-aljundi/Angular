import { Student } from "./student";
import { Course } from "./course";

export class Register {
    constructor(
        public student: Student,
        public course: Course,
        public startingDate: Date
    ) { }
}
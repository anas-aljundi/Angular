using EnrollmentByMySelf.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EnrollmentByMySelf.Controllers.Api
{
    public class StudentsController : ApiController
    {
        private ApplicationDbContext _context;

        public StudentsController()
        {
            _context = new ApplicationDbContext();
        }

        //GET /api /students
        public IEnumerable<Student> GetStudents()
        {
            return _context.Students.ToList();
        }

        //Get /api /student /id
        public Student GetStudent(int id)
        {
            var student = _context.Students.SingleOrDefault(c => c.studentID == id);
            if (student == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return student;
        }

        //POST /api /students
        [HttpPost]
        public Student CreatStudent(Student student)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            _context.Students.Add(student);
            _context.SaveChanges();
            return student;
        }

        //PUT /api /student /id
        [HttpPut]
        public void UpdateStudent (int id, Student student)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            var studentInDB = _context.Students.SingleOrDefault(c => c.studentID == id);
            if (studentInDB == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            studentInDB.studentName = student.studentName;
            studentInDB.phone = student.phone;
            studentInDB.email = student.email;
            studentInDB.age = student.age;
            _context.SaveChanges();
        }

        //DELET /api /student /id
        [HttpDelete]
        public void DeleteStudent (int id)
        {
            var student = _context.Students.SingleOrDefault(c => c.studentID == id);
            if (student == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            _context.Students.Remove(student);
            _context.SaveChanges();
        }
    }
}

using EnrollmentByMySelf.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EnrollmentByMySelf.Controllers.Api
{
    public class CoursesController : ApiController
    {
        private ApplicationDbContext _context;

        public CoursesController()
        {
            _context = new ApplicationDbContext();
        }

        //GET /api /course
        public IEnumerable<Course> GetCourses()
        {
            return _context.Courses.ToList();
        }

        //Get /api /course /id
        public Course GetCourse(int id)
        {
            var course = _context.Courses.SingleOrDefault(c => c.courseID == id);
            if (course == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return course;
        }

        //POST /api /course
        [HttpPost]
        public Course CreatCourse(Course course)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            _context.Courses.Add(course);
            _context.SaveChanges();
            return course;
        }

        //PUT /api /courses /id
        [HttpPut]
        public void UpdateCourse(int id, Course course)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            var courseInDB = _context.Courses.SingleOrDefault(c => c.courseID == id);
            if (courseInDB == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            courseInDB.courseName = course.courseName;
            courseInDB.department = course.department;
            _context.SaveChanges();
        }

        //DELET /api /course /id
        [HttpDelete]
        public void DeleteCourse(int id)
        {
            var course = _context.Courses.SingleOrDefault(c => c.courseID == id);
            if (course == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            _context.Courses.Remove(course);
            _context.SaveChanges();
        }
    }
}

using EnrollmentByMySelf.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EnrollmentByMySelf.Controllers.Api
{
    public class TeachingsController : ApiController
    {
        private ApplicationDbContext _context;

        public TeachingsController()
        {
            _context = new ApplicationDbContext();
        }

        //GET /api /teachings
        public IEnumerable<Teaching> GetTeachings()
        {
            return _context.Teachings.ToList();
        }

        //POST /api /teachings
        [HttpPost]
        public IHttpActionResult CreateNewTeachings(Teaching newTeaching)
        {
            //var std = _context.Students.Single(c => c.studentID == newTeaching.student.studentID);

            var std = _context.Students.SingleOrDefault(c => c.studentName == newTeaching.student.studentName);
            if (std == null)
                return NotFound();

            // var crs = _context.Courses.Single(c => c.courseID == newTeaching.course.courseID);

            var crs = _context.Courses.SingleOrDefault(c => c.courseName == newTeaching.course.courseName);
            if (crs == null)
                return NotFound();

            var sDate = newTeaching.startingDate;


            var teaching = new Teaching
            {
                student = std,
                course = crs,
                startingDate = sDate
            };
                _context.Teachings.Add(teaching);
            
            _context.SaveChanges();
            return Ok();
        }
    }
}

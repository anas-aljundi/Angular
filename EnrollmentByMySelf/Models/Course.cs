using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EnrollmentByMySelf.Models
{
    public class Course
    {
        public int courseID { get; set; }

        [Required(ErrorMessage = "please Enter course's name")]
        [StringLength(255)]
        [Display(Name = "Course")]
        public string courseName { get; set; }

        public string department { get; set; }
    }
}
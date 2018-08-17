using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EnrollmentByMySelf.Models
{
    public class Student
    {
        public int studentID { get; set; }

        [Required(ErrorMessage = "please Enter student's name")]
        [StringLength(255)]
        [Display(Name = "Name")]
        public string studentName { get; set; }

        public string email { get; set; }

        public string phone { get; set; }

        public int age { get; set; }
    }
}
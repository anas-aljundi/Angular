using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EnrollmentByMySelf.Models
{
    public class Teaching
    {
        public int teachingID { get; set; }

        [Required]
        public Student student { get; set; }

        [Required]
        public Course course { get; set; }

        public DateTime startingDate { get; set; }
    }
}
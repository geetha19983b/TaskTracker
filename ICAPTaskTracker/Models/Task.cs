using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.ComponentModel.DataAnnotations.Schema;
namespace ICAPTaskTracker.Models
{
    public class Task
    {
         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskId { get; set; }
         public string  TaskName { get; set; }
         public string Status { get; set; }

         public string Comments { get; set; }
    }
}
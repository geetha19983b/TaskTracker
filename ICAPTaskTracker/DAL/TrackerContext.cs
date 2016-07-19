using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using ICAPTaskTracker.Models;
namespace ICAPTaskTracker.DAL
{
    public class TrackerContext : DbContext
    {
        public TrackerContext()
            : base("TrackerContext")
        {
           // Database.SetInitializer(new TrackerInitializer());
        }

        public DbSet<Task> Tasks { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
namespace ICAPTaskTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserAdd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Task", "Users", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Task", "Users");
        }
    }
}

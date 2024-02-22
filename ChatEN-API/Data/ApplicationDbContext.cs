using ChatEN.Models.Entity;
using Microsoft.EntityFrameworkCore;

namespace ChatEN.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<account> account { get; set; }
        public DbSet<chatbot> chatbot { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<favourite> favourite { get; set; }
        public DbSet<MyCourse> MyCourse { get; set; }
        public DbSet<MyFlip> MyFlip { get; set; }
        public DbSet<vocabulary> vocabulary { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //PK
            modelBuilder.Entity<account>()
                .HasKey(a => a.Personid);
            modelBuilder.Entity<vocabulary>()
              .HasKey(a => a.WordID);
            modelBuilder.Entity<chatbot>()
                .HasKey(b => b.inde);
            modelBuilder.Entity<favourite>()
                .HasKey(b => new { b.WordID, b.own });
            modelBuilder.Entity<MyCourse>()
                .HasKey(b => new { b.IDCourse, b.IDPerson });
            modelBuilder.Entity<MyFlip>()
                .HasKey(b => b.ID);

            //FK

            modelBuilder.Entity<account>()
                .HasMany(b => b.chatbot)
                .WithOne(a => a.account)
                .HasForeignKey(c => c.own);
            modelBuilder.Entity<account>()
                .HasMany(a => a.myCourse)
                .WithOne(b => b.account)
                .HasForeignKey(c => c.IDPerson);
            modelBuilder.Entity<account>()
                .HasMany(a => a.myFlip)
                .WithOne(b => b.account)
                .HasForeignKey(c => c.PersonID);
            modelBuilder.Entity<account>()
                .HasMany(a => a.favourite)
                .WithOne(b => b.account)
                .HasForeignKey(c => c.own);
            modelBuilder.Entity<vocabulary>()
                .HasMany(a => a.favourite)
                .WithOne(b => b.vocabulary)
                .HasForeignKey(c => c.WordID);
            modelBuilder.Entity<Course>()
                .HasMany(a => a.MyCourses)
                .WithOne(b => b.course)
                .HasForeignKey(c => c.IDCourse);
        }
    }
}

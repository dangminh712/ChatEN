using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatEN.Models.Entity
{
    public class Course
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public string Price { get; set; }
        public string Discount { get; set; }
        public string Rating { get; set; }
        public string? Description { get; set; }
        public string? Author {  get; set; }
        public virtual ICollection<MyCourse> MyCourses { get; set; }
    }
}

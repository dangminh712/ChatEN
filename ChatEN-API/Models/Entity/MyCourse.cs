using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatEN.Models.Entity
{
    public class MyCourse
    {
        [Key]
        [Column(Order =0)]
        public int IDCourse { get; set; }
        public Course course { get; set; }

        [Key]
        [Column(Order =1)]
        public int IDPerson { get; set; }
        public account account { get; set; }

        public DateTime? DateBuy { get; set; }
        public float Price { get; set; }
    }
}

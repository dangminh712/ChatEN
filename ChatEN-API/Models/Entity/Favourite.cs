
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatEN.Models.Entity
{
    public class favourite
    {
        [Key]
        [Column(Order =0)]
        public int own { get; set; }
        public account account { get; set; }
        [Key]
        [Column(Order =1)]
        public int WordID { get; set; }
        public vocabulary vocabulary { get; set; }

    }
}

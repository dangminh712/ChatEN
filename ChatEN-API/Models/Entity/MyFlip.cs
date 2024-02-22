using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatEN.Models.Entity
{
    public class MyFlip
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int PersonID { get; set; }
        public account account { get; set; }
        public string word { get; set; }
        public string mean { get; set; }
    }
}

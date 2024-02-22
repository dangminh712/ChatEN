using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatEN.Models.Entity
{
    public class vocabulary
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int WordID { get; set; }
        public string Word { get; set; }
        public string mean { get; set; }
        public virtual ICollection<favourite> favourite { get; set; }
    }
}

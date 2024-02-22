using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ChatEN.Models.Entity
{
    public class account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Personid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public bool Islock { get; set; } = false;
        public string Role { get; set; }
        public virtual ICollection<chatbot>? chatbot { get; set; }
        public virtual ICollection<favourite>? favourite { get; set; }
        public virtual ICollection<MyFlip>? myFlip { get; set; }
        public virtual ICollection<MyCourse>? myCourse { get; set; }
    }
}

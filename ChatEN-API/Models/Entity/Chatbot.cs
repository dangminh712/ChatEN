using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatEN.Models.Entity
{
    public class chatbot
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int inde { get; set; }
        public string userchat {  get; set; }
        public string botchat { get; set; }
        public int? own {  get; set; }

        public account account { get; set; }
    }
}

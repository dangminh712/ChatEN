using ChatEN.Models.Entity;

namespace ChatEN.Models.Domain
{
    public class accountDomain
    {
        public int Personid { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public bool Islock { get; set; } = false;

    }
}

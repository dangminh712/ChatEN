using ChatEN.Models.Entity;


namespace ChatEN.Models.Domain
{
    public class SaleDomain
    {
        public int IDCourse { get; set; }
        public int IDPerson { get; set; }
        public DateTime? DateBuy { get; set; }
        public float Price { get; set; }
        public DetailCourse? course { get; set; }
    }
}

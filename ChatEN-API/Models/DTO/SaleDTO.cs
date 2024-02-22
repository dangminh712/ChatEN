using ChatEN.Models.Entity;


namespace ChatEN.Models.DTO
{
    public class SaleDTO
    {
        public int IDCourse { get; set; }
        public int IDPerson { get; set; }
         public DateTime? DateBuy { get; set; }
        public float Price { get; set; }
    }
    
}

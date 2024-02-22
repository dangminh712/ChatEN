namespace ChatEN.Models.Domain
{
    public class CourseDomain
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public string Price { get; set; }
        public string Discount { get; set; }
        public string Rating { get; set; }
    }
    public class DetailCourse {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public string Price { get; set; }
        public string Discount { get; set; }
        public string Rating { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
    }
}

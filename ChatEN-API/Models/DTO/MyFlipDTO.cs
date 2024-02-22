namespace ChatEN.Models.DTO
{
    public class MyFlipDTO
    {
        public int ID { get; set; }
        public int PersonID { get; set; }
        public string word { get; set; }
        public string mean { get; set; }
    }
    public class MyFlipList
    {
        public int WordID { get; set; }
        public string Word { get; set; }
        public string mean { get; set; }
    }
}

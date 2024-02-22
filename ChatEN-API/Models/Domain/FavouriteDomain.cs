using ChatEN.Models.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using ChatEN.Models.DTO;

namespace ChatEN.Models.Domain
{
    public class FavouriteDomain
    {
        public int own { get; set; }
        public int WordID { get; set; }
        public wordDTO Vocabulary { get; set; }
    }
    public class FavouriteVocabularyDomain
    {
        public wordDTO Vocabulary { get; set; }
    }
}

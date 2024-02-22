using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.FavouriteServices
{
    public interface IFavouriteServices : IService<Models.Entity.favourite>
    {
        public Task<List<Vocabulary>> GetWordInFavourite(int own);
        public Task<bool> AddWordToFavourite(favouriteDTO value);
        public Task<bool> RemoveWordToFavourite(favouriteDTO value);
    }
}

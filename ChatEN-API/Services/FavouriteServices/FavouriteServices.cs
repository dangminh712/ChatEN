using AutoMapper;
using ChatEN.Data;
using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.FavouriteServices
{
    public class FavouriteServices : Service<Models.Entity.favourite>, IFavouriteServices
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext applicationDbContext;
        public FavouriteServices(IMapper mapper, ApplicationDbContext context) : base(context)
        {
            _mapper = mapper;
            applicationDbContext = context;
        }

        public async Task<bool> AddWordToFavourite(favouriteDTO value)
        {
            try
            {
                var temp = await GetAsync(x=>x.own==value.own &&x.WordID==value.WordID); 
                if (temp != null) { return true; }
                await CreateAsync(_mapper.Map<Models.Entity.favourite>(value));
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<List<Vocabulary>> GetWordInFavourite(int own)
        {
            var getFavourite = await GetAllAsync(x => x.own == own, true, "vocabulary");
            return _mapper.Map<List<Vocabulary>>(getFavourite);
        }

        public async Task<bool> RemoveWordToFavourite(favouriteDTO value)
        {
            try
            {
                var temp = await GetAsync(x => x.own == value.own && x.WordID == value.WordID);
                if (temp == null) { return true; }
                await RemoveAsync(temp);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

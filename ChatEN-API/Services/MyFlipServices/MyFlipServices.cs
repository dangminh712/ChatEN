using AutoMapper;
using ChatEN.Data;
using ChatEN.Models.Entity;
using ChatEN.Models.DTO;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.MyFlipServices
{
    public class MyFlipServices : Service<Models.Entity.MyFlip> , IMyFlipServices
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext applicationDbContext;
        public MyFlipServices(ApplicationDbContext context, IMapper mapper) : base(context)
        {
            _mapper= mapper ;
            applicationDbContext = context;
        }

        public async Task<bool> CreateFlipAsync(MyFlipDTO data)
        {
            try
            {
            await CreateAsync(_mapper.Map<MyFlip>(data));
            return true;
            }catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> DeleteFlipAsync(int id)
        {
            try
            {
                var element = await GetAsync(x => x.ID == id);
                await RemoveAsync(element);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<List<MyFlipList>> GetFlipAsync(int id)
        {
            try
            {
                var Temp = await GetAllAsync(x=>x.PersonID==id);
                return _mapper.Map<List<MyFlipList>>(Temp);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

using ChatEN.Models.DTO;
using ChatEN.Models.Entity;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.MyFlipServices
{
    public interface IMyFlipServices : IService<MyFlip>
    {
        public Task<List<Models.DTO.MyFlipList>> GetFlipAsync(int id);
        public Task<bool> DeleteFlipAsync(int id);
        public Task<bool> CreateFlipAsync(MyFlipDTO data);
    }
}

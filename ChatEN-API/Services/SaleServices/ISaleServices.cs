using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.SaleServices
{
    public interface ISaleServices : IService<Models.Entity.MyCourse>
    {
        public Task<bool> buyCourse(SaleDTO saleform);
        public Task<List<SaleDomain>> getAllCourse();
        public Task<List<SaleDomain>> getPurchaseCourse(int owner);
    }
}

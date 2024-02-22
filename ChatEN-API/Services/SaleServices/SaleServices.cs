using AutoMapper;
using ChatEN.Data;
using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Models.Entity;
using ChatEN.Services.GenericServices;
using Newtonsoft.Json.Linq;

namespace ChatEN.Services.SaleServices
{
    public class SaleServices : Service<Models.Entity.MyCourse>, ISaleServices
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext applicationDbContext;
        public SaleServices(ApplicationDbContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
          applicationDbContext = context;

        }

        public async Task<bool> buyCourse(SaleDTO saleform)
        {
            try
            {
                MyCourse sale = new MyCourse
                {
                    IDCourse = saleform.IDCourse,
                    IDPerson = saleform.IDPerson,
                    DateBuy = saleform.DateBuy,
                    Price = saleform.Price,
                };
                await CreateAsync(sale);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }


        }

        public async Task<List<SaleDomain>> getAllCourse()
        {
            try
            {
                var list = await GetAllAsync(null, true, "course");
                if (list == null)
                {
                    throw new Exception("Dont find Course");
                }

                return _mapper.Map<List<SaleDomain>>(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<List<SaleDomain>> getPurchaseCourse(int ower)
        {
            try
            {
                var list = await GetAllAsync(x=>x.IDPerson==ower,true, "course");
                if (list == null) throw new Exception("Dont find Course");
                return _mapper.Map<List<SaleDomain>>(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

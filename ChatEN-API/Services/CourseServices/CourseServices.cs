using AutoMapper;
using ChatEN.Data;
using ChatEN.Models.Domain;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.CourseServices
{
    public class CourseServices : Service<Models.Entity.Course>, ICourseServices
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext applicationDbContext;
        public CourseServices(ApplicationDbContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
            applicationDbContext = context;
        }

        public async Task<List<CourseDomain>> GetAllCourse()
        {
            var value = await GetAllAsync();
            if (value == null) throw new Exception("Dont find Course");
            return _mapper.Map<List<CourseDomain>>(value);
        }

        public async Task<DetailCourse> GetDetailCourse(int id)
        {
            var value = await GetAsync(x=>x.ID== id);
            if (value == null) throw new Exception("Dont find Course");
            return _mapper.Map<DetailCourse>(value);
        }
    }
}

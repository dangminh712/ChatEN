using ChatEN.Models.Domain;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.CourseServices
{
    public interface ICourseServices :IService<Models.Entity.Course>
    {
        public Task<List<CourseDomain>> GetAllCourse();
        public Task<DetailCourse> GetDetailCourse(int id);
    }
}

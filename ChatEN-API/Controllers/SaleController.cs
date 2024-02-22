using ChatEN.Models.DTO;
using ChatEN.Services.CourseServices;
using ChatEN.Services.SaleServices;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : Controller
    {
        private readonly ISaleServices _saleServices;
        private readonly ICourseServices _courseServices;
        public SaleController(ISaleServices saleServices, ICourseServices courseServices)
        {
            _saleServices = saleServices;
            _courseServices = courseServices;
        }
        [HttpGet("course")]
        public async Task<IActionResult> GetAllCourse()
        {
            var result = await _courseServices.GetAllCourse();
            return Ok(result);
        }
        [HttpGet("course/{id:int}")]
        public async Task<IActionResult> GetDetailCourse(int id)
        {
            var result = await _courseServices.GetDetailCourse(id);
            return Ok(result);
        }
        [HttpGet("all-bought-course")]
        public async Task<IActionResult> GetPurchaseCousre()
        {
            var result = await _saleServices.getAllCourse();
            return Ok(result);
        }
        [HttpGet("bought-course/{owner:int}")]
        public async Task<IActionResult> GetPurchaseCousre([FromRoute]int owner)
        {
            var result = await _saleServices.getPurchaseCourse(owner);
            return Ok(result);
        }
        [HttpPost("purchase-course")]
        public async Task<IActionResult> PurchaseCourse([FromBody] SaleDTO form)
        {
            var result = await _saleServices.buyCourse(form);
            return Ok(result);
        }

    }
}

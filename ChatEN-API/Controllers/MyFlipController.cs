using AutoMapper;
using ChatEN.Models.DTO;
using ChatEN.Services.MyFlipServices;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyFlip : Controller
    {

        private readonly IMapper _mapper;
        private readonly IMyFlipServices _myFlipServices;
        public MyFlip(IMyFlipServices myFlipServices, IMapper mapper)
        {
            _myFlipServices = myFlipServices;
            _mapper = mapper;
        }
        [HttpPost("create-new-flip")]
        public async Task<ActionResult> CreateNew(MyFlipDTO data) {
            try
            {
            await _myFlipServices.CreateFlipAsync(data);
            return Ok(true);
            }catch 
            {
                return Ok(false);
            }
        }
        [HttpDelete("delete-flip-by-id/{id:int}")]
        public async Task<ActionResult> DeleteByID([FromRoute] int id)
        {
            try
            {
                await _myFlipServices.DeleteFlipAsync(id);
                return Ok(true);
            }
            catch
            {
                return Ok(false);
            }
        }
        [HttpGet("get-all-flip/{id:int}")]
        public async Task<ActionResult> GetMyFlip([FromRoute] int id)
        {
            try
            {
                var result = await _myFlipServices.GetFlipAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

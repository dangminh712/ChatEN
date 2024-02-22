using AutoMapper;
using ChatEN.Models.DTO;
using ChatEN.Services.FavouriteServices;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class Favourite : Controller
    {
        private readonly IFavouriteServices _favouriteServices;
        private readonly IMapper _mapper;
        public Favourite(IFavouriteServices favouriteServices, IMapper mapper)
        {
            _favouriteServices = favouriteServices;
            _mapper = mapper;
        }
        [HttpGet("list-word-by-own/{own:int}")]
        public async Task<IActionResult> GetWordInFavourite([FromRoute]int own)
        {
            try
            {
                var result = await _favouriteServices.GetWordInFavourite(own);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("AddInFavorite")]
        public async Task<IActionResult> AddInFavourite([FromBody] favouriteDTO form)
        {
            try
            {
                bool result = await _favouriteServices.AddWordToFavourite(form);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("DeleteInFavorite")]
        public async Task<IActionResult> DeleteInFavorite([FromBody] favouriteDTO form)
        {
            try
            {
                bool result = await _favouriteServices.RemoveWordToFavourite(form);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

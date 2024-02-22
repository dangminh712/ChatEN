using AutoMapper;
using ChatEN.Models.DTO;
using ChatEN.Services.VocabularyServices;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Vocabulary : Controller
    {
        private readonly IVocabularyServices _vocabularyServices;
        private readonly IMapper _mapper;
        public Vocabulary(IVocabularyServices vocabulary, IMapper mapper)
        {
            _vocabularyServices = vocabulary;
            _mapper = mapper;
        }
        [HttpPost("create-new-vocabulary")]
        public async Task<IActionResult> createNewVocabulary([FromBody] formNewWord word)
        {
            bool result = await _vocabularyServices.CreatNewVocabulary(word);
            return Ok(result);
        }

        [HttpGet("get-all-vocabulary")]
        public async Task<IActionResult> GetAllVocabulry()
        {
            var result = await _vocabularyServices.GetAllVocabulry();
            return Ok(result);
        }
        [HttpGet("get-filter-vocabulary/{amount:int}")]
        public async Task<IActionResult> GetFilterVocabulry([FromRoute]int amount)
        {
            var result = await _vocabularyServices.GetFilterVocabulry(amount);
            return Ok(result);
        }
        [HttpGet("search-by-word/{word}")]
        public async Task<IActionResult> SearchByWord(string word)
        {
            var result = await _vocabularyServices.SearchByWord(word);
            return Ok(result);
        }

    }
}

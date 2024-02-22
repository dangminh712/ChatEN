using AutoMapper;
using ChatEN.Data;
using ChatEN.Models;
using ChatEN.Models.DTO;
using ChatEN.Models.Entity;
using ChatEN.Services.GenericServices;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Services.VocabularyServices
{
    public class VocabularyServices : Service<vocabulary>, IVocabularyServices
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _applicationContext;
        public VocabularyServices(IMapper mapper, ApplicationDbContext context) : base(context)
        {
            _mapper = mapper;
            _applicationContext = context;
        }

        public async Task<bool> CreatNewVocabulary(formNewWord newWord)
        {
            try
            {
                vocabulary temp = new vocabulary
                {
                    Word = newWord.Word,
                    mean = newWord.mean,
                };
                await CreateAsync(temp);
                return true;
            }
            catch
            {
                return false;
            }

        }

        public async Task<List<wordDTO>> GetAllVocabulry()
        {
            var result = await GetAllAsync();
            return _mapper.Map<List<wordDTO>>(result);
        }

        public async Task<List<wordDTO>> GetFilterVocabulry(int amount)
        {
            var result = await GetAllAsync(); 

            var random = new Random();
            var shuffledResult = result.OrderBy(item => random.Next()).ToList();
            var selectedValues = shuffledResult.Take(amount).ToList();

            return _mapper.Map<List<wordDTO>>(selectedValues);
        }

        public async Task<List<wordDTO>> SearchByWord(string word)
        {
           var result = await GetAllAsync(x=>x.Word == word);
           return _mapper.Map<List<wordDTO>>(result);
        }
    }
}

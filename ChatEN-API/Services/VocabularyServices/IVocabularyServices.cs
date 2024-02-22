using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Models.Entity;
using ChatEN.Services.GenericServices;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Services.VocabularyServices
{
    public interface IVocabularyServices : IService<vocabulary>
    {
        public Task<bool> CreatNewVocabulary(formNewWord newWord);
        public Task<List<wordDTO>> GetAllVocabulry();
        public Task<List<wordDTO>> GetFilterVocabulry(int amount);
        public Task<List<wordDTO>> SearchByWord(string word);
    }
}

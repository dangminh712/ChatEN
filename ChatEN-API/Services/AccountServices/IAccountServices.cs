using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Services.GenericServices;

namespace ChatEN.Services.AccountServices
{
    public interface IAccountServices : IService<Models.Entity.account>
    {
        public Task<List<accountDomain>> GetAllAccount();
        public Task<accountDomain> GetAccountById(int id);
        public Task<accountDomain> LockAccount(int id);
        public Task<accountDomain> SignIn(signInDTO account);
        public Task<bool> SignUp(signUpDTO account);
    }
}

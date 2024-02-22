using AutoMapper;
using ChatEN.Controllers;
using ChatEN.Data;
using ChatEN.Helpers;
using ChatEN.Models.Domain;
using ChatEN.Models.DTO;
using ChatEN.Services.GenericServices;
using Microsoft.AspNetCore.Identity;

namespace ChatEN.Services.AccountServices
{
    public class AccountServices : Service<Models.Entity.account>, IAccountServices
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _applicationContext;
        public AccountServices(IMapper mapper, ApplicationDbContext context) : base(context)
        {
            _mapper = mapper;
            _applicationContext = context;
        }

        public async Task<accountDomain> GetAccountById(int id)
        {
            var account = await GetAsync(x => x.Personid == id);
            if (account == null) { throw new NotImplementedException(); }
            return _mapper.Map<accountDomain>(account);

        }

        public async Task<List<accountDomain>> GetAllAccount()
        {

            var Accounts = await GetAllAsync();
            return _mapper.Map<List<accountDomain>>(Accounts);
        }

        public async Task<accountDomain> LockAccount(int id)
        {
            var account = await GetAsync(x => x.Personid == id);
            if (account == null) { throw new NotImplementedException(); }
            account.Islock = !account.Islock;
            await UpdateAsync(account);
            return _mapper.Map<accountDomain>(account);
        }

        public async Task<accountDomain> SignIn(signInDTO account)
        {
            try
            {
                var passwordHasher = new PasswordHasher<string>();
                HelpersClass helpers = new HelpersClass();
                if (helpers.CheckWhitespace(account.Username, account.Password) == true) throw new Exception("Error by syntax");
                var value = await GetAsync(x => x.Username == account.Username);
                if (value == null) throw new Exception("Dont Find Username");
                var passwordVerificationResult = passwordHasher.VerifyHashedPassword(null, value.Password, account.Password);
                if (passwordVerificationResult == PasswordVerificationResult.Success)
                {
                    return _mapper.Map<accountDomain>(value);
                }
                else
                {
                    throw new Exception("InValid");
                }
            }
            catch
            {
                throw new Exception("InValid");
            }
        }

        public async Task<bool> SignUp(signUpDTO account)
        {
            try
            {
                var passwordHasher = new PasswordHasher<string>();
                HelpersClass helpers = new HelpersClass();
                if (helpers.CheckWhitespace(account.Username, account.Password) == true) return false;
                string password = account.Password;
                string hashedPassword = passwordHasher.HashPassword(null, password);
                var value = await GetAsync(x => x.Username == account.Username);
                if (value != null) { return false; }
                Models.Entity.account temp = new Models.Entity.account
                {
                    Username = account.Username,
                    Password = hashedPassword,
                    Name = account.Name,
                    Role = "Customers",
                    Islock = false
                };
                await CreateAsync(temp);
                return true ;
            }
            catch
            {
                return false;
            }
        }
    }
}

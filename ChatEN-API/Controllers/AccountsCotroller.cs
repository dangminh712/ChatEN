using AutoMapper;
using ChatEN.Models.DTO;
using ChatEN.Services.AccountServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Account : Controller
    {
        private readonly IAccountServices _accountServices;
        private readonly IMapper _mapper;
        public Account(IAccountServices accountServices, IMapper mapper)
        {
            _accountServices = accountServices; 
            _mapper = mapper;
        }
        [HttpGet("getuser")]
        public async Task<IActionResult> GetAllAccount()
        {
            var accoutns = await _accountServices.GetAllAccount();
            return Ok(accoutns);
        }

        [HttpPost("signIn")]
        public async Task<IActionResult> SignIn([FromBody] signInDTO accounts)
        {
            var result = await _accountServices.SignIn(accounts);
            return Ok(result);
        }
        [HttpPost("signUp")]
        public async Task<IActionResult> SignIn([FromBody] signUpDTO accounts)
        {
            var result = await _accountServices.SignUp(accounts);
            return Ok(result);
        }
        [HttpPost("lockuser")]
        public async Task<IActionResult> LockAccount(int id)
        {
            var result = await _accountServices.LockAccount(id);
            return Ok(result);
        }
    }
}

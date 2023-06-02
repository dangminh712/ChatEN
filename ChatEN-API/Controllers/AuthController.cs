using Dapper;
using ChatEN.Models;
using ChatEN.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Identity;
using ChatEN.Helpers;
namespace ChatEN.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IService _connectionFactory;

        public AuthController(IService connection)
        {
            _connectionFactory = connection;
        }
       
        [HttpPost("signIn")]
        public async Task<IActionResult> CheckPass(auth lg)
        {
            try
            {
                var passwordHasher = new PasswordHasher<string>();
                HelpersClass helpers = new HelpersClass();
                if(helpers.CheckWhitespace(lg.Username, lg.Password)==true) return Ok("false");
                await using (SqlConnection sqlConnection = _connectionFactory.CreateConnection())
                {
                    string queryString = "SELECT password FROM account WHERE Username = @Username";
                    var result = await sqlConnection.QueryFirstOrDefaultAsync<string>(queryString, new { Username = lg.Username });
                    if (result == null) return Ok("false");

                    var passwordVerificationResult = passwordHasher.VerifyHashedPassword(null, result, lg.Password);
                    if (passwordVerificationResult == PasswordVerificationResult.Success)
                    {
                        string iDquery = "select Personid from account WHERE Username = @Username ";
                        var ID = await sqlConnection.QueryAsync<string>(iDquery, new { Username = lg.Username });
                        return Ok(ID);
                    }
                    else
                    {
                        return Ok("false");
                    }
                }
            }
            catch
            {
                return BadRequest("false");
            }
        }

        [HttpPost("signUp")]
        public async Task<IActionResult> SignUp(auth lg)
        {
            try
            {
              
                var passwordHasher = new PasswordHasher<string>();
                HelpersClass helpers = new HelpersClass();
                if (helpers.CheckWhitespace(lg.Username, lg.Password) == true) return Ok("false");
                string password = lg.Password;
                string hashedPassword = passwordHasher.HashPassword(null, password);
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "EXEC INSERT_ACCOUNT @Username,@Password";
                var result = await sqlConnection.ExecuteAsync(queryString,new {Username = lg.Username,Password = hashedPassword });
                if (result == null) 
                    return Ok("false");

                return Ok("success");
            }
            catch 
            {
                return Ok("false");
            }

        }
    }
}

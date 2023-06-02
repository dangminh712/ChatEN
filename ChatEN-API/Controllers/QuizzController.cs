using Dapper;
using ChatEN.Models;
using ChatEN.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizzController : ControllerBase
    {
        private readonly IService _connectionFactory;

        public QuizzController(IService connection)
        {
            _connectionFactory = connection;
        }
        [HttpGet]
        public async Task<IActionResult> GetWordID(string ID)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "select * from favourite where own="+ID.ToString();
                var result = await sqlConnection.QueryAsync(queryString);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}

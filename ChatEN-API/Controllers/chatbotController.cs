using Dapper;
using ChatEN.Models;
using ChatEN.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatBot : ControllerBase
    {
        private readonly IService _connectionFactory;

        public ChatBot(IService connection)
        {
            _connectionFactory = connection;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "select * from chatbot";
                var result = await sqlConnection.QueryAsync<chatbotdata>(queryString);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost]
        public async Task<IActionResult> Post(chatbotdata chatdata)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string chatuser = chatdata.userchat.Replace("'", "''");
                string chatbot = chatdata.botchat.Replace("'", "''");
                string Sql = "exec insertData " + "N'"+ chatuser + "'"+ "," + "N'" + chatbot + "'";
                await sqlConnection.QueryFirstOrDefaultAsync(Sql);
                return Ok("success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }

}

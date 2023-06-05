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
        public async Task<IActionResult> Get(string user)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "select * from chatbot where own = @USER";
                var result = await sqlConnection.QueryAsync<chatbotdata>(queryString, new {USER = user});
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch 
            {
                return Ok("false");
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
                string query = "exec insertChatbot @userchat,@botchat,@own";
                await sqlConnection.ExecuteAsync(query, new {userchat=chatdata.userchat,botchat=chatdata.botchat,own=chatdata.own});
                return Ok("success");
            }
            catch
            {
                return Ok("false");
            }

        }
        [HttpDelete]
        public async Task<IActionResult>Delete (int user)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string Sql = "delete chatbot where own = "+user.ToString();
                await sqlConnection.ExecuteAsync(Sql);
                return Ok("success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }

}

using Dapper;
using ChatEN.Models;
using ChatEN.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace ChatEN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VocabularyController : ControllerBase
    {
        private readonly IService _connectionFactory;

        public VocabularyController(IService connection)
        {
            _connectionFactory = connection;
        }
        [HttpGet]
        public async Task<IActionResult> GetWord(string amount)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "select top "+ amount+" * from vocabulary ORDER BY NEWID()";
                var result = await sqlConnection.QueryAsync<vocabulary>(queryString);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpGet("Favourite")]
        public async Task<IActionResult> GetWordInFavourite(string own)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "select vocabulary.* from vocabulary,favourite where favourite.wordID=vocabulary.WordId and favourite.own="+own;
                var result = await sqlConnection.QueryAsync<vocabulary>(queryString);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("DeleteInFavorite")]
        public async Task<IActionResult> DeleteWordInFavourite(string own,string wordid)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "delete from favourite where own="+own+" and wordid= "+wordid;
                var result = await sqlConnection.QueryAsync<vocabulary>(queryString);
                if (result == null) return NotFound();
                return Ok("success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("AddInFavorite")]
        public async Task<IActionResult> AddWordInFavourite(string own, string wordid)
        {
            try
            {
                await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();
                string queryString = "insert into favourite values("+ own + "," + wordid+")";
                var result = await sqlConnection.QueryAsync<vocabulary>(queryString);
                if (result == null) return NotFound();
                return Ok("success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}

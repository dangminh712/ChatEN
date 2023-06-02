
using Microsoft.AspNetCore.Mvc;

using ChatGPT_CSharp.Connecting;
using System.Data.SqlClient;

namespace MyWebApplication.Controllers
{
    [ApiController]
    public class chatbot : Controller
    {
        // GET: Test
        [HttpPost]
        [Route("chatbot")]
        public async Task<IActionResult> Index(string userchat, string botchat)
        {
            try
            {
                await using SqlConnection sqlConnection = new SqlConnection();
                var messages = con.insertData(userchat,botchat);
                return Ok(messages);
            }
            catch (Exception ex)
            {
                // nếu có lỗi xảy ra, hiển thị thông báo lỗi
                ViewBag.Message = "Error: " + ex.Message;
                return Ok(ViewBag.Data);
            }

        }
    }
}

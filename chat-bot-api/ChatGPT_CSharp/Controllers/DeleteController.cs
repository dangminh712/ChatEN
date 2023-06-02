using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using Newtonsoft.Json;
using ChatGPT_CSharp.Models;
using ChatGPT_CSharp.Connecting;

namespace MyWebApplication.Controllers
{
    [ApiController]
    public class delete : Controller
    {
        // GET: Test
        [HttpPost]
        [Route("delete")]
        public async Task<IActionResult> Index()
        {
            try
            {
                Connecting con = new Connecting ();
                var messages = con.deleteData();
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

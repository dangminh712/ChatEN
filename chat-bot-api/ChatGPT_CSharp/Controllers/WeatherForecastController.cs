using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;
using System.Web;

namespace ChatGPT_CSharp.Controllers
{
    [ApiController]


    public class WeatherForecastController : ControllerBase
    {
        [Route("WeatherForecastController")]
        [HttpGet]
        public async Task<IActionResult> ChatCode(string question)
        {
            var httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "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");

            var url = "https://api.openai.com/v1/engines/davinci-codex/completions?prompt=" + HttpUtility.UrlEncode(question) + "&max_tokens=1000&temperature=0.5";
            var response = await httpClient.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                var answer = JObject.Parse(result)["choices"][0]["text"].ToString();
                return Ok(answer);
            }
            else
            {
                return BadRequest();
            }
        }


    }
}
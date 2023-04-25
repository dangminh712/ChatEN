using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenAI_API;
using OpenAI_API.Completions;

namespace ChatGPT_CSharp.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
     public class  GPTController : ControllerBase
    {
        [HttpGet]
        [Route("UseChatGPT")]
        public async Task<IActionResult> UseChatGPT(string query)
        {
            string OutPutResult = "";
            var openai = new OpenAIAPI("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");
            CompletionRequest completionRequest = new CompletionRequest();
            completionRequest.Prompt = query;
            completionRequest.Model = OpenAI_API.Models.Model.DavinciText;
            var completions = openai.Completions.CreateCompletionAsync(completionRequest);
            
            Console.WriteLine(completions.Result.Completions);
            foreach (var completion in completions.Result.Completions)
            {
                OutPutResult += completion.Text;
            }

            return Ok(OutPutResult);
        }
    }
}

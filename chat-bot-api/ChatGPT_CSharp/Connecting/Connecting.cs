using System.Data.SqlClient;
using System.Data;
using Newtonsoft.Json;
using ChatGPT_CSharp.Models;


namespace ChatGPT_CSharp.Connecting
{
    public class Connecting
    {
     

        private readonly IConfiguration _configuration;

        public Connecting(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public List<chatbotdata> getData(string req)
        {
            SqlConnection DataConnection = new SqlConnection(_configuration.GetConnectionString("Database"));
            string hi = (_configuration.GetConnectionString("Database"));
            SqlCommand DataCommand = new SqlCommand(req, DataConnection);
            DataCommand.Connection.Open();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(DataCommand);
            da.Fill(dt);
            // Filling my table1
            string json = JsonConvert.SerializeObject(dt);
            // Return JSON data as a JsonResult
            List<chatbotdata> messages = JsonConvert.DeserializeObject<List<chatbotdata>>(json);
            return messages;
        }
        public bool insertData(string userbot,string chatbot)
        {
            SqlConnection DataConnection = new SqlConnection(_configuration.GetConnectionString("Database"));
            string Sql = "exec insertData "+userbot + ","+chatbot;
            SqlCommand DataCommand = new SqlCommand(Sql, DataConnection);
            DataCommand.Connection.Open();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(DataCommand);
            da.Fill(dt);
            return true;
        }
        public bool deleteData()
        {
            SqlConnection DataConnection = new SqlConnection(_configuration.GetConnectionString("Database"));
            string Sql = "delete from chatbot";
            SqlCommand DataCommand = new SqlCommand(Sql, DataConnection);
            DataCommand.Connection.Open();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter(DataCommand);
            da.Fill(dt);
            return true;
        }
    }
}

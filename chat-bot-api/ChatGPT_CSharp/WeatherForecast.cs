using System.Data.SqlClient;

namespace ChatGPT_CSharp
{
    public class WeatherForecast
    {
        private readonly IConfiguration configuration;
        public WeatherForecast(IConfiguration config)
        {
            this.configuration = config;
        }
        public IConfiguration Index()
        {
            string connectionstring = configuration.GetConnectionString("Database");
            SqlConnection connection = new SqlConnection(connectionstring);
            connection.Open();
            SqlCommand command = new SqlCommand("select * from chatbot", connection);
            connection.Close();
            return View();
        }

        private IConfiguration View()
        {
            throw new NotImplementedException();
        }
    }
}
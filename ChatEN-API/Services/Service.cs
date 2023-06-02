using System.Data.SqlClient;

namespace ChatEN.Services
{
	public class Service : IService
	{
		private readonly IConfiguration _configuration;

		public Service(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		public SqlConnection CreateConnection()
		{
			return new SqlConnection(_configuration.GetConnectionString("Database"));
		}
	}
}

using System.Data.SqlClient;

namespace ChatEN.Services
{
	public interface IService
	{
		public SqlConnection CreateConnection();
	}
}

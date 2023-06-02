namespace ChatEN.Helpers
{
    public class HelpersClass
    {
     
        public HelpersClass()
        {
            
        }
        public bool CheckWhitespace(string username, string password)
        {
            // Kiểm tra username
            if (username.Contains(" "))
            {
                // Tồn tại kí tự trắng trong username
                return true;
            }

            // Kiểm tra password
            if (password.Contains(" "))
            {
                // Tồn tại kí tự trắng trong password
                return true;
            }

            // Không có kí tự trắng trong username và password
            return false;
        }

    }
}

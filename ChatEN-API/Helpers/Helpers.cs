namespace ChatEN.Helpers
{
    public class HelpersClass
    {
     
        public HelpersClass()
        {
            
        }
        public bool CheckWhitespace(string username, string password)
        {
            if (username.Contains(" "))
            {
                return true;
            }

            if (password.Contains(" "))
            {
                return true;
            }
            return false;
        }

    }
}

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
using System.Runtime.InteropServices;
using System.Runtime.CompilerServices;

namespace ChatGPT_CSharp.Connecting
{
    public class condb
    {
        string Connection = "Data Source=LAPTOP\\MAYAO; Initial Catalog=chatbot; Integrated Security=True; Connect Timeout=10000;";

        public List<chatbotdata> getData(string req)
        {
            SqlConnection DataConnection = new SqlConnection(Connection);
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
            SqlConnection DataConnection = new SqlConnection(Connection);
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
            SqlConnection DataConnection = new SqlConnection(Connection);
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

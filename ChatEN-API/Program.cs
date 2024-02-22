using ChatEN;
using ChatEN.Data;
using ChatEN.Services.AccountServices;
using ChatEN.Services.CourseServices;
using ChatEN.Services.FavouriteServices;
using ChatEN.Services.GenericServices;
using ChatEN.Services.MyFlipServices;
using ChatEN.Services.SaleServices;
using ChatEN.Services.VocabularyServices;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAutoMapper(typeof(AutoMapperConfig));
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DBMS")!);
});

// Add services to the container.

builder.Services.AddScoped<IAccountServices, AccountServices>();
builder.Services.AddScoped<IVocabularyServices, VocabularyServices>();
builder.Services.AddScoped<IFavouriteServices, FavouriteServices>();
builder.Services.AddScoped<ISaleServices, SaleServices>();
builder.Services.AddScoped<ICourseServices, CourseServices>();
builder.Services.AddScoped<IMyFlipServices, MyFlipServices>();
//builder.Services.AddScoped<IService, Service>();


//Add Controller
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling =
Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver =
new DefaultContractResolver());

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
	builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));


var app = builder.Build();

// Configure the HTTP request pipeline.

	app.UseSwagger();
	app.UseSwaggerUI();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using UpaayBackendService.Application.DTOs;
using UpaayBackendService.Host;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

// Add services to the container.

builder.Services.AddControllers();
//Initialize DB context here
//builder.Services.AddDbContext<UpaayDbContext>(options =>
//options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


//Register Services with dependency injection
//This will call the centralized host project for initializing services....
builder.Services.AddApplicationServicesDependency(builder.Configuration);
builder.Services.AddDataContextServicesDependency(builder.Configuration);

// Bind AppSettings to the corresponding section in appsettings.json
//registering dependency injection of appsetting.json file
builder.Services.Configure<JwtConfigurations>(builder.Configuration.GetSection("JwtSettings"));
builder.Services.Configure<OtpConfigurations>(builder.Configuration.GetSection("OtpSettings"));

//JWT Authentication registration......
var key = builder.Configuration?.GetSection("JwtSettings")["SecretKey"];

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuer = false, //make it true if needs to validate issuer domain
                       ValidateAudience = false, //make it true if needs to validate audience domain
                       ValidateLifetime = true,
                       ValidateIssuerSigningKey = true,
                       ValidIssuer = "yourdomain.com",
                       ValidAudience = "yourdomain.com",
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
                   };
               });

builder.Services.AddAuthorization();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
    
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

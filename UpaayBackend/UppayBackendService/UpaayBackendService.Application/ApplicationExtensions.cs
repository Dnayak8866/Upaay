﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using UpaayBackendService.Application.Automapper;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Services;
using UpaayBackendService.DAL;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Repository;
using Microsoft.Extensions.Configuration;

namespace UpaayBackendService.Application
{
    public static class ApplicationExtensions
    {
        public static void AddApplicationServices(IServiceCollection services,IConfiguration configuration)
        {

            //Register services.........
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IOtpService, OtpService>();
            services.AddScoped<IRefreshTokenService, RefreshTokenService>();
            services.AddScoped<IJwtTokenService, JwtTokenService>();

            services.AddAutoMapper(typeof(MappingProfile));

            //Register Handler.........
            var assembly = typeof(ApplicationExtensions).Assembly; // Get the current assembly

            var handlerTypes = assembly.GetTypes()
                                .Where(t => !t.IsAbstract && !t.IsInterface) // Exclude interfaces and abstract classes
                                .SelectMany(t => t.GetInterfaces()
                                .Where(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IHandler<,>))
                                .Select(i => new { Interface = i, Implementation = t }));

            foreach (var handler in handlerTypes)
            {
                services.AddScoped(handler.Interface, handler.Implementation);
            }

            //Register Jw Authentication......
            //var key = configuration?.GetSection("JwtSettings")["SecretKey"];
      
            //services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //    .AddJwtBearer(options =>
            //    {
            //        options.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            ValidateIssuer = false, //make it true if needs to validate issuer domain
            //            ValidateAudience = false, //make it true if needs to validate audience domain
            //            ValidateLifetime = true,
            //            ValidateIssuerSigningKey = true,
            //            ValidIssuer =  "yourdomain.com",
            //            ValidAudience = "yourdomain.com",
            //            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
            //        };
            //    });

            //services.AddAuthorization();
        }
    }
}
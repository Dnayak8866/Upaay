using Microsoft.AspNetCore.Authentication.JwtBearer;
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
using UpaayBackendService.MessagingService.MessagingService;

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
            services.AddSingleton<IMessagingService, EmailService>(emailService => new EmailService(
                configuration.GetSection("EmailConfigurations").GetValue<string>("server"),
                configuration.GetSection("EmailConfigurations").GetValue<int>("port"),
                configuration.GetSection("EmailConfigurations").GetValue<string>("emailId"),
                configuration.GetSection("EmailConfigurations").GetValue<string>("password")));

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
        }
    }
}
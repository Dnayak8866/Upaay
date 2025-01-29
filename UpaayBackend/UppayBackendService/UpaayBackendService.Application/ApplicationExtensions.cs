using Microsoft.Extensions.DependencyInjection;
using UpaayBackendService.Application.Automapper;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Services;
using UpaayBackendService.DAL;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Repository;

namespace UpaayBackendService.Application
{
    public static class ApplicationExtensions
    {
        public static void AddApplicationServices(IServiceCollection services)
        {
            services.AddScoped<IClientService, ClientService>();
            services.AddAutoMapper(typeof(MappingProfile));
        }
    }
}
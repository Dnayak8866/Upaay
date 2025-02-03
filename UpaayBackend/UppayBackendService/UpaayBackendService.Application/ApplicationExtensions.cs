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
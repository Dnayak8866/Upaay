using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UpaayBackendService.Application;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Services;
using UpaayBackendService.DAL;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Models;
using UpaayBackendService.DAL.Repository;

namespace UpaayBackendService.Host
{
    public static class DepedencyInjection
    {
        public static void AddApplicationServicesDependency(this IServiceCollection services)
        {
            ApplicationExtensions.AddApplicationServices(services);
     
        }

        public static void AddDataContextServicesDependency(this IServiceCollection services,IConfiguration configuration)
        {
            ServiceExtensions.AddDataAccessServices(services, configuration);
        }
    }
}

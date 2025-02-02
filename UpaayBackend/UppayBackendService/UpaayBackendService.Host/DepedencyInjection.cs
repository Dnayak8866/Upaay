﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UpaayBackendService.Application;
using UpaayBackendService.DAL;

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

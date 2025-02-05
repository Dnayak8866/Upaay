using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Models;
using UpaayBackendService.DAL.Repository;

namespace UpaayBackendService.DAL
{
    public static class ServiceExtensions
    {
        public static void AddDataAccessServices(IServiceCollection services,IConfiguration configuraion)
        {
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IOtpRepository, OtpRepository>();
            //Initialize DB context here
            services.AddDbContext<UpaayDbContext>(options =>
            options.UseSqlServer(configuraion.GetConnectionString("DefaultConnection")));
        }
    }
}

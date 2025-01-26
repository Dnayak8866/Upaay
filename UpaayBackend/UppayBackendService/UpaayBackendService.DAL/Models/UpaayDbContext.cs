using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace UpaayBackendService.DAL.Models
{
    public  class UpaayDbContext : DbContext
    {
        public UpaayDbContext(DbContextOptions<UpaayDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var config = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false)
                .Build();

                optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            }
        }

        public DbSet<ClientDetails> ClientDetails { get; set; }
            
    }
}

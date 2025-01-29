using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace UpaayBackendService.DAL.Models
{
    public  class UpaayDbContext : DbContext
    {
        public UpaayDbContext(DbContextOptions<UpaayDbContext> options) : base(options) { }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        var config = new ConfigurationBuilder()
        //        .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
        //        .AddJsonFile("appsettings.json", optional: false)
        //        .Build();

        //        optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));
        //    }
        //}

        public virtual DbSet<ClientPersonalDetails> ClientDetails { get; set; }

       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClientPersonalDetails>(entity =>
            {
                entity.HasKey(e => e.ClientId);

                entity.Property(e => e.AadharCardNo).IsRequired();
                entity.Property(e => e.Email).IsRequired();
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(300);
                entity.Property(e => e.PanCardNo).IsRequired();
                entity.Property(e => e.ProfilePhoto).IsRequired();
                entity.Property(e => e.RelationName)
                    .IsRequired()
                    .HasMaxLength(300);
                entity.Property(e => e.Signature).IsRequired();
            });

           
        }

       

    }
}

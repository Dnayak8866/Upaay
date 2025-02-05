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
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserOtpVerification> UserOtpVerifications { get; set; }


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

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C7B088C0A");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsUnicode(false);
                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);
                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<UserOtpVerification>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("PK__UserOtpV__3214EC07D02E91C8");

                entity.ToTable("UserOtpVerification");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");
                entity.Property(e => e.ExpiryDate).HasColumnType("datetime");
                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);
                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.UserOtpVerifications)
                    .HasForeignKey<UserOtpVerification>(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserOtpVe__UserI__48CFD27E");
            });



        }

       

    }
}

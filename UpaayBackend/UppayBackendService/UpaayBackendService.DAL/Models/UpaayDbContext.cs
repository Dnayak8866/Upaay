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
                entity.HasKey(e => e.ClientId).HasName("pk_clientdetails");

                entity.ToTable("clientpersonaldetails");

                entity.Property(e => e.ClientId)
                    .UseIdentityAlwaysColumn()
                    .HasColumnName("clientid");
                entity.Property(e => e.AadharCardNo).HasColumnName("aadharcardno");
                entity.Property(e => e.AnnualIncome).HasColumnName("annualincome");
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .HasColumnName("createdby");
                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp(3) without time zone")
                    .HasColumnName("createddate");
                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("timestamp(6) without time zone")
                    .HasColumnName("dateofbirth");
                entity.Property(e => e.Email).HasColumnName("email");
                entity.Property(e => e.Gender).HasColumnName("gender");
                entity.Property(e => e.IsEmailVerified).HasColumnName("isemailverified");
                entity.Property(e => e.IsMobileNoVerified).HasColumnName("ismobilenoverified");
                entity.Property(e => e.IsPanVerified).HasColumnName("ispanverified");
                entity.Property(e => e.MaritalStatus).HasColumnName("maritalstatus");
                entity.Property(e => e.MobileNo).HasColumnName("mobileno");
                entity.Property(e => e.Name).HasMaxLength(300);
                entity.Property(e => e.Occupation).HasColumnName("occupation");
                entity.Property(e => e.PanCardNo).HasColumnName("pancardno");
                entity.Property(e => e.ProfilePhoto).HasColumnName("profilephoto");
                entity.Property(e => e.RelationName)
                    .HasMaxLength(300)
                    .HasColumnName("relationname");
                entity.Property(e => e.RelationType).HasColumnName("relationtype");
                entity.Property(e => e.Signature).HasColumnName("signature");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId).HasName("users_pkey");

                entity.ToTable("users");

                entity.Property(e => e.UserId)
                    .UseIdentityAlwaysColumn()
                    .HasColumnName("userid");
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .HasColumnName("createdby");
                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp(3) without time zone")
                    .HasColumnName("createddate");
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");
                entity.Property(e => e.Password).HasMaxLength(100);
                entity.Property(e => e.ReferenceNo).HasColumnName("referenceno");
                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(100)
                    .HasColumnName("updatedby");
                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp(3) without time zone")
                    .HasColumnName("updateddate");
            });

            modelBuilder.Entity<UserOtpVerification>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("userotpverification_pkey");

                entity.ToTable("userotpverification");

                entity.Property(e => e.Id)
                    .UseIdentityAlwaysColumn()
                    .HasColumnName("id");
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .HasColumnName("createdby");
                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp(3) without time zone")
                    .HasColumnName("createddate");
                entity.Property(e => e.ExpiryDate)
                    .HasColumnType("timestamp(3) without time zone")
                    .HasColumnName("expirydate");
                entity.Property(e => e.NoOfAttempts).HasColumnName("noofattempts");
                entity.Property(e => e.Otp).HasColumnName("otp");
                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(100)
                    .HasColumnName("updatedby");
                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp(3) without time zone")
                    .HasColumnName("updateddate");
                entity.Property(e => e.UserId).HasColumnName("userid");

                entity.HasOne(d => d.User)
                   .WithOne(p => p.UserOtpVerifications)
                   .HasForeignKey<UserOtpVerification>(d => d.UserId)
                   .OnDelete(DeleteBehavior.ClientSetNull)
                   .HasConstraintName("userotpverification_userid_fkey");
            });



        }

       

    }
}

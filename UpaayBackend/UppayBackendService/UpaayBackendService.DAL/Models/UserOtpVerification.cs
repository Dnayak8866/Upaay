namespace UpaayBackendService.DAL.Models
{
    public class UserOtpVerification
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int Otp { get; set; }

        public DateTime ExpiryDate { get; set; }

        public int? NoOfAttempts { get; set; }

        public string CreatedBy { get; set; } = null!;

        public DateTime CreatedDate { get; set; }

        public string? UpdatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}

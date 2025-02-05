using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.DAL.Models
{
    public partial class User
    {
        public int UserId { get; set; }

        public int ReferenceNo { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public string? UpdatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public virtual ICollection<UserOtpVerification> UserOtpVerifications { get; set; } = new List<UserOtpVerification>();
    }

}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.DAL.IRepository
{
    public interface IOtpRepository
    {
        Task<bool> CreateOTP(int otp, int userId);
        Task<bool> VerifyOTP(int otp, int userId);
    }
}

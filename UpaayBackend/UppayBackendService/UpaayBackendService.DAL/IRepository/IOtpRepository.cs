using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.DAL.Models;

namespace UpaayBackendService.DAL.IRepository
{
    public interface IOtpRepository
    {
        Task<bool> CreateOTP(int otp, int userId, string emailId);
        Task<bool> VerifyOTP(int otp, int userId);
        Task<UserOtpVerification> GetOtpByUserId(int userID);
        Task<bool> UpdateOtpDetails(UserOtpVerification userOtpVerification);


    }
}

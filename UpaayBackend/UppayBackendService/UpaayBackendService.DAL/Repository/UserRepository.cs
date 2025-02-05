using Microsoft.EntityFrameworkCore;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Models;

namespace UpaayBackendService.DAL.Repository
{
    public class UserRepository  :  IUserRepository
    {
        private readonly UpaayDbContext _dbContext;
        public UserRepository(UpaayDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User> GetUserAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email.ToLower() ==  email.ToLower());
        }

        public async Task<bool> CreateOTP(int otp, int userId)
        {
            var userOtpDetails = await _dbContext.UserOtpVerifications.FirstOrDefaultAsync(u => u.UserId == userId);
            if (userOtpDetails == null)
            {
                userOtpDetails = new UserOtpVerification
                {
                    UserId = userId,
                    Otp = otp,
                    NoOfAttempts = 0,
                    ExpiryDate = DateTime.Now.AddMinutes(10),
                    CreatedDate = DateTime.Now
                };
                await _dbContext.UserOtpVerifications.AddAsync(userOtpDetails);
            }
            else
            {
                userOtpDetails.Otp = otp;
                userOtpDetails.ExpiryDate = DateTime.Now.AddMinutes(10);
                userOtpDetails.NoOfAttempts = 0;
                userOtpDetails.CreatedDate = DateTime.Now;
                await _dbContext.SaveChangesAsync();
            }
            return true;
        }
        public async Task<bool> VerifyOTP(int otp, int userId)
        {
            var userOtpDetails = await _dbContext.UserOtpVerifications.FirstOrDefaultAsync(u => u.UserId == userId);
            if(userOtpDetails == null|| userOtpDetails.Otp != otp)
            {
                userOtpDetails.NoOfAttempts++;
                await _dbContext.UserOtpVerifications.AddAsync(userOtpDetails);
                await _dbContext.SaveChangesAsync();

                return false;
            }

            return true;
        }
    }
}

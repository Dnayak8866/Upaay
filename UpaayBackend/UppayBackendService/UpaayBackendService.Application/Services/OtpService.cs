using System.Security.Cryptography;
using Microsoft.Extensions.Options;
using UpaayBackendService.Application.DTOs;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.Shared;

namespace UpaayBackendService.Application.Services
{
    public class OtpService : IOtpService
    {
        private readonly IOtpRepository _otpRepository;
        private readonly IUserRepository _userRepository;
        private readonly OtpConfigurations _otpConfiguration;
        public OtpService(IOtpRepository otpRepository, IUserRepository userRepository, IOptions<OtpConfigurations> otpConfig ) {
            _otpRepository = otpRepository;
            _otpConfiguration = otpConfig.Value;
            _userRepository = userRepository;
        }
        public async Task<int?> CreateOtp(string emailId)
        {
            var user = await _userRepository.GetUserAsync(emailId);
            if (user == null)
            {
                return null; 
            }
            var otp = GenerateOtp(4);
            await _userRepository.CreateOTP(otp, user.UserId);
            return otp;

        }

        public async Task<VerifyOtpResult> VerifyOtp(int otp,string emailId)
        {
            
            var user = await _userRepository.GetUserAsync(emailId);
            if (user == null)
            {
                return new VerifyOtpResult() { Message = ResponseMessages.UserNotFound, Success = false };
            }
            var userOtpDetails = await _otpRepository.GetOtpByUserId(user.UserId);
            
            if (userOtpDetails == null || userOtpDetails.ExpiryDate <= DateTime.Now || userOtpDetails.NoOfAttempts >= _otpConfiguration.MaxAttempts)
            {
                return new VerifyOtpResult() { Message = ResponseMessages.OtpExpired, Success = false };
            }
           
            if (userOtpDetails != null && userOtpDetails.Otp != otp)
            {
                userOtpDetails.NoOfAttempts++;
                await _otpRepository.UpdateOtpDetails(userOtpDetails);
                return new VerifyOtpResult() { Message = ResponseMessages.InvalidOtp, Success = false };
            }
            return new VerifyOtpResult() { Message = ResponseMessages.OtpVerified, Success = true }; ; ;

        }

        private int GenerateOtp(int digit)
        {
            int otp, otpDigit = 0;
            switch (digit)
            {
                case 4:
                    otpDigit = 1000;
                    break;
                case 6:
                    otpDigit = 100000;
                    break;
            }

            do
            {
                byte[] bytes = new byte[2]; // Generate a 16-bit number
                RandomNumberGenerator.Fill(bytes);
                otp = BitConverter.ToUInt16(bytes, 0) % 10000; // Ensures a 4-digit OTP
            } while (otp < otpDigit); // Ensure it's a valid 4-digit number
            return otp;
        }
    }
}

﻿using System.Security.Cryptography;
using UpaayBackendService.Application.DTOs;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Response;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.Shared;

namespace UpaayBackendService.Application.Services
{
    public class OtpService : IOtpService
    {
        private readonly IOtpRepository _otpRepository;
        private readonly IUserRepository _userRepository;
        public OtpService(IOtpRepository otpRepository) {
            _otpRepository = otpRepository;
        }
        public async Task<bool> CreateOtp(string emailId)
        {
            var user = await _userRepository.GetUserAsync(emailId);
            if (user == null)
            {

                return false; 
            }
            var otp = GenerateOtp(4);
            await _userRepository.CreateOTP(otp, user.UserId);

            return true;

        }

        public async Task<VerifyOtpResult> VerifyOtp(int otp,string emailId)
        {
            
            var user = await _userRepository.GetUserAsync(emailId);
            if (user == null)
            {
                return new VerifyOtpResult() { Message = ResponseMessages.UserNotFound, Success = false };
            }
            var verifyResponse = await _otpRepository.VerifyOTP(otp, user.UserId);
            if (!verifyResponse)
            {

                return new VerifyOtpResult() { Message = ResponseMessages.InvalidOtp, Success = false }; ;
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

using System.Security.Cryptography;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;
using UpaayBackendService.DAL.IRepository;

namespace UpaayBackendService.Application.Services
{
    public class AuthService :  IAuthService
    {
        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        { 
            _userRepository= userRepository;
        }

        public async Task<LoginResponse> LoginAsync(LoginRequest loginRequest)
        {
            var user = await _userRepository.GetUserAsync(loginRequest.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.Password))
            {
                return new LoginResponse() { Message = "UnAuthorized", Success = false };
            }
            
            var token = string.Empty;//GenerateJwtToken()

            return new LoginResponse() { Message ="Authorized", Success = true, Token = token };  

        }

        public async Task<UserOtpResponse> CreateOtp(string emailId)
        {
            var response = new UserOtpResponse();
            var user = await _userRepository.GetUserAsync(emailId);
            if (user == null)
            {
                response.Success = false;
                response.Message = "User not exists";
                return response;
            }

            var otp = GenerateOtp(4);
            await _userRepository.CreateOTP(otp, user.UserId);
            
            return new UserOtpResponse() { Message = "Otp Generated", Success = true };
            
        }

        private int GenerateOtp(int digit)
        {
            int otp, otpDigit = 0 ;
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

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

        public async Task<bool> LoginAsync(LoginRequest loginRequest)
        {
            var user = await _userRepository.GetUserAsync(loginRequest.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.Password))
            {
                return false;
            }

            //var token = string.Empty;//GenerateJwtToken()

            return true;

        }

    }
}

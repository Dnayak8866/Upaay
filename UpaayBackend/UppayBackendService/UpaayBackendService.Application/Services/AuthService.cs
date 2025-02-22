using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
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
            return true;
        }

        public async Task<bool> ResetPassword(string email, string password)
        {
            var isPasswordUpdated = BCrypt.Net.BCrypt.HashPassword(password);
            return await _userRepository.ResetPassword(email, isPasswordUpdated);
        }

    }
}

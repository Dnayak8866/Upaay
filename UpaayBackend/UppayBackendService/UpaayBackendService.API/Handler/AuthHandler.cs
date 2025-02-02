using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.API.Handler
{
    public class AuthHandler : IHandler<LoginRequest, LoginResponse>
    {
        private readonly IAuthService _authService;
        public AuthHandler(IAuthService authService)
        {
            _authService = authService;
        }

        public async Task<LoginResponse> HandleAsync(LoginRequest request)
        {
            return await _authService.LoginAsync(request);
        }
    }
}

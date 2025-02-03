using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;
using UpaayBackendService.Shared;

namespace UpaayBackendService.Application.Handler
{
    public class LoginHandler : IHandler<LoginRequest, LoginResponse>
    {
        private readonly IAuthService _authService;
        public LoginHandler(IAuthService authService)
        {
            _authService = authService;
        }

        public async Task<LoginResponse> HandleAsync(LoginRequest request)
        {
            var response = await _authService.LoginAsync(request);
            if (!response)
            {
                return new LoginResponse() { Message = ResponseMessages.UnauthorizedAccess, Success = false };
            }
            //Generate Token using token service
            return new LoginResponse() { Message = ResponseMessages.AuthorizedAccess, Success = true }; ;
        }
    }
}

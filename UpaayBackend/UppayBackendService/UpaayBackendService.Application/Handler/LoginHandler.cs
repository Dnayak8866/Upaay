using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;
using UpaayBackendService.Shared;

namespace UpaayBackendService.Application.Handler
{
    public class LoginHandler : IHandler<LoginRequest, LoginResponse>
    {
        private readonly IAuthService _authService;
        private readonly IRefreshTokenService _tokenService;
        private readonly IJwtTokenService _jwtTokenService;

        public LoginHandler(IAuthService authService,IRefreshTokenService tokenService)
        {
            _authService = authService;
            _tokenService = tokenService;
        }

        public async Task<LoginResponse> HandleAsync(LoginRequest request)
        {
            //Validate user 
            var response = await _authService.LoginAsync(request);
            if (!response)
            {
                return new LoginResponse() { Message = ResponseMessages.UnauthorizedAccess, Success = false };
            }
            //Generate Access Token using token service
            var accessToken = _jwtTokenService.GenerateAccessToken(request.Email);
            //Generate Refresh Token
            var refreshToken = _tokenService.CreateRefreshToken(request.Email);
            return new LoginResponse() { Message = ResponseMessages.AuthorizedAccess, Success = true ,AccessToken=accessToken,RefreshToken = refreshToken};
        }
    }
}

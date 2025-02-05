using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;
using UpaayBackendService.Shared;

namespace UpaayBackendService.Application.Handler
{
    public  class CreateAccessTokenHandler : IHandler<RefreshTokenRequest, LoginResponse>
    {
        private readonly IRefreshTokenService _refreshTokenService;
        private readonly IJwtTokenService jwtTokenService;
        public CreateAccessTokenHandler(IRefreshTokenService refreshTokenService)
        { 
            _refreshTokenService = refreshTokenService;
        }

        public Task<LoginResponse> HandleAsync(RefreshTokenRequest request)
        {
            if (_refreshTokenService.ValidateRefreshToken(request.RefreshToken,request.Username))
            {
                var newAccessToken =  jwtTokenService.GenerateAccessToken(request.Username);
                //Remove Refresh token and create new one
                _refreshTokenService.RevokeRefreshToken(request.RefreshToken);
                var refreshToken = _refreshTokenService.CreateRefreshToken(request.Username);
                return Task.FromResult(new LoginResponse() { AccessToken = newAccessToken, RefreshToken = refreshToken, Success= true});
            }
            
            return Task.FromResult(new LoginResponse() { Message = ResponseMessages.UnauthorizedAccess, Success = false });
        }
    }
}

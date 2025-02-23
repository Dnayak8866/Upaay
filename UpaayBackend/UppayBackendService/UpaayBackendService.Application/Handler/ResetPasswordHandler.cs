using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.Application.Handler
{
    public class ResetPasswordHandler : IHandler<PasswordResetRequest, ApiResponse>
    {
        private IAuthService _authService;
        public ResetPasswordHandler(IAuthService authService)
        {
            _authService = authService;
        }

        public async Task<ApiResponse> HandleAsync(PasswordResetRequest request)
        {
            var isSuccess = await _authService.ResetPassword(request.Email, request.Password);
            return new ApiResponse
            {
                Success = isSuccess
            };
        }
    }
}

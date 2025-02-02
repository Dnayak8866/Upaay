using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.Application.IServices
{
    public interface IAuthService
    {
        Task<LoginResponse> LoginAsync(LoginRequest loginRequest);
        Task<UserOtpResponse> CreateOtp(string emailId);
    }
}

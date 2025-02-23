using UpaayBackendService.Application.DTOs;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.Application.IServices;

public interface IOtpService
{
    Task<int?> CreateOtp(string emailId);
    Task<VerifyOtpResult> VerifyOtp(int otp, string emailId);
}

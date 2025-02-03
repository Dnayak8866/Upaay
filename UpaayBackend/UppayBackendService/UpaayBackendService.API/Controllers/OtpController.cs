using Microsoft.AspNetCore.Mvc;
using UpaayBackendService.Application;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OtpController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;
        public OtpController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpPost("send-otp")]
        public async Task<IActionResult> CreateOtp(string emailid)
        {
            var createOtpHandler = _serviceProvider.GetRequiredService<IHandler<string, UserOtpResponse>>();
            var response = await createOtpHandler.HandleAsync(emailid);
            return Ok(response);
        }

        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyOtp(VerifyOtpRequest request)
        {
            var verfyOtpHandler = _serviceProvider.GetRequiredService<IHandler<VerifyOtpRequest, UserOtpResponse>>();
            var response = await verfyOtpHandler.HandleAsync(request);
            return Ok(response);
        }
    }
}

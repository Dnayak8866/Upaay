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

        [HttpPost("send")]
        public async Task<IActionResult> CreateOtp(OtpRequest request)
        {
            var createOtpHandler = _serviceProvider.GetRequiredService<IHandler<OtpRequest, UserOtpResponse>>();
            var response = await createOtpHandler.HandleAsync(request);
            return Ok(response);
        }

        [HttpPost("verify")]
        public async Task<IActionResult> VerifyOtp(VerifyOtpRequest request)
        {
            var verfyOtpHandler = _serviceProvider.GetRequiredService<IHandler<VerifyOtpRequest, UserOtpResponse>>();
            var response = await verfyOtpHandler.HandleAsync(request);
            return Ok(response);
        }
    }
}

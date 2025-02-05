using Microsoft.AspNetCore.Mvc;
using UpaayBackendService.Application;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;
        public AuthController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            var loginHandler = _serviceProvider.GetRequiredService<IHandler<LoginRequest, LoginResponse>>();
            var response = await loginHandler.HandleAsync(request);
            if (response !=null && !response.Success)
            {
                Unauthorized(response.Message);
            }
        
            return Ok(response);
        }

        [HttpPost("refresh-token")]
        public async Task<IActionResult> GetNewAccesTokenByReferenceToken(RefreshTokenRequest request)
        {
            var createAccessTokenHandler = _serviceProvider.GetRequiredService<IHandler<RefreshTokenRequest, LoginResponse>>();
            var response = await createAccessTokenHandler.HandleAsync(request);
            if (response != null && !response.Success)
            {
                Unauthorized(response.Message);
            }
            
            return Ok(response);
        }
    }
}

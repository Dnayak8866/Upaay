using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> RegisterClient(LoginRequest request)
        {
            var handler = _serviceProvider.GetRequiredService<IHandler<LoginRequest, LoginResponse>>();
            var response = await handler.HandleAsync(request);
            return Ok(response);
        }
    }
}

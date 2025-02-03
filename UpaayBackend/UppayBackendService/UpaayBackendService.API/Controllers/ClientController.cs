using Microsoft.AspNetCore.Mvc;
using UpaayBackendService.API.Models.Request;
using UpaayBackendService.Application;

namespace UpaayBackendService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;
        public ClientController(IServiceProvider serviceProvider) 
        {
            
            _serviceProvider = serviceProvider;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterClient(CreateClientRequest clientDetailRequest)
        {
            var createClientHandler = _serviceProvider.GetRequiredService<IHandler<CreateClientRequest, bool>>();
            var product = await createClientHandler.HandleAsync(clientDetailRequest);
            return Ok(product);
        }
    }
}

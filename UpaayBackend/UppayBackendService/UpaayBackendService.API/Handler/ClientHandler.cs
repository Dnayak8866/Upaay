using UpaayBackendService.API.Models.Request;
using UpaayBackendService.Application.IServices;

namespace UpaayBackendService.API.Handler
{
    public class ClientHandler : IHandler<CreateClientRequest, bool>
    {
        private readonly IClientService _clientService;
        public ClientHandler(IClientService clientService)
        {
            _clientService = clientService;
        }

        public async Task<bool> HandleAsync(CreateClientRequest request)
        {
            try
            {
                return await _clientService.RegisterClient(request);
            }
            catch (Exception )
            {
                throw;
            }
        }
    }
}
using UpaayBackendService.API.Models.Request;
namespace UpaayBackendService.Application.IServices;

public interface IClientService
{
    Task<bool> RegisterClient(CreateClientRequest clientDetailRequest);
}

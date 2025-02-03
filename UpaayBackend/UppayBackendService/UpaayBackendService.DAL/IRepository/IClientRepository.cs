using UpaayBackendService.DAL.Models;

namespace UpaayBackendService.DAL.IRepository;

public interface IClientRepository
{
    Task<bool> RegisterClient(Client client);
    Task<User> GetUserAsync(string email);
}

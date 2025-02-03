using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.Application.IServices;
public interface IAuthService
{
    Task<bool> LoginAsync(LoginRequest loginRequest);
}

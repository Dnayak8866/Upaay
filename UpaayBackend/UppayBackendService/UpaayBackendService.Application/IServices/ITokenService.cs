namespace UpaayBackendService.Application.IServices;

public interface ITokenService
{
    Task<string> GenerateToken();
}

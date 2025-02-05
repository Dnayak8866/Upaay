namespace UpaayBackendService.Application.IServices;

public interface IJwtTokenService
{
    string GenerateAccessToken(string email);
}

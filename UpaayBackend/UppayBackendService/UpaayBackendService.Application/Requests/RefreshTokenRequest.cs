namespace UpaayBackendService.Application.Requests;

public class RefreshTokenRequest
{
    public string Username { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
}

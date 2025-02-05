using System.Collections.Concurrent;
using UpaayBackendService.Application.IServices;

namespace UpaayBackendService.Application.Services
{

    public class RefreshTokenService : IRefreshTokenService
    {
        // In-memory storage (You can use a DB for persistent storage)
        private static readonly ConcurrentDictionary<string, string> _refreshTokens = new();
        public string CreateRefreshToken(string email)
        {
            var refreshToken = Guid.NewGuid().ToString();
            _refreshTokens[refreshToken] = email; 
            return refreshToken;
        }

        // Validate the refresh token (check if it exists and is valid for the given username)
        public bool ValidateRefreshToken(string refreshToken, string username)
        {
            if (_refreshTokens.ContainsKey(refreshToken) && _refreshTokens[refreshToken] == username)
            {
                return true;
            }
            return false;
        }

        // Revoke the refresh token
        public void RevokeRefreshToken(string refreshToken)
        {
            _refreshTokens.TryRemove(refreshToken, out _);
        }

     
    }
}

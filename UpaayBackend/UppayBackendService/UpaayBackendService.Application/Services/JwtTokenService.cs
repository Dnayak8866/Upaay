using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using UpaayBackendService.Application.DTOs;
using UpaayBackendService.Application.IServices;

namespace UpaayBackendService.Application.Services
{
    public class JwtTokenService : IJwtTokenService
    {
        private readonly JwtConfigurations _appSettings;
        public JwtTokenService(IOptions<JwtConfigurations> appSettings) {

            _appSettings = appSettings.Value;
        }

        public string GenerateAccessToken(string email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.SecretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, email),
                    new Claim(ClaimTypes.Role, "Admin") // Add roles if needed and use in  [Authorize(Roles = "Admin")]
                }),
                Expires = DateTime.UtcNow.AddHours(1), // Token expiry time
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = "yourdomain.com",
                Audience = "yourdomain.com"
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.Application.IServices
{
    public interface IRefreshTokenService
    {
        string CreateRefreshToken(string username);
        bool ValidateRefreshToken(string refreshToken, string username);
        void RevokeRefreshToken(string refreshToken);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Identity.Client;
using UpaayBackendService.Application.IServices;

namespace UpaayBackendService.Application.Services
{
    public class TokenService : ITokenService
    {
        public Task<string> GenerateToken()
        {
            throw new NotImplementedException();
        }
    }
}

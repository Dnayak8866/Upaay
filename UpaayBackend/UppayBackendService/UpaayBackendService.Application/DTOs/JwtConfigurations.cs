using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.Application.DTOs
{
    public class JwtConfigurations
    {
        public string SecretKey { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string TokenExpiryInMinutes { get; set; }
    }

}

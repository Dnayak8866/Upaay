using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.API.Models.Request;
using UpaayBackendService.DAL.Models;
using UpaayBackendService.Shared.Model;

namespace UpaayBackendService.Application.IServices
{
    public interface IClientService
    {
        Task<bool> RegisterClient(CreateClientRequest clientDetailRequest);
    }
}

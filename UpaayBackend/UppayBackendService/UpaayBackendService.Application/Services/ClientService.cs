using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Shared.Model;
using UpaayBackendService.API.Models.Request;
using UpaayBackendService.DAL.Models;
using AutoMapper;

namespace UpaayBackendService.Application.Services
{
    public class ClientService : IClientService

    {
        private readonly IClientRepository _clientRepository;
        private readonly IMapper _mapper;
        public ClientService(IClientRepository clientRepository, IMapper mapper)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
        }
        public async Task<bool> RegisterClient(CreateClientRequest clientDetailRequest)
        {
            try
            {
                //Autmapper to mapp ClientDetailRequest to ClientDetail
                 var client =  _mapper.Map<Client>(clientDetailRequest);

                return await _clientRepository.RegisterClient(client);
            }
            catch
            {
                throw;
            }
        }
    }
}

using AutoMapper;
using UpaayBackendService.API.Models.Request;
using UpaayBackendService.Application.DTOs;
using UpaayBackendService.DAL.Models;
using UpaayBackendService.Shared.Model;

namespace UpaayBackendService.Application.Automapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile() {
            CreateMap<CreateClientRequest, Client>()
                .ForMember(dest => dest.PersonalDetails, opt => opt.MapFrom(src => src.PersonalDetail))
                .ForMember(dest => dest.AddressDetail, opt => opt.MapFrom(src => src.AddressDeatil))
                .ForMember(dest => dest.BankDetails, opt => opt.MapFrom(src => src.BankDeatil));
            CreateMap<ClientPersonalDetailDTO, ClientPersonalDetails>();
            CreateMap<ClientAddressDeatilDTO, ClientAddressDetail>();
            CreateMap<ClientBankDeatilDTO, ClientBankDetails>();
        }

   

    }
}

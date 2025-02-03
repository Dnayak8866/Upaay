using UpaayBackendService.Application.DTOs;
using UpaayBackendService.Shared.Model;

namespace UpaayBackendService.API.Models.Request;
public class CreateClientRequest 
{
   public ClientPersonalDetailDTO PersonalDetail { get; set; }
   public ClientAddressDeatilDTO AddressDeatil { get; set; }
   public ClientBankDeatilDTO BankDeatil { get; set; }
}

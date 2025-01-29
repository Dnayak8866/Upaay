using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.DAL.Models
{
    public class Client
    {
        public ClientPersonalDetails PersonalDetails { get; set; }
        public ClientAddressDetail AddressDetail { get; set; }
        public ClientBankDetails BankDetails { get; set; }
    }
}

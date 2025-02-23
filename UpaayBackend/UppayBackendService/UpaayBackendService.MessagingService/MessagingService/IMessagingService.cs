using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.MessagingService.MessagingService
{
    public interface IMessagingService
    {
        Task Send(string templateName, string to, string subject, Dictionary<string, string> placeholders);
    }
}

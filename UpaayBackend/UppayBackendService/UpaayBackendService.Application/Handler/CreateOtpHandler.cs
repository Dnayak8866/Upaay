using System.Security.Cryptography.X509Certificates;
using UpaayBackendService.API.Models.Request;
using UpaayBackendService.Application;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;
using UpaayBackendService.MessagingService;
using UpaayBackendService.MessagingService.MessagingService;
using UpaayBackendService.Shared;

namespace UpaayBackendService.API.Handler
{
    public class CreateOtpHandler : IHandler<OtpRequest, UserOtpResponse>
    {
        private readonly IOtpService _otpService;
        private readonly IMessagingService _messagingService;
        public CreateOtpHandler(IOtpService otpService, IMessagingService messagingService)
        {
            _otpService = otpService;
            _messagingService = messagingService;
        }
        public async Task<UserOtpResponse> HandleAsync(OtpRequest request)
        {
            var response = new UserOtpResponse();
            var otp = await _otpService.CreateOtp(request.Email);
            if (otp == null)
            {
                return new UserOtpResponse() { Message=ResponseMessages.UserNotFound, Success=false};
            }
            const string subject = "Verification Code for Your Account Access";
            var dict = new Dictionary<string, string>();
            dict.Add("{{UserName}}", request.Email);
            dict.Add("{{OTP}}", Convert.ToString(otp));

            await _messagingService.Send(Constants.SENDOTPTEMPLATE, request.Email, subject, dict);
            
            return new UserOtpResponse() { Message = ResponseMessages.OtpSent,Success = true}; ;
        }

      
    }
}

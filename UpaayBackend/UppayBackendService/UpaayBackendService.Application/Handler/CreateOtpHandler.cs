using UpaayBackendService.API.Models.Request;
using UpaayBackendService.Application;
using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Response;
using UpaayBackendService.Shared;

namespace UpaayBackendService.API.Handler
{
    public class CreateOtpHandler : IHandler<string, UserOtpResponse>
    {
        private readonly IOtpService _otpService;
        public CreateOtpHandler(IOtpService otpService)
        {
            _otpService = otpService;
        }
        public async Task<UserOtpResponse> HandleAsync(string emailid)
        {
            var response = new UserOtpResponse();
            var isCreated = await _otpService.CreateOtp(emailid);
            if (!isCreated)
            {
                return new UserOtpResponse() { Message=ResponseMessages.UserNotFound,Success=false};
                
            }
            //Send Email using Email service
            return new UserOtpResponse() { Message = ResponseMessages.OtpSent,Success = true}; ;
        }

      
    }
}

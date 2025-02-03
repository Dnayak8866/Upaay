using UpaayBackendService.Application.IServices;
using UpaayBackendService.Application.Requests;
using UpaayBackendService.Application.Response;

namespace UpaayBackendService.Application.Handler
{
    public class VerifyOtpHanlder : IHandler<VerifyOtpRequest, UserOtpResponse>
    {
        private readonly IOtpService _otpService;
        public VerifyOtpHanlder(IOtpService otpService)
        {
            _otpService = otpService;
        }
      

        public async Task<UserOtpResponse> HandleAsync(VerifyOtpRequest request)
        {
            var otpResponse = await _otpService.VerifyOtp(request.Otp,request.EmailId);
            //Send Email using Email service
            return   new UserOtpResponse() { Message = otpResponse.Message, Success = otpResponse.Success };
        }


    
    }
}

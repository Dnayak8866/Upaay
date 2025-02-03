namespace UpaayBackendService.Application.Requests;
public class VerifyOtpRequest
{
    public int Otp { get; set; }
    public string EmailId { get; set; }
}

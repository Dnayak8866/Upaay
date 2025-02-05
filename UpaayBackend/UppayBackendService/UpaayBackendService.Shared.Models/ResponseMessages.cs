using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.Shared
{
    public static  class ResponseMessages
    {
        // ✅ Success Messages
        public const string OtpSent = "OTP has been sent successfully.";
        public const string OtpVerified = "OTP verified successfully.";
        public const string UserRegistered = "User registered successfully.";
        public const string PasswordReset = "Password reset successfully.";
        public const string AuthorizedAccess = "Authorized access.";

        // ❌ Error Messages
        public const string InvalidOtp = "Invalid OTP. Please try again.";
        public const string OtpExpired = "OTP has expired. Please request a new one.";
        public const string UserNotFound = "User not found.";
        public const string UnauthorizedAccess = "Unauthorized access.";
        public const string InvalidRefreshToken = "Invalid RefreshToken.";

        // ⚠️ Validation Messages
        public const string RequiredField = "This field is required.";
        public const string InvalidEmail = "Invalid email format.";
    }
}

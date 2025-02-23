using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.MessagingService.Helper;
using System.Net.Mime;
using System.Reflection;
using System.Net.Security;
using System.IO;

namespace UpaayBackendService.MessagingService.MessagingService
{
    public class EmailService : IMessagingService
    {
        private string _email;
        private string _password;
        private string _server;
        private int _port;

        public EmailService(string server, int port, string email, string password)
        {
            _email = email;
            _password = password;
            _server = server;
            _port = port;
        }

        public async Task Send(string templateName, string to, string subject, Dictionary<string, string> placeholders)
        {
            await SendEmailAsync(to, subject, templateName, placeholders);
        }

        public async Task SendEmailAsync(string toEmail, string subject, string templateResource, Dictionary<string, string> placeholders)
        {
            string body = TemplateLoader.LoadTemplate(templateResource);

            // Replace placeholders
            foreach (var placeholder in placeholders)
            {
                body = body.Replace(placeholder.Key, placeholder.Value);
            }

            using (MailMessage mail = new MailMessage())
            {
                var assembly = Assembly.GetExecutingAssembly();
                string fullResourceName = $"{assembly.GetName().Name}.{Constants.Logo.Replace("/", ".")}";

                using (Stream stream = assembly.GetManifestResourceStream(fullResourceName))
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    stream.CopyTo(memoryStream);
                    memoryStream.Position = 0;
                    string[] resources = Assembly.GetExecutingAssembly().GetManifestResourceNames();

                    LinkedResource svgImage = new LinkedResource(memoryStream, "image/png");
                    svgImage.ContentId = "logo";
                    svgImage.ContentType = new ContentType("image/png");
                    svgImage.TransferEncoding = TransferEncoding.Base64;

                    AlternateView htmlView = AlternateView.CreateAlternateViewFromString(body, null, MediaTypeNames.Text.Html);
                    htmlView.LinkedResources.Add(svgImage);
                    mail.AlternateViews.Add(htmlView);

                    mail.From = new MailAddress(_email);
                    mail.To.Add(toEmail);
                    mail.Subject = subject;

                    using (SmtpClient smtp = new SmtpClient(_server, _port))
                    {
                        smtp.Credentials = new NetworkCredential(_email, _password);
                        smtp.EnableSsl = true;
                        smtp.UseDefaultCredentials = false;
                        await smtp.SendMailAsync(mail);
                    }
                }
            }
        }
    }
}

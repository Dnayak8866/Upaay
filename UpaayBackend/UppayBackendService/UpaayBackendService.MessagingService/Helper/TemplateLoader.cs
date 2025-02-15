using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Security;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.MessagingService.Helper
{
    public class TemplateLoader
    {
        public static string LoadTemplate(string resourceName)
        {
            var assembly = Assembly.GetExecutingAssembly();
            string fullResourceName = $"{assembly.GetName().Name}.{resourceName.Replace("/", ".")}";

            using (Stream stream = assembly.GetManifestResourceStream(fullResourceName))
            using (StreamReader reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
    }
}

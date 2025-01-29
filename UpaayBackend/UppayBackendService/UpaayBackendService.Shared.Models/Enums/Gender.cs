using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.Shared.Enums
{
    public enum Gender
    {
        [Description("Male")]
        Male,

        [Description("Female")]
        Female,

        [Description("Transgender")]
        Transgender
    }
}

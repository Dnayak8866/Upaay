using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.Shared.Enums
{
    public enum MarritalStatus
    {
        [Description("Married")]
        Married,

        [Description("Unmarried")]
        Unmarried,

        [Description("Other")]
        Other
    }
}

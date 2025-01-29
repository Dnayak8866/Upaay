using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpaayBackendService.Shared.Enums
{
    public enum AnnualIncome
    {
        [Description("Upto ₹ 1,00,000")]
        UpToOneLakh,

        [Description("₹ 1,00,001 - ₹ 5,00,000")]
        OneLakhToFiveLakh,

        [Description("₹ 5,00,001 - ₹ 10,00,000")]
        FiveLakhToTenLakh,

        [Description("₹ 10,00,001 - ₹ 25,00,000")]
        TenLakhToTwentyFiveLakh,

        [Description("₹ 25,00,001 - ₹ 1,00,00,000")]
        TwentyFiveLakhToOneCrore,

        [Description("More Than ₹ 1,00,00,000")]
        MoreThanOneCrore
    }
}

using System.ComponentModel;

namespace UpaayBackendService.DAL.Enums
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

    public enum Occupation
    {
        [Description("Business")]
        Business,

        [Description("Professional")]
        Professional,

        [Description("Retired")]
        Retired,

        [Description("Student")]
        Student,

        [Description("Forex Dealer")]
        ForexDealer,

        [Description("Public Sector")]
        PublicSector,

        [Description("Private Sector Service")]
        PrivateSectorService,

        [Description("Agriculturist")]
        Agriculturist,

        [Description("Housewife")]
        Housewife,

        [Description("Government Service")]
        GovernmentService,

        [Description("Self Employed")]
        SelfEmployed,

        [Description("Other")]
        Other
    }

    public enum MarritalStatus
    {
        [Description("Married")]
        Married,

        [Description("Unmarried")]
        Unmarried,

        [Description("Other")]
        Other
    }

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

    public enum RelationType
    {
        [Description("Father")]
        Father,

        [Description("Spouse")]
        Spouse
    }
}

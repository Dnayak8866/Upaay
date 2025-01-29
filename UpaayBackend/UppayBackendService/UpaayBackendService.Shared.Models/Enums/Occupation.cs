using System.ComponentModel;

namespace UpaayBackendService.Shared.Enums
{
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
}

using System.ComponentModel.DataAnnotations;
using UpaayBackendService.DAL.Enums;

namespace UpaayBackendService.DAL.Models
{
    public class ClientDetails
    {
        [Key]
        public int ClientId { get; set; }

        [Required]
        [MaxLength(300, ErrorMessage = "Name cannot exceed 300 characters")]
        public string Name { get; set; }

        [Required]
        [Range(1000000000, 9999999999, ErrorMessage = "Mobile number must be a valid 10-digit number")]
        public long MobileNo { get; set; }

        public bool IsMobileNoVerified { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; }

        public bool IsEmailVerified { get; set; }

        [Required]
        [RegularExpression(@"[A-Z]{5}[0-9]{4}[A-Z]{1}", ErrorMessage = "Invalid PAN Card format")]
        public string PanCardNo { get; set; }

        [Required]
        [RegularExpression(@"\d{12}", ErrorMessage = "Aadhar Card number must be 12 digits")]
        public string AadharCardNo { get; set; }

        [Required]
        public DateOnly DateOfBirth { get;set; }

        /// <summary>
        /// Gender -> Male Female, Transgender
        /// </summary>
        [Required]
        [EnumDataType(typeof(Gender), ErrorMessage = "Invalid gender type")]
        public Gender Gender { get; set; }

        /// <summary>
        /// Marrital Status -> Married, unmarried, Other
        /// </summary>
        /// 
        [Required]
        [EnumDataType(typeof(MarritalStatus), ErrorMessage = "Invalid marital status")]
        public MarritalStatus MaritalStatus { get; set; }

        /// <summary>
        /// Relation Type -> Father, Spouse
        /// </summary>
     
        [Required]
        [EnumDataType(typeof(RelationType), ErrorMessage = "Invalid relation type")]
        public RelationType RelationType { get; set; }

        [Required]
        [MaxLength(300, ErrorMessage = "Relation Name cannot exceed 50 characters")]
        public string RelationName { get; set; }

        [Required]
        public byte[] ProfilePhoto { get; set; }

        [Required]
        public byte[] Signature { get; set; }

        [Required]
        public bool IsPanVerified { get; set; }

        //check salary property may be enum 

        [Required]
        [EnumDataType(typeof(AnnualIncome), ErrorMessage = "Invalid annual income")]
        public AnnualIncome AnnualIncome { get; set; }

        [Required]
        [EnumDataType(typeof(Occupation), ErrorMessage = "Invalid occupation")]
        public Occupation Occupation { get; set; }
    }
}

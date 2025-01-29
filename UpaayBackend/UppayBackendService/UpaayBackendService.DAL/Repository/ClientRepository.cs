using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Models;

namespace UpaayBackendService.DAL.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly UpaayDbContext _dbContext;
        public ClientRepository(UpaayDbContext dbContext)
        {
            _dbContext = dbContext;

        }

        public async Task<bool> RegisterClient(Client client)
        {

            //TODO: here we will add clientdetails,ClientFatcaDetails,ClientBankDetails,ClientAddressDetails in one transaction
            try
            {
                client.PersonalDetails.CreatedBy = client.PersonalDetails.Email;
                await _dbContext.ClientDetails.AddAsync(client.PersonalDetails);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch(Exception ex)
            {
                throw;
            }
           
        }
    }
}

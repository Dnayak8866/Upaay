using Microsoft.EntityFrameworkCore;
using UpaayBackendService.DAL.IRepository;
using UpaayBackendService.DAL.Models;

namespace UpaayBackendService.DAL.Repository
{
    public class UserRepository  :  IUserRepository
    {
        private readonly UpaayDbContext _dbContext;
        public UserRepository(UpaayDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User> GetUserAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email.ToLower() ==  email.ToLower());
        }

        public async Task<bool> ResetPassword(string email, string password)
        {
            var user = await GetUserAsync(email);
            if(user == null)
            {
                return false;
            }

            user.Password = password;
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}

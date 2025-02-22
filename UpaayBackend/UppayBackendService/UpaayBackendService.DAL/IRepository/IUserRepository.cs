using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UpaayBackendService.DAL.Models;

namespace UpaayBackendService.DAL.IRepository
{
    public interface IUserRepository
    {
        Task<User> GetUserAsync(string email);
        Task<bool> ResetPassword(string email, string password);
    }
}

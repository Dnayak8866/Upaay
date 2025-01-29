namespace UpaayBackendService.API
{
    public interface IHandler<Trequest, Tresponse>
    {
        Task<Tresponse> HandleAsync(Trequest request);
    }
}

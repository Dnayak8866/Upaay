namespace UpaayBackendService.Application;
public interface IHandler<Trequest, Tresponse>
{
    Task<Tresponse> HandleAsync(Trequest request);
}

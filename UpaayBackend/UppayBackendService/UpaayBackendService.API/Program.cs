using UpaayBackendService.API;
using UpaayBackendService.Host;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//Initialize DB context here
//builder.Services.AddDbContext<UpaayDbContext>(options =>
//options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var assembly = typeof(Program).Assembly; // Get the current assembly

var handlerTypes = assembly.GetTypes()
    .Where(t => !t.IsAbstract && !t.IsInterface) // Exclude interfaces and abstract classes
    .SelectMany(t => t.GetInterfaces()
        .Where(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IHandler<,>))
        .Select(i => new { Interface = i, Implementation = t }));

foreach (var handler in handlerTypes)
{
    builder.Services.AddScoped(handler.Interface, handler.Implementation);
}

//Register Services with dependency injection
//This will call the centralized host project for initializing services....
builder.Services.AddApplicationServicesDependency();
builder.Services.AddDataContextServicesDependency(builder.Configuration);

//builder.Services.AddScoped<IClientRepository, ClientRepository>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
    
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

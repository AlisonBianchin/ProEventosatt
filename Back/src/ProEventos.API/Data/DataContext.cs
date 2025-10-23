namespace ProEventos.API.Data
{
    using Microsoft.EntityFrameworkCore;
    using ProEventos.API.Models;

    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
            public DbSet<Evento> Eventos { get; set; }  


            
    }
}
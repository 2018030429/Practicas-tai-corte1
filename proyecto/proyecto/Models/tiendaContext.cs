using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace proyecto.Models
{
    public partial class tiendaContext : DbContext
    {
        public tiendaContext()
        {
        }

        public tiendaContext(DbContextOptions<tiendaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Productos> Productos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=;database=tienda");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Productos>(entity =>
            {
                entity.ToTable("productos");

                entity.Property(e => e.Id).HasColumnType("bigint(20)");

                entity.Property(e => e.Descripcion).IsRequired();

                entity.Property(e => e.ImgSrc)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

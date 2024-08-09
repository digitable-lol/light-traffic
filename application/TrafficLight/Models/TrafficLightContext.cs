using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TrafficLight.Models;

public partial class TrafficLightContext : DbContext
{
    public TrafficLightContext()
    {
    }

    public TrafficLightContext(DbContextOptions<TrafficLightContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<Report> Reports { get; set; }

    public virtual DbSet<Stage> Stages { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Database=TrafficLight;Username=trafficlight;Password=123456789");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Project_pkey");

            entity.ToTable("Project");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.ActualStartDate).HasColumnName("actual_start_date");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.EstimatedStartDate).HasColumnName("estimated_start_date");
            entity.Property(e => e.Name).HasColumnName("name");
        });

        modelBuilder.Entity<Report>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Report_pkey");

            entity.ToTable("Report");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.AnyVacation).HasColumnName("any_vacation");
            entity.Property(e => e.FinishDate).HasColumnName("finish_date");
            entity.Property(e => e.GreenComment).HasColumnName("green_comment");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.Other).HasColumnName("other");
            entity.Property(e => e.ProjectId).HasColumnName("project_id");
            entity.Property(e => e.RedComment).HasColumnName("red_comment");
            entity.Property(e => e.StagesId).HasColumnName("stages_id");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.YellowComment).HasColumnName("yellow_comment");
            entity.Property(e => e.YouVacation).HasColumnName("you_vacation");

            entity.HasOne(d => d.Project).WithMany(p => p.Reports)
                .HasForeignKey(d => d.ProjectId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("project_fkey");

            entity.HasOne(d => d.Stages).WithMany(p => p.Reports)
                .HasForeignKey(d => d.StagesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("stages_fkey");
        });

        modelBuilder.Entity<Stage>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Stages_pkey");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");
            entity.Property(e => e.Name).HasColumnName("name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

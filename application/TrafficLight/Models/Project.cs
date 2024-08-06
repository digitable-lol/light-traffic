using System;
using System.Collections.Generic;

namespace TrafficLight.Models;

public partial class Project
{
    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public DateOnly? EstimatedStartDate { get; set; }

    public DateOnly? ActualStartDate { get; set; }

    public int Id { get; set; }

    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();
}

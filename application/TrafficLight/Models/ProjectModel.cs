namespace TrafficLight.Models;

public class Project
{
    public int Id
    {
        get;
        set;
    }
    public string Name
    {
        get;
        set;
    }
    public string Description
    {
        get;
        set;
    }
    public DateOnly EstimatedStartDate
    {
        get;
        set;
    }
    public DateOnly ActualStartDate
    {
        get;
        set;
    }

    public ICollection<Report> Reports { get; set; }

    public Project()
    {
        Reports = new List<Report>();
    }
}

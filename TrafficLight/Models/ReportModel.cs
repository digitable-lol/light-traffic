namespace TrafficLight.Models;
public class Report
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

	public DateOnly StartDate
	{
		get;
		set;
	}
	public DateOnly FinishDate
	{
		get;
		set;
	}

	public string GreenComment
	{
		get;
		set;
	}
	public string YellowComment
	{
		get;
		set;
	}
	public string RedComment
	{
		get;
		set;
	}

	public string AnyVacation
	{
		get;
		set;
	}
	public string YouVacation
	{
		get;
		set;
	}

	public string Other
	{
		get;
		set;
	}

	public int StagesId { get; set; }
	public Stages Stages { get; set; }

	public int ProjectId { get; set; }
	public Project Project { get; set; }
}
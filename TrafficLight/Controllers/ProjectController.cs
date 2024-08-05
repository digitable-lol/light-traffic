using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrafficLight.Models;


[Route("api/[controller]")]
[ApiController]
public class ProjectController : Controller
{

	private readonly TrafficLightContext _context;

	public ProjectController(TrafficLightContext context)
	{
		_context = context;
	}

	[HttpGet]
	public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
	{
		return await _context.Projects.Include(p => p.Reports).ToListAsync();
	}

	[HttpGet("test-connection")]
	public async Task<ActionResult<string>> TestConnection()
	{
		try
		{
			// Пытаемся выполнить простую операцию: получить количество проектов в базе данных
			var count = await _context.Projects.CountAsync();
			return Ok($"Connection successful! Number of projects in the database: {count}");
		}
		catch (Exception ex)
		{
			// Если произошла ошибка, возвращаем сообщение об ошибке
			return StatusCode(500, $"Connection failed: {ex.Message}");
		}
	}

}
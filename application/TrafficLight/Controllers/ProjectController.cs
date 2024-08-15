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

	[HttpGet("{id}")]
	public async Task<ActionResult<Project>> GetProject(int id)
	{
		var project = await _context.Projects.Include(p => p.Reports).FirstOrDefaultAsync(p => p.Id == id);

		if (project == null)
		{
			return NotFound();
		}

		return project;
	}

	[HttpPost]
	public async Task<ActionResult<Project>> PostProject(Project project)
	{
		_context.Projects.Add(project);
		await _context.SaveChangesAsync();

		return CreatedAtAction(nameof(GetProject), new { id = project.Id }, project);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> PutProject(int id, Project project)
	{
		if (id != project.Id)
		{
			return BadRequest();
		}

		_context.Entry(project).State = EntityState.Modified;

		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException)
		{
			if (!ProjectExists(id))
			{
				return NotFound();
			}
			else
			{
				throw;
			}
		}

		return NoContent();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteProject(int id)
	{
		var project = await _context.Projects.FindAsync(id);
		if (project == null)
		{
			return NotFound();
		}

		_context.Projects.Remove(project);
		await _context.SaveChangesAsync();

		return NoContent();
	}

	private bool ProjectExists(int id)
	{
		return _context.Projects.Any(e => e.Id == id);
	}

	// [HttpGet("test-connection")]
	// public async Task<ActionResult<string>> TestConnection()
	// {
	// 	try
	// 	{
	// 		var count = await _context.Projects.CountAsync();
	// 		return Ok($"Connection successful! Number of projects in the database: {count}");
	// 	}
	// 	catch (Exception ex)
	// 	{
	// 		return StatusCode(500, $"Connection failed: {ex.Message}");
	// 	}
	// }

}
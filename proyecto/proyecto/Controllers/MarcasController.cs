using Microsoft.AspNetCore.Mvc;
using proyecto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proyecto.Controllers
{
    [Route("api/marcas")]
    [ApiController]
    public class MarcasController : ControllerBase
    {
        // GET: api/marcas
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                tiendaContext db = new tiendaContext();

                // Lista de marcas -> SELECT * FROM marcas;
                List<Marcas> ListMarcas = db.Marcas.ToList();

                return Ok(ListMarcas);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/<MarcasController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MarcasController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MarcasController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MarcasController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

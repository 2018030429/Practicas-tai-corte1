using Microsoft.AspNetCore.Mvc;
using proyecto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proyecto.Controllers
{
    [Route("api/productos")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        // GET: api/productos
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                tiendaContext db = new tiendaContext();

                // Lista de productos -> SELECT * FROM productos;
                List<Productos> ListProductos = db.Productos.ToList();

                return Ok(ListProductos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/productos/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST api/productos
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/productos/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/productos/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

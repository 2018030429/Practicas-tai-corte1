using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using proyecto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proyecto.Controllers
{
    //[Authorize]
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
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(long id)
        {
            try
            {
                tiendaContext db = new tiendaContext();

                // SELECT * FROM productos WHERE id = ?
                // Productos Producto = db.Productos.Find(id);
                Productos Producto = db.Productos.Where( a => a.Id == id).SingleOrDefault();

                return Ok(Producto);
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }

        // GET api/productos/reference
        [HttpGet("buscar/{texto}", Name="GetBusqueda")]
        public IActionResult GetBusqueda(string texto)
        {
            try
            {
                if (texto.Length < 3) return Ok();

                tiendaContext db = new tiendaContext();

                // SELECT * FROM productos WHERE nombre LIKE "%texto%";
                List<Productos> ListProductos = db.Productos.Where(b => b.Nombre.Contains(texto)).ToList();

                return Ok(ListProductos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        // POST api/productos
        [HttpPost]
        public IActionResult Post([FromBody] Productos value)
        {
            try 
            {
                tiendaContext db = new tiendaContext();

                value.ImgSrc = "http://localhost:5000/homepod.png";

                db.Productos.Add(value);

                db.SaveChanges();

                return Ok(value);
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }

        // PUT api/productos/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/productos/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            try
            {
                tiendaContext db = new tiendaContext();

                Productos item = db.Productos.Find(id);

                db.Productos.Remove(item);

                db.SaveChanges();

                return Ok();
            }
            catch (Exception err)
            {
                return BadRequest(err.Message);
            }
        }
    }
}

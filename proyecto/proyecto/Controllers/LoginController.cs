using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using proyecto.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // GET: api/<LoginController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LoginController>/5
        [HttpGet("{id}", Name = "GetLogin")]
        public string GetLogin(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Post([FromBody] Usuarios value)
        {
            try
            {
                tiendaContext db = new tiendaContext();

                Usuarios usuarios = db.Usuarios
                                        .Where(u => u.Username == value.Username && u.Password == value.Password)
                                            .SingleOrDefault();

                if (usuarios == null) throw new Exception("Username or Password incorrect.");

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("KeyForSignInUpsin@2021"));
                var siginCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                List<Claim> ListClaim = new List<Claim>
                {
                    new Claim("username", usuarios.Username),
                    new Claim("test","upsin")
                };

                var tokenOptions = new JwtSecurityToken(
                    issuer: "http://localhost:2000",
                    audience: "http://localhost:2000",
                    claims: ListClaim,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: siginCredentials
                );

                var TokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                return Ok(new { token = TokenString });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

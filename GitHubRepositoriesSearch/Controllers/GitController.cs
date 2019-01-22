using GitHubRepositoriesSearch.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GitHubRepositoriesSearch.Controllers
{
    public class GitController : ApiController
    {
        // get booked repositories from session
        [HttpGet]
        [Route("api/Git/GetBookedRepositories")]
        public IEnumerable<Gitrepoinfo> GetBookedRepositories()
        {
            List<Gitrepoinfo> repositories = new List<Gitrepoinfo>();

            foreach (var key in HttpContext.Current.Session.Keys)
            {
                repositories.Add(HttpContext.Current.Session[key.ToString()] as Gitrepoinfo);
            }

            return repositories;
        }

        // save repository to session
        [HttpPost]
        [Route("api/Git/BookRepository")]
        public void BookRepository([FromBody]Gitrepoinfo value)
        {
            // session key is the repoUrl because is unique
            HttpContext.Current.Session.Add(value.repoUrl, value);
        }
    }
}

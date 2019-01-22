using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

// Data object same as in client side
namespace GitHubRepositoriesSearch.Models
{
    public class Gitrepoinfo
    {
        public Gitrepoinfo()
        {

        }

        // repository name
        public string name { get; set; }

        // repository url
        public string repoUrl { get; set; }

        // owner avatar
        public string avatar { get; set; }
    }
}
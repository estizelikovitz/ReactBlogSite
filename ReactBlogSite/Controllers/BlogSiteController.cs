using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactBlogSite.Data;
using ReactBlogSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlogSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogSiteController : ControllerBase
    {
        private string _connectionString;

        public BlogSiteController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addblog")]
        public void Addblog(Blog blog)
        {
            var repo = new Repository(_connectionString);
            blog.Date = DateTime.Now;
            repo.AddBlog(blog);
        }

        [HttpPost]
        [Route("addcomment")]
        public void AddComment(AddCommentVM vm)
        {
            var repo = new Repository(_connectionString);
            Comment comment = new();
            comment.Name = vm.Name;
            comment.Text = vm.Text;
            //comment.Blog = vm.Blog;
            comment.Date = DateTime.Now;
            comment.BlogId = vm.BlogId;
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getblogs")]
        public List<Blog> GetBlogs(int page)
        {
            int amountPerPage = 3;
            int skip = (page - 1) * amountPerPage;
            //if (pageNumber == 0)
            //{
            //    skip = 0;
            //}
            var repo = new Repository(_connectionString);
            return repo.GetBlogs(skip, amountPerPage);
        }


        [HttpGet]
        [Route("getblog")]
        public Blog GetBlog(int id)
        {
            var repo = new Repository(_connectionString);
            return repo.GetAllBlogs().FirstOrDefault(b=>b.Id==id);
        }

        [HttpGet]
        [Route("getmostrecent")]
        public Blog GetMostRecent()
        {
            var repo = new Repository(_connectionString);
            return repo.MostRecent();
        }
    }
}

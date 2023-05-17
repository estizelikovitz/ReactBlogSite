using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlogSite.Data
{
    public class Repository
    {
        private string _connectionString;

        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Blog> GetBlogs()
        {
            using var context = new DataContext(_connectionString);
            return context.Blogs.Include(b => b.Comments).ToList();

        }
        public List<Comment> GetComments(int id)
        {
            using var context = new DataContext(_connectionString);
            return context.Comments.Where(c => c.BlogId == id).ToList();
        }
        public void AddBlog(Blog blog)
        {
            using var context = new DataContext(_connectionString);
            context.Blogs.Add(blog);
            context.SaveChanges();
        }
        public void AddComment(Comment comment)
        {
            using var context = new DataContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }
        public Blog MostRecent()
        {
            using var context = new DataContext(_connectionString);
            return context.Blogs.Include(b=>b.Comments).OrderByDescending(b => b.Date).First();
        }
    }
}

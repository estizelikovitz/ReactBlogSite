using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ReactBlogSite.Data
{
    public class Comment
    {
        public string Name { get; set; }
        public string Text { get; set; }
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int BlogId { get; set; }
        [JsonIgnore]
        public Blog Blog { get; set; }
    }
}

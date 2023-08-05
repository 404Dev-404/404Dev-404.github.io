const blog_file = "./blog.json";
var blog;
async function get_blog_file(b) {
    blog = await fetch(b);
}

get_blog_file(blog_file);

console.log(blog);
function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Components",
            author: "Admin"
        },
        {
            id: 2,
            title: "Conditional Rendering",
            author: "John"
        }
    ];

    return (

        <div>

            <h2>Blog Details</h2>

            {
                blogs.map(blog => (

                    <div key={blog.id}>
                        <p><b>{blog.title}</b></p>
                        <p>{blog.author}</p>
                    </div>

                ))
            }

        </div>

    );

}

export default BlogDetails;

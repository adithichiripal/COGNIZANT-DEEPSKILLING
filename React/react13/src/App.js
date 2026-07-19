import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div>

            <h1>Blogger App</h1>

            {/* Using && Operator */}
            {showBooks && <BookDetails />}

            {/* Using Ternary Operator */}
            {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

            {/* Using if-else */}
            {(() => {
                if (showCourses)
                    return <CourseDetails />;
                else
                    return <h3>No Courses Available</h3>;
            })()}

        </div>

    );

}

export default App;

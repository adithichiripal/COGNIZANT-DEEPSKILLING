function BookDetails() {

    const books = [
        {
            id: 1,
            name: "Java Programming",
            author: "James Gosling"
        },
        {
            id: 2,
            name: "React Basics",
            author: "Jordan Walke"
        }
    ];

    return (

        <div>

            <h2>Book Details</h2>

            {
                books.map(book => (

                    <div key={book.id}>
                        <p><b>{book.name}</b></p>
                        <p>{book.author}</p>
                    </div>

                ))
            }

        </div>

    );

}

export default BookDetails;

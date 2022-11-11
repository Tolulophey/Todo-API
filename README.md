# Book API

## Getting Started

### Pre-requisites and Local Development 
Developers using this project should already have Node installed on their local machines.

#### Setting Up

To get started open your terminal and clone this repository by running the code below
```
git clone https://github.com/Tolulophey/Book-API.git
```
Move into the cloned directory by running
```
cd REST-API-with-express-Book-API
```
You can then install all the dependencies for the project by runing the code below inside your terminal in the project directory
```
npm install
```

After installing all the dependencies, to start the server run the code below inside your terminal
```
npm start
```

These commands put the application in development mode and directs our application to use the index.js file.

## Booking Flight API Reference

### Getting Started
- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted at the default, `http://127.0.0.1:4000/` except if another port is specified. 
- Authentication: This version of the application does not require authentication or API keys. 


**Note: All https requests can be make using postman app or any other similar app or extension**

### Error Handling
Errors are returned as JSON objects in the following format:
```
{
    "message": "resource not found"
}
```
The API will return four error types when requests fail:
- 400: Bad request
- 404: Resource Not Found
- 500: Server error 

### Endpoints 

#### POST /books
- General:
    - create a new book relative to the details supllied
    - Request Body: the body will be passed as a rawjson data
    ```
    {
        "title": "Moving Height",
        "author": "John Smith",
        "description": "A book on moving height",
        "category": "fiction",
        "purchaseCount": 30,
        "imageUrl": "https://randomlink.com",
        "tags": ["fiction", "moving", "inspirational", "height"]
    }
    ```
    - Returns: a single new book object
- Sample: `http://127.0.0.1:3000/books`
```
{
    "message": "Books",
    "books": [
        {
            "_id": "636c1c9701d3138739afa8d1",
            "title": "Moving Height",
            "author": "John Smith",
            "description": "A book on moving height",
            "category": "fiction",
            "purchaseCount": 30,
            "imageUrl": "https://randomlink.com",
            "tags": [
                "fiction",
                "moving",
                "inspirational",
                "height"
            ],
            "__v": 0
        },
        {
            "_id": "636c1dbeba1b20da01b5e4d5",
            "title": "Green Height",
            "author": "John Smith",
            "description": "A book on green height",
            "category": "fiction",
            "purchaseCount": 30,
            "imageUrl": "https://randomlink.com",
            "color": "green",
            "tags": [
                "fiction",
                "moving",
                "inspirational",
                "height",
                "green"
            ],
            "__v": 0
        }
    ]
}
```

#### GET /books/:id
- General:
    - Fetches a single book whose id is passed as parameter in the request url
    - Request Arguments: id of the book
    - Returns: An object with details of the book whose id was passed as parameter
- Sample: `http://127.0.0.1:3000/books/636c1c9701d3138739afa8d1`
```
{
    "message": "Book found",
    "book": {
        "_id": "636c1c9701d3138739afa8d1",
        "title": "Moving Height",
        "author": "John Smith",
        "description": "A book on moving height",
        "category": "fiction",
        "purchaseCount": 30,
        "imageUrl": "https://randomlink.com",
        "tags": [
            "fiction",
            "moving",
            "inspirational",
            "height"
        ],
        "__v": 0
    }
}
```

#### PUT /books/:id
- General:
    - edit/update a specified book using the id of the book
    - Request Arguments: the http url containing the id of the book and a raw json data request body in the format below
    ```
    {
        "title": "Green Heights",
        "category": "non-fiction"    
    }
    ```
    - Returns: status message(book updated successfully)
- Sample: `http://127.0.0.1:3000/books/636c1c9701d3138739afa8d1`
```
{
    "message": "Book updated successfully"
}
```

#### DELETE /books/:id
- General:
    - Deletes a specified book using the id of the book
    - Request Arguments: id of the book 
    - Returns: deleted successfully message
- Sample: `http://127.0.0.1:3000/books/636c1c9701d3138739afa8d1`
```
{
    "message": "Book deleted successfully"
}
```


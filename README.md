# Todo API

## Getting Started

### Pre-requisites and Local Development 
Developers using this project should already have Node installed on their local machines.

#### Setting Up

To get started open your terminal and clone this repository by running the code below
```
git clone https://github.com/Tolulophey/Todo-API.git
```
Move into the cloned directory by running
```
cd Todo-API
```
You can then install all the dependencies for the project by runing the code below inside your terminal in the project directory
```
npm install
```

After installing all the dependencies, to start the server run the code below inside your terminal
```
npm run dev
```

These commands put the application in development mode and directs our application to use the index.js file.

## Booking Flight API Reference

### Getting Started
- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted at the default, `http://127.0.0.1:3000/` except if another port is specified. 
- Authentication: This version of the application does not require authentication or API keys. 


**Note: All https requests can be make using postman app or any other similar app or extension**

### Error Handling
Errors are returned as JSON objects in the following format:
```
{
    "success": false,
    "message": "resource not found"
}
```
The API will return four error types when requests fail:
- 400: Bad request
- 404: Resource Not Found
- 500: Server error 

### Endpoints 

#### POST /todos
- General:
    - create a new todo relative to the details supllied
    - Request Body: the body will be passed as a rawjson data
    ```
    {
        "title": "Todo 1",
        "description": "This is my first todo"
    }
    ```
    - Returns: a single new todo object
- Sample: `http://127.0.0.1:3000/todos`
```
{
    "success": true,
    "message": "new todo created",
    "todo": {
        "title": "Todo 1",
        "description": "This is my first todo",
        "_id": "636f5638e444a5014b15c991",
        "createdAt": "2022-11-12T08:15:52.881Z",
        "updatedAt": "2022-11-12T08:15:52.881Z",
        "__v": 0
    }
}
```

#### GET /todos
- General:
    - Fetches all todos
    - Request Arguments: none
    - Returns: An object with details of all the todos
- Sample: `http://127.0.0.1:3000/todos`
```
{
    "success": true,
    "message": "Todos found",
    "todos": [
        {
            "_id": "636e7cc876754ca2b127b916",
            "title": "Green Heights",
            "description": "just a random description",
            "createdAt": "2022-11-11T16:48:08.235Z",
            "updatedAt": "2022-11-11T16:48:08.235Z",
            "__v": 0
        },
        {
            "_id": "636e7d2076754ca2b127b919",
            "title": "New Todo",
            "description": "this is my todo 1",
            "createdAt": "2022-11-11T16:49:36.802Z",
            "updatedAt": "2022-11-11T16:49:36.802Z",
            "__v": 0
        },
        {
            "_id": "636e7d809a97a72c05fc8a3d",
            "title": "Extr a todo",
            "description": "this is my todo",
            "createdAt": "2022-11-11T16:51:12.627Z",
            "updatedAt": "2022-11-11T17:02:00.737Z",
            "__v": 0
        },
        {
            "_id": "636f5638e444a5014b15c991",
            "title": "Todo 1",
            "description": "This is my first todo",
            "createdAt": "2022-11-12T08:15:52.881Z",
            "updatedAt": "2022-11-12T08:15:52.881Z",
            "__v": 0
        }
    ],
    "total": 4
}
```

#### GET /todos/:id
- General:
    - Fetches a single todo whose id is passed as parameter in the request url
    - Request Arguments: id of the todo
    - Returns: An object with details of the todo whose id was passed as parameter
- Sample: `http://127.0.0.1:3000/todos/636f5638e444a5014b15c991`
```
{
    "success": true,
    "message": "Todo found",
    "todo": {
        "_id": "636f5638e444a5014b15c991",
        "title": "Todo 1",
        "description": "This is my first todo",
        "createdAt": "2022-11-12T08:15:52.881Z",
        "updatedAt": "2022-11-12T08:15:52.881Z",
        "__v": 0
    }
}
```

#### PUT /todos/:id
- General:
    - edit/update a specified todo using the id of the todo
    - Request Arguments: the http url containing the id of the todo and a raw json data request body in the format below
    ```
    {
        "title": "Assignment",
        "description": "Do Zuri assignment"
    }
    ```
    - Returns: status message(todo updated successfully and the details of the todo updated)
- Sample: `http://127.0.0.1:3000/todos/636f5638e444a5014b15c991`
```
{
    "success": true,
    "message": "Todo updated successfully",
    "todo": {
        "_id": "636f5638e444a5014b15c991",
        "title": "Assignment",
        "description": "Do Zuri assignment",
        "createdAt": "2022-11-12T08:15:52.881Z",
        "updatedAt": "2022-11-12T08:23:43.430Z",
        "__v": 0
    }
}
```

#### DELETE /todos/:id
- General:
    - Deletes a specified todo using the id of the todo
    - Request Arguments: id of the todo 
    - Returns: deleted successfully message
- Sample: `http://127.0.0.1:3000/todos/636f5638e444a5014b15c991`
```
{
    "success": true,
    "message": "Todo deleted successfully"
}
```


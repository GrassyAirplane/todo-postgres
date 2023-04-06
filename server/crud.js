const index = require("./index")

const app = index.app
const pool = index.pool

app.get("/", (req, res) => {
    res.send("Hello World")
})

// ROUTES //

// create a todo
app.post("/todos", async(req,res) => {
    try {
        console.log(req.body)

        // Insertion code
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        )

        res.json(newTodo)
    } catch (error) {
        console.error(error.message)
    }
})

// get all todos 
app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos["rows"])
    } catch (error) {
        console.error(error.message)
    }
})

// get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(todo.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// update a todo
app.put("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTodo = pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("Todo was updated")
    } catch (error) {
        console.error(error.message)
    }
})


// delete a todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE from todo WHERE todo_id = $1", [id])
        res.json("Todo Deleted")
    } catch (error) {
        console.error(error.message)
    }
})


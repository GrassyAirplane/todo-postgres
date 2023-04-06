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
            "INSERT INTO todo (description) VALYES($1)", 
            [description]
        )
        
    } catch (error) {
        console.error(err.message)
    }
})

// get all todos 

// get a todo

// update a todo

// delete a todo



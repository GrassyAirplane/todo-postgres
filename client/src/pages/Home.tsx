import InputTodo from "../components/InputTodo"
import TodoTable from "../components/TodoTable";

const Home = () => {
    return(
        <>
            <main>
                <InputTodo />
                <TodoTable />
            </main>
        </>
    )
}

export default Home;
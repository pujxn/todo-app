import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

const Home = () => {
    return (
        // <div className="wrapper">
        <div className="todos">
            <Header>
                <h1>todos</h1>
                <h3>Tech stack: React, React Router, Zustand and Context API for state management, HTML, CSS, Vanilla JS and Vercel</h3>
            </Header>
            <TodosLogic />
        </div>
        // </div>

    )
}

export default Home;
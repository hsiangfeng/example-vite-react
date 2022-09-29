import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav className="px-5 flex items-center h-[60px] bg-indigo-500 text-white">
        <h1 className="mr-auto text-2xl">React TodoList</h1>
        <ul className="flex">
          <li className="mr-3">
            <Link to="/" className="border p-3 hover:bg-indigo-600 duration-500">Home</Link>
          </li>
          <li className="mr-3">
            <Link to="/todolist" className="border p-3 hover:bg-indigo-600 duration-500">ToDoList</Link>
          </li>
          <li className="mr-3">
            <Link to="/admin" className="border p-3 hover:bg-indigo-600 duration-500">Admin</Link>
          </li>
        </ul>
      </nav>
      <h1>App</h1>
      <Outlet />
    </>
  )
}

export default App;
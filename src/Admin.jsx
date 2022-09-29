import { Outlet, Link } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <nav className="px-5 flex items-center h-[60px] bg-indigo-500 text-white">
        <h1 className="mr-auto text-2xl">React TodoList</h1>
        <ul className="flex">
          <li className="mr-3">
            <Link to="/admin" className="border p-3 hover:bg-indigo-600 duration-500">Admin</Link>
          </li>
          <li className="mr-3">
            <Link to="/admin/products" className="border p-3 hover:bg-indigo-600 duration-500">AdminProducts</Link>
          </li>
        </ul>
      </nav>
      <h1>Admin</h1>
      <Outlet />
    </>
  )
}

export default Admin;
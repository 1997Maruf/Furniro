import { NavLink } from 'react-router';
import { HiUserGroup } from "react-icons/hi2";
import { Outlet } from 'react-router-dom';
import { SlHandbag } from "react-icons/sl";
const Dashboard = () => {
    return (
        <div className="flex gap-10">
      <div className="  min-h-screen  shadow-2xl	shadow-slate-900">
        <ul className="menu">
              <li>
                <NavLink to="/dashboard/user">
                <HiUserGroup />
                All User
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/order">
                <SlHandbag />
                All Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/uplodeProduct">
                <SlHandbag />
                Uplode Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-product">
                <SlHandbag />
                All Product
                </NavLink>
              </li>
        </ul>
        <div className="divider"></div>
                <NavLink to="/" className="flex items-center gap-2">
                <SlHandbag />
                Home
                </NavLink>
             
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default Dashboard;
import "./profileInfo.css";
import UserInfo from "../components/UserInfo";
import UserPassword from "../components/UserPassword";
import { useReducer } from "react";
import AdminDash from "../components/AdminDash";

const ProfileInfo = () => {
  const changeReducer = (state, action) => {
    switch (action.type) {
      case "INFO":
        return { info: true };
      case "PASSWORD":
        return { password: true };
      case "ADMIN":
        return { admin: true };

      default:
        return state;
    }
  };

  const [changeState, dispatch] = useReducer(changeReducer, {
    info: false,
    password: false,
    admin: false,
  });

  return (
    <div className='profileInfo_container'>
      <div className='profileInfo_wrapper'>
        <div className='profileInfo_left'>
          <h4 className='profileInfo_title'>User Info And Detail</h4>
          <ul className='profileInfo_facts'>
            <li
              className='profileInfo_fact'
              onClick={() => dispatch({ type: "INFO" })}
            >
              User Information
            </li>
            <li
              className='profileInfo_fact'
              onClick={() => dispatch({ type: "PASSWORD" })}
            >
              User Password
            </li>
            <li
              className='profileInfo_fact'
              onClick={() => dispatch({ type: "ADMIN" })}
            >
              Create Moive (Admin only)
            </li>
            <li className='profileInfo_fact'>Logout</li>
          </ul>
        </div>
        <div className='profileInfo_right'>
          {!changeState.info && !changeState.password && !changeState.admin && (
            <UserInfo />
          )}
          {changeState.info && <UserInfo />}
          {changeState.password && <UserPassword />}
          {changeState.admin && <AdminDash />}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

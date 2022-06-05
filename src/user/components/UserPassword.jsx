import React from "react";

const UserPassword = () => {
  return (
    <div className='userInfo_container'>
      <div className='userInfo_wrapper'>
        <h4 className='userInfo_title'>User Password</h4>
        <div className='userInfo_fact'>
          <label htmlFor='' className='userInfo_label'>
            Old Password
          </label>
          <input type='text' className='userInfo_input' placeholder='' />
        </div>
        <div className='userInfo_fact'>
          <label htmlFor='' className='userInfo_label'>
            New Password
          </label>
          <input type='text' className='userInfo_input' placeholder='' />
        </div>
        <div className='userInfo_fact'>
          <label htmlFor='' className='userInfo_label'>
            Confirm Password
          </label>
          <input type='password' className='userInfo_input' placeholder='' />
        </div>
        <button className='userInfo_btn'>Change</button>
      </div>
    </div>
  );
};

export default UserPassword;

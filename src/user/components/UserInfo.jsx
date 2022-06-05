import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className='userInfo_container'>
      <div className='userInfo_wrapper'>
        <h4 className='userInfo_title'>User Information</h4>
        <div className='userInfo_fact'>
          <label htmlFor='' className='userInfo_label'>
            Username
          </label>
          <input
            type='text'
            className='userInfo_input'
            placeholder='Jame Parker'
          />
        </div>
        <div className='userInfo_fact'>
          <label htmlFor='' className='userInfo_label'>
            Email
          </label>
          <input
            type='text'
            className='userInfo_input'
            placeholder='jameparker@gmail.com'
          />
        </div>
        <div className='userInfo_fact'>
          <label htmlFor='' className='userInfo_label'>
            Password
          </label>
          <input
            type='password'
            className='userInfo_input'
            placeholder='*********'
            disabled
          />
        </div>
        <button className='userInfo_btn'>Change</button>
      </div>
    </div>
  );
};

export default UserInfo;

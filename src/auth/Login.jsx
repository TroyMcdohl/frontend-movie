import "./login.css";

const Login = () => {
  return (
    <div className='login_container'>
      <div className='login_wrapper'>
        <h4 className='login_title'>Login</h4>
        <div className='login_fact'>
          <label htmlFor='' className='login_label'>
            Email
          </label>
          <input
            type='text'
            className='login_input'
            placeholder='example@gmail.com'
          />
        </div>
        <div className='login_fact'>
          <label htmlFor='' className='login_label'>
            Email
          </label>
          <input
            type='text'
            className='login_input'
            placeholder='example@gmail.com'
          />
        </div>
        <button className='login_btn'>Login</button>
      </div>
    </div>
  );
};

export default Login;

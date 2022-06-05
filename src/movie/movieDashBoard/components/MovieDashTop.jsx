import "./movieDashTop.css";

const MovieDashTop = () => {
  return (
    <div className='mdash_top_container'>
      <div className='mdash_top_main'>
        <img
          src='https://mcdn.wallpapersafari.com/medium/76/85/fFsbXB.jpg'
          alt=''
          className='mdash_top_img'
        />
        <div className='mdash_top_des'>
          <h4 className='mdash_top_title'>AVATAR</h4>
          <p className='mdash_top_para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex
            voluptate unde blanditiis illo maxime eum odio error omnis natus
            nisi, eius tenetur iste dolorum vitae aspernatur deserunt
            accusantium. Aliquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tenetur impedit nobis debitis doloremque cumque
            doloribus neque culpa. Possimus et, itaque porro autem facilis
            quisquam nemo, doloremque exercitationem perferendis ex repellendus?
          </p>

          <button className='mdash_top_btn'>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDashTop;

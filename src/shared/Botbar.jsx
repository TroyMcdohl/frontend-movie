import "./botbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";

const Botbar = () => {
  return (
    <div className='bot_container'>
      <div className='bot_wrapper'>
        <div className='bot_left'>
          <h5 className='bot_icons_title'>Contact Us</h5>
          <ul className='bot_icons'>
            <li className='bot_icon'>
              <TwitterIcon />
            </li>
            <li className='bot_icon'>
              <FacebookIcon />
            </li>
            <li className='bot_icon'>
              <InstagramIcon />
            </li>
            <li className='bot_icon'>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className='bot_center'>
          <div className='bot_des'>
            <h4 className='bot_title'>Our Servie and develop</h4>
            <div className='bot_para'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, architecto dignissimos veritatis ad nisi pariatur
              porro iure soluta labore cupiditate numquam voluptatem laborum
              voluptatibus accusantium quos. Dolor laudantium consequatur eum?
            </div>
          </div>
        </div>
        <div className='bot_right'>
          <div className='bot_right_logo'>
            <MedicationOutlinedIcon style={{ fontSize: "50px" }} />
          </div>
          <p className='bot_right_para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem eum
            a culpa quo perspiciatis, non distinctio laboriosam minus aperiam
            quibusdam dolorem sapiente repellat temporibus qui, molestiae ab aut
            possimus aliquid?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Botbar;

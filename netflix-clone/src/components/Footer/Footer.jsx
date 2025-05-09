import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_container">
        <div className="footer_media">
          <ul>
            <li>
              <FacebookOutlinedIcon />
            </li>
            <li><InstagramIcon/></li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Auto Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <ul>
            <li>Media center</li>
            <li>Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="service_code">service</div>
      <div className="copy_write">@copy:197-2024 netflix iso</div>
    </div>
    // </div>
  );
}

export default Footer;

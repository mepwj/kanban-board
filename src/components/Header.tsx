import LogoImage from "../assets/headerLogoColor.png";
import UserImage from "../assets/userImage.jpeg";
import DownArrow from "../assets/down-arrow.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        {/* 로고 이미지 */}
        <img src={LogoImage} alt="logo" className="logo-image" />
      </div>

      <div className="user-container">
        {/* 사용자 프로필 이미지 */}
        <img src={UserImage} alt="profile" className="profile-image" />
        {/* 사용자명 */}
        <span className="user-name">박원준</span>
        {/* 메뉴를 열수있는 화살표 버튼 */}
        <img src={DownArrow} className="down-arrow" alt="button" />
      </div>
    </div>
  );
};

export default Header;

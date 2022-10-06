import "./Footer.css";
import GitHubLogo from "../images/githublogo.png";

const Footer = () => {
  return (
    <div className="footerBox">
      <p className="footerText">
        2022 | Simulación Tienda Real Madrid | Developed by: FranCeballos{" "}
      </p>
      <a
        className="footerGitHubLink"
        href="https://github.com/FranCeballos/realMadridStoreClone-Ceballos.git"
        target="_blank"
        rel="noreferrer"
      >
        <div className="footerGitHubLogoBox">
          <img
            src={GitHubLogo}
            alt="GitHubLogo"
            className="footerGitHubLogo"
          ></img>
        </div>
      </a>
    </div>
  );
};

export default Footer;

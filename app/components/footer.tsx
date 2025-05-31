import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-background border-t border-gray-300 py-10 text-5xl">
      <div className="flex justify-center items-center gap-5">
        <a
          href={"https://www.linkedin.com/in/eric-lam-a3774720b/"}
          target="_blank"
          className="group"
        >
          <LinkedInIcon fontSize="inherit" className="group-hover:opacity-80" />
        </a>
        <a href="https://github.com/ciremal" target="_blank" className="group">
          <GitHubIcon fontSize="inherit" className="group-hover:opacity-80" />
        </a>
        <a
          href="mailto:eric.lam42@hotmail.com"
          target="_blank"
          className="group"
        >
          <EmailIcon fontSize="inherit" className="group-hover:opacity-80" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

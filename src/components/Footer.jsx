const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-sans text-white md:text-left">
          Unfor 2025. All rights reserved
        </p>
        <a
          href="#privacy-policy"
          className="text-center text-sm font-sans hover:underline md:text-right text-white"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

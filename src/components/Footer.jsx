function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-5 border-black bg-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-sm mb-4 md:mb-0">
            © {currentYear} Harley's Blog. All rights brutally reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/meowracle/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold border-b-3 border-primary hover:bg-[#0077b5] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/weebNeedWeed"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold border-b-3 border-secondary hover:bg-acid-green hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@harleyle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold border-b-3 border-primary hover:bg-black hover:text-white transition-colors"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

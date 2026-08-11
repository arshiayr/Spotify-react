import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    company: {
      title: "Company",
      links: [
        { name: "About", href: "https://www.spotify.com/us/about-us/contact/" },
        { name: "Jobs", href: "https://www.lifeatspotify.com/" },
        { name: "For the Record", href: "https://newsroom.spotify.com/" },
      ],
    },
    communities: {
      title: "Communities",
      links: [
        { name: "For Artists", href: "https://artists.spotify.com/" },
        { name: "Developers", href: "https://developer.spotify.com/" },
        { name: "Advertising", href: "https://ads.spotify.com/" },
        { name: "Investors", href: "https://investors.spotify.com/" },
        { name: "Vendors", href: "https://spotifyforvendors.com/" },
      ],
    },
    usefulLinks: {
      title: "Useful links",
      links: [
        { name: "Support", href: "https://support.spotify.com/" },
        { name: "Free Mobile App", href: "https://www.spotify.com/us/free/" },
        { name: "Popular by Country", href: "/popular-in/us" },
        {
          name: "Import your music",
          href: "https://www.spotify.com/us/import-music/",
        },
      ],
    },
    spotifyPlans: {
      title: "Spotify Plans",
      links: [
        {
          name: "Premium Individual",
          href: "https://www.spotify.com/us/premium/#plans",
        },
        {
          name: "Premium Duo",
          href: "https://www.spotify.com/us/duo/#ref=spotifycom_footer_premium_duo",
        },
        {
          name: "Premium Family",
          href: "https://www.spotify.com/us/family/#ref=spotifycom_footer_premium_family",
        },
        {
          name: "Premium Student",
          href: "https://www.spotify.com/us/student/#ref=spotifycom_footer_premium_student",
        },
        {
          name: "Spotify Free",
          href: "https://www.spotify.com/us/free/#ref=spotifycom_footer_free",
        },
        {
          name: "Audiobooks Access",
          href: "https://www.spotify.com/us/audiobooks/#plans",
        },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/spotify",
      icon: FaInstagram,
      ariaLabel: "Instagram",
    },
    {
      name: "X",
      href: "https://x.com/spotify",
      icon: FaTwitter,
      ariaLabel: "X",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/Spotify",
      icon: FaFacebook,
      ariaLabel: "Facebook",
    },
  ];

  return (
    <div className="w-full bg-black ">
      <footer className="bg-black text-gray-300">
        <nav className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-white font-bold text-sm mb-4">
                    {footerLinks.company.title}
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm mb-4">
                    {footerLinks.communities.title}
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.communities.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm mb-4">
                    {footerLinks.usefulLinks.title}
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.usefulLinks.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm mb-4">
                    {footerLinks.spotifyPlans.title}
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.spotifyPlans.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors text-gray-300 hover:text-white"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-800 my-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Spotify AB
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

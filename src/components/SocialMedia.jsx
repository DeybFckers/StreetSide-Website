import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  const socials = [
    { icon: faFacebook, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61583262698079" },
    { icon: faInstagram, label: "Instagram", url: "https://www.instagram.com/streetsidecafe_" },
  ];

  return (
    <div id="socialmedia" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 my-4">
      <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4 text-center">
        Follow Us
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Stay connected with us on social media
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
                       bg-gradient-to-br from-[#572c23] via-[#a16c58] to-[#ffefe2]
                       shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <FontAwesomeIcon icon={social.icon} className="text-white text-2xl md:text-3xl" />
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100
                             bg-white text-gray-800 text-sm rounded-lg py-1 px-3
                             shadow-lg transition-opacity duration-300">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

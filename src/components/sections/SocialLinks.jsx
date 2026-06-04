import faceBockIcon from "@/assets/icons/facebook.png";
import instaIcon from "@/assets/icons/Insta.png";
import tiktokIcon from "@/assets/icons/tiktok.png";
import linkedInIcon from "@/assets/icons/linkedIn.png";
import xIcon from "@/assets/icons/x.png";
import youtubeIcon from "@/assets/icons/youtube.png";
import { useSelector } from "react-redux";

const SocialLinks = () => {
  const { settings } = useSelector((state) => state.settings);

  const socialList = [
    {
      id: 1,
      url: settings?.facebook,
      image: faceBockIcon,
    },
    {
      id: 2,
      url: settings?.twitter,
      image: xIcon,
    },
    {
      id: 3,
      url: settings?.instagram,
      image: instaIcon,
    },
    {
      id: 4,
      url: settings?.tiktok,
      image: tiktokIcon,
    },
    {
      id: 5,
      url: settings?.linkedin,
      image: linkedInIcon,
    },
    {
      id: 6,
      url: settings?.youtube,
      image: youtubeIcon,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {socialList
        .filter((social) => social.url && social.url.length > 0)
        .map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full overflow-hidden hover:brightness-80 transition"
          >
            <img src={social.image} className="w-full h-full object-cover" />
          </a>
        ))}
    </div>
  );
};

export default SocialLinks;

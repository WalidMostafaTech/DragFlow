import { useSelector } from "react-redux";
import appleIcon from "@/assets/icons/apple.png";
import playStoreIcon from "@/assets/icons/playstore.png";

const DownloadBtns = () => {
  const { settings } = useSelector((state) => state.settings);

  const stores = [
    {
      key: "android",
      link: settings?.android_link,
      href: settings?.android_link,
      icon: playStoreIcon,
      smallText: "GET IT ON",
      title: "Google Play",
    },
    {
      key: "ios",
      link: settings?.ios_link,
      href: settings?.ios_link,
      icon: appleIcon,
      smallText: "Download on the",
      title: "App Store",
    },
  ];

  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-2 text-left"
      dir="ltr"
    >
      {stores
        .filter((item) => item.link)
        .map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="bg-white text-black border border-black rounded-md p-2 min-w-50
            flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-300"
          >
            <img src={item.icon} className="w-8 h-8 object-contain" />
            <div className="leading-none">
              <p className="text-[12px]">{item.smallText}</p>
              <h3 className="text-xl">{item.title}</h3>
            </div>
          </a>
        ))}
    </div>
  );
};

export default DownloadBtns;

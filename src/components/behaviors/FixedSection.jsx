import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import whatsapp_icon from "@/assets/icons/whatsapp_icon.png";
import phone_icon from "@/assets/icons/phone_icon.png";

const FixedSection = () => {
  const { settings } = useSelector((state) => state.settings);
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      title: t("whatsapp"),
      icon: whatsapp_icon,
      link: `https://wa.me/${(settings?.whatsapp || "").replace(/\s/g, "")}`,
      value: settings?.whatsapp,
    },
    {
      id: 2,
      title: t("phone"),
      icon: phone_icon,
      link: `tel:${(settings?.phone || "").replace(/\s/g, "")}`,
      value: settings?.phone,
    },
  ];

  return (
    <section className="fixed inset-e-4 bottom-1/6 z-40">
      <div className="flex flex-col items-end gap-4">
        {list
          .filter((item) => item.value)
          .map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </a>
          ))}
      </div>
    </section>
  );
};

export default FixedSection;

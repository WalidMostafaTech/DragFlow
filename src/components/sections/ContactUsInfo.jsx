import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import ContactSkeleton from "../skeletons/ContactSkeleton";
import SocialLinks from "./SocialLinks";
import { useTranslation } from "react-i18next";

const ContactUsInfo = ({ data = {}, loading }) => {
  const { t } = useTranslation();

  if (loading) return <ContactSkeleton />;

  const contactList = [
    {
      id: 1,
      label: t("ContactUS.email"),
      value: data?.email || "",
      icon: <HiOutlineMail size={20} />,
    },
    {
      id: 2,
      label: t("ContactUS.phone"),
      value: data?.phone || "",
      icon: <LuPhoneCall size={20} />,
    },
    {
      id: 3,
      label: t("ContactUS.whatsapp"),
      value: data?.whatsapp || "",
      icon: <FaWhatsapp size={20} />,
    },
  ];

  return (
    <div className="text-white border border-white rounded-xl p-4 content-center space-y-4">
      <h1 className="text-4xl lg:text-[48px] font-semibold leading-normal">
        {t("ContactUS.title")}
        <span className="text-xl lg:text-2xl block">{t("ContactUS.desc")}</span>
      </h1>

      {contactList
        .filter((contact) => contact.value && contact.value.length > 0)
        .map((contact) => (
          <div
            key={contact.id}
            className="bg-white p-2 rounded-lg text-foreground flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white">
              {contact.icon}
            </div>

            <div>
              <h2 className="text-lg font-medium">{contact.label}</h2>
              <p className="text-stone-600">{contact.value}</p>
            </div>
          </div>
        ))}

      <div className="w-fit">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactUsInfo;

import ContactUsInfo from "./ContactUsInfo";
import ContactUsForm from "./ContactUsForm";

const ContactUsSection = ({ data = {}, loading }) => {
  return (
    <section id="contact" className="bg-primary sectionPadding">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ContactUsInfo data={data} loading={loading} />

        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUsSection;

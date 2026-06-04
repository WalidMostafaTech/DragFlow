import image from "@/assets/images/image.png";

const PageBanner = ({ title }) => {
  return (
    <section
      className="bg-center bg-cover bg-primary w-full min-h-42 content-center py-16 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-primary/90"></div>

      <h3 className="relative z-10 text-white text-3xl md:text-5xl text-center">
        {title}
      </h3>
    </section>
  );
};

export default PageBanner;

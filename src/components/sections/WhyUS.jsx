import WhoWeAreSkeleton from "../skeletons/WhoWeAreSkeleton";

const WhyUS = ({ data = {}, loading }) => {
  if (loading) return <WhoWeAreSkeleton />;

  if (!data || (!data?.title && !data?.points && !data?.image)) return null;

  return (
    <section>
      <div className="container sectionPadding grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="content-center">
          <h2 className="text-3xl lg:text-[48px] font-bold text-primary mb-4">
            {data?.title}
          </h2>

          <ul className="list-disc list-inside">
            {data?.points?.map((item, index) => (
              <li key={index} className="text-base lg:text-xl leading-9 mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {data?.image && (
          <div className="h-80 md:h-102 rounded-2xl overflow-hidden">
            <img
              src={data?.image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyUS;

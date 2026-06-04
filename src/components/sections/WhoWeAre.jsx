import WhoWeAreSkeleton from "../skeletons/WhoWeAreSkeleton";

const WhoWeAre = ({ data = {}, loading }) => {
  if (loading) return <WhoWeAreSkeleton />;

  if (!data || (!data?.title && !data?.description && !data?.image))
    return null;

  return (
    <section id="about">
      <div className="container sectionPadding grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="content-center">
          <h2 className="text-3xl lg:text-[48px] font-bold text-primary mb-4">
            {data?.title}
          </h2>

          <div
            className="rich_content text-base lg:text-xl leading-9"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>

        {data?.image && (
          <div className="h-80 md:h-102 rounded-2xl overflow-hidden">
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;

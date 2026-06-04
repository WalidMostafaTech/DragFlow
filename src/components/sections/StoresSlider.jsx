import MainSlider from "./MainSlider";
import StoreCard from "../cards/StoreCard";
import { Link, useParams } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import SliderSkeleton from "../skeletons/SliderSkeleton";
import { useTranslation } from "react-i18next";

const StoresSlider = ({ data = [], loading }) => {
  const { lang } = useParams();

  const { t } = useTranslation();

  if (loading) return <SliderSkeleton />;

  if (!data || data.length === 0) return null;

  return (
    <section className="bg-secondary-foreground">
      <div className="container sectionPadding">
        <div className="flex items-center justify-between flex-wrap mb-6">
          <h3 className="text-3xl font-semibold flex gap-2">
            <span className="w-1 h-8 bg-primary rounded-full"></span>{" "}
            {t("StoresSlider.title")}
          </h3>

          <Link
            to={`/${lang}/stores`}
            className="flex items-center gap-1 text-primary font-medium hover:underline"
          >
            {t("StoresSlider.show_more")}{" "}
            <GoArrowUpRight className="text-2xl rtl:-rotate-90" />
          </Link>
        </div>

        <MainSlider
          data={data || []}
          renderItem={(item) => <StoreCard key={item.id} store={item} />}
        />
      </div>
    </section>
  );
};

export default StoresSlider;

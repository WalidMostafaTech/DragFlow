import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const BlogCard = ({ item }) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div
      key={item.id}
      className="rounded-xl overflow-hidden border hover:shadow-lg transition duration-300"
    >
      <div className="w-full h-50 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 p-4 bg-white">
        <h3 className="font-medium line-clamp-2">{item.title}</h3>

        <div
          className="rich_content text-start text-sm text-stone-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />

        <Link to={`/${lang}/blog/${item.slug}`}>
          <Button className={`w-full`}>{t("read_more")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

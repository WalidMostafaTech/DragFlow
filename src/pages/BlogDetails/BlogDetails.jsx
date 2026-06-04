import { useParams } from "react-router";
import { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";

import faceBookIcon from "@/assets/icons/facebook.png";
import xIcon from "@/assets/icons/x.png";
import linkedInIcon from "@/assets/icons/linkedIn.png";
import { getBlogDetails } from "@/api/pagesServices";
import { useQuery } from "@tanstack/react-query";
import BlogDetailsSkeleton from "@/components/skeletons/BlogDetailsSkeleton";
import SeoManager from "@/utils/SeoManager";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);

  const { data: blogDetails, isLoading } = useQuery({
    queryKey: ["blogDetails", slug],
    queryFn: () => getBlogDetails(slug),
  });

  if (isLoading) return <BlogDetailsSkeleton />;

  if (!blogDetails) return null;

  const seo = blogDetails?.seo;

  return (
    <>
      <SeoManager
        title={seo?.meta_title}
        description={seo?.meta_description}
        keywords={seo?.keywords}
        canonical={seo?.canonical_url}
        ogImage={seo?.og_image_url}
      />

      <main>
        <section className="container pagePadding space-y-4 lg:space-y-6">
          <div className="w-full h-50 md:h-75 lg:h-125 rounded-2xl overflow-hidden">
            <img
              src={blogDetails?.image}
              alt={blogDetails?.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-primary text-lg lg:text-2xl font-bold">
            {blogDetails?.title}
          </h2>

          <div
            className="rich_content text-start!"
            dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
          />

          <div className="bg-white rounded-xl p-3 max-w-lg mx-auto border border-primary">
            <div className="flex items-center justify-center gap-4">
              <p>{t("blogDetails.shareArticle")}</p>

              <div className="flex items-center gap-2">
                <span
                  className="w-10 md:w-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:brightness-80 transition overflow-hidden"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href,
                      )}`,
                      "_blank",
                    )
                  }
                >
                  <img
                    src={linkedInIcon}
                    className="w-full h-full object-cover"
                  />
                </span>

                <span
                  className="w-10 md:w-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:brightness-80 transition overflow-hidden"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href,
                      )}`,
                      "_blank",
                    )
                  }
                >
                  <img
                    src={faceBookIcon}
                    className="w-full h-full object-cover"
                  />
                </span>

                <span
                  className="w-10 md:w-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:brightness-80 transition overflow-hidden"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href,
                      )}&text=${encodeURIComponent(blogDetails?.title)}`,
                      "_blank",
                    )
                  }
                >
                  <img src={xIcon} className="w-full h-full object-cover" />
                </span>

                <span
                  className="w-10 md:w-12 aspect-square bg-primary text-white text-2xl md:text-3xl rounded-full flex items-center justify-center cursor-pointer hover:brightness-80 transition overflow-hidden"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true); // غيرنا الحالة للنسخ
                    setTimeout(() => setCopied(false), 3000); // بعد 3 ثواني نرجعها
                  }}
                >
                  {copied ? <IoMdDoneAll className="text-3xl" /> : <RxCopy />}
                </span>
              </div>
            </div>

            <p
              className={`text-center font-semibold flex items-center justify-center gap-1 ${
                copied ? "h-6 mt-4" : "h-0 mt-0"
              } duration-300 overflow-hidden`}
            >
              {t("blogDetails.copied")}
              <IoMdDoneAll className="text-3xl" />
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetails;

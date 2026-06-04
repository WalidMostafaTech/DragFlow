import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const useNavigationLinks = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = lang || "ar";

  const { simpleProducts } = useSelector((state) => state.simpleProducts);

  const productsList =
    simpleProducts?.length > 0
      ? [
          {
            id: "all",
            title: t("Header.allProducts"),
            href: `/${locale}/products`,
          },
          ...simpleProducts.map((p) => ({
            id: p.id,
            title: p.name,
            href: `/${locale}/product/${p.slug}`,
          })),
        ]
      : [];

  const links = [
    { name: t("Header.home"), href: `/${locale}`, items: [] },
    { name: t("Header.about"), href: `/${locale}/about`, items: [] },
    {
      name: t("Header.products"),
      href: `/${locale}/products`,
      items: productsList || [],
    },
    {
      name: t("Header.previousWork"),
      href: `/${locale}/previous-work`,
      items: [],
    },
    { name: t("Header.partners"), href: `/${locale}/partners`, items: [] },
    { name: t("Header.contact"), href: `/${locale}/contact`, items: [] },
  ];

  return links;
};

export default useNavigationLinks;

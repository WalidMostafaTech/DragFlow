import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqsSkeleton from "../skeletons/FaqsSkeleton";
import { useTranslation } from "react-i18next";

const Faqs = ({ data = [], loading }) => {
  const { t } = useTranslation();

  if (loading) return <FaqsSkeleton />;

  if (!data || data.length === 0) return null;

  // Split into two equal columns
  const half = Math.ceil(data?.length / 2);
  const fristCol = data?.slice(0, half);
  const secondCol = data?.slice(half);

  return (
    <section>
      <div className="container sectionPadding">
        <h2 className="text-3xl lg:text-[48px] font-bold text-primary mb-10">
          {t("Faqs.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {/* frist Column */}
          <Accordion type="single" collapsible className="w-full">
            {fristCol.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-start font-semibold text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* second Column */}
          <Accordion type="single" collapsible className="w-full">
            {secondCol.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-start font-semibold text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;

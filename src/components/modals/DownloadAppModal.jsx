import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { closeModal } from "@/store/modals/modalsSlice";
import { FiDownloadCloud } from "react-icons/fi";
import DownloadBtns from "../sections/DownloadBtns";

const DownloadAppModal = () => {
  const dispatch = useDispatch();
  const { modalName } = useSelector((state) => state.modals);
  const { settings } = useSelector((state) => state.settings);

  return (
    <Dialog
      open={modalName === "DownloadAppModal"}
      onOpenChange={() => dispatch(closeModal())}
    >
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>

      <DialogContent className="md:max-w-2xl! md:max-h-[90vh] overflow-y-auto custom_scrollbar bg-primary flex flex-col items-center gap-4 text-white text-center">
        <FiDownloadCloud className="text-[120px]" />

        <h4 className="text-2xl">
          {settings?.popUp_title || "حمّل تطبيق DrugFlow الآن"}
        </h4>

        <p className="text-lg text-white/80 max-w-sm">
          {settings?.popUp_description ||
            "اطلب احتياجات صيدليتك من المخازن المعتمدة بسهولة وسرعة عبر تطبيق واحد"}
        </p>

        <DownloadBtns />
      </DialogContent>
    </Dialog>
  );
};

export default DownloadAppModal;

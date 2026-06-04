import { useTranslation } from "react-i18next";

const Loader = ({ textWhite = false }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-60">
      <style>{`
        @keyframes capsuleSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes capsuleFloat {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(180deg); }
        }
        .capsule-ring  { animation: capsuleSpin  1.6s linear      infinite; }
        .capsule-inner { animation: capsuleFloat 3s   ease-in-out  infinite; }
      `}</style>

      {/* Spinner */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 72, height: 72 }}
      >
        {/* Rotating arc ring */}
        <div className="absolute inset-0 capsule-ring">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle
              cx="36"
              cy="36"
              r="32"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-200 dark:text-gray-700"
            />
            <path
              d="M36 4 A32 32 0 0 1 68 36"
              stroke="#0ea5e9"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M68 36 A32 32 0 0 1 52 63"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Capsule — slow counter-rotate */}
        <div className="relative z-10 capsule-inner">
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
            <rect x="0" y="0" width="36" height="18" rx="9" fill="#0ea5e9" />
            <line
              x1="18"
              y1="1"
              x2="18"
              y2="17"
              stroke="white"
              strokeWidth="1"
              opacity="0.35"
            />
            <rect
              x="18"
              y="0"
              width="18"
              height="18"
              rx="9"
              fill="#0369a1"
              opacity="0.45"
            />
            <ellipse
              cx="10"
              cy="6"
              rx="5"
              ry="2.5"
              fill="white"
              opacity="0.25"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h2
        className={`font-semibold ${textWhite ? "text-white" : "text-primary"}`}
      >
        {t("loading")}
      </h2>
    </div>
  );
};

export default Loader;

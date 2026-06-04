const StoreCard = ({ store = {} }) => {
  return (
    <div className="flex flex-col h-full gap-3 border p-4 rounded-2xl bg-white hover:shadow-lg transition duration-300 group">
      <div
        className="w-full aspect-video overflow-hidden mb-2 border border-transparent rounded-xl
        group-hover:border-primary duration-300 p-4"
      >
        {store.logo && (
          <img
            loading="lazy"
            src={store.logo}
            alt={store.name}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      <h3 className="font-medium text-xl text-center">{store.name}</h3>
    </div>
  );
};

export default StoreCard;

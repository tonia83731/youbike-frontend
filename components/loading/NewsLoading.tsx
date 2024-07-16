const NewsLoading = () => {
  return (
    <div>
      <div className="flex items-top gap-4 md:flex-col md:gap-0">
        <div className="animate-pulse w-1/4 h-24 md:w-full md:h-48 bg-slate-300"></div>
        <div className="w-3/4 md:w-full  md:px-2 md:pt-4 md:pb-6">
          <div className="flex-1 space-y-4">
            <div className="h-4 bg-slate-200"></div>
            <div className="h-4 bg-slate-200"></div>
            <div className="h-4 bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLoading;

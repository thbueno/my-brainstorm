function AnalysisPage() {
  return (
    <div className="xl:container mx-auto px-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Left side */}
        <div className="order-2 md:order-1 lg:order-1 flex flex-col gap-4 bg-white lg:border-r border-gray-300 p-6">
          {/* analysis section */}
          {/* youtube video details */}
          {/* THumbnail generation */}
          {/* title generation */}
          {/* transcription */}
          <p>Youtube video</p>
        </div>
        {/* Right side */}
        <div className="order-1 md:order-2lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
          {/* AI agent Chat section */}
          <p>chat</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;

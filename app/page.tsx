import AgentPulse from "@/components/AgentPulse";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="blue" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet your personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                AI Brainstorm Assistant
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your video content with AI-powered analysis,
              transcription, and insights. Get started in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </div>
      </section>

      {/* How it works section  */}

      {/* Footer section */}
    </div>
  );
}

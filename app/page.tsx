import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Video } from "lucide-react";
import { Sparkles } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { Brain } from "lucide-react";

export default function Home() {
  const steps = [
    {
      title: "1. Connect Your Content",
      description:
        "Share your YouTube video URL and let your agent get to work",
      icon: Video,
    },
    {
      title: "2. AI Agent Analysis",
      description: "Your personal agent analyzes every aspect of your content",
      icon: Brain,
    },
    {
      title: "3. Receive Intelligence",
      description: "Get actionable insights and strategic recommendations",
      icon: MessageSquare,
    },
  ];

  const features = [
    {
      title: "AI Analysis",
      description:
        "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
      icon: Brain,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Smart Transcription",
      description:
        "Get accurate transcriptions of your videos. Perfect for creating subtitles, blog posts, or repurposing content.",
      icon: MessageSquare,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Thumbnail Generation",
      description:
        "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
      icon: ImageIcon,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Title Generation",
      description:
        "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
      icon: MessageSquare,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Shot Script",
      description:
        "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
      icon: Video,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Discuss with Your AI Agent",
      description:
        "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
      icon: Sparkles,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
            <AgentPulse size="large" color="blue" />

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Your Personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                AI Content Agent
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your video content with AI-powered analysis,
              transcription, and insights. Get started in seconds.
            </p>

            <YoutubeVideoForm></YoutubeVideoForm>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* features */}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Meet Your AI Content Agent?
          </h2>
          <p className="text-xl text-blue-50">
            Join creators leveraging AI to unlock content insights
          </p>
        </div>
      </section>
    </div>
  );
}

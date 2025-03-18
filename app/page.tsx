"use client"

import { WaitlistSignup } from "./components/waitlist-signup"
import { ArrowRight, FileText, GitPullRequest, Github, MessageSquare } from "lucide-react"

const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .feature-card {
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }

  .gitdox-gradient {
    background: linear-gradient(90deg, #3B82F6, #60A5FA);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline;
  }
`

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "radial-gradient(circle at center, #1E40AF, #000000)",
      }}
    >
      <style jsx global>
        {backgroundStyle}
      </style>
      <div className="bg-pattern"></div>
      <div className="content w-full max-w-6xl mx-auto text-center ">
        <div className="mb-16 space-y-6 mt-10">
          <div className="flex items-center justify-center mb-2">
            <Github className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">GitDox</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            <span className="block">Zero-Effort</span>
            <span className="block text-blue-400">Documentation Generation</span>
          </h2>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Automatically generate comprehensive documentation by analyzing your code, PRs, and issues. Let AI do the
            work while you focus on building.
          </p>

          <div className="flex justify-center mt-8">
            <a
              href="#waitlist"
              className="flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="feature-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Code Analysis</h3>
            <p className="text-gray-400">
              Automatically analyzes your codebase to extract structure, functions, and relationships.
            </p>
          </div>

          <div className="feature-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
            <div className="flex justify-center mb-4">
              <GitPullRequest className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">PR Context</h3>
            <p className="text-gray-400">
              Captures the "why" behind code decisions by analyzing pull request discussions.
            </p>
          </div>

          <div className="feature-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
            <div className="flex justify-center mb-4">
              <MessageSquare className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Issue Integration</h3>
            <p className="text-gray-400">
              Incorporates context from issues to provide comprehensive understanding of implementation details.
            </p>
          </div>
        </div>

        <div id="waitlist" className="mb-16">
          <WaitlistSignup />
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Github className="h-5 w-5" />
            <span>
              Eliminate documentation drift forever with <span className="text-blue-400 font-semibold">GitDox</span>
            </span>
          </div>
          <p className="text-sm">Presented by pype</p>
        </footer>
      </div>
    </main>
  )
}


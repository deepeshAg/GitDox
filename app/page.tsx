"use client"

import Image from "next/image"
import { WaitlistSignup } from "./components/waitlist-signup"
import { ArrowRight, FileText, GitPullRequest, Github, MessageSquare, Code, Book, Settings, Check, Clock, X } from "lucide-react"

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

  .step-card {
    transition: all 0.3s ease;
  }
  
  .step-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .code-block {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    padding: 1rem;
    font-family: monospace;
    text-align: left;
    overflow-x: auto;
  }

  .gif-container {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    position: relative;
  }

  .gif-placeholder {
    height: 280px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #60A5FA;
    font-style: italic;
  }

  .pain-point-card {
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  .pain-point-card:hover {
    transform: scale(1.02);
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
      <div className="content w-full max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 space-y-6 mt-10 text-center">
          <div className="flex items-center justify-center mb-2">
            <Github className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">GitDox</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            <span className="block">Focus on Building.</span>
            <span className="block text-blue-400">We'll Handle the Docs.</span>
          </h2>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stop wasting time writing documentation. GitDox automatically generates comprehensive docs by analyzing your code, PRs, and issues while you focus on what matters - building great software.
          </p>

          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="#pain-points"
              className="flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#installation"
              className="flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-transparent hover:bg-black/20 md:text-lg"
            >
              Get Started
              <Code className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Developer Pain Points Section */}
        <div id="pain-points" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Why READMEs Are Hard to Write</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="pain-point-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-red-900/50">
              <div className="flex items-start mb-4">
                <Clock className="h-10 w-10 text-red-400 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Time-Consuming</h3>
              </div>
              <p className="text-gray-400">
                Writing good documentation takes precious development time away from building features and fixing bugs. It's often the first thing to be deprioritized when deadlines loom.
              </p>
            </div>

            <div className="pain-point-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-red-900/50">
              <div className="flex items-start mb-4">
                <X className="h-10 w-10 text-red-400 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Quickly Outdated</h3>
              </div>
              <p className="text-gray-400">
                As code changes, documentation drifts. Manually keeping docs in sync with rapidly evolving codebases is nearly impossible, leaving teams with misleading or obsolete information.
              </p>
            </div>
            
            <div className="pain-point-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-red-900/50">
              <div className="flex items-start mb-4">
                <MessageSquare className="h-10 w-10 text-red-400 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Context Gets Lost</h3>
              </div>
              <p className="text-gray-400">
                The valuable context from PR discussions and issue threads - why decisions were made, what alternatives were considered - rarely makes it into documentation.
              </p>
            </div>
            
            <div className="pain-point-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-red-900/50">
              <div className="flex items-start mb-4">
                <FileText className="h-10 w-10 text-red-400 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Inconsistent Quality</h3>
              </div>
              <p className="text-gray-400">
                Documentation quality varies widely across teams and projects. Without standardization, new team members struggle to understand code and senior developers waste time answering the same questions.
              </p>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-blue-900/50 mt-12">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">GitDox Solves These Problems</h3>
            <p className="text-gray-300 text-center text-lg mb-6">
              By automatically generating and maintaining documentation while you code
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="feature-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Code Analysis</h3>
            <p className="text-gray-400">
              Automatically analyzes your codebase to extract structure, functions, and relationships without you writing a single line of documentation.
            </p>
          </div>

          <div className="feature-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
            <div className="flex justify-center mb-4">
              <GitPullRequest className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">PR Context</h3>
            <p className="text-gray-400">
              Preserves the &quot;why&quot; behind code decisions by analyzing pull request discussions and incorporating them into your docs.
            </p>
          </div>

          <div className="feature-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
            <div className="flex justify-center mb-4">
              <MessageSquare className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Issue Integration</h3>
            <p className="text-gray-400">
              Incorporates context from issues to provide comprehensive understanding of implementation details and reasoning.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div id="getting-started" className="mb-20 mt-40">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">How GitDox README Generation Works</h2>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-blue-900/50 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Intelligent Documentation</h3>
                <p className="text-gray-300 mb-4">
                  GitDox doesn't just generate static documentation. It continuously learns from your codebase, 
                  pull requests, and issues to create living documentation that stays in sync with your project.
                </p>
                <p className="text-gray-300">
                  When code changes, documentation updates automatically. When developers discuss implementation 
                  details in PRs, that context is preserved in the docs.
                </p>
              </div>
              <div className="flex justify-center">
                <Book className="h-32 w-32 text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="step-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Installation & Setup</h3>
                  <p className="text-gray-400 mb-4">
                    Add GitDox as a collaborator to your GitHub repository. It works silently in the background, 
                    requiring zero configuration to get started.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="step-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Initial Scan</h3>
                  <p className="text-gray-400 mb-4">
                    GitDox performs a comprehensive analysis of your codebase, analyzing structure, functions, 
                    dependencies, and historical context from PRs and issues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="step-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Documentation Generation</h3>
                  <p className="text-gray-400 mb-4">
                    Based on the analysis, GitDox automatically creates comprehensive markdown documentation, 
                    including API references, architecture diagrams, and implementation details.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="step-card bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Updates</h3>
                  <p className="text-gray-400 mb-4">
                    As your codebase evolves, GitDox automatically updates documentation through pull requests 
                    that you can review and merge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div id="installation" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Getting a Perfect README with GitDox</h2>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-blue-900/50 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">1. Add GitDox as a collaborator</h3>
            <p className="text-gray-300 mb-4">
              Go to your GitHub repository, navigate to Settings {">"} Collaborators, and add
              <span className="text-blue-400 mx-2 font-mono">@gitdox-ai</span> as a collaborator.
            </p>
            <div className="code-block text-gray-300 mb-4">
              <p>https://github.com/username/your-repo/settings/access</p>
            </div>
            
            {/* GIF Container for Adding Collaborator */}
            <div className="gif-container">
              <div className="gif-placeholder">
                [GIF showing the process of adding @gitdox-ai as a collaborator will appear here]
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-blue-900/50">
            <h3 className="text-xl font-semibold text-white mb-4">2. Initial README Generation</h3>
            <p className="text-gray-300 mb-4">
              After adding GitDox as a collaborator, it will automatically create a PR with your initial README file.
              Review and merge this PR to add the README to your repository.
            </p>
            <p className="text-gray-300">
              The comprehensive README will be added directly to your repository root, making it immediately visible to anyone who visits your GitHub project.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Check className="h-12 w-12 text-green-400 mb-2" />
                <p className="text-white">That's it! GitDox handles the rest automatically.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Time Savings Callout */}
        <div className="mb-20">
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-400/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Stop Writing READMEs</h2>
            <p className="text-xl text-gray-200 text-center mb-8">
              The average developer spends <span className="text-blue-400 font-bold">20%</span> of their time creating and maintaining READMEs and documentation.
              What could your team build with that time back?
            </p>
            <div className="flex justify-center">
              <a
                href="#installation"
                className="flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Configuration Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Configuration Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex justify-center mb-4">
                <Settings className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">README Format</h3>
              <p className="text-gray-400">
                Configure GitDox to generate your README in different styles with customizable sections based on your project's needs.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex justify-center mb-4">
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Custom Templates</h3>
              <p className="text-gray-400">
                Create custom documentation templates that match your organization's branding and documentation standards.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex justify-center mb-4">
                <GitPullRequest className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">PR Behavior</h3>
              <p className="text-gray-400">
                Control how and when GitDox creates documentation PRs with options for automatic or manual triggers.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <div className="flex justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Custom Integrations</h3>
              <p className="text-gray-400">
                Connect GitDox with other documentation tools like Confluence, Notion, or custom wikis for seamless syncing.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <h3 className="text-xl font-semibold text-white mb-2">Is GitDox free to use?</h3>
              <p className="text-gray-400">
                GitDox offers both free and premium tiers. The free tier allows for basic documentation generation
                for public repositories, while premium plans offer advanced features and support for private repos.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <h3 className="text-xl font-semibold text-white mb-2">How does GitDox handle sensitive code?</h3>
              <p className="text-gray-400">
                GitDox processes all code locally within your repository context and never stores your source code on our servers.
                Documentation generation happens through secure GitHub Actions that respect your repo's privacy settings.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <h3 className="text-xl font-semibold text-white mb-2">What programming languages does GitDox support?</h3>
              <p className="text-gray-400">
                GitDox currently supports JavaScript, TypeScript, Python, Java, Go, Ruby, and C#.
                We're constantly adding support for more languages based on community feedback.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50">
              <h3 className="text-xl font-semibold text-white mb-2">Can I customize the documentation style?</h3>
              <p className="text-gray-400">
                Yes! GitDox allows complete customization of documentation templates, styles, and formats through
                the configuration file. You can also provide your own templates for GitDox to use.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Github className="h-5 w-5" />
            <span>
              Build software, not documentation with <span className="text-blue-400 font-semibold">GitDox</span>
            </span>
          </div>
          <p className="text-sm">Presented by pype</p>
        </footer>
      </div>
    </main>
  )
}
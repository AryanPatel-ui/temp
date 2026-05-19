import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from '@/components/Topbar';
import { 
  ArrowLeft, 
  ExternalLink,
  Layers,
  LayoutGrid,
  Type,
  Search,
  Link as LinkIcon,
  Network,
  GitFork,
  Zap,
  Undo2,
  List,
  Mountain,
  Share2,
  Cpu,
  Binary,
  Waypoints
} from 'lucide-react';

export default function DsaQuestionsPage() {
  const topics = [
    { name: "array", icon: Layers, description: "Master continuous memory allocation, traversal, and advanced array manipulation techniques.", url: "https://docs.google.com/spreadsheets/d/1zpFTSro6x4YbXUEeTKAgJuZCT54twgxWS8-H_UuAR9o/edit?gid=0#gid=0" },
    { name: "matrix", icon: LayoutGrid, description: "Solve 2D grid problems, matrix rotations, and dynamic pathfinding algorithms.", url: "https://docs.google.com/spreadsheets/d/1XnO2gbQx8jD6B39-607sYkO6vTC0JAmbJRJVIpb03CI/edit?gid=0#gid=0" },
    { name: "string", icon: Type, description: "Tackle string matching, parsing, palindromes, and substring search algorithms.", url: "https://docs.google.com/spreadsheets/d/1-OuAo7pDQApzYZcOPPK_O7MLtatgcNy6CHsUImi1PA4/edit?gid=0#gid=0" },
    { name: "Searching & Sorting", icon: Search, description: "Optimize search times and implement efficient sorting algorithms like quicksort and mergesort.", url: "https://docs.google.com/spreadsheets/d/19-B17clsM8CGDxGnxlKjfAqAGKM4UauIlikOZnPVqo8/edit?gid=0#gid=0" },
    { name: "LinkedList", icon: LinkIcon, description: "Manipulate node pointers, detect cycles, and reverse structures dynamically.", url: "https://docs.google.com/spreadsheets/d/1p3pTzMlbJaMlYbgDu2XPpSlSa_e7LrmFYT-JXwXMhtA/edit?gid=0#gid=0" },
    { name: "Binary Trees", icon: Network, description: "Understand tree traversals, structural modifications, and depth-first approaches.", url: "https://docs.google.com/spreadsheets/d/1O1Bpyyf1VepeMgZxcggfA-2HIyc8dlnrOOyR_rWqm8s/edit?gid=0#gid=0" },
    { name: "Binary Search Trees", icon: GitFork, description: "Maintain ordered tree properties for rapid search, insertion, and deletion operations.", url: "https://docs.google.com/spreadsheets/d/1Vn222Ux-5X4wnMuBIe4Ne1T4Nqwharq14Z0uOTMJ4ic/edit?gid=0#gid=0" },
    { name: "Greedy", icon: Zap, description: "Make locally optimal choices to solve complex optimization problems efficiently.", url: "https://docs.google.com/spreadsheets/d/1d84a3FYvAmtQ3IC7mlkbfw8pcW6gI8QNVVPjApDZ4LQ/edit?gid=0#gid=0" },
    { name: "BackTracking", icon: Undo2, description: "Explore all possible combinations and permutations to solve constraint satisfaction problems.", url: "https://docs.google.com/spreadsheets/d/1Vf9FyA2fliFISrCK6A9fnwsCUZwvTTM_OmtY1_zyXqI/edit?gid=0#gid=0" },
    { name: "Stack and Queues", icon: List, description: "Implement LIFO and FIFO data structures for parsing, scheduling, and graph traversals.", url: "https://docs.google.com/spreadsheets/d/1jv3fN7IY0W3UA-IOIYuxx4FeZlPUEvklXcv-JBIZL6U/edit?gid=0#gid=0" },
    { name: "Heap", icon: Mountain, description: "Utilize priority queues for scheduling, finding Kth elements, and optimizing greedy approaches.", url: "https://docs.google.com/spreadsheets/d/1PzmdGIbEWHdMvtmYNjzuw-PHToGrYwR06kjKigjJPJc/edit?gid=0#gid=0" },
    { name: "Graph", icon: Share2, description: "Master BFS, DFS, shortest path algorithms, and complex network topologies.", url: "https://docs.google.com/spreadsheets/d/1hGLfHOw2h1GAp1euKVuIooU4pGVxTTDhqUiKTW9BVjY/edit?gid=0#gid=0" },
    { name: "Dynamic Programming", icon: Cpu, description: "Break down complex problems into overlapping subproblems to optimize runtime significantly.", url: "https://docs.google.com/spreadsheets/d/13ZHgAn1dxUqmbWdEaQqNtBsUIor-rH4E_Wyx9VVYT7o/edit?gid=0#gid=0" },
    { name: "Bit Manipulation", icon: Binary, description: "Perform low-level bitwise operations for highly optimized mathematical and logic solutions.", url: "https://docs.google.com/spreadsheets/d/19hpFw5sl8-vo6wj-FVi0u5F0mJhRrRkI59qwPMOUBN0/edit?gid=0#gid=0" },
    { name: "trie", icon: Waypoints, description: "Implement prefix trees for blazing-fast string searching, auto-complete, and dictionary operations.", url: "https://docs.google.com/spreadsheets/d/1rFRt3tIvh_Qxr8fT6365euccORWTdSOjn2YdwXHY3ZM/edit?gid=0#gid=0" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Topbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 w-full relative">
        {/* Elegant ambient glow behind */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0 overflow-hidden">
          <div className="w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[80px] animate-pulse" />
        </div>

        <div className="relative z-10 flex flex-col">
          <Link
            href="/questions"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 font-medium w-fit group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Topics
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Logic & Algorithms
            </div>
          </div>

          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-[#1A1D23] tracking-tight leading-[1.1] mb-6">
            Data Structures & <span className="text-emerald-500">Algorithms</span>
          </h1>
          <p className="text-[1.125rem] sm:text-[1.25rem] text-[#6B7280] font-medium max-w-2xl leading-[1.6] mb-12">
            Strengthen your problem-solving skills across all major DSA topics. Select a category below to explore specific challenges and guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={index}
                  href={topic.url || "#"}
                  {...(topic.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="bg-white p-6 sm:p-8 rounded-[32px] border-2 border-gray-100 hover:border-emerald-500/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.15)] transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-[24px] bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon size={30} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight capitalize">{topic.name}</h3>
                  <p className="text-base text-gray-500 font-medium mb-10 flex-1 leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="text-sm font-black text-gray-900 group-hover:text-emerald-600 flex items-center gap-2 mt-auto transition-colors uppercase tracking-widest">
                    Start Practicing <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Kairo logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 leading-none mb-1">Kairo</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 font-medium max-w-xs text-center sm:text-right leading-relaxed">
            Verified application links. Listings refreshed daily.
          </p>
        </div>
      </footer>
    </div>
  );
}

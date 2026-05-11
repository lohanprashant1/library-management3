"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  BookOpen,
  FileText,
  GraduationCap,
  Quote,
  Video,
  ExternalLink,
  Database,
  Lightbulb,
  BookmarkPlus,
  Search,
  ChevronRight,
} from "lucide-react";

const RESEARCH_DATABASES = [
  { name: "Scopus", publisher: "Elsevier", desc: "Largest abstract and citation database of peer-reviewed literature", color: "#E98F10", subjects: ["Science", "Medicine", "Technology"] },
  { name: "Web of Science", publisher: "Clarivate", desc: "Citation indexing and research discovery platform", color: "#C63134", subjects: ["Multidisciplinary"] },
  { name: "JSTOR", publisher: "ITHAKA", desc: "Digital library of academic journals, books, and primary sources", color: "#0095EB", subjects: ["Humanities", "Social Sciences"] },
  { name: "IEEE Xplore", publisher: "IEEE", desc: "Full-text access to IEEE journals, conferences, and standards", color: "#0E76A8", subjects: ["Engineering", "Computing"] },
  { name: "PubMed Central", publisher: "NIH", desc: "Free full-text archive of biomedical and life sciences journals", color: "#75B740", subjects: ["Medicine", "Biology"] },
  { name: "SpringerLink", publisher: "Springer Nature", desc: "Scientific, technical, and medical research content", color: "#DBAA36", subjects: ["Science", "Technology"] },
  { name: "Taylor & Francis", publisher: "T&F", desc: "Academic journals across social sciences and humanities", color: "#8B5CF6", subjects: ["Social Sciences"] },
  { name: "ScienceDirect", publisher: "Elsevier", desc: "Full-text scientific and technical content from Elsevier", color: "#EC4899", subjects: ["Science", "Engineering"] },
];

const CITATION_TOOLS = [
  { name: "Zotero", desc: "Free, open-source reference management tool", features: ["Auto-capture", "Browser extension", "Word plugin", "Cloud sync"], color: "#C63134" },
  { name: "Mendeley", desc: "Reference manager and academic social network", features: ["PDF annotation", "Collaboration", "Citation styles", "Mobile app"], color: "#0095EB" },
  { name: "EndNote", desc: "Professional reference management for researchers", features: ["8000+ styles", "Auto-format", "Manuscript matcher", "PDF import"], color: "#75B740" },
  { name: "Turnitin", desc: "Plagiarism detection and academic integrity tool", features: ["Similarity check", "AI detection", "Feedback studio", "Grading"], color: "#E98F10" },
];

const LIBRARY_GUIDES = [
  { title: "Getting Started with Research", desc: "A beginner's guide to conducting academic research at OSGU", level: "Beginner", color: "#75B740", topics: 8 },
  { title: "Systematic Literature Review", desc: "Step-by-step guide to conducting systematic reviews", level: "Advanced", color: "#C63134", topics: 12 },
  { title: "Citation Styles Guide", desc: "APA, MLA, Chicago, IEEE, and Harvard citation formats", level: "All Levels", color: "#0095EB", topics: 6 },
  { title: "Research Data Management", desc: "Best practices for organizing and sharing research data", level: "Intermediate", color: "#DBAA36", topics: 10 },
  { title: "Open Access Publishing", desc: "Guide to open access journals and publishing options", level: "All Levels", color: "#0E76A8", topics: 7 },
  { title: "Thesis Writing Workshop", desc: "Comprehensive guide for writing a research thesis", level: "Advanced", color: "#E98F10", topics: 15 },
];

const TUTORIALS = [
  { title: "Database Searching Basics", duration: "30 min", type: "Video", icon: Video, color: "#C63134" },
  { title: "Using Zotero for Citations", duration: "45 min", type: "Video", icon: Video, color: "#0095EB" },
  { title: "Advanced PubMed Search", duration: "20 min", type: "Interactive", icon: Search, color: "#75B740" },
  { title: "Writing a Literature Review", duration: "60 min", type: "Guide", icon: FileText, color: "#DBAA36" },
  { title: "Turnitin: Plagiarism Check", duration: "25 min", type: "Video", icon: Video, color: "#E98F10" },
  { title: "Reference Management Tips", duration: "35 min", type: "Interactive", icon: Lightbulb, color: "#0E76A8" },
];

export default function ResearchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#191919] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-[#75B740] text-white mb-3">
            <FlaskConical className="w-3.5 h-3.5 mr-1.5" />
            Research & Learning
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Research <span className="text-[#75B740]">Support</span> & Learning Hub
          </h1>
          <p className="text-[#CCCCCC] max-w-2xl mx-auto">
            Access premium research databases, citation tools, library guides, and tutorials
            to support your academic research journey.
          </p>
        </div>
      </section>

      {/* Research Databases */}
      <section className="bg-[#FCFCFC] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16191A] mb-2">
              Research Databases
            </h2>
            <p className="text-[#666666]">Premium databases available for your research</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESEARCH_DATABASES.map((db, i) => (
              <Card
                key={i}
                className="osgu-card border-[#EBEBEB] bg-white cursor-pointer group"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${db.color}15` }}>
                      <Database className="w-4 h-4" style={{ color: db.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#16191A]">{db.name}</h3>
                      <p className="text-xs text-[#999]">{db.publisher}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#666] mb-3">{db.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {db.subjects.map((s, j) => (
                      <Badge key={j} className="text-[10px] px-1.5 py-0 bg-[#F1F1F1] text-[#666]">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Tools */}
      <section className="bg-[#F1F1F1] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16191A] mb-2">
              Citation & Reference Tools
            </h2>
            <p className="text-[#666666]">Manage your references and citations efficiently</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CITATION_TOOLS.map((tool, i) => (
              <Card key={i} className="osgu-card border-0 bg-white overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: tool.color }} />
                <CardContent className="p-5">
                  <h3 className="font-bold text-[#16191A] mb-1">{tool.name}</h3>
                  <p className="text-xs text-[#666] mb-4">{tool.desc}</p>
                  <div className="space-y-2">
                    {tool.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs text-[#333]">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tool.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Library Guides */}
      <section className="bg-[#FCFCFC] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16191A] mb-2">
              Library Guides
            </h2>
            <p className="text-[#666666]">Curated guides to help you navigate research topics</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LIBRARY_GUIDES.map((guide, i) => (
              <Card key={i} className="osgu-card border-[#EBEBEB] bg-white">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="text-xs" style={{ backgroundColor: guide.color, color: "white" }}>
                      {guide.level}
                    </Badge>
                    <span className="text-xs text-[#999]">{guide.topics} topics</span>
                  </div>
                  <h3 className="font-bold text-[#16191A] mb-2">{guide.title}</h3>
                  <p className="text-sm text-[#666] mb-4">{guide.desc}</p>
                  <Button
                    variant="outline"
                    className="w-full text-sm border-[#EBEBEB] hover:bg-[#C63134] hover:text-white hover:border-[#C63134] transition-colors"
                  >
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="bg-[#222222] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Video Tutorials & Workshops
            </h2>
            <p className="text-[#CCCCCC]">Learn at your own pace with our tutorials</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TUTORIALS.map((tut, i) => (
              <Card key={i} className="osgu-card bg-[#292B33] border-[#333] cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${tut.color}20` }}
                  >
                    <tut.icon className="w-6 h-6" style={{ color: tut.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-white">{tut.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#999]">{tut.duration}</span>
                      <Badge className="text-[10px] px-1.5 py-0 bg-[#333] text-[#CCCCCC] border-0">
                        {tut.type}
                      </Badge>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#999]" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

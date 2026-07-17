import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiPlay, HiPlus, HiThumbUp, HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { FaGithub, FaExternalLinkAlt, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const projectBriefs = {
  "AuraCRM - AI-First CRM": {
    features: [
      "Stateful multi-turn AI agent executing medical tools with LangGraph",
      "Automatic clinical session summarization utilizing LLMs",
      "Instant dual-dashboard form syncing via Redux and FastAPI",
      "Secure database queries for historical HCP logs and followups"
    ],
    architecture: "LangGraph agent workflow, FastAPI backend server, and React/Redux frontend.",
    database: "SQLite database locally, prepared for production PostgreSQL schemas.",
    highlight: "Orchestrates multi-turn physician communication histories with automated scheduling."
  },
  "NGO Management System": {
    features: [
      "Secure role-based access control (Admin, NGO, Donor)",
      "Real-time food and resource donation tracking pipeline",
      "Dynamic dashboard showing inventory levels and distribution logs",
      "Interactive status workflows for donation processing"
    ],
    architecture: "MERN Stack (MongoDB, Express, React, Node.js) with Redux Toolkit for global UI state tracking.",
    database: "MongoDB document schemas optimized for fast queries on donor history and resource allocations.",
    highlight: "Engineered to minimize food waste by matching surplus food from restaurants with nearby NGOs within hours."
  },
  "DurgSetu AI": {
    features: [
      "Advanced computer vision algorithms for crack and structural defect detection",
      "Interactive mapping overlay showing degradation hotspots on 2D models",
      "Admin panel to trigger manual or scheduled image analysis scripts",
      "Automated reports compiling site health metrics and visual comparisons"
    ],
    architecture: "React.js frontend integrated with Django Rest Framework APIs and OpenCV processing scripts.",
    database: "MySQL relational database capturing scan logs, defect locations, and user audit trails.",
    highlight: "Helps preserve cultural heritage by tracking micrometric shifts in stone masonry over time."
  },
  "VoicePortrait": {
    features: [
      "2D/Anime Optimized: Specifically engineered to handle stylized characters using a custom LBP cascade fallback.",
      "Neural Lip-Sync: High-quality alignment using the Wav2Lip GAN model.",
      "100% Local & Private: Runs entirely on your own hardware with no cloud APIs and zero data leakage.",
      "Custom Sprite Support: Upload custom mouth shapes to create unique hand-crafted character animations.",
      "Cinematic Output: High-definition MP4 rendering with smooth frame-to-frame transitions."
    ],
    architecture: "React.js frontend integrated with Node.js/Express APIs, coordinating Python Wav2Lip AI models.",
    database: "Temporary folder-based storage managed by Multer and localized FFmpeg media pipelines.",
    highlight: "Transforms static 2D illustrations and stylized anime characters into cinematic, talking narrators."
  },
  "Shopify CRO Opportunity Engine": {
    features: [
      "Multi-layered Scraper: Pulls data from /products.json, /collections.json, homepage HTML, and PDP widgets.",
      "ICE Scoring Priority: AI programmatically scores opportunities (Impact × Confidence / Effort) to rank quick wins.",
      "A/B Test Blueprint Generator: Generates statistical hypothesis statements, variant design specs, and Shopify checklists.",
      "Competitor Comparisons: Matrix comparison checking assortment breadth, pricing spreads, gaps, and positioning.",
      "Evidence-Based Insights: Feeds gathered storefront metrics to Nvidia API Catalog (Llama 3.1 70B) for structured recommendation generation."
    ],
    architecture: "Modular Monorepo: TypeScript React.js client on the frontend, TypeScript Node/Express backend coordinating Axios/Cheerio APIs.",
    database: "Memory-buffered scraper responses and localized JSON structures processed dynamically on demand.",
    highlight: "Uses real storefront data from Shopify endpoints to compile mathematically ranked conversion improvement plans."
  },
  "Whatyouwear Store": {
    features: [
      "Dynamic Catalog Grid: Supports categorization, text searching, custom sorting, and real-time stock checks.",
      "Razorpay Payments: Full secure integration handling payment creation and server-side webhook verification.",
      "Persistent & Guest Carts: Database-synced carts for logged-in accounts, falling back to a session-based cart for guest users.",
      "Dual Auth Methods: Traditional email/password setup utilizing SimpleJWT alongside Google OAuth login support.",
      "Order Portal: Supports order generation, order status lists, user cancellations, and refund request submission."
    ],
    architecture: "React (Vite) client frontend integrated with a Django REST Framework (DRF) backend.",
    database: "PostgreSQL database optimized for catalog queries, user accounts, and billing transaction tables.",
    highlight: "Delivers a secure checkout experience under 2 seconds page-load time using lazy loading."
  },
  "StockSync Product Catalog Dashboard": {
    features: [
      "Analytics Dashboard: Visual analytics cards tracking Total Products, Active/Inactive counts, Total Value, and Category Distribution graphs.",
      "Inventory Management List: View toggle supporting Grid/Table layouts, real-time keywords filter, multi-faceted category/status filtering, and pagination.",
      "Reactive Forms validation: Input form for Add/Edit actions featuring visual card mockups, error warnings, and touched state tracking.",
      "Adaptive Custom Themes: System-wide Selector-based Light and Dark theme modes utilizing Tailwind CSS v4's @custom-variant.",
      "Toast Messaging System: Custom Contextual notification pop-ups (Success / Info / Warning / Error) with smooth keyframe animations."
    ],
    architecture: "React.js client application styled with native Tailwind CSS v4 and managed by React Router.",
    database: "Browser Local Storage persistence preserving product listings, toast preferences, and custom theme presets.",
    highlight: "Enables offline configuration state storage, pre-seeded with custom inventory catalog products for immediate visual testing."
  },
  "Quizora Platform": {
    features: [
      "React-based quiz interface with custom multi-room joining and live scoreboards",
      "Real-time WebSocket connection for multiplayer quiz lobbies",
      "Live leaderboards with animated score updates",
      "Interactive panels summarizing player performance post-game"
    ],
    architecture: "React, Node.js, Express, and Socket.io for instantaneous bidirectional events.",
    database: "MongoDB storage for question banks, user stats, and past match histories.",
    highlight: "Handles up to 50 concurrent players per quiz room with sub-50ms latency."
  },
  "Employee-Management-System": {
    features: [
      "Secure role-based corporate access control and clearance management",
      "Comprehensive department tracking and hierarchical organization mapping",
      "Audit trail logs capturing administrative updates and login histories",
      "Automated shift planner and time sheet tracking logs"
    ],
    architecture: "Spring Boot Enterprise backend coupled with MySQL relational schemas.",
    database: "MySQL relational database mapping employee relationships, roles, and shift scheduling tables.",
    highlight: "Built to support high security standards with encrypted payload exchanges."
  },
  "BookNest Digital": {
    features: [
      "Comprehensive digital catalog with live search indexing",
      "Interactive reader review logs and ratings widget",
      "Secure user profile management with Firebase Auth integration",
      "Custom reading list scheduler and progress tracker"
    ],
    architecture: "React.js frontend, Express backend server, and Firebase services.",
    database: "MySQL relational database for strict book inventory control and user relationship tables.",
    highlight: "Implemented database normalization rules to prevent catalog inconsistencies."
  }
};

const NetflixModal = ({ item, onClose, allProjects = [], allExperiences = [] }) => {
  if (!item) return null;

  const [isLiked, setIsLiked] = useState(false);

  const isProject = !!item.techStack;
  const isExperience = !!item.role;
  const isEducation = !!item.degree;
  const isSkill = !!item.skills;

  // Filter recommendations (More Like This)
  const getRecommendations = () => {
    if (isProject) {
      return allProjects.filter(p => p.title !== item.title).slice(0, 3);
    } else if (isExperience) {
      return allExperiences.filter(e => e.company !== item.company).slice(0, 3);
    }
    return [];
  };

  const recommendations = getRecommendations();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl border border-[#2F2F2F] z-10 custom-scrollbar max-h-[90vh] overflow-y-auto"
        data-lenis-prevent
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#181818]/80 hover:bg-[#2A2A2A] border border-[#2F2F2F] flex items-center justify-center text-white transition-all active:scale-95"
        >
          <HiX size={20} />
        </button>

        {/* Visual Header / Banner */}
        <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden bg-gradient-to-r from-red-950/20 to-black/50">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title || item.role || item.degree}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient || 'from-red-900/30 to-zinc-900'} flex flex-col items-center justify-center text-center p-6`}>
              {item.icon ? (
                <item.icon className="text-red-600 text-7xl sm:text-9xl opacity-40 mb-2 drop-shadow-2xl" />
              ) : (
                <div className="text-red-600 text-6xl sm:text-8xl opacity-30 font-bold tracking-widest font-bebas">
                  {isSkill ? 'SKILL' : isEducation ? 'EDUCATION' : 'MITFLIX'}
                </div>
              )}
            </div>
          )}

          {/* Banner bottom gradient overlay */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
        </div>

        {/* Banner Title and controls - Relative on mobile, absolute overlay on desktop */}
        <div className="relative md:absolute md:bottom-6 md:left-6 md:right-6 z-10 flex flex-col gap-3 p-6 md:p-0 bg-[#181818] md:bg-transparent">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {item.title || item.role || item.degree}
          </h2>

          {item.company && (
            <p className="text-base sm:text-lg md:text-xl font-bold text-red-500">{item.company}</p>
          )}
          {item.institution && (
            <p className="text-base sm:text-lg md:text-xl font-bold text-red-500">{item.institution}</p>
          )}

          {/* Action controls */}
          <div className="flex flex-wrap items-center gap-2.5 mt-1 md:mt-2">
            {isProject && item.links && (
              <>
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 bg-white text-black font-bold text-xs sm:text-sm md:text-base rounded-md hover:bg-white/80 active:scale-95 transition-all shadow-lg"
                >
                  <HiPlay size={18} className="fill-black text-black" />
                  <span>Source Code</span>
                </a>
                {item.links.live && (
                  <a
                    href={item.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 bg-zinc-700/80 text-white font-bold text-xs sm:text-sm md:text-base rounded-md hover:bg-zinc-600 border border-[#4F4F4F] active:scale-95 transition-all"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </>
            )}

            {isExperience && (
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  window.lenis?.scrollTo('#contact');
                }}
                className="flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base rounded-md hover:bg-red-700 active:scale-95 transition-all"
              >
                <HiPlay size={18} />
                <span>Inquire / Hire</span>
              </a>
            )}

            {isEducation && (
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  window.lenis?.scrollTo('#contact');
                }}
                className="flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 bg-white text-black font-bold text-xs sm:text-sm md:text-base rounded-md hover:bg-white/80 active:scale-95 transition-all"
              >
                <FaGraduationCap size={16} />
                <span>Academic Inquiries</span>
              </a>
            )}

            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-500 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all active:scale-90">
              <HiPlus size={16} />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all active:scale-90 ${isLiked
                  ? 'border-red-600 bg-red-600/10 text-red-500 hover:border-red-600 hover:bg-red-600/20 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                  : 'border-zinc-500 hover:border-white hover:bg-white/10 text-white'
                }`}
              title={isLiked ? "Unlike" : "Like"}
            >
              <HiThumbUp size={14} className={isLiked ? 'fill-red-500 text-red-500' : ''} />
            </button>
          </div>
        </div>

        {/* Modal Info Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-justify">
          {/* Main Column */}
          <div className="md:col-span-8 space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
              <span className="text-green-500 font-bold text-sm">98% Match</span>
              <span className="px-2 py-0.5 border border-zinc-500 text-zinc-300 text-[10px] sm:text-xs rounded font-bold">
                {isProject ? 'ALL' : isExperience ? 'PG-13' : 'G'}
              </span>
              <span className="text-zinc-400">
                {item.year || '2026'}
              </span>
              {isExperience && <span className="text-zinc-400">1 Season</span>}
              {isProject && <span className="text-zinc-400">Productive</span>}
              <span className="px-1.5 py-0.5 text-[9px] border border-zinc-600 text-zinc-400 rounded font-black tracking-widest uppercase">
                Ultra HD
              </span>
              <span className="px-1.5 py-0.5 text-[9px] border border-zinc-600 text-zinc-400 rounded font-black tracking-widest uppercase">
                HDR
              </span>
              <span className="px-1.5 py-0.5 text-[9px] border border-zinc-600 text-zinc-400 rounded font-black tracking-widest uppercase">
                5.1
              </span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
              {item.description || item.desc || `An academic program highlighting rigorous engineering concepts, database optimizations, and design workflows at SNJB's Late Sau K B Jain College of Engineering.`}
            </p>

            {item.grade && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 text-zinc-300 bg-[#2A2A2A] px-4 py-3 rounded-lg border border-[#3F3F3F]">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <FaAward className="text-red-500 text-base flex-shrink-0 animate-pulse" />
                  <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400">Performance Metric</span>
                </div>
                <span className="hidden sm:inline text-zinc-600 font-bold">•</span>
                <span className="text-red-500 font-black text-sm sm:text-base leading-tight">{item.grade}</span>
              </div>
            )}

            {item.location && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{item.location}</span>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 space-y-4 text-xs sm:text-sm text-left">
            {isProject && item.techStack && (
              <div>
                <span className="text-zinc-500 font-medium block mb-2">Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-red-950/20 text-red-400 border border-red-900/30 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide hover:bg-red-900 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {isSkill && item.skills && (
              <div>
                <span className="text-zinc-500 font-medium">Core Stack: </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.skills.map((s, idx) => (
                    <span key={idx} className="bg-zinc-800 text-zinc-200 border border-zinc-700 px-2 py-1 rounded text-[10px] font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {isExperience && (
              <div>
                <span className="text-zinc-500 font-medium">Main Genre: </span>
                <span className="text-zinc-300">Software Engineering, Full Stack Development</span>
              </div>
            )}

            <div>
              <span className="text-zinc-500 font-medium">Genres: </span>
              <span className="text-zinc-300">
                {isProject ? 'Web Application, Open Source, System Architecture' :
                  isExperience ? 'MERN Stack, Responsive Interfaces, RESTful APIs' :
                    isEducation ? 'Computer Engineering, Higher Secondary' :
                      'Technical Toolkit, Dev Tools'}
              </span>
            </div>

            <div>
              <span className="text-zinc-500 font-medium">This show is: </span>
              <span className="text-zinc-300 font-semibold italic text-red-500">
                {isProject ? 'Innovative, Efficient, Responsive' :
                  isExperience ? 'Result-driven, Collaborative, Performant' :
                    isEducation ? 'Academic, Focused, Theoretical & Practical' :
                      'Modern, Solid, Industry-ready'}
              </span>
            </div>
          </div>
        </div>

        {/* Experience Episodes View */}
        {isExperience && item.details && (
          <div className="px-6 sm:p-8 border-t border-[#2F2F2F]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl sm:text-2xl font-black text-white">Episodes</h3>
              <span className="text-sm font-semibold text-zinc-400">Season 1</span>
            </div>

            <div className="space-y-4">
              {item.details.map((detail, idx) => {
                // Determine a fictional title for the bullet points to make it look like episodes
                const episodeTitles = [
                  "Backend Systems Integration",
                  "UI/UX Engineering & Responsive Layouts",
                  "Database Optimizations & Schema Tuning",
                  "Workflow & Deploy Pipeline Performance"
                ];

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-[#222] hover:bg-[#2b2b2b] border border-transparent hover:border-[#3F3F3F] transition-all"
                  >
                    {/* Fictional Episode Thumbnail */}
                    <div className="w-full sm:w-36 h-20 bg-zinc-800 rounded flex-shrink-0 flex items-center justify-center relative overflow-hidden border border-zinc-700">
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-zinc-900/50" />
                      <span className="text-red-600 font-bebas text-4xl select-none opacity-40">EP {idx + 1}</span>
                      <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 text-[8px] text-zinc-400 font-bold uppercase rounded">
                        {15 + (idx * 5)} mins
                      </div>
                    </div>

                    <div className="flex-1 space-y-1.5 text-left">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm sm:text-base font-black text-white">
                          {idx + 1}. {episodeTitles[idx] || `Key Responsibility ${idx + 1}`}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-justify">
                        {detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* More Like This (Recommendations) or Project Brief Info */}
        {isProject ? (
          <div className="px-6 sm:p-8 border-t border-[#2F2F2F] text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6 tracking-wide">
              Project Brief Info
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-300">
              {/* Left Column: Key Features */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-red-500 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-red-600 rounded-sm"></span>
                  Key Features & Capabilities
                </h4>
                <ul className="space-y-2.5 pl-1">
                  {(projectBriefs[item.title]?.features || [
                    "Modular and scalable component architecture",
                    "Responsive layouts optimized for all device types",
                    "Efficient state management and secure data flow",
                    "Modern styling with performance-first animations"
                  ]).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1 select-none font-bold">✓</span>
                      <span className="text-zinc-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Architecture & Highlights */}
              <div className="space-y-5">
                {/* Architecture */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-red-500 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-red-600 rounded-sm"></span>
                    Architecture & State Flow
                  </h4>
                  <p className="text-zinc-300 leading-relaxed pl-1.5">
                    {projectBriefs[item.title]?.architecture || "Designed with a decoupled client-server architecture ensuring high availability and seamless data validation pipelines."}
                  </p>
                </div>

                {/* Database */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-red-500 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-red-600 rounded-sm"></span>
                    Database Solution
                  </h4>
                  <p className="text-zinc-300 leading-relaxed pl-1.5">
                    {projectBriefs[item.title]?.database || "Structured storage schemas built to optimize data relationships, audit logs, and query lookup times."}
                  </p>
                </div>

                {/* Major Highlight */}
                {projectBriefs[item.title]?.highlight && (
                  <div className="bg-red-950/10 border border-red-900/20 rounded-lg p-3.5 space-y-1">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-red-500">Key Highlight</span>
                    <p className="text-zinc-300 text-xs italic leading-relaxed">
                      "{projectBriefs[item.title].highlight}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          recommendations.length > 0 && (
            <div className="px-6 sm:p-8 border-t border-[#2F2F2F]">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-5">More Like This</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2F2F2F] rounded-lg overflow-hidden border border-transparent hover:border-zinc-500 transition-all flex flex-col h-full cursor-default"
                  >
                    <div className="relative h-32 w-full bg-gradient-to-br from-red-950/20 to-black/50 flex items-center justify-center">
                      {rec.image ? (
                        <img src={rec.image} alt={rec.title || rec.role} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-red-600 font-bebas text-3xl opacity-35">
                          {rec.title ? 'PROJECT' : 'EXPERIENCE'}
                        </span>
                      )}
                      <span className="absolute top-2 right-2 text-white font-bold text-[10px] bg-red-600 px-1.5 py-0.5 rounded">
                        {rec.year || '2025'}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h4 className="text-sm font-black text-white leading-tight mb-2">
                          {rec.title || rec.role}
                        </h4>
                        <p className="text-zinc-400 text-xs line-clamp-3 leading-relaxed mb-4 text-justify">
                          {rec.description || (rec.details && rec.details[0])}
                        </p>
                      </div>
                      {rec.techStack && (
                        <div className="flex flex-wrap gap-1 mt-auto">
                          {rec.techStack.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[9px] bg-zinc-800 text-zinc-300 px-1 rounded font-semibold">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default NetflixModal;

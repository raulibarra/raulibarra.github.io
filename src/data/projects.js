export const featuredProjects = [
    {
        id: "degen-rivals",
        title: "Degen Rivals",
        subtitle: "Multiplayer Vehicle Combat Game | WebGL, Mobile & Steam",
        demoLabel: "🎮 Demo Reel",
        role: "Senior Game Developer (Contractor)",
        company: "Tomorrow Media / Tevaera",
        teamSize: "5+ including 3 devs",
        tech: ["Unity 6.2", "C#", "Photon Quantum", "ECS", "Addressables"],
        // Metrics: Use descriptive icons to differentiate achievement types
        metrics: [
            { icon: "⚡", value: "8 Players", label: "Multiplayer" },
            { icon: "🌐", value: "WebGL", label: "Platform" }
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Weapons System:", text: "Built the entire ECS-based multiplayer weapons system using Photon Quantum, handling fire rates, burst patterns, and ammo management." },
            { strong: "Ability System:", text: "Engineered an ability system driving 4 weapon effects and 7 pickup effects (damage multipliers, shields, etc)." },
            { strong: "Car Audio:", text: "used pitch curve technique for realistic gear shifts with minimal memory usage." },
            { strong: "Audio Pipeline:", text: "Created a sound manager optimizing Addressable loading for WebGL." },
            { strong: "WebGL Performance:", text: "Implemented object pooling and audio compression for smooth browser performance." }
        ],
        embedSrc: "https://www.youtube.com/embed/SmWhDKrFvuw",
        mediaDescription: "Multiplayer vehicle combat showcasing the weapons systems and dynamic audio.",
        result: {
            strong: "Result:",
            text: "Smooth 8 player multiplayer with optimized WebGL performance and expandable weapons system."
        }
    },
    {
        id: "crushers",
        title: "Crushers!",
        subtitle: "Casual Match-3 Multiplayer PVP Game with RPG Elements",
        demoLabel: "🎮 Demo Reel",
        role: "Senior Game Developer (Contractor)",
        company: "Redemption Games Inc.",
        teamSize: "10+ including 6 devs",
        tech: ["Unity", "C#", "Photon Quantum", "Firebase"],
        metrics: [
            { icon: "📥", value: "10k+", label: "Installs" },
            { icon: "⚡", value: "30%", label: "Performance Boost" },
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Core Gameplay Features:", text: "Prototyped key systems like Home panel tabs, Post Level Win/Lose sequences, and the Trophy Road progression system." },
            { strong: "Shared Libraries:", text: "Built reusable systems for UI management, asset retrieval, and object pooling." },
            { strong: "Data-Driven Configuration:", text: "Implemented game configuration systems for Trophy Road and the main Core-Loop with seamless backend synchronization." },
            { strong: "Tutorial System:", text: "Created a flexible, event-driven tutorial system with JSON-based remote updates and checkpoint persistence." },
            { strong: "Audio Framework:", text: "Developed a robust audio system with SFX variations, randomization, and ducking." },
            { strong: "Monetization:", text: "Prototyped GoldRush, Season Pass, and Weekly Events features." }
        ],
        embedSrc: "https://www.youtube.com/embed/6BuEpvGEuWg",
        mediaDescription: "Match-3 gameplay showcasing the tutorial system, Trophy Road progression, and UI features.",
        result: {
            strong: "Result:",
            text: "Scalable tutorial system and core gameplay features that significantly improved player onboarding and retention."
        }
    },
    {
        id: "power-rangers",
        title: "Power Rangers: Morphin Legends",
        subtitle: "Turn-Based RPG with Data-Driven Systems",
        demoLabel: "🎮 Demo Reel",
        role: "Senior Game Developer",
        company: "nWay Inc.",
        teamSize: "15+ including 7 devs",
        tech: ["Unity", "C#", "Data-Driven Architecture"],
        metrics: [
            { icon: "📥", value: "50k+", label: "Installs" },
            { icon: "⚡", value: "50%", label: "Less Debug Time" },
            { icon: "💾", value: "30%", label: "Memory Saved" }
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Abilities System Refactor:", text: "Restructured prototype system for reusability and unit testing." },
            { strong: "Tutorial System:", text: "Built event-driven system with checkpoint persistence." },
            { strong: "Dynamic Audio:", text: "Created impact SFX system based on weapon/material types." },
            { strong: "Music Composition:", text: "Composed 90's TV show inspired original soundtrack." },
            { strong: "Core Features:", text: "Built heroes collection, dialogue, PVP, and store systems." }
        ],
        embedSrc: "https://www.youtube.com/embed/b4oCUsCo1_g",
        mediaDescription: "Turn-based RPG combat showcasing the abilities system and dynamic audio.",
        result: {
            strong: "Result:",
            text: "Delivered a robust, data-driven abilities system and comprehensive tutorial framework."
        }
    },
    {
        id: "dc-legends",
        title: "DC Legends",
        subtitle: "Turn-Based RPG with Complex Ability Systems",
        demoLabel: "🎮 Demo Reel",
        role: "Senior FullStack Game Developer",
        company: "Giant Monkey Robot",
        teamSize: "15+ including 6 devs",
        tech: ["Unity", "C#", "NodeJS", "Redis"],
        metrics: [
            { icon: "📥", value: "10M+", label: "Installs" },
            { icon: "📈", value: "+30%", label: "Active Players" },
            { icon: "⚔️", value: "Raid Boss", label: "Key Feature" }
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Complex Ability System:", text: "Expanded data-driven ability system with chained/conditional effects and enhanced editor tools." },
            { strong: "RaidBoss Battle System:", text: "Designed multiplayer RaidBoss system with real-time stats." },
            { strong: "Minions Feature:", text: "Added tactical minion mechanics for RaidBoss encounters." },
            { strong: "Client-Server Architecture:", text: "Built robust structures for turn-based multiplayer sync." },
            { strong: "Monetization:", text: "Developed event leaderboards, StepUp sales, and video ads." }
        ],
        embedSrc: "https://www.youtube.com/embed/IzIBqT35HIc",
        mediaDescription: "Turn-based RPG combat showcasing the complex ability system and RaidBoss encounters.",
        result: {
            strong: "Result:",
            text: "Delivered complex multiplayer RaidBoss system that became a core feature driving engagement."
        }
    },
    {
        id: "kayak-vr",
        title: "Kayak VR Experience",
        subtitle: "Immersive VR Simulator with Spatial Audio",
        demoLabel: "🎮 Demo Reel",
        role: "Game Developer",
        company: "Utopic Studio Spa",
        teamSize: "5 including 2 devs",
        tech: ["Unity", "Google Cardboard", "C#", "Steam Audio"],
        metrics: [
            { icon: "🥽", value: "VR", label: "Platform" },
            { icon: "♾️", value: "Infinite", label: "Scrolling Map" },
            { icon: "🔄", value: "5x", label: "Replayability" }
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Infinite Scrolling System:", text: "Built dynamic map generation with spline-based movement." },
            { strong: "Procedural Content:", text: "Implemented grid-based obstacle placement and custom editor tools." },
            { strong: "Spatial Audio:", text: "Integrated Steam Audio for binaural spatialization and distance-based priority systems." },
            { strong: "Dynamic Audio:", text: "Created 2D waterfall audio with distance-based volume control." },
            { strong: "VR Optimization:", text: "Ensured smooth performance for mobile VR hardware." }
        ],
        embedSrc: "https://www.youtube.com/embed/RMLKkYp8_kg",
        mediaDescription: "Immersive kayaking experience showcasing infinite scrolling and spatial audio.",
        result: {
            strong: "Result:",
            text: "Delivered a fully immersive VR experience with seamless world generation."
        }
    },
    {
        id: "blood-brothers-2",
        title: "Blood Brothers 2",
        subtitle: "Tactical RPG with Advanced Rendering Systems",
        demoLabel: "🎮 Trailer",
        role: "Senior Game Developer",
        company: "DeNa Santiago",
        teamSize: "20+ including 7 devs",
        tech: ["Unity", "C#", "NodeJS", "Custom Shaders"],
        metrics: [
            { icon: "📥", value: "1M+", label: "Installs" },
            { icon: "⚡", value: "50%", label: "Faster Loading" },
            { icon: "⚔️", value: "Raid Boss", label: "Multi-Player" }
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Fog of War System:", text: "Built a custom shader-based visibility system revealing areas in real-time." },
            { strong: "PVP Optimization:", text: "Improved match loading times by 50% by eliminating loading screens." },
            { strong: "Multiplayer Raid System:", text: "Designed multi-phase raid boss encounters for coordinated team play." },
            { strong: "Adaptive Music:", text: "Created horizontal re-sequencing audio system for seamless battle phase transitions." },
            { strong: "Audio Content:", text: "Composed original music and designed sound effects for raids." }
        ],
        embedSrc: "https://www.youtube.com/embed/-CN8o9X_uiQ",
        mediaDescription: "Tactical RPG combat featuring Fog of War and multiplayer Raid Bosses.",
        result: {
            strong: "Result:",
            text: "Delivered advanced rendering and multiplayer systems that became core features."
        }
    },
    {
        id: "starwars-galactic-defense",
        title: "StarWars Galactic Defense",
        subtitle: "Tower Defense with Advanced Optimization Systems",
        demoLabel: "🎮 Demo Reel",
        role: "Senior Game Developer",
        company: "DeNa Santiago",
        teamSize: "60+ including 8 devs",
        tech: ["Unity", "C#", "Custom Shaders", "ETC Compression"],
        metrics: [
            { icon: "📥", value: "1M+", label: "Installs" },
            { icon: "🗜️", value: "35%", label: "Smaller APK" },
            { icon: "⚡", value: "OpenGL 2.0", label: "Optimized" }
        ],
        keyFeaturesTitle: "Key Contributions",
        keyPoints: [
            { strong: "Data-Driven Abilities:", text: "Expanded system for towers/chars with instant stat changes and AOE mechanics." },
            { strong: "Android Optimization:", text: "Reduced game size 35% via custom ETC compression pipeline for transparency." },
            { strong: "Performance Engineering:", text: "Optimized memory and rendering for OpenGL 2.0 devices." },
            { strong: "Editor Tools:", text: "Built map editor, UI skinning, and HotReload debugging tools." },
            { strong: "Social Features:", text: "Integrated Facebook requests and energy-sharing systems." }
        ],
        embedSrc: "https://www.youtube.com/embed/tu3pFrD_qp8",
        mediaDescription: "Tower defense gameplay showcasing data-driven abilities and optimized rendering.",
        result: {
            strong: "Result:",
            text: "Achieved 35% size reduction and performance gains while delivering complex systems."
        }
    }
];

export const personalProjects = [
    {
        id: "forgotten-isle",
        title: "Echoes of the Forgotten Isle",
        subtitle: "Third-Person Open-World Prototype with Adaptive Audio",
        focus: "Character Systems & AI Programming",
        tech: ["Unity", "C#", "Mecanim", "Wwise", "Google Resonance"],
        metrics: [
            { icon: "🗺️", value: "5 Biomes", label: "Open World" },
            { icon: "🎧", value: "Wwise + Resonance", label: "Spatial Audio" },
            { icon: "🎵", value: "Adaptive", label: "Music System" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "Modular Character System:", text: "Architected a flexible character framework supporting stats, weapon mechanics, and AI behaviors for both player and enemies." },
            { strong: "Complex Animation:", text: "Implemented Mecanim-driven animation controllers with synchronized footstep SFX, attack logic, and damage reactions." },
            { strong: "Intelligent Enemy AI:", text: "Developed behavior systems for enemy pathfinding, combat engagement, and terrain-aware movement across 5 biomes." },
            { strong: "Interactive Audio:", text: "Engineered terrain-detection footsteps, material-based weapon impacts, and Wwise-powered adaptive music." },
            { strong: "Biome-Based Design:", text: "Created 5 open-world environments with spatial audio using Google Resonance and time-of-day cycles." }
        ],
        embedSrc: "https://itch.io/embed/3710091",
        embedLinkText: "Echoes of the Forgotten Isle",
        embedLinkUrl: "https://gamingsoft.itch.io/echoes-of-the-forgotten-isle",
        mediaDescription: "Explore an open-world prototype with modular character systems and adaptive audio. Experience terrain-aware interactions and intelligent enemy AI.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Advanced animation programming, modular architecture design, AI behavior systems, and interactive audio integration."
        },
        footerNote: "*Composed original neofolk fantasy orchestral score with real-time modal shifts."
    },
    {
        id: "spooky-arena",
        title: "Spooky Arena",
        subtitle: "2.5D Online Multiplayer Arena Combat",
        focus: "Multiplayer Networking & Audio",
        tech: ["Unity", "C#", "Photon Quantum"],
        metrics: [
            { icon: "⏱️", value: "20 Days", label: "Dev Time" },
            { icon: "👥", value: "6 Players", label: "Multiplayer" },
            { icon: "🎵", value: "Original", label: "Music & SFX" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "Multiplayer Arena Combat:", text: "Created a 6-player arena with wave-based spawning and real-time combat mechanics." },
            { strong: "Photon Quantum Integration:", text: "Implemented deterministic netcode for precise movement, projectiles, and scoring." },
            { strong: "Dynamic Difficulty:", text: "Built a progressive wave system that increases challenge and rewards." },
            { strong: "Adaptive Audio:", text: "Designed dynamic music transitions responding to gameplay intensity." }
        ],
        embedSrc: "https://itch.io/embed/3053062",
        embedLinkText: "Spooky Arena",
        embedLinkUrl: "https://gamingsoft.itch.io/spooky-arena",
        mediaDescription: "Fast-paced 6-player arena combat where strategy meets reflexes. Battle waves of enemies while competing against other players.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Advanced multiplayer networking, deterministic physics, competitive game balance, and interactive audio programming."
        }
    },
    {
        id: "unreal-fps",
        title: "Simple FPS & MetaSounds Demo",
        subtitle: "3D FPS with Interactive Audio Systems",
        focus: "C++ Programming & Audio Systems",
        tech: ["Unreal Engine", "C++", "Blueprints", "MetaSounds"],
        metrics: [
            { icon: "🔧", value: "C++ & BP", label: "Dual Scripting" },
            { icon: "🤖", value: "3 AI Types", label: "Behavior Trees" },
            { icon: "🎧", value: "Metasounds", label: "Procedural Audio" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "Core FPS Mechanics:", text: "Implemented aiming, shooting, projectile physics, and VFX systems using C++." },
            { strong: "Intelligent Enemy AI:", text: "Developed behavior trees for enemy pathfinding, targeting, and combat engagement." },
            { strong: "Interactive Audio:", text: "Created MetaSounds-powered dynamic music that intensifies during combat." },
            { strong: "Player Progression:", text: "Built stats tracking for damage, kills, and health with an intuitive HUD." }
        ],
        embedSrc: "https://itch.io/embed/1784074",
        embedLinkText: "Simple FPS & MetaSounds Demo",
        embedLinkUrl: "https://gamingsoft.itch.io/simple-fps-metasounds-demo",
        mediaDescription: "Immersive third-person combat with intelligent enemies that adapt to your tactics. The music intensifies as battles heat up.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Advanced C++ programming, Unreal Engine proficiency, interactive audio design, and complete game system integration."
        },
        footerNote: "*Composed original music and designed all sound effects."
    },
    {
        id: "asteroids-new-hope",
        title: "Asteroids New Hope",
        subtitle: "Enhanced Asteroids with D.O.T.S. Performance System",
        focus: "Performance Optimization & D.O.T.S.",
        tech: ["Unity", "C#", "D.O.T.S.", "ECS"],
        metrics: [
            { icon: "⚡", value: "D.O.T.S.", label: "ECS System" },
            { icon: "🎵", value: "Original", label: "Music & SFX" },
            { icon: "🔧", value: "Pooling", label: "Optimized" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "High-Performance D.O.T.S.:", text: "Implemented Unity's Data-Oriented Technology Stack for optimal performance with hundreds of entities." },
            { strong: "Dynamic Upgrades:", text: "Created a progression system with randomized weapon enhancements from UFO destruction." },
            { strong: "Optimized Audio:", text: "Built a pooled audio system for efficient SFX playback and composed original music." },
            { strong: "Smart Object Pooling:", text: "Implemented object pooling for bullets and effects to reduce garbage collection." }
        ],
        embedSrc: "https://itch.io/embed/1392077",
        embedLinkText: "Asteroids Game Demo",
        embedLinkUrl: "https://gamingsoft.itch.io/asteroids-game-demo",
        mediaDescription: "Classic space shooter with modern enhancements. Collect weapon upgrades and experience smooth performance with hundreds of asteroids.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Advanced Unity optimization, D.O.T.S./ECS architecture, performance profiling, and scalable system design."
        }
    },
    {
        id: "funky-platformer",
        title: "2D Funky Platform Demo",
        subtitle: "Physics-Based Platformer with Cinematic Systems",
        focus: "Cinematic Tools & Physics Systems",
        tech: ["Unity", "C#", "Cinemachine", "Timeline"],
        metrics: [
            { icon: "🎬", value: "Cinemachine", label: "Camera System" },
            { icon: "⏱️", value: "Timeline", label: "Sequences" },
            { icon: "🎵", value: "Beat-Synced", label: "Music System" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "Advanced Camera Systems:", text: "Implemented Cinemachine for smooth player tracking, confinement, and camera shake." },
            { strong: "Interactive Physics:", text: "Created realistic water mechanics with currents and falling hazards." },
            { strong: "Cinematic Storytelling:", text: "Developed in-game cutscenes using Unity Timeline and dialogue systems." },
            { strong: "Optimized Audio:", text: "Built a pooled audio manager with intro-loop music systems." }
        ],
        embedSrc: "https://itch.io/embed/455929",
        embedLinkText: "2D Funky Platformer Audio Demo",
        embedLinkUrl: "https://gamingsoft.itch.io/2d-funky-platformer-demo",
        mediaDescription: "Adventure through dynamic environments with realistic water physics. Follow the story through interactive cutscenes.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Advanced Unity tools integration, physics programming, cinematic design, and comprehensive audio system development."
        },
        footerNote: "*Complete audio experience with original funky soundtrack."
    },
    {
        id: "slippery-logs",
        title: "Slippery Logs",
        subtitle: "Backend-Integrated Infinite Jumper with Anti-Cheat Systems",
        focus: "Backend Integration & Security",
        tech: ["Unity", "C#", "PlayFab", "Node.js"],
        metrics: [
            { icon: "☁️", value: "PlayFab", label: "Backend + Leaderboards" },
            { icon: "♾️", value: "Infinite", label: "Runner System" },
            { icon: "🎮", value: "Chiptune", label: "Folk Fusion" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "Secure Backend Architecture:", text: "Integrated PlayFab with custom cloud functions for anti-cheat score validation." },
            { strong: "Infinite Procedural Generation:", text: "Developed scalable log spawning systems with object pooling." },
            { strong: "Dynamic Remote Configuration:", text: "Implemented PlayFab-driven remote parameters for difficulty and balance." },
            { strong: "Complete UI/UX:", text: "Designed integrated leaderboards, player progression, and energy systems." }
        ],
        embedSrc: "https://itch.io/embed/482032",
        embedLinkText: "Slippery Logs",
        embedLinkUrl: "https://gamingsoft.itch.io/slippery-logs",
        mediaDescription: "Endless jumping action with global leaderboards and real-time competition. Scores are validated server-side.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Backend services integration, anti-cheat implementation, cloud functions development, and full-stack game architecture."
        },
        footerNote: "*Features original soundtrack and optimized audio management."
    },
    {
        id: "your-love-as-a-gift",
        title: "Your Love as a Gift",
        subtitle: "Customizable Romance Game with Dynamic Storytelling",
        focus: "Custom Content & Narrative Systems",
        tech: ["Unity", "C#", "Custom Tools"],
        metrics: [
            { icon: "🎨", value: "Customizable", label: "Characters & Story" },
            { icon: "🎵", value: "Adaptive", label: "Music Themes" },
            { icon: "💝", value: "Shareable", label: "Experience" }
        ],
        keyFeaturesTitle: "Key Features",
        keyPoints: [
            { strong: "Dynamic Customization:", text: "Created a content editor for personalized titles, sprites, and messages." },
            { strong: "Branching Narrative:", text: "Implemented responsive storytelling based on player choices." },
            { strong: "Adaptive Audio:", text: "Developed character-specific music themes that change based on choices." },
            { strong: "UI/UX Design:", text: "Designed intuitive navigation and emotional feedback systems." }
        ],
        embedSrc: "https://itch.io/embed/577853",
        embedLinkText: "Your Love as a Gift",
        embedLinkUrl: "https://gamingsoft.itch.io/your-love-as-a-gift",
        mediaDescription: "A heartfelt interactive experience. Customize everything from characters to messages for a truly personal adventure.",
        result: {
            strong: "Skills Demonstrated:",
            text: "Creative game design innovation, custom content systems, narrative programming, and emotional user experience design."
        },
        footerNote: "Unlock unique musical themes!"
    }
];

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Users, 
  Calendar, 
  User, 
  Bell, 
  Mail, 
  Share2, 
  Settings,
  MessageCircle,
  Gamepad2,
  Heart,
  Sparkles
} from 'lucide-react';
import WorldMap from './components/WorldMap';
import MatchCard from './components/MatchCard';
import AchievementWall from './components/AchievementWall';
import { Match } from './types';

const MOCK_MATCH: Match = {
  id: 'm1',
  title: 'BBQ Night 🔥',
  compatibility: 83,
  location: 'The Block Park',
  time: '7 PM Tomorrow',
  participants: []
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showMatch, setShowMatch] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <section>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-pixel text-lg">World</h2>
              </div>
              <WorldMap />
            </section>

            <AnimatePresence>
              {showMatch && (
                <section className="relative">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20 flex items-center justify-center p-4">
                    <MatchCard 
                      match={MOCK_MATCH} 
                      onJoin={() => setShowMatch(false)}
                      onSkip={() => setShowMatch(false)}
                    />
                  </div>
                </section>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="pixel-card bg-[#2a2f4e]">
                <h4 className="font-pixel text-[10px] text-pixel-accent mb-2">AI STATUS</h4>
                <p className="text-xs">Your AI is currently chatting with <span className="text-pixel-accent">@PixelPioneer</span> about retro games.</p>
              </div>
              <div className="pixel-card bg-[#2a2f4e]">
                <h4 className="font-pixel text-[10px] text-pixel-accent mb-2">UPCOMING</h4>
                <p className="text-xs">Coffee Meetup at <span className="text-pixel-accent">8-Bit Cafe</span> in 2 hours.</p>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-6">
            <section className="pixel-card flex items-center gap-6">
              <div className="w-24 h-24 bg-pixel-accent pixel-border flex items-center justify-center">
                <User className="w-16 h-16 text-black" />
              </div>
              <div className="space-y-2">
                <h2 className="font-pixel text-xl">Linh <span className="text-xs text-pixel-accent">LV. 12</span></h2>
                <p className="text-xs font-mono opacity-70">"Exploring the digital frontier one pixel at a time."</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-[8px] font-pixel">#RETRO</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[8px] font-pixel">#COFFEE</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[8px] font-pixel">#AI</span>
                </div>
              </div>
            </section>
            <AchievementWall />
          </div>
        );
      case 'chat':
        return (
          <div className="flex flex-col h-[60vh] pixel-card">
            <div className="flex-1 overflow-y-auto space-y-4 p-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-pixel-accent pixel-border flex-shrink-0" />
                <div className="bg-white/10 p-2 rounded text-xs max-w-[80%]">
                  Hey! My AI told me you're into retro gaming too?
                </div>
              </div>
              <div className="flex gap-2 flex-row-reverse">
                <div className="w-8 h-8 bg-pixel-panel pixel-border flex-shrink-0" />
                <div className="bg-pixel-accent text-black p-2 rounded text-xs max-w-[80%]">
                  Totally! I've been playing a lot of 8-bit RPGs lately.
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-black/20 pixel-border p-2 text-xs outline-none focus:border-pixel-accent"
              />
              <button className="pixel-button bg-pixel-accent text-black">SEND</button>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[50vh] opacity-50">
            <Sparkles className="w-12 h-12 mb-4" />
            <p className="font-pixel text-xs">Section under construction...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto border-x-4 border-pixel-border bg-pixel-bg">
      {/* Header */}
      <header className="bg-pixel-panel p-4 pixel-border border-t-0 border-x-0 flex items-center justify-between sticky top-0 z-40">
        <div className="space-y-1">
          <h1 className="font-pixel text-xs text-white">Muluck AI</h1>
          <div className="flex flex-col gap-1 text-[10px] text-pixel-accent/80 font-mono">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Persona: Active</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-1 hover:bg-white/10 rounded transition-colors">
            <Bell className="w-5 h-5 text-pixel-accent" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-pixel-panel" />
          </button>
          <Mail className="w-5 h-5 text-white/70" />
          <Share2 className="w-5 h-5 text-white/70" />
          <Settings className="w-5 h-5 text-white/70" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-24">
        {renderContent()}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-pixel-panel pixel-border border-b-0 border-x-0 p-2 z-50">
        <div className="flex items-center justify-around">
          <NavButton 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')}
            icon={<Home className="w-6 h-6" />}
            label="Home"
          />
          <NavButton 
            active={activeTab === 'community'} 
            onClick={() => setActiveTab('community')}
            icon={<Users className="w-6 h-6" />}
            label="Community"
          />
          <NavButton 
            active={activeTab === 'chat'} 
            onClick={() => setActiveTab('chat')}
            icon={<MessageCircle className="w-6 h-6" />}
            label="Chat"
          />
          <NavButton 
            active={activeTab === 'games'} 
            onClick={() => setActiveTab('games')}
            icon={<Gamepad2 className="w-6 h-6" />}
            label="Games"
          />
          <NavButton 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')}
            icon={<User className="w-6 h-6" />}
            label="Profile"
          />
        </div>
      </nav>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-2 transition-all ${
        active ? 'text-pixel-accent scale-110' : 'text-white/50 hover:text-white'
      }`}
    >
      <div className={`${active ? 'pixel-border p-1 bg-white/10' : ''}`}>
        {icon}
      </div>
      <span className="font-pixel text-[8px] uppercase">{label}</span>
      {active && <div className="w-full h-1 bg-pixel-accent mt-1" />}
    </button>
  );
}

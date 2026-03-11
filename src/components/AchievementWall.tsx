import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Compass, Flame, Headphones, Book, Leaf, Telescope, Palette, Sword, Mic, ChefHat, Lock } from 'lucide-react';

const ACHIEVEMENTS = [
  { id: 1, icon: <Coffee />, title: 'Coffee Connoisseur', desc: 'Attended 5 coffee meetups.', unlocked: true },
  { id: 2, icon: <Compass />, title: 'Explorer', desc: 'Visited 10 different pixel zones.', unlocked: true },
  { id: 3, icon: <Flame />, title: 'Social Butterfly', desc: 'Matched with 50 personas.', unlocked: true },
  { id: 4, icon: <Headphones />, title: 'Music Lover', desc: 'Joined a virtual concert.', unlocked: true },
  { id: 5, icon: <Book />, title: 'Scholar', desc: 'Read 5 AI journals.', unlocked: true },
  { id: 6, icon: <Leaf />, title: 'Gardener', desc: 'Planted a digital tree.', unlocked: true },
  { id: 7, icon: <Telescope />, title: 'Stargazer', desc: 'Watched a meteor shower.', unlocked: true },
  { id: 8, icon: <Palette />, title: 'Artist', desc: 'Created an avatar skin.', unlocked: true },
  { id: 9, icon: <Sword />, title: 'Warrior', desc: 'Won a mini-game.', unlocked: false },
  { id: 10, icon: <Mic />, title: 'Idol', desc: 'Performed at the plaza.', unlocked: false },
  { id: 11, icon: <ChefHat />, title: 'Chef', desc: 'Cooked a pixel meal.', unlocked: false },
];

export default function AchievementWall() {
  return (
    <div className="pixel-card bg-[#3e2731] border-[#633e4d]">
      <h3 className="font-pixel text-xs text-pixel-accent mb-4 uppercase">Muluck Pixel Achievement Wall</h3>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {ACHIEVEMENTS.map((ach) => (
          <div key={ach.id} className="group relative">
            <div className={`w-12 h-12 flex items-center justify-center pixel-border transition-all ${
              ach.unlocked ? 'bg-pixel-panel text-pixel-accent' : 'bg-black/40 text-gray-600 grayscale'
            }`}>
              {ach.unlocked ? ach.icon : <Lock className="w-4 h-4" />}
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-black text-white text-[8px] rounded pixel-border opacity-0 group-hover:opacity-100 pointer-events-none z-50 transition-opacity">
              <p className="font-pixel text-pixel-accent mb-1">{ach.title}</p>
              <p className="font-mono">{ach.desc}</p>
            </div>
          </div>
        ))}
        {/* Placeholder for more */}
        {Array.from({ length: 13 }).map((_, i) => (
          <div key={`empty-${i}`} className="w-12 h-12 bg-black/20 pixel-border flex items-center justify-center">
            <Lock className="w-4 h-4 text-gray-800" />
          </div>
        ))}
      </div>
    </div>
  );
}

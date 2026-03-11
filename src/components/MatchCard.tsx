import React from 'react';
import { motion } from 'motion/react';
import { Flame, MapPin, Clock, Heart } from 'lucide-react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  onJoin: () => void;
  onSkip: () => void;
}

export default function MatchCard({ match, onJoin, onSkip }: MatchCardProps) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="pixel-card max-w-sm w-full mx-auto"
    >
      <div className="text-center mb-4">
        <h3 className="font-pixel text-sm text-pixel-accent uppercase tracking-wider">Muluck Drop</h3>
      </div>

      <div className="bg-gradient-to-br from-[#f27d26] to-[#ffcd75] p-4 rounded-lg mb-4 pixel-border relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="font-pixel text-xl text-white leading-tight">{match.title}</h2>
            <div className="flex items-center gap-1 mt-2 text-white/80 text-xs">
              <Heart className="w-3 h-3 fill-current" />
              <span>{match.compatibility}% Compatibility</span>
            </div>
          </div>
          <Flame className="w-12 h-12 text-white opacity-50" />
        </div>
        {/* Background fire animation simulation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 animate-pulse" />
      </div>

      <div className="space-y-3 mb-6 font-mono text-sm">
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-pixel-accent" />
          <span>Location: {match.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-pixel-accent" />
          <span>Time: {match.time}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onJoin}
          className="pixel-button bg-pixel-accent text-black border-yellow-600"
        >
          JOIN
        </button>
        <button 
          onClick={onSkip}
          className="pixel-button bg-gray-600 border-gray-800 opacity-50"
        >
          SKIP
        </button>
      </div>
    </motion.div>
  );
}

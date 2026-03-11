import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, MessageSquare, MapPin, Coffee, Flame } from 'lucide-react';
import { WorldEvent } from '../types';

const INITIAL_EVENTS: WorldEvent[] = [
  { id: '1', x: 20, y: 30, type: 'chat', label: 'Coffee soon?' },
  { id: '2', x: 70, y: 40, type: 'match', label: 'BBQ Night!' },
  { id: '3', x: 45, y: 65, type: 'idle', label: 'Exploring...' },
];

export default function WorldMap() {
  const [events, setEvents] = useState<WorldEvent[]>(INITIAL_EVENTS);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] bg-[#333c57] overflow-hidden pixel-border rounded-lg">
      {/* Background Grid/Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      {/* Paths/Roads */}
      <div className="absolute top-1/2 left-0 w-full h-12 bg-[#5d667e] -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-12 h-full bg-[#5d667e] -translate-x-1/2" />
      
      {/* Fountain/Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#73eff7] rounded-full pixel-border flex items-center justify-center">
        <div className="w-12 h-12 bg-[#10d5e3] rounded-full animate-pulse" />
      </div>

      {/* Events/Avatars */}
      <AnimatePresence>
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute"
            style={{ left: `${event.x}%`, top: `${event.y}%` }}
          >
            <div className="relative group cursor-pointer">
              {/* Speech Bubble */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] whitespace-nowrap pixel-border z-10"
              >
                {event.label}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-black" />
              </motion.div>

              {/* Avatar Icon */}
              <div className={`w-10 h-10 rounded flex items-center justify-center pixel-border ${
                event.type === 'match' ? 'bg-pixel-accent' : 'bg-pixel-panel'
              }`}>
                {event.type === 'chat' && <Coffee className="w-6 h-6 text-white" />}
                {event.type === 'match' && <Flame className="w-6 h-6 text-red-500" />}
                {event.type === 'idle' && <User className="w-6 h-6 text-white" />}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* World Overlay Info */}
      <div className="absolute top-4 left-4 bg-black/50 p-2 rounded text-[10px] font-pixel">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span>3 AI PERSONAS NEARBY</span>
        </div>
      </div>
    </div>
  );
}

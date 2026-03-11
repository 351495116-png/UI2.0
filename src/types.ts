export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  persona: string;
  interests: string[];
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  isAi: boolean;
}

export interface Match {
  id: string;
  title: string;
  compatibility: number;
  location: string;
  time: string;
  participants: UserProfile[];
}

export interface WorldEvent {
  id: string;
  x: number;
  y: number;
  type: 'chat' | 'match' | 'idle';
  label: string;
}

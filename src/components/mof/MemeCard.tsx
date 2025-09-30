import { MedievalButton } from './MedievalButton';

interface Meme {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  likes: number;
  isPremium: boolean;
}

interface MemeCardProps {
  meme: Meme;
  onLike?: (id: number) => void;
  onView?: (id: number) => void;
}

export function MemeCard({ meme, onLike, onView }: MemeCardProps) {
  return (
    <div className="bg-gradient-to-br from-medieval-stone to-medieval-dark rounded-lg medieval-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Image Container */}
      <div className="relative h-48 bg-medieval-bronze">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-medieval-gold">
            {meme.category === 'knight' ? '🛡️' : 
             meme.category === 'dragon' ? '🐉' : 
             meme.category === 'castle' ? '🏰' : '⚔️'}
          </div>
        </div>
        {meme.isPremium && (
          <div className="absolute top-2 right-2 bg-medieval-gold text-medieval-dark px-2 py-1 rounded-full text-xs font-cinzel font-bold">
            PREMIUM
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-medieval-gold font-cinzel font-bold text-lg mb-2 medieval-text-shadow">
          {meme.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {meme.description}
        </p>
        
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-medieval-blood text-white px-3 py-1 rounded-full text-xs font-cinzel font-medium">
            {meme.category.toUpperCase()}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-medieval-silver">
            <span>❤️</span>
            <span className="font-cinzel font-medium">{meme.likes}</span>
          </div>
          <div className="text-medieval-gold text-sm font-cinzel">
            {meme.isPremium ? 'Premium Content' : 'Free'}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <MedievalButton 
            variant="blood" 
            size="sm" 
            onClick={() => onLike?.(meme.id)}
            className="flex-1"
          >
            ❤️ Like
          </MedievalButton>
          <MedievalButton 
            variant="gold" 
            size="sm" 
            onClick={() => onView?.(meme.id)}
            className="flex-1"
          >
            👁️ View
          </MedievalButton>
        </div>
      </div>
    </div>
  );
}

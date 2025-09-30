'use client';

import { useState } from 'react';
import { NavBar } from '@/components/mof/NavBar';
import { MemeCard } from '@/components/mof/MemeCard';
import { MedievalButton } from '@/components/mof/MedievalButton';
import { memes, type Meme } from './_data/memes';

export default function MOFPage() {
  const [filteredMemes, setFilteredMemes] = useState<Meme[]>(memes);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showPremiumOnly, setShowPremiumOnly] = useState<boolean>(false);

  const categories = ['all', 'knight', 'dragon', 'castle', 'magic'];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    let filtered = memes;
    
    if (category !== 'all') {
      filtered = filtered.filter(meme => meme.category === category);
    }
    
    if (showPremiumOnly) {
      filtered = filtered.filter(meme => meme.isPremium);
    }
    
    setFilteredMemes(filtered);
  };

  const handlePremiumFilter = () => {
    const newShowPremiumOnly = !showPremiumOnly;
    setShowPremiumOnly(newShowPremiumOnly);
    
    let filtered = memes;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(meme => meme.category === selectedCategory);
    }
    
    if (newShowPremiumOnly) {
      filtered = filtered.filter(meme => meme.isPremium);
    }
    
    setFilteredMemes(filtered);
  };

  const handleLike = (id: number) => {
    console.log(`Liked meme ${id}`);
    // In a real app, this would update the like count
  };

  const handleView = (id: number) => {
    console.log(`Viewing meme ${id}`);
    // In a real app, this would navigate to the meme detail page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medieval-dark via-medieval-stone to-medieval-dark">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-cinzel font-bold text-medieval-gold mb-4 medieval-text-shadow">
            ⚔️ Medieval OnlyFans Sandbox ⚔️
          </h1>
          <p className="text-xl text-medieval-silver font-cinzel max-w-2xl mx-auto">
            Discover the finest collection of medieval memes, knight adventures, and dragon tales. 
            Join our realm of laughter and entertainment!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-medieval-gold to-yellow-600 rounded-lg p-6 text-center medieval-border">
            <div className="text-3xl font-cinzel font-bold text-medieval-dark">
              {memes.length}
            </div>
            <div className="text-medieval-dark font-cinzel">Total Memes</div>
          </div>
          <div className="bg-gradient-to-r from-medieval-silver to-gray-400 rounded-lg p-6 text-center medieval-border">
            <div className="text-3xl font-cinzel font-bold text-medieval-dark">
              {memes.filter(m => !m.isPremium).length}
            </div>
            <div className="text-medieval-dark font-cinzel">Free Content</div>
          </div>
          <div className="bg-gradient-to-r from-medieval-blood to-red-800 rounded-lg p-6 text-center medieval-border">
            <div className="text-3xl font-cinzel font-bold text-white">
              {memes.filter(m => m.isPremium).length}
            </div>
            <div className="text-white font-cinzel">Premium Content</div>
          </div>
          <div className="bg-gradient-to-r from-medieval-bronze to-orange-700 rounded-lg p-6 text-center medieval-border">
            <div className="text-3xl font-cinzel font-bold text-white">
              {memes.reduce((sum, meme) => sum + meme.likes, 0)}
            </div>
            <div className="text-white font-cinzel">Total Likes</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-medieval-stone to-medieval-dark rounded-lg p-6 mb-8 medieval-border">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="text-medieval-gold font-cinzel font-bold text-lg">
              Filter by Category:
            </div>
            {categories.map((category) => (
              <MedievalButton
                key={category}
                variant={selectedCategory === category ? 'gold' : 'silver'}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </MedievalButton>
            ))}
            
            <div className="ml-4">
              <MedievalButton
                variant={showPremiumOnly ? 'blood' : 'bronze'}
                size="sm"
                onClick={handlePremiumFilter}
              >
                {showPremiumOnly ? 'Show All' : 'Premium Only'}
              </MedievalButton>
            </div>
          </div>
        </div>

        {/* Memes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMemes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              onLike={handleLike}
              onView={handleView}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredMemes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏰</div>
            <h3 className="text-2xl font-cinzel font-bold text-medieval-gold mb-2">
              No memes found
            </h3>
            <p className="text-medieval-silver font-cinzel">
              Try adjusting your filters to see more content.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-medieval-gold to-yellow-600 rounded-lg p-8 medieval-border">
            <h2 className="text-3xl font-cinzel font-bold text-medieval-dark mb-4">
              Join Our Medieval Realm!
            </h2>
            <p className="text-medieval-dark font-cinzel mb-6">
              Subscribe to unlock premium content and support our knights, dragons, and jesters!
            </p>
            <div className="flex justify-center space-x-4">
              <MedievalButton variant="blood" size="lg">
                🛡️ Become a Knight
              </MedievalButton>
              <MedievalButton variant="gold" size="lg">
                🐉 Dragon Supporter
              </MedievalButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

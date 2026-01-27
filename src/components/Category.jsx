import { useState } from "react";
import { X } from "lucide-react";

const categories = [
  { id: 'Coffee', emoji: '☕', label: 'Coffee' },
  { id: 'Non Coffee', emoji: '🥛', label: 'Non Coffee' },
  { id: 'Foods', emoji: '🍔', label: 'Foods' },
  { id: 'Rice Meal', emoji: '🍚', label: 'Rice Meal' },
  { id: 'Food Trays', emoji: '🍽️', label: 'Food Trays' },
  { id: 'Soup', emoji: '🍲', label: 'Soup' },
  { id: 'Soda', emoji: '🥤', label: 'Soda' },
  { id: 'Lomi', emoji: '🍜', label: 'Lomi' },
  { id: 'Pasta', emoji: '🍝', label: 'Pasta' },
  { id: 'Pastry', emoji: '🥐', label: 'Pastry' },
];

export default function Category({ category, setCategory, search, setSearch }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const visibleCount = 2; // ✅ ONLY TWO ON MOBILE
  const tabletCount = 6;

  const handleCategorySelect = (catId) => {
    setCategory(catId);
    setShowOverlay(false);
  };

  return (
    <div id="menu" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-6">
      <div className="bg-secondary rounded-2xl shadow-lg p-4 mb-6">

        {/* Tablet & Desktop */}
        <div className="hidden md:flex lg:hidden gap-3">
          {categories.slice(0, tabletCount).map(cat => (
            <CategoryButton
              key={cat.id}
              cat={cat}
              active={category === cat.id}
              onClick={() => setCategory(cat.id)}
            />
          ))}

          <button
            onClick={() => setShowOverlay(true)}
            className="flex flex-col items-center justify-center px-4 py-3
                      min-w-20 rounded-xl bg-secondary hover:bg-secondary/90
                      transition-all active:scale-95"
          >
            <span className="text-2xl">...</span>
            <span className="text-gray-800 text-sm font-semibold">More</span>
          </button>
        </div>


        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex gap-3">
            {categories.slice(0, visibleCount).map(cat => (
              <CategoryButton
                key={cat.id}
                cat={cat}
                active={category === cat.id}
                onClick={() => setCategory(cat.id)}
              />
            ))}

            <button
              onClick={() => setShowOverlay(true)}
              className="flex flex-col items-center justify-center px-4 py-3
                        min-w-20 rounded-xl bg-secondary hover:bg-secondary/90
                        shadow-none focus:outline-none transition-all active:scale-95"
            >
              <span className="text-2xl">...</span>
              <span className="text-gray-800 text-sm font-semibold">More</span>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Modal */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowOverlay(false)}
        >
          <div
            className="bg-secondary rounded-2xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">
                Select Category
              </h3>
              <button
                onClick={() => setShowOverlay(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* MATCHES DESKTOP */}
            <div className="p-6 grid grid-cols-2 gap-4">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`
                    flex flex-col items-center gap-3 p-6 rounded-xl
                    transition-all active:scale-95
                    ${category === cat.id
                    }
                  `}
                >
                  <span className="text-4xl">{cat.emoji}</span>
                  <span className="text-gray-800 font-semibold">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Title + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{category}</h2>

        <div className="relative w-full sm:w-96">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search food, drinks, or meals..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
}

function CategoryButton({ cat, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center gap-2 px-4 py-3 min-w-20 rounded-xl
        transition-all duration-200
        hover:bg-white/50 active:scale-95
        ${active 
          ? 'bg-white shadow-md scale-105'   // active button highlight
          : 'bg-secondary'                  // inactive button uses your theme color
        }
      `}
    >
      <span className="text-2xl">{cat.emoji}</span>
      <span className="text-gray-800 font-semibold text-sm text-center">
        {cat.label}
      </span>
    </button>
  );
}

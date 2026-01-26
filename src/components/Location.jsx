import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Location() {
  return (
    <div id="location" className="max-w-7xl mx-auto px-4 mt-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-heading font-bold text-gray-800 mb-2">Location</h2>
      <p className="text-gray-600 mb-6">
        Find us at our main branch (besides Emman FoodHouse & Soap Opera Laundry)
      </p>

      <a 
        href="https://maps.app.goo.gl/tkjLQxACNQCAtTob8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full relative"
      >
        <div className="w-full aspect-video overflow-hidden rounded-2xl relative">
          <img 
            src="/location.jpg" 
            alt="Location" 
            className="w-full h-full object-cover"
          />

          {/* Overlay is always visible */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl">
            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600" />
              <span className="text-gray-800 font-semibold">View on Google Maps</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

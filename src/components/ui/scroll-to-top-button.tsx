import { MapPin } from 'lucide-react';

function StickyMapButton() {
  return (
    <a
      href="https://g.co/kgs/9XuLd9o"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open church location in Google Maps"
      className="w-12 h-12 flex fixed right-10 bottom-10 bg-[#2D71EA] rounded-full shadow-lg shadow-gray-900 justify-center items-center z-50 hover:bg-blue-700 transition-colors"
    >
      <MapPin className="w-6 h-6 text-white" />
    </a>
  );
}

export default StickyMapButton;

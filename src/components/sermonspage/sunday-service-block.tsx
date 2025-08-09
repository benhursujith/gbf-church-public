import { Clock, MapPin } from 'lucide-react';

export function SundayServiceBlock() {
  return (
    <section className="relative z-10 overflow-hidden bg-white text-black headline-defaults copy-defaults">
      <div className="wrapper relative z-20 animate-in effect-fade-in entered py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Info */}
          <div className="flex-1 min-w-[260px]">
            <h2 className="text-3xl font-bold mb-4">Sunday Worship Service</h2>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold">9:45 AM – 12:00 PM</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="text-base font-semibold">Christ University Back Gate (4)</span>
            </div>
            <div className="text-base text-gray-700 mb-4">
              1st Main Rd, near CBS ATM, Tavarekere, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029
            </div>
          </div>
          {/* Map Embed */}
          <div className="flex-1 w-full max-w-xl min-w-[260px]">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.640792564692!2d77.60353027635654!3d12.930793287380839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a40c7762df%3A0xc042dbe4e5424cae!2sGrace%20Bible%20Fellowship!5e0!3m2!1sen!2sin!4v1752766947452!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grace Bible Fellowship Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
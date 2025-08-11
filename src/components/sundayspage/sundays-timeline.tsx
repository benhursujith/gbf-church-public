import { BookOpen, Clock, GraduationCap, Heart, Info, Mic, Users } from 'lucide-react';

const timeline = [
  { time: '9:45', label: 'Worship', desc: 'A time of audible congregational worship', icon: <Clock className="h-6 w-6 text-blue-400" /> },
  { time: '10:20', label: "Lord's Table", desc: "Weekly remembrance of Christ through the emblems", icon: <BookOpen className="h-6 w-6 text-blue-400" /> },
  { time: '10:50', label: 'Sermon', desc: 'Expository sermon series', icon: <Mic className="h-6 w-6 text-blue-400" /> },
  { time: '11:20', label: 'Announcements and Prayer', desc: 'Community updates and a time of prayer', icon: <Info className="h-6 w-6 text-blue-400" /> },
  { time: '11:30', label: 'Fellowship', desc: 'Connect with others over refreshments', icon: <Users className="h-6 w-6 text-blue-400" /> },
  { time: '12:00', label: 'Equip Sessions | Kids\' Ministry', desc: 'Practical sessions for daily living | Kids praise & learn', icon: <div className="flex gap-1"><GraduationCap className="h-5 w-5 text-blue-400" /><Heart className="h-5 w-5 text-blue-400" /></div> },
];

export function SundaysTimeline() {
  return (
    <div className="w-full py-8">
      {/* Desktop Layout - Horizontal Timeline with Alternating Boxes */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
            
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={`${item.time}-${idx}`}
                  className="relative z-10 flex flex-col items-center group"
                >
                  {/* Content Card - Above or Below */}
                  {isEven && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 w-48 h-32 flex flex-col justify-start group-hover:bg-white/10 transition-all duration-300 mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white text-center">{item.label}</span>
                        {item.icon}
                      </div>
                      <div className="text-xs text-blue-200 leading-relaxed flex-1">
                        {item.desc}
                      </div>
                    </div>
                  )}
                  
                  {/* Time Badge */}
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.time}
                  </div>
                  
                  {/* Content Card - Below */}
                  {!isEven && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 w-48 h-32 flex flex-col justify-start group-hover:bg-white/10 transition-all duration-300 mt-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white text-center">{item.label}</span>
                        {item.icon}
                      </div>
                      <div className="text-xs text-blue-200 leading-relaxed flex-1">
                        {item.desc}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tablet Layout - Two Column Flow with Alternating */}
      <div className="hidden sm:block md:hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-8">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={`${item.time}-${idx}`}
                  className="flex flex-col items-center group"
                >
                  {/* Content Card - Above or Below */}
                  {isEven && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 w-full h-28 flex flex-col justify-start group-hover:bg-white/10 transition-all duration-300 mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white text-center">{item.label}</span>
                        {item.icon}
                      </div>
                      <div className="text-xs text-blue-200 leading-relaxed flex-1">
                        {item.desc}
                      </div>
                    </div>
                  )}
                  
                  {/* Time Badge */}
                  <div className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.time}
                  </div>
                  
                  {/* Content Card - Below */}
                  {!isEven && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 w-full h-28 flex flex-col justify-start group-hover:bg-white/10 transition-all duration-300 mt-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white text-center">{item.label}</span>
                        {item.icon}
                      </div>
                      <div className="text-xs text-blue-200 leading-relaxed flex-1">
                        {item.desc}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Vertical Timeline with Alternating Left/Right */}
      <div className="block sm:hidden">
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/30"></div>
            
            <div className="space-y-6">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div
                    key={`${item.time}-${idx}`}
                    className={`flex items-start gap-4 group relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Time Badge */}
                    <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 flex-shrink-0">
                      {item.time}
                    </div>
                    
                    {/* Content - Left or Right */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex-1 h-28 flex flex-col justify-start group-hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white">{item.label}</span>
                        {item.icon}
                      </div>
                      <div className="text-xs text-blue-200 leading-relaxed flex-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
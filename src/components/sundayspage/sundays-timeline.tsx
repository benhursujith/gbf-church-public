import { Clock, BookOpen, Users, Mic, Info } from 'lucide-react';

const timeline = [
  { time: '9:45', label: 'Worship', desc: 'Preparing our hearts through praise and prayer', icon: <Clock className="h-6 w-6 text-blue-400" /> },
  { time: '10:05', label: "Lord's Table", desc: "Remembering Christ's sacrifice together", icon: <BookOpen className="h-6 w-6 text-blue-400" /> },
  { time: '10:25', label: 'Sermon', desc: 'Biblical teaching for everyday application', icon: <Mic className="h-6 w-6 text-blue-400" /> },
  { time: '11:05', label: 'Announcements & Prayer', desc: 'Community updates and shared prayer time', icon: <Info className="h-6 w-6 text-blue-400" /> },
  { time: '11:20', label: 'Fellowship Time', desc: 'Connect with others over refreshments', icon: <Users className="h-6 w-6 text-blue-400" /> },
];

export function SundaysTimeline() {
  // Calculate percentage positions for the line
  const circleCount = timeline.length;
  const startPercent = (1 / (2 * circleCount)) * 100;
  const endPercent = 100 - startPercent;

  return (
    <div className="w-full overflow-x-auto py-12">
      <div className="relative flex flex-col md:flex-row items-center justify-center min-w-0 px-6 h-auto md:h-48" style={{ minHeight: '350px' }}>
        {/* Horizontal line for md+ (trimmed to between first and last circles, now white to match circles) */}
        <div
          className="hidden md:block absolute top-1/2 h-1 bg-white z-0"
          style={{
            left: `${startPercent}%`,
            right: `${100 - endPercent}%`,
            transform: 'translateY(-50%)',
            backgroundColor: '#fff', // explicitly white
          }}
        />
        {/* Vertical line for mobile (trimmed to between first and last circles, now white to match circles) */}
        <div
          className="block md:hidden absolute left-1/2 w-1 bg-white z-0"
          style={{
            top: `${startPercent}%`,
            bottom: `${100 - endPercent}%`,
            transform: 'translateX(-50%)',
            backgroundColor: '#fff', // explicitly white
          }}
        />
        {timeline.map((item, idx) => (
          <div
            key={item.time}
            className="flex flex-col items-center md:justify-center flex-1 min-w-[120px] relative z-10 w-full md:w-auto"
          >
            {/* Alternate text above/below timeline, spaced further from the circle */}
            {idx % 2 === 0 ? (
              <div className="mb-10 md:mb-10 text-center" style={{ marginBottom: '2.5cm' }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base font-semibold text-white">{item.label}</span>
                  {item.icon}
                </div>
                <div className="text-sm text-blue-200 max-w-[140px] mx-auto">{item.desc}</div>
              </div>
            ) : <div className="mb-16 md:mb-16" style={{ marginBottom: '2.5cm' }} />}
            {/* Circle with time, perfectly centered on the line */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center text-black text-lg font-bold shadow-md z-10 border-2 border-white" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                {item.time}
              </div>
            </div>
            {/* Alternate text below timeline, spaced further from the circle */}
            {idx % 2 === 1 ? (
              <div className="mt-10 md:mt-10 text-center" style={{ marginTop: '2.5cm' }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base font-semibold text-white">{item.label}</span>
                  {item.icon}
                </div>
                <div className="text-sm text-blue-200 max-w-[140px] mx-auto">{item.desc}</div>
              </div>
            ) : <div className="mt-16 md:mt-16" style={{ marginTop: '2.5cm' }} />}
          </div>
        ))}
      </div>
    </div>
  );
} 
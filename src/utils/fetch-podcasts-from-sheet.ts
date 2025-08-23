// Utility to fetch and parse life topics from Google Sheet CSV
function parseCSV(text: string) {
  // Simple CSV parser that handles quoted fields with commas
  const lines = text.split('\n').filter(Boolean);
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const cols: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        cols.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    cols.push(current);
    const obj: any = {};
    headers.forEach((h, i) => {
      obj[h] = cols[i] ? cols[i].trim() : '';
    });
    return obj;
  });
}

export async function fetchPodcastsFromSheet() {
  try {
    // Use the API route to avoid CORS issues
    const res = await fetch('/api/podcasts');
    
    if (!res.ok) {
      console.warn('API route not accessible');
      return [];
    }
    
    const data = await res.json();
    console.log('Fetched podcasts via API:', data.length);
    
    return data;
  } catch (error) {
    console.error('Error fetching podcasts from API:', error);
    return [];
  }
} 
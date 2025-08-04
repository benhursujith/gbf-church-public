// Utility to fetch and parse sermons and podcasts from Google Sheet CSV
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

export async function fetchSermonsFromSheet() {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR29YwgCPzDXFRmQW2f6xaoGn80ebtl-IXGcvdx-JJq_K1XMu7tF1kDAS7qhdesSbGvD3MizoZwLIBc/pub?output=csv';
  const res = await fetch(csvUrl);
  const text = await res.text();
  const items = parseCSV(text);
  return items
    .map(obj => ({
      title: obj.title,
      description: obj.description,
      image: obj.channel === 'podcast' ? '' : obj.image,
      link: obj.link,
      channel: obj.channel,
      type: obj.type,
      series: obj.series, // <-- add this line
      date: obj.date,     // <-- add this if you want to sort by date
    }))
    .filter(s => s.title && s.link && s.channel);
} 
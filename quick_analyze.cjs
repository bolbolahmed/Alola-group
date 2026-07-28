const { GoogleGenAI } = require('@google/genai');
const http = require('https');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const allImages = [
  { num: '1', url: 'https://i.postimg.cc/TLxCqpYt/1.jpg' },
  { num: '2', url: 'https://i.postimg.cc/62KYLy5z/2.jpg' },
  { num: '3', url: 'https://i.postimg.cc/8JGtBjP3/3.jpg' },
  { num: '4', url: 'https://i.postimg.cc/7G4mMfYd/4.jpg' },
  { num: '5', url: 'https://i.postimg.cc/N9tp75jv/5.jpg' },
  { num: '6', url: 'https://i.postimg.cc/XGgx24pz/6.jpg' },
  { num: '10', url: 'https://i.postimg.cc/TLcQkfKR/10.jpg' },
  { num: '11', url: 'https://i.postimg.cc/62hzHt82/11.jpg' },
  { num: '12', url: 'https://i.postimg.cc/fSTCppdJ/12.jpg' },
  { num: '13', url: 'https://i.postimg.cc/9wFbKK99/13.jpg' },
  { num: '14', url: 'https://i.postimg.cc/fSTCppdf/14.jpg' },
  { num: '15', url: 'https://i.postimg.cc/GThKVVDq/15.jpg' },
  { num: '16', url: 'https://i.postimg.cc/jndcmmfg/16.jpg' },
  { num: '18', url: 'https://i.postimg.cc/H8szRRM2/18.jpg' },
  { num: '19', url: 'https://i.postimg.cc/SYNd339t/19.jpg' },
  { num: '21', url: 'https://i.postimg.cc/zHX766hc/21.jpg' },
  { num: '22', url: 'https://i.postimg.cc/K4Z01kWG/22.jpg' },
  { num: '23', url: 'https://i.postimg.cc/nMH3XjWz/23.jpg' },
  { num: '24', url: 'https://i.postimg.cc/CdFcRB2x/24.jpg' },
  { num: '28', url: 'https://i.postimg.cc/dDq5hkfk/28.jpg' },
  { num: '29', url: 'https://i.postimg.cc/Wt25dFyr/29.jpg' },
  { num: '30', url: 'https://i.postimg.cc/xq06XJZz/30.jpg' },
  { num: '31', url: 'https://i.postimg.cc/jCsMDw1y/31.jpg' },
  { num: '32', url: 'https://i.postimg.cc/kDnT26Hv/32.jpg' },
  { num: '33', url: 'https://i.postimg.cc/LhNNL4dY/33.jpg' },
  { num: '34', url: 'https://i.postimg.cc/xqttMjrb/34.jpg' },
  { num: '35', url: 'https://i.postimg.cc/3WnnmrMp/35.jpg' },
  { num: '36', url: 'https://i.postimg.cc/mh88CZxY/36.jpg' },
  { num: '37', url: 'https://i.postimg.cc/G9qqG30k/37.jpg' },
  { num: '38', url: 'https://i.postimg.cc/QV001NLk/38.jpg' },
  { num: '39', url: 'https://i.postimg.cc/kDffKMrc/39.jpg' },
  { num: '40', url: 'https://i.postimg.cc/6TYYn6sY/40.jpg' },
  { num: '41', url: 'https://i.postimg.cc/rzQQxy6Y/41.jpg' },
  { num: '42', url: 'https://i.postimg.cc/kDffKMrH/42.jpg' },
  { num: '43', url: 'https://i.postimg.cc/nM00BV85/43.jpg' },
  { num: '44', url: 'https://i.postimg.cc/RqXXKCry/44.jpg' },
  { num: '45', url: 'https://i.postimg.cc/7fhXVvDK/45.jpg' },
  { num: '46', url: 'https://i.postimg.cc/hhppT4WF/46.jpg' },
  { num: '47', url: 'https://i.postimg.cc/jL2vXVKg/47.jpg' },
  { num: '48', url: 'https://i.postimg.cc/ykxnPqBp/48.jpg' },
  { num: '49', url: 'https://i.postimg.cc/jL2vXVKm/49.jpg' },
  { num: '50', url: 'https://i.postimg.cc/qzqQLf0W/50.jpg' },
  { num: '51', url: 'https://i.postimg.cc/pprkZNxg/51.jpg' },
  { num: '52', url: 'https://i.postimg.cc/1fXMHxsQ/52.jpg' },
  { num: '53', url: 'https://i.postimg.cc/Xpqx8M4Y/53.jpg' },
  { num: '54', url: 'https://i.postimg.cc/tYJD50pq/54.jpg' },
  { num: '55', url: 'https://i.postimg.cc/SJRVr0kJ/55.jpg' },
  { num: '55555', url: 'https://i.postimg.cc/0b4nXty9/55555.jpg' }
];

async function fetchImageBase64(url) {
  return new Promise((resolve, reject) => {
    http.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchImageBase64(res.headers.location).then(resolve).catch(reject);
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(data);
        resolve(buffer.toString('base64'));
      });
    }).on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  const chunkSize = 12;
  let allResults = {};
  if (fs.existsSync('gallery_results.json')) {
    try {
      allResults = JSON.parse(fs.readFileSync('gallery_results.json'));
    } catch(e){}
  }

  const numChunks = Math.ceil(allImages.length / chunkSize);

  for (let c = 0; c < numChunks; c++) {
    const chunk = allImages.slice(c * chunkSize, (c + 1) * chunkSize);
    
    // Check if chunk is already analyzed
    const missing = chunk.filter(img => !allResults[img.num]);
    if (missing.length === 0) {
      console.log(`Chunk ${c} already done.`);
      continue;
    }

    console.log(`Processing chunk ${c}: images ${chunk[0].num} to ${chunk[chunk.length-1].num}...`);
    const parts = [];

    for (const item of chunk) {
      try {
        const b64 = await fetchImageBase64(item.url);
        parts.push({ text: `Image ID: #${item.num}` });
        parts.push({ inlineData: { mimeType: 'image/jpeg', data: b64 } });
      } catch(e) {
        console.error('Error fetching ' + item.num);
      }
    }

    parts.push({
      text: `For each image provided above identified by Image ID (#1, #2, etc.), classify which finishing package tier and room type it fits best.
Package tiers: economic (اقتصادية), vip (VIP), altra_vip (ألترا VIP), super_altra_vip (سوبر ألترا VIP), luxury_1 (لكجري 1), luxury_2 (لكجري 2), luxury_3 (لكجري 3)
Room/Element: reception, bedroom, kitchen, bathroom, ceiling, plumbing, alumetal, furniture
Return JSON object with keys as image numbers:
{
  "1": { "tier": "...", "room": "...", "descAr": "..." }
}`
    });

    let success = false;
    let attempts = 0;

    while (!success && attempts < 5) {
      try {
        attempts++;
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [{ role: 'user', parts }]
        });
        let text = response.text.trim();
        if (text.startsWith('```json')) text = text.replace(/^```json/, '').replace(/```$/, '').trim();
        if (text.startsWith('```')) text = text.replace(/^```/, '').replace(/```$/, '').trim();
        
        const parsed = JSON.parse(text);
        for (const k of Object.keys(parsed)) {
          const matched = chunk.find(x => x.num === k);
          if (matched) {
            allResults[k] = { url: matched.url, ...parsed[k] };
          }
        }
        fs.writeFileSync('gallery_results.json', JSON.stringify(allResults, null, 2));
        console.log(`Chunk ${c} completed successfully.`);
        success = true;
      } catch(err) {
        console.error(`Error on chunk ${c} attempt ${attempts}:`, err.message);
        console.log('Sleeping 20s before retry...');
        await sleep(20000);
      }
    }

    await sleep(18000);
  }

  console.log('ALL DONE! Total analyzed images:', Object.keys(allResults).length);
}

run();

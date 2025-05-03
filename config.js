import { watchFile, readFileSync } from 'fs';
import chalk from 'chalk';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import moment from 'moment-timezone';

global.botnumber = '6287865012381';
global.confirmCode = '';

// • ↳ APPROVED DEVELOPERS
global.owner = JSON.parse(readFileSync('./src/owner.json'))
try {
  global.prems = JSON.parse(fs.readFileSync('./lib/prems.json'))
} catch {
  global.prems = {}
}
global.mods = [];

// • ↳ PACKAGING INFORMATION

global.packname = 'Karyl Bot';
global.author = 'By @robbyctr_';
global.wm = 'Karyl Bot';
global.botname = 'Karyl Bot';
global.vs = '2.0.1';

// • ↳ IMAGES
global.img = fs.readFileSync('./Karyl.jpg')

// • ↳ FAKE STYLE
global.style = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, 
    ...(false ? { 
      remoteJid: "5219992095479-1625305606@g.us" 
    } : {}) 
  }, message: {
    orderMessage: {
      itemCount: -999999, 
      status: 1, 
      surface: 1, 
      message: 'Karyl Bot (reborn)', 
      orderTitle: 'packname', 
      thumbnail: img, 
      sellerJid: '0@s.whatsapp.net'
    }
  }
};

// • ↳ TIME
global.d = new Date(new Date + 3600000);
global.locale = 'id';
global.week = d.toLocaleDateString(locale, { weekday: 'long' });
global.date = d.toLocaleDateString(locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
global.month = d.toLocaleDateString(locale, { month: 'long' });
global.year = d.toLocaleDateString(locale, { year: 'numeric' });
global.time = d.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
//* ****************************
global.wm2 = `${week} ${date}\nYaemori`;
global.nomorown = '6282245409072';
global.pdoc = [
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/msword',
  'application/pdf',
  'text/rtf'
];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`;
global.fgif = {
  key: { 
    participant: '0@s.whatsapp.net' 
  },
  message: {
    'videoMessage': {
      'title': wm,
      'h': `Hmm`,
      'seconds': '999999999',
      'gifPlayback': 'true',
      'caption': bottime,
      'jpegThumbnail': img
    }
  }
};
global.multiplier = 99;
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com' 
}
global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans' 
}
const createTime = (timestamp) => {
  const now = moment().tz('Asia/Jakarta');
  const time = moment(timestamp).tz('Asia/Jakarta');
  const diff = now.diff(time);
  const duration = moment.duration(diff);
  
  if (duration.asMinutes() < 1) return 'Just now';
  if (duration.asMinutes() < 60) return `${duration.minutes()} minutes ago`;
  if (duration.asHours() < 24) return `${duration.hours()} hours ago`;
  return `${duration.days()} days ago`;
};

global.flow = (s, n = '') => {
  return new Promise((resolve, reject) => {
    fetch(s)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
      })
      .then((html) => {
        const $ = cheerio.load(html);
        const content = $('#message-text').text();
        resolve(content);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const logFilePath = './log.txt';
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

watchFile(logFilePath, (curr, prev) => {
  console.log(chalk.green('Log file has been modified.'));
});

setInterval(() => {
  const time = moment.tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
  logStream.write(`[${time}] Bot is running...\n`);
}, 60000);

export { createTime };
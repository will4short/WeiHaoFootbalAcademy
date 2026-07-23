const translations = {
  zh: {
    skip:'跳至主要內容',brandSub:'足球學院',navMethod:'訓練方法',navPrograms:'課程',navExperience:'學院體驗',navContact:'聯絡我們',bookTrial:'預約試堂',menu:'選單',
    heroEyebrow:'足球 • 英語 • 品格',heroTitle:'培養球員。<br><em>成就孩子。</em>',heroLead:'結合年齡適切的足球訓練、英語溝通、團隊精神與紀律，在正向環境中全面成長。',trialCta:'預約試堂',discoverMethod:'了解 Kick & Speak™',ages:'年齡組別',pathways:'成長路徑',methodStat:'足球 + 英語',
    trust1Title:'有目的的訓練',trust1Text:'每個練習都有清晰的成長目標。',trust2Title:'正向環境',trust2Text:'挑戰、鼓勵與尊重並重。',trust3Title:'全人成長',trust3Text:'把球場上的能力帶進生活。',
    methodEyebrow:'衛豪的不同',methodTitle:'訓練雙腳。<br>啟動思維。<br>勇敢發聲。',methodLead:'Kick & Speak™ 將足球發展與實用英語溝通融入同一個充滿活力的訓練課堂。',methodBody:'球員透過動作、指令、判斷與團隊互動學習。訓練自然、有活力，也真正貼近比賽，而不是另一堂課室課。',step1Title:'聆聽與理解',step1Text:'把清晰的教練語言連結到實際動作。',step2Title:'行動與掌握',step2Text:'以循序漸進的練習提升技術與比賽意識。',step3Title:'溝通與領導',step3Text:'在壓力下建立溝通、合作與自信。',
    programEyebrow:'適合每個階段的路徑',programTitle:'與球員一起成長的課程。',programIntro:'每個組別都平衡技術訓練、適齡挑戰與讓孩子持續熱愛足球的樂趣。',age46:'4–6 歲',age710:'7–10 歲',age1114:'11–14 歲',age1518:'15–18 歲',littleTitle:'小小踢客',littleText:'透過遊戲建立動作、控球、聆聽能力和愉快的足球初體驗。',juniorTitle:'少年學院',juniorText:'培養核心技術、協調、基本判斷與自信合作。',youthTitle:'青少年發展',youthText:'提升比賽理解、位置意識、韌性與溝通。',eliteTitle:'精英訓練隊',eliteText:'更高強度的技術、戰術與領導力發展。',askProgram:'查詢此課程',
    experienceEyebrow:'不只是一堂訓練',experienceTitle:'一個競技、連結與歸屬的地方。',experienceLead:'當孩子敢於嘗試、失敗時得到支持，並有動力繼續前進，他們才能取得最好的進步。',benefit1:'有系統、循序漸進的訓練',benefit2:'適齡分組與挑戰',benefit3:'團隊合作、尊重與正向習慣',benefit4:'在運動中實踐溝通',scheduleNote:'課堂時間、地點與最新名額會直接向家庭確認，確保您收到最準確的資訊。',
    contactEyebrow:'第一堂訓練由此開始',contactTitle:'準備看看衛豪是否適合您的孩子？',contactLead:'告訴我們一些球員資料，我們會協助選擇合適組別並提供最新課堂資訊。',responseNote:'也可以直接使用上方電郵地址聯絡我們。',parentName:'家長／監護人姓名',email:'電郵地址',playerAge:'球員年齡',programLabel:'感興趣的課程',chooseProgram:'選擇課程',notSure:'暫時不確定',messageLabel:'還有甚麼需要讓我們知道？',messagePlaceholder:'經驗、目標、合適日子或問題',sendEnquiry:'準備試堂查詢',formHelp:'提交後會開啟您的電郵程式並填好查詢內容。本網站不會儲存任何資料。',footerLine:'培養技術出眾的球員與充滿自信的年輕人。'
  }
};

const english = {};
document.querySelectorAll('[data-i18n]').forEach(el => english[el.dataset.i18n] = el.innerHTML);
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => english[el.dataset.i18nPlaceholder] = el.placeholder);
let language = localStorage.getItem('weihao-language') === 'zh' ? 'zh' : 'en';

function applyLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.body.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'zh' ? (translations.zh[key] ?? english[key]) : english[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = lang === 'zh' ? translations.zh[key] : english[key];
  });
  const button = document.getElementById('languageButton');
  button.textContent = lang === 'zh' ? 'English' : '中文';
  button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換至繁體中文');
  document.title = lang === 'zh' ? '衛豪足球學院｜足球、自信與溝通' : 'Wei Hao Football Academy | Football, confidence and communication';
  localStorage.setItem('weihao-language', lang);
}

document.getElementById('languageButton').addEventListener('click', () => applyLanguage(language === 'en' ? 'zh' : 'en'));
applyLanguage(language);

const menuButton = document.getElementById('menuButton');
const navigation = document.getElementById('primaryNav');
function closeMenu(){ navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('menu-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });

document.querySelectorAll('[data-program]').forEach(link => link.addEventListener('click', () => { document.getElementById('programSelect').value = link.dataset.program; }));

document.getElementById('trialForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Trial enquiry — ${data.get('program')}`;
  const body = [`Parent / guardian: ${data.get('name')}`, `Email: ${data.get('email')}`, `Player age: ${data.get('age')}`, `Program: ${data.get('program')}`, '', `Notes: ${data.get('message') || 'None provided'}`].join('\n');
  document.getElementById('formStatus').textContent = language === 'zh' ? '正在開啟您的電郵程式…' : 'Opening your email app…';
  window.location.href = `mailto:info@weihaoacademy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();

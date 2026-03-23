// ============================================
// Speaking Practice Module
// ============================================

const SPEAKING_PROMPTS = {
  conversations: [
    {
      id: 'sc1',
      title: '讨论周末活动',
      titleEn: 'Discussing Weekend Plans',
      scenario: '你的中国朋友小明打电话给你，想邀请你周末一起去活动。',
      prompts: [
        { speaker: '小明', text: '嗨！这个周末你有空吗？我想约你出去玩。' },
        { speaker: 'You', hint: 'Say whether you are free and ask what the plan is' },
        { speaker: '小明', text: '我想去城里的那个新开的中国美食节，听说有很多好吃的。' },
        { speaker: 'You', hint: 'Express interest and ask about details (time, location)' },
        { speaker: '小明', text: '在市中心的公园里，周六上午十点开始。我们可以坐地铁去。' },
        { speaker: 'You', hint: 'Agree and suggest inviting other friends' },
        { speaker: '小明', text: '好主意！那我去问问小红要不要一起来。你能带一些饮料吗？' },
        { speaker: 'You', hint: 'Agree to bring drinks, confirm the meeting time/place' },
        { speaker: '小明', text: '太好了！那我们周六早上九点半在地铁站见面吧！' },
        { speaker: 'You', hint: 'Confirm and say goodbye' }
      ]
    },
    {
      id: 'sc2',
      title: '在商店购物',
      titleEn: 'Shopping at a Store',
      scenario: '你在中国旅游，想买一些纪念品送给朋友。',
      prompts: [
        { speaker: '售货员', text: '欢迎光临！请问你想买什么？' },
        { speaker: 'You', hint: 'Say you want to buy souvenirs for friends' },
        { speaker: '售货员', text: '我们有丝绸围巾、中国茶叶、还有手工艺品。你朋友喜欢什么？' },
        { speaker: 'You', hint: 'Ask about tea and silk scarves, ask for prices' },
        { speaker: '售货员', text: '龙井茶一盒两百块，围巾一条一百五十块。买两件以上可以打九折。' },
        { speaker: 'You', hint: 'Negotiate or decide what to buy' },
        { speaker: '售货员', text: '好的，需要包装成礼物吗？我们有漂亮的礼盒。' },
        { speaker: 'You', hint: 'Say yes, ask about gift wrapping and payment' }
      ]
    }
  ],
  culturalTopics: [
    { id: 'ct1', topic: '中国的春节', topicEn: 'Chinese Spring Festival', prompt: 'Describe the customs and traditions of Chinese New Year. Include: when it occurs, common activities, traditional foods, and its significance.' },
    { id: 'ct2', topic: '中国的教育制度', topicEn: 'Chinese Education System', prompt: 'Describe the Chinese education system. Include: school structure, the importance of 高考, differences from the American system, and challenges students face.' },
    { id: 'ct3', topic: '中国的饮食文化', topicEn: 'Chinese Food Culture', prompt: 'Discuss Chinese food culture. Include: regional cuisine differences, dining etiquette, the role of food in social gatherings, and popular dishes.' },
    { id: 'ct4', topic: '中国的科技发展', topicEn: 'Technology in China', prompt: 'Discuss how technology has changed daily life in China. Include: mobile payment, social media, e-commerce, and transportation technology.' },
    { id: 'ct5', topic: '中国的家庭观念', topicEn: 'Family Values in China', prompt: 'Discuss Chinese family values. Include: respect for elders, family responsibilities, the role of parents in education, and modern changes.' }
  ]
};

// 8 new simulated conversations
SPEAKING_PROMPTS.conversations.push(
  {
    id: 'sc3',
    title: '图书馆借书',
    titleEn: 'Borrowing Books at a Library',
    scenario: '你在学校图书馆，想要借几本关于中国历史的书。',
    prompts: [
      { speaker: '图书管理员', text: '同学你好，有什么我可以帮你的吗？' },
      { speaker: 'You', hint: 'Say you want to borrow books about Chinese history' },
      { speaker: '图书管理员', text: '好的，中国历史书在二楼的B区。你需要借几本？' },
      { speaker: 'You', hint: 'Say you need 3 books and ask how long you can keep them' },
      { speaker: '图书管理员', text: '你可以借三个星期。如果看不完，可以在网上续借一次。' },
      { speaker: 'You', hint: 'Express thanks and ask where you can use a computer to search' },
      { speaker: '图书管理员', text: '那边的桌子上就有几台电脑可以查书。' },
      { speaker: 'You', hint: 'Thank the librarian and say goodbye' }
    ]
  },
  {
    id: 'sc4',
    title: '餐厅点菜',
    titleEn: 'Ordering Food at a Restaurant',
    scenario: '你和朋友去一家新开的中国餐厅吃饭，服务员来为你点菜。',
    prompts: [
      { speaker: '服务员', text: '你们好！请问现在可以点菜了吗？' },
      { speaker: 'You', hint: 'Say yes, and ask for their special dishes' },
      { speaker: '服务员', text: '我们的特色菜是北京烤鸭和麻婆豆腐。' },
      { speaker: 'You', hint: 'Order the duck, but say you want a dish that is not spicy' },
      { speaker: '服务员', text: '如果不吃辣，可以试试我们的清炒西兰花或者西红柿鸡蛋汤。' },
      { speaker: 'You', hint: 'Order the broccoli and a bowl of rice' },
      { speaker: '服务员', text: '好的，还要点什么饮料吗？我们有绿茶和果汁。' },
      { speaker: 'You', hint: 'Order green tea and ask how long the food will take' }
    ]
  },
  {
    id: 'sc5',
    title: '讨论大学申请',
    titleEn: 'Discussing College Applications',
    scenario: '你的好朋友小王正在准备大学申请，他想听听你的想法。',
    prompts: [
      { speaker: '小王', text: '最近大学申请让我好紧张啊，你准备得怎么样了？' },
      { speaker: 'You', hint: 'Share your progress and ask what his main concern is' },
      { speaker: '小王', text: '我不知道应该选离家近的大学，还是去外州的名牌大学。' },
      { speaker: 'You', hint: 'Give your opinion and a reason for your choice' },
      { speaker: '小王', text: '你说得对，但是我怕去外州的话学费会太贵。' },
      { speaker: 'You', hint: 'Suggest applying for scholarships or talking to a counselor' },
      { speaker: '小王', text: '这个主意不错，我明天就去找老师谈谈。' },
      { speaker: 'You', hint: 'Encourage him and offer to review his essay' }
    ]
  },
  {
    id: 'sc6',
    title: '参加生日派对',
    titleEn: 'Attending a Birthday Party',
    scenario: '你去参加中国朋友小红的生日派对。',
    prompts: [
      { speaker: '小红', text: '欢迎欢迎！真高兴你能来参加我的生日派对！' },
      { speaker: 'You', hint: 'Wish her a happy birthday and give her the gift' },
      { speaker: '小红', text: '哇，谢谢你的礼物！包装得真漂亮，里面是什么？' },
      { speaker: 'You', hint: 'Explain the gift (e.g., a book or CD) and why you chose it' },
      { speaker: '小红', text: '我太喜欢了！对了，你想喝点什么？桌子上有果汁和可乐。' },
      { speaker: 'You', hint: 'Choose a drink and ask who else is coming' },
      { speaker: '小红', text: '还有几个我们班的同学马上就到，我们等会儿一起吃蛋糕。' },
      { speaker: 'You', hint: 'Express excitement and offer to help prepare food' }
    ]
  },
  {
    id: 'sc7',
    title: '讨论一部好电影',
    titleEn: 'Discussing a Good Movie',
    scenario: '你刚看完一部很棒的电影，和朋友大卫打电话讨论。',
    prompts: [
      { speaker: '大卫', text: '你昨晚去看的那个新电影怎么样？好看吗？' },
      { speaker: 'You', hint: 'Say it was amazing and recommend it highly' },
      { speaker: '大卫', text: '真的吗？它主要讲了一个什么故事？' },
      { speaker: 'You', hint: 'Briefly summarize the plot in one or two sentences' },
      { speaker: '大卫', text: '听起来很有意思，电影里的演员演得好吗？' },
      { speaker: 'You', hint: 'Praise the acting and mention the music or special effects' },
      { speaker: '大卫', text: '那我这个周末也要去看！' },
      { speaker: 'You', hint: 'Agree and tell him to buy tickets early' }
    ]
  },
  {
    id: 'sc8',
    title: '交通方式选择',
    titleEn: 'Choosing Transportation',
    scenario: '你和同学正在商量明天去市里博物馆看展的交通方式。',
    prompts: [
      { speaker: '同学', text: '明天我们要去市里的博物馆，你觉得怎么去最方便？' },
      { speaker: 'You', hint: 'Suggest taking the subway and explain why' },
      { speaker: '同学', text: '可是坐地铁需要转车，会不会有点麻烦？' },
      { speaker: 'You', hint: 'Admit it requires a transfer, but mention there is no traffic jam' },
      { speaker: '同学', text: '如果打车的话，我们三个人可以平摊车费，可能也不贵。' },
      { speaker: 'You', hint: 'Agree it is a good idea and ask who will call the car' },
      { speaker: '同学', text: '我用手机软件叫车吧。我们明早九点在校门口见？' },
      { speaker: 'You', hint: 'Confirm the time and place' }
    ]
  },
  {
    id: 'sc9',
    title: '生病去看医生',
    titleEn: 'Seeing a Doctor When Sick',
    scenario: '你这几天觉得很不舒服，去校医务室看医生。',
    prompts: [
      { speaker: '医生', text: '你好，请坐。你哪里觉得不舒服？' },
      { speaker: 'You', hint: 'Describe your symptoms (e.g., headache, fever, cough)' },
      { speaker: '医生', text: '这种情况有几天了？昨天有没有量过体温？' },
      { speaker: 'You', hint: 'Answer how many days and mention your temperature' },
      { speaker: '医生', text: '你有点发烧，应该是感冒了。我给你开点感冒药。' },
      { speaker: 'You', hint: 'Ask how you should take the medicine and if you need rest' },
      { speaker: '医生', text: '每天吃三次，饭后吃。这几天多喝水，最好在宿舍休息两天。' },
      { speaker: 'You', hint: 'Thank the doctor and ask if you can get a doctor note' }
    ]
  },
  {
    id: 'sc10',
    title: '讨论兼职工作',
    titleEn: 'Discussing Part-time Jobs',
    scenario: '你考虑课后去找一份兼职工作，你的中国朋友给你一些建议。',
    prompts: [
      { speaker: '朋友', text: '听说你想找兼职工作，是真的吗？你想做什么样的工作？' },
      { speaker: 'You', hint: 'Confirm and say you want to work at a cafe or bookstore' },
      { speaker: '朋友', text: '在咖啡馆打工挺酷的，但是可能会很累。你不怕影响学习吗？' },
      { speaker: 'You', hint: 'Explain you will only work on weekends to protect study time' },
      { speaker: '朋友', text: '这也行。如果你想去咖啡馆，我可以帮你问问我打工的那家店。' },
      { speaker: 'You', hint: 'Express gratitude and ask what the hourly pay is' },
      { speaker: '朋友', text: '一小时大概十五块钱，中午还包一顿饭呢。' },
      { speaker: 'You', hint: 'Say that sounds great and ask when you can go for an interview' }
    ]
  }
);

// 5 new cultural presentations
SPEAKING_PROMPTS.culturalTopics.push(
  { id: 'ct6', topic: '中国四大发明', topicEn: 'Four Great Inventions', prompt: 'Choose ONE of the Four Great Inventions of ancient China (papermaking, printing, gunpowder, or the compass). Describe it and discuss its historical significance and impact on the world.' },
  { id: 'ct7', topic: '中秋节', topicEn: 'Mid-Autumn Festival', prompt: 'Describe the Mid-Autumn Festival in China. Include: when it is celebrated, the legend behind it (e.g., Chang\'e), traditional foods like mooncakes, and common activities.' },
  { id: 'ct8', topic: '中国名胜古迹', topicEn: 'Historical Sites in China', prompt: 'Choose ONE famous historical site in China (e.g., the Great Wall, the Forbidden City, or the Terracotta Army). Describe its location, history, and why it is culturally significant.' },
  { id: 'ct9', topic: '太极拳与中国武术', topicEn: 'Tai Chi and Chinese Martial Arts', prompt: 'Discuss Chinese martial arts, focusing on Tai Chi. Include: its origins, its philosophy (balance of Yin and Yang), and its physical and mental health benefits.' },
  { id: 'ct10', topic: '中国的茶文化', topicEn: 'Chinese Tea Culture', prompt: 'Describe Chinese tea culture. Include: the history of drinking tea, different types of tea, the art of the tea ceremony, and what tea represents in Chinese social life.' }
);

let speakingTimer = null;

function initSpeaking() {
  renderSpeakingMenu();
}

function renderSpeakingMenu(activeTab = 'conversation') {
  const el = document.getElementById('speaking-content');
  el.innerHTML = `
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <p style="color:var(--text-secondary);font-size:0.9rem">
        <strong style="color:var(--gold-light)">📋 AP Speaking Section:</strong>
        Task 1: Simulated Conversation (6 exchanges, 20 seconds each). 
        Task 2: Cultural Presentation (4 min prep + 2 min presentation).
      </p>
    </div>
    
    <div class="tabs">
      <button class="tab ${activeTab === 'conversation' ? 'active' : ''}" onclick="showSpeakingTab('conversation')">🗣️ Simulated Conversation</button>
      <button class="tab ${activeTab === 'cultural' ? 'active' : ''}" onclick="showSpeakingTab('cultural')">🎤 Cultural Presentation</button>
    </div>
    <div id="speaking-tab-content"></div>
  `;
  showSpeakingTab(activeTab, false);
}

function showSpeakingTab(tab, clickEvent = true) {
  if (clickEvent && window.event && window.event.target) {
    document.querySelectorAll('#page-speaking .tab').forEach(t => t.classList.remove('active'));
    window.event.target.classList.add('active');
  }
  
  const el = document.getElementById('speaking-tab-content');
  
  if (tab === 'conversation') {
    el.innerHTML = `
      <div class="item-list">
        ${SPEAKING_PROMPTS.conversations.map((c, i) => `
          <div class="item-card" onclick="startConversation(${i})">
            <span class="item-icon">🗣️</span>
            <div class="item-info">
              <h4>${c.title}</h4>
              <p>${c.titleEn} · ${Math.floor(c.prompts.length / 2)} exchanges</p>
            </div>
            <span class="item-badge new">Practice</span>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="item-list">
        ${SPEAKING_PROMPTS.culturalTopics.map((t, i) => `
          <div class="item-card" onclick="startCulturalPresentation(${i})">
            <span class="item-icon">🎤</span>
            <div class="item-info">
              <h4>${t.topic}</h4>
              <p>${t.topicEn} · 4 min prep + 2 min presentation</p>
            </div>
            <span class="item-badge new">Practice</span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function startConversation(index) {
  const conv = SPEAKING_PROMPTS.conversations[index];
  const el = document.getElementById('speaking-content');
  let currentPrompt = 0;
  
  function renderPrompt() {
    if (currentPrompt >= conv.prompts.length) {
      el.innerHTML = `
        <button class="back-btn" onclick="clearSpeakingTimer(); renderSpeakingMenu('conversation')">← Back</button>
        <div class="score-report glass-card">
          <div style="font-size:4rem;margin-bottom:var(--space-lg)">🎉</div>
          <h3>Conversation Complete!</h3>
          <p style="color:var(--text-secondary);margin-top:var(--space-sm)">${conv.title} — ${conv.titleEn}</p>
          <p style="color:var(--text-muted);margin-top:var(--space-md);font-size:0.9rem">
            Review your responses: Did you address each prompt fully? Was your grammar accurate? Did you use varied vocabulary?
          </p>
          <button class="btn btn-primary" style="margin-top:var(--space-lg)" onclick="renderSpeakingMenu('conversation')">Continue Practice</button>
        </div>
      `;
      return;
    }
    
    const p = conv.prompts[currentPrompt];
    const isYourTurn = p.speaker === 'You';
    
    el.innerHTML = `
      <button class="back-btn" onclick="clearSpeakingTimer(); renderSpeakingMenu('conversation')">← Back</button>
      
      <div class="glass-card">
        <h3 style="font-family:'Noto Sans SC',sans-serif;margin-bottom:var(--space-sm)">${conv.title}</h3>
        <p style="color:var(--text-muted);font-size:0.85rem">${conv.scenario}</p>
      </div>
      
      <div class="progress-bar" style="margin-bottom:var(--space-lg)">
        <div class="fill" style="width:${(currentPrompt / conv.prompts.length) * 100}%"></div>
      </div>
      
      <div class="question-card">
        ${isYourTurn ? `
          <div class="question-number" style="color:var(--jade-light)">🎤 YOUR TURN — 20 seconds</div>
          <div class="conversation-prompt" style="background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.2)">
            <div class="prompt-label" style="color:var(--jade-light)">Your response prompt:</div>
            <p>${p.hint}</p>
          </div>
          <div class="timer-display">
            <div class="timer-circle" id="speaking-timer-circle">20</div>
          </div>
          <div class="recording-controls">
            <button class="record-btn" id="record-btn" onclick="toggleRecording()"></button>
          </div>
          <p style="text-align:center;color:var(--text-muted);font-size:0.8rem;margin-top:var(--space-sm)">Click to record (or practice speaking aloud)</p>
          <div style="text-align:center;margin-top:var(--space-lg)">
            <button class="btn btn-primary" onclick="nextPrompt()">Next →</button>
          </div>
        ` : `
          <div class="question-number" style="color:var(--purple-light)">🗣️ ${p.speaker} says:</div>
          <div class="conversation-prompt">
            <p style="font-size:1.2rem;font-family:'Noto Sans SC',sans-serif">${p.text}</p>
          </div>
          <div style="text-align:center;margin-top:var(--space-lg)">
            <button class="btn btn-primary" onclick="nextPrompt()">Continue →</button>
          </div>
        `}
      </div>
    `;
    
    if (isYourTurn) {
      startSpeakingCountdown(20);
    }
  }
  
  window.nextPrompt = () => {
    clearSpeakingTimer();
    currentPrompt++;
    renderPrompt();
  };
  
  renderPrompt();
}

function startCulturalPresentation(index) {
  const topic = SPEAKING_PROMPTS.culturalTopics[index];
  const el = document.getElementById('speaking-content');
  
  el.innerHTML = `
    <button class="back-btn" onclick="clearSpeakingTimer(); renderSpeakingMenu('cultural')">← Back</button>
    
    <div class="glass-card">
      <h3 style="font-family:'Noto Sans SC',sans-serif;margin-bottom:var(--space-sm)">${topic.topic}</h3>
      <p style="color:var(--text-secondary)">${topic.topicEn}</p>
    </div>
    
    <div class="question-card">
      <div class="question-number">Cultural Presentation Topic</div>
      <div class="conversation-prompt">
        <div class="prompt-label">📋 Your task:</div>
        <p>${topic.prompt}</p>
      </div>
      
      <div class="timer-display">
        <div class="timer-circle" id="speaking-timer-circle">4:00</div>
      </div>
      
      <p style="text-align:center;color:var(--text-muted);margin-bottom:var(--space-lg)">
        Phase 1: Preparation (4 minutes) → Phase 2: Presentation (2 minutes)
      </p>
      
      <div style="margin-bottom:var(--space-lg)">
        <h4 style="margin-bottom:var(--space-sm)">📝 Your Notes</h4>
        <textarea class="writing-area" style="min-height:120px" placeholder="Use this space to outline your presentation..."></textarea>
      </div>
      
      <div style="display:flex;gap:var(--space-md);justify-content:center;flex-wrap:wrap">
        <button class="btn btn-gold" onclick="startPrepTimer()">⏱️ Start 4-min Prep</button>
        <button class="btn btn-primary" onclick="startPresentTimer()">🎤 Start 2-min Presentation</button>
      </div>
      
      <div class="recording-controls" style="margin-top:var(--space-lg)">
        <button class="record-btn" id="record-btn" onclick="toggleRecording()"></button>
      </div>
      <p style="text-align:center;color:var(--text-muted);font-size:0.8rem;margin-top:var(--space-sm)">Click to record your presentation</p>
    </div>
  `;
  
  window.startPrepTimer = () => startSpeakingCountdown(240);
  window.startPresentTimer = () => startSpeakingCountdown(120);
}

function startSpeakingCountdown(seconds) {
  clearSpeakingTimer();
  let remaining = seconds;
  
  function update() {
    const circle = document.getElementById('speaking-timer-circle');
    if (!circle) { clearSpeakingTimer(); return; }
    
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    circle.textContent = m > 0 ? `${m}:${s.toString().padStart(2, '0')}` : s;
    
    circle.className = 'timer-circle';
    if (remaining <= 5) circle.classList.add('danger');
    else if (remaining <= 10) circle.classList.add('warning');
    
    if (remaining <= 0) {
      clearSpeakingTimer();
      circle.textContent = '0';
      // Visual/audio cue that time is up
    }
    remaining--;
  }
  
  update();
  speakingTimer = setInterval(update, 1000);
}

function clearSpeakingTimer() {
  if (speakingTimer) { clearInterval(speakingTimer); speakingTimer = null; }
}

let mediaRecorder = null;
let audioChunks = [];

function toggleRecording() {
  const btn = document.getElementById('record-btn');
  if (!btn) return;
  
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    btn.classList.remove('recording');
    return;
  }
  
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        const container = btn.parentElement;
        // Add playback
        let player = container.querySelector('audio');
        if (!player) {
          player = document.createElement('audio');
          player.controls = true;
          player.style.cssText = 'margin-top:12px;width:100%;max-width:400px;display:block;margin-left:auto;margin-right:auto';
          container.appendChild(player);
        }
        player.src = url;
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.start();
      btn.classList.add('recording');
    })
    .catch(() => {
      alert('Unable to access microphone. Please allow microphone permissions.');
    });
}

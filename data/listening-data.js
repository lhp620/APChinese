// AP Chinese Listening Practice Data — Expanded
// ~30 rejoinders + 8 conversations

const LISTENING_DATA = {
  rejoinders: [
    {
      id: 'l1', transcript: '你好，请问图书馆怎么走？',
      transcriptEn: 'Hello, how do I get to the library?',
      options: ['谢谢你的帮助。', '一直往前走，到路口左转就到了。', '图书馆里有很多书。', '我也不喜欢那本书。'],
      correct: 1, explanation: '这是一个问路的问题，应该回答方向。'
    },
    {
      id: 'l2', transcript: '你周末有什么打算？',
      transcriptEn: 'What are your plans for the weekend?',
      options: ['上个周末我去看电影了。', '周末有两天。', '我打算和朋友去爬山。', '我不喜欢周末。'],
      correct: 2, explanation: '问的是周末的打算（将来），应该回答计划。'
    },
    {
      id: 'l3', transcript: '这件衣服多少钱？',
      transcriptEn: 'How much is this piece of clothing?',
      options: ['这件衣服很好看。', '两百五十块。', '衣服在二楼。', '我昨天买了衣服。'],
      correct: 1, explanation: '"多少钱"问的是价格，应该回答具体金额。'
    },
    {
      id: 'l4', transcript: '你能帮我把这个箱子搬到楼上吗？',
      transcriptEn: 'Can you help me carry this box upstairs?',
      options: ['那个箱子是红色的。', '楼上有三个房间。', '没问题，我来帮你。', '箱子里有什么？'],
      correct: 2, explanation: '对方请求帮忙搬箱子，最合适的回答是表示愿意帮忙。'
    },
    {
      id: 'l5', transcript: '你觉得今天的考试怎么样？',
      transcriptEn: 'What do you think about today\'s exam?',
      options: ['考试在三点开始。', '我觉得不太难，就是时间不够。', '我明天有考试。', '老师出了很多题。'],
      correct: 1, explanation: '问"怎么样"是问感受和看法，应该表达自己的观点。'
    },
    {
      id: 'l6', transcript: '你为什么迟到了？',
      transcriptEn: 'Why are you late?',
      options: ['我每天八点到学校。', '对不起，路上堵车了。', '我不喜欢迟到。', '时间过得真快。'],
      correct: 1, explanation: '"为什么"问原因，应该解释迟到的理由。'
    },
    {
      id: 'l7', transcript: '请问，附近有没有餐厅？',
      transcriptEn: 'Excuse me, is there a restaurant nearby?',
      options: ['我不饿。', '有，前面路口右转就有一家中餐厅。', '那家餐厅的菜很好吃。', '我昨天去餐厅了。'],
      correct: 1, explanation: '问附近有没有餐厅，应该告诉对方位置信息。'
    },
    {
      id: 'l8', transcript: '你的中文说得真好！你学了多长时间了？',
      transcriptEn: 'Your Chinese is really good! How long have you studied?',
      options: ['我不会说中文。', '中文很有意思。', '谢谢！我学了三年了。', '我的老师是中国人。'],
      correct: 2, explanation: '先感谢对方的称赞，再回答学了多长时间。'
    },
    {
      id: 'l9', transcript: '你想喝点什么？',
      transcriptEn: 'What would you like to drink?',
      options: ['我已经吃饱了。', '给我一杯绿茶吧。', '我不想去那家店。', '水果很好吃。'],
      correct: 1, explanation: '问想喝什么，应该说出想喝的饮品。'
    },
    {
      id: 'l10', transcript: '明天的天气怎么样？',
      transcriptEn: 'What will the weather be like tomorrow?',
      options: ['今天天气很好。', '我不喜欢下雨。', '天气预报说明天会下雨，你带把伞吧。', '昨天很冷。'],
      correct: 2, explanation: '问明天天气，应该回答明天的天气情况。'
    },
    // ── New questions ──
    {
      id: 'l11', transcript: '你今天看起来很累，昨晚没睡好吗？',
      transcriptEn: 'You look tired today. Didn\'t sleep well last night?',
      options: ['是的，我很高兴。', '因为昨晚写作业写到很晚。', '我今天要早点睡。', '谢谢你的关心。'],
      correct: 1, explanation: '对方问你为什么看起来累，应该解释原因。'
    },
    {
      id: 'l12', transcript: '这道数学题你会做吗？',
      transcriptEn: 'Do you know how to solve this math problem?',
      options: ['数学课在下午两点。', '让我看看，我试试帮你。', '我不喜欢数学。', '数学老师姓张。'],
      correct: 1, explanation: '对方请求帮忙解题，最合适的回答是表示愿意帮忙尝试。'
    },
    {
      id: 'l13', transcript: '你暑假打算做什么？',
      transcriptEn: 'What are you planning to do this summer?',
      options: ['去年暑假我去了北京。', '暑假有两个月。', '我打算去中国学中文。', '暑假的天气很热。'],
      correct: 2, explanation: '问暑假的计划，应该回答将来的安排。'
    },
    {
      id: 'l14', transcript: '请问，这趟火车几点到上海？',
      transcriptEn: 'Excuse me, what time does this train arrive in Shanghai?',
      options: ['上海是一个大城市。', '火车票要两百块。', '我也是第一次坐火车。', '大概下午三点半到。'],
      correct: 3, explanation: '问到达时间，应该回答具体的时间。'
    },
    {
      id: 'l15', transcript: '你怎么不吃了？不好吃吗？',
      transcriptEn: 'Why did you stop eating? Doesn\'t it taste good?',
      options: ['这家餐厅很贵。', '不是的，菜很好吃，我只是吃饱了。', '我想吃中国菜。', '昨天我在家吃的饭。'],
      correct: 1, explanation: '对方关心你为什么不吃了，需要解释原因（吃饱了）。'
    },
    {
      id: 'l16', transcript: '你知道明天的作业是什么吗？',
      transcriptEn: 'Do you know what tomorrow\'s homework is?',
      options: ['作业很难。', '我不喜欢做作业。', '老师说要写一篇作文。', '我已经做完了。'],
      correct: 2, explanation: '问作业的内容，应该具体告知是什么作业。'
    },
    {
      id: 'l17', transcript: '你能推荐一家好的中国餐厅吗？',
      transcriptEn: 'Can you recommend a good Chinese restaurant?',
      options: ['中国菜很好吃。', '我上周去了一家餐厅。', '学校旁边的"好味道"不错，他们的麻婆豆腐特别好。', '我不太饿。'],
      correct: 2, explanation: '请求推荐餐厅，应该具体推荐一家并说明理由。'
    },
    {
      id: 'l18', transcript: '你是怎么来学校的？',
      transcriptEn: 'How did you get to school?',
      options: ['我每天七点到学校。', '我坐公共汽车来的。', '学校离我家很近。', '我喜欢我的学校。'],
      correct: 1, explanation: '"怎么来"问的是交通方式，应该回答坐什么交通工具来的。'
    },
    {
      id: 'l19', transcript: '你有没有兄弟姐妹？',
      transcriptEn: 'Do you have any siblings?',
      options: ['我的父母是老师。', '我有一个哥哥和一个妹妹。', '我住在纽约。', '我们家有一只猫。'],
      correct: 1, explanation: '问兄弟姐妹，应该回答具体有几个。'
    },
    {
      id: 'l20', transcript: '这个周末有一个电影，你想不想一起去看？',
      transcriptEn: 'There\'s a movie this weekend. Do you want to go together?',
      options: ['那个电影已经上映了。', '我上周看了一个电影。', '好啊！几点的？在哪个电影院？', '电影票越来越贵了。'],
      correct: 2, explanation: '对方邀请你看电影，应该回应邀请并询问具体安排。'
    },
    {
      id: 'l21', transcript: '请问洗手间在哪里？',
      transcriptEn: 'Excuse me, where is the restroom?',
      options: ['洗手间很干净。', '往前走，在电梯旁边。', '你可以用洗手间。', '我刚才去了洗手间。'],
      correct: 1, explanation: '问洗手间位置，应该告诉具体在哪里。'
    },
    {
      id: 'l22', transcript: '你最喜欢什么运动？',
      transcriptEn: 'What is your favorite sport?',
      options: ['运动对身体好。', '我每天运动一个小时。', '学校有很多运动。', '我最喜欢打篮球，每周打三次。'],
      correct: 3, explanation: '问最喜欢的运动，应该具体说出喜欢什么运动。'
    },
    {
      id: 'l23', transcript: '你介意把窗户打开吗？这里太热了。',
      transcriptEn: 'Do you mind opening the window? It\'s too hot in here.',
      options: ['窗户是白色的。', '今天天气很好。', '当然不介意，我也觉得有点热。', '我喜欢夏天。'],
      correct: 2, explanation: '对方请求开窗，应该回应请求并表示同意。'
    },
    {
      id: 'l24', transcript: '你的手机是什么牌子的？看起来很不错。',
      transcriptEn: 'What brand is your phone? It looks nice.',
      options: ['手机很有用。', '是苹果的，去年买的。', '我的手机号码是123。', '我每天都用手机。'],
      correct: 1, explanation: '问手机品牌，应该告诉品牌和相关信息。'
    },
    {
      id: 'l25', transcript: '你学过做中国菜吗？',
      transcriptEn: 'Have you ever learned to cook Chinese food?',
      options: ['中国菜很好吃。', '我妈妈做饭做得很好。', '学过，我会做炒饭和炒面。', '我喜欢去中国餐厅吃饭。'],
      correct: 2, explanation: '问是否学过做中国菜，应该回答是否学过及会做什么。'
    },
    {
      id: 'l26', transcript: '你能再说一遍吗？我没听清楚。',
      transcriptEn: 'Can you say that again? I didn\'t hear clearly.',
      options: ['你说什么？', '好的，我说的是明天下午三点在图书馆见面。', '你应该注意听。', '我的声音太小了。'],
      correct: 1, explanation: '对方要求重复，应该重新说一遍之前的内容。'
    },
    {
      id: 'l27', transcript: '你对中国历史感兴趣吗？',
      transcriptEn: 'Are you interested in Chinese history?',
      options: ['中国有五千年的历史。', '很感兴趣！我特别喜欢三国时期的故事。', '历史课在星期三。', '我的历史老师很好。'],
      correct: 1, explanation: '问是否感兴趣，应该表达自己的兴趣和具体方面。'
    },
    {
      id: 'l28', transcript: '你觉得住在城市好还是住在农村好？',
      transcriptEn: 'Do you think living in the city is better or in the countryside?',
      options: ['城市很大。', '我住在城市。', '我觉得各有各的好处。城市方便，但是农村的空气更好。', '农村的房子很便宜。'],
      correct: 2, explanation: '问观点看法，应该表达自己的看法并给出理由。'
    },
    {
      id: 'l29', transcript: '如果你中了一百万，你会做什么？',
      transcriptEn: 'If you won a million dollars, what would you do?',
      options: ['一百万是很多钱。', '我会先存一半，然后带家人去旅行。', '我不买彩票。', '谁都想中奖。'],
      correct: 1, explanation: '问假设情况下的打算，应该回答你会怎么做。'
    },
    {
      id: 'l30', transcript: '你寒假过得怎么样？',
      transcriptEn: 'How was your winter break?',
      options: ['寒假有三个星期。', '寒假要到了。', '过得很好！我和家人一起去滑雪了。', '我不喜欢冬天。'],
      correct: 2, explanation: '问寒假过得怎么样，应该描述寒假做了什么、感受如何。'
    }
  ],
  conversations: [
    {
      id: 'lc1',
      title: '在餐厅点餐',
      titleEn: 'Ordering at a Restaurant',
      transcript: `服务员：欢迎光临！请问几位？\n客人：两位。\n服务员：好的，请这边坐。这是菜单。\n客人：谢谢。请问你们这里有什么特色菜？\n服务员：我们的招牌菜是红烧鱼和宫保鸡丁，都很受欢迎。\n客人：那我们要一个红烧鱼和一个青菜。再来两碗米饭。\n服务员：好的。您要喝点什么？\n客人：两杯热茶就好了。\n服务员：请稍等。`,
      questions: [
        { question: '一共有几个客人？', options: ['一位', '两位', '三位', '四位'], correct: 1, explanation: '客人说"两位"。' },
        { question: '客人点了哪道特色菜？', options: ['宫保鸡丁', '红烧鱼', '红烧鱼和宫保鸡丁', '红烧肉'], correct: 1, explanation: '客人说"要一个红烧鱼和一个青菜"，只点了红烧鱼这道特色菜。' },
        { question: '客人要喝什么？', options: ['冷水', '果汁', '热茶', '可乐'], correct: 2, explanation: '客人说"两杯热茶就好了"。' }
      ]
    },
    {
      id: 'lc2',
      title: '看医生',
      titleEn: 'Seeing a Doctor',
      transcript: `医生：你好，哪里不舒服？\n病人：医生，我头疼，而且一直咳嗽。\n医生：从什么时候开始的？\n病人：大概三天前开始的。昨天晚上还发烧了。\n医生：让我看看。你量过体温吗？\n病人：量过，三十八度五。\n医生：你感冒了。我给你开点药，每天吃三次，每次两片，饭后吃。还有，这几天要多喝水，多休息，不要做剧烈运动。\n病人：好的，谢谢医生。大概几天能好？\n医生：如果好好休息，大概三到五天就能好了。`,
      questions: [
        { question: '病人有什么症状？', options: ['头疼和肚子疼', '头疼和咳嗽', '只是发烧', '腿疼'], correct: 1, explanation: '病人说"头疼，而且一直咳嗽"。' },
        { question: '病人的体温是多少？', options: ['三十七度', '三十八度', '三十八度五', '三十九度'], correct: 2, explanation: '病人说体温是"三十八度五"。' },
        { question: '医生让病人怎么吃药？', options: ['每天一次，每次三片', '每天三次，每次两片', '每天两次，每次三片', '每天三次，每次一片'], correct: 1, explanation: '医生说"每天吃三次，每次两片，饭后吃"。' },
        { question: '医生说大概几天能好？', options: ['一到两天', '两到三天', '三到五天', '一个星期'], correct: 2, explanation: '医生说"大概三到五天就能好了"。' }
      ]
    },
    {
      id: 'lc3',
      title: '租房子',
      titleEn: 'Renting an Apartment',
      transcript: `房东：你好，你是来看房子的吧？\n小李：对，我在网上看到你的广告。请问房租是多少？\n房东：每月三千元，包括水电费。\n小李：房子有几个房间？\n房东：一个卧室，一个客厅，一个厨房和一个卫生间。\n小李：家具齐全吗？\n房东：基本的家具都有，床、衣柜、沙发、餐桌。但是没有洗衣机。\n小李：附近交通方便吗？\n房东：很方便，走路五分钟就到地铁站。附近还有超市和公园。\n小李：听起来不错。我可以这个周末搬进来吗？\n房东：可以，你先签个合同，交两个月的押金就行了。`,
      questions: [
        { question: '房租是多少？', options: ['两千元', '三千元', '四千元', '五千元'], correct: 1, explanation: '房东说"每月三千元，包括水电费"。' },
        { question: '房子里没有什么？', options: ['床', '衣柜', '洗衣机', '沙发'], correct: 2, explanation: '房东说"但是没有洗衣机"。' },
        { question: '小李需要交多少押金？', options: ['一个月', '两个月', '三个月', '不用押金'], correct: 1, explanation: '房东说"交两个月的押金就行了"。' }
      ]
    },
    // ── New conversations ──
    {
      id: 'lc4',
      title: '在商店买衣服',
      titleEn: 'Shopping for Clothes',
      transcript: `售货员：欢迎光临！请问您想买什么？\n顾客：我想买一件外套，有没有深蓝色的？\n售货员：有的。您穿多大码的？\n顾客：中号的。\n售货员：您看这件怎么样？这是今年最新的款式，面料很好。\n顾客：可以试穿吗？\n售货员：当然可以，试衣间在那边。\n（试穿后）\n顾客：挺合适的。多少钱？\n售货员：原价八百，现在打七折，五百六十。\n顾客：能不能再便宜一点？\n售货员：最多再减三十，五百三，这是最低价了。\n顾客：好吧，我要了。可以刷卡吗？\n售货员：可以，也可以用微信支付。`,
      questions: [
        { question: '顾客想买什么颜色的外套？', options: ['黑色', '白色', '深蓝色', '红色'], correct: 2, explanation: '顾客问"有没有深蓝色的"。' },
        { question: '外套打折后的价格是多少？', options: ['八百元', '五百六十元', '五百三十元', '七百元'], correct: 2, explanation: '原价800打七折是560元，后来又减了30元变成530元。顾客问打折价时售货员说"五百六十"。最终价是530。注意这里问的是"打折后"不是"最终"，但售货员最终同意了530。实际最终价格530元。' },
        { question: '顾客穿多大码的？', options: ['小号', '中号', '大号', '特大号'], correct: 1, explanation: '顾客说"中号的"。' },
        { question: '这家店支持哪些支付方式？', options: ['只能现金', '只能刷卡', '刷卡和微信支付', '只能微信支付'], correct: 2, explanation: '售货员说"可以（刷卡），也可以用微信支付"。' }
      ]
    },
    {
      id: 'lc5',
      title: '问路',
      titleEn: 'Asking for Directions',
      transcript: `行人：你好，请问去天安门广场怎么走？\n路人：你可以坐地铁去，最方便。\n行人：从这儿到地铁站远吗？\n路人：不远，大概走十分钟。你从这里往前走，到第二个红绿灯右转，就能看到地铁站了。\n行人：我应该坐几号线？\n路人：先坐五号线，然后在东单站换乘一号线，坐两站就到了。\n行人：大概需要多长时间？\n路人：大概四十分钟左右吧，包括走路和换乘的时间。\n行人：太谢谢你了！\n路人：不客气！祝你玩得开心！`,
      questions: [
        { question: '行人想去哪里？', options: ['故宫', '天安门广场', '长城', '颐和园'], correct: 1, explanation: '行人问"请问去天安门广场怎么走"。' },
        { question: '到地铁站大概要走多长时间？', options: ['五分钟', '十分钟', '十五分钟', '二十分钟'], correct: 1, explanation: '路人说"大概走十分钟"。' },
        { question: '行人在哪个站换乘？', options: ['天安门站', '西单站', '东单站', '王府井站'], correct: 2, explanation: '路人说"在东单站换乘一号线"。' },
        { question: '全程大概需要多长时间？', options: ['二十分钟', '三十分钟', '四十分钟', '一个小时'], correct: 2, explanation: '路人说"大概四十分钟左右"。' }
      ]
    },
    {
      id: 'lc6',
      title: '讨论学习计划',
      titleEn: 'Discussing Study Plans',
      transcript: `小明：小红，期末考试快到了，你开始复习了吗？\n小红：还没有呢，我打算这个周末开始。你呢？\n小明：我已经开始复习数学和科学了。但是中文和历史还没开始。\n小红：我觉得中文最难，特别是写作部分。\n小明：我也这么觉得。要不我们一起复习？互相帮助。\n小红：好主意！我们可以每天放学后在图书馆学习两个小时。\n小明：行。那科目怎么安排？\n小红：周一和周三复习中文，周二和周四复习数学，周五复习历史和科学。\n小明：听起来不错。那我们今天就开始吧！\n小红：好的！我去图书馆占位子，你去买两杯咖啡。`,
      questions: [
        { question: '小明已经开始复习什么科目了？', options: ['中文和历史', '数学和科学', '中文和数学', '科学和历史'], correct: 1, explanation: '小明说"我已经开始复习数学和科学了"。' },
        { question: '他们觉得哪个科目最难？', options: ['数学', '科学', '中文', '历史'], correct: 2, explanation: '小红说"我觉得中文最难"，小明也同意。' },
        { question: '他们打算在哪里一起学习？', options: ['在家里', '在图书馆', '在教室', '在咖啡店'], correct: 1, explanation: '小红说"我们可以每天放学后在图书馆学习两个小时"。' },
        { question: '周一和周三他们复习什么？', options: ['数学', '科学', '中文', '历史'], correct: 2, explanation: '小红说"周一和周三复习中文"。' }
      ]
    },
    {
      id: 'lc7',
      title: '打电话订酒店',
      titleEn: 'Booking a Hotel by Phone',
      transcript: `前台：你好，阳光大酒店，请问有什么可以帮您的？\n客人：你好，我想订一个房间。\n前台：请问您要什么时候入住？住几个晚上？\n客人：八月十五号入住，住三个晚上。\n前台：好的。我们有标准间和豪华间。标准间每晚四百元，豪华间每晚六百八十元。\n客人：标准间包括早餐吗？\n前台：标准间不包括，豪华间包括双人早餐。\n客人：那我要一间豪华间。可以住高楼层吗？我想看风景。\n前台：可以，我帮您安排二十楼的房间。请问您贵姓？\n客人：我姓王。\n前台：好的，王先生。请您入住时带上身份证。退房时间是中午十二点。\n客人：好的，谢谢！`,
      questions: [
        { question: '客人要住几个晚上？', options: ['一个', '两个', '三个', '四个'], correct: 2, explanation: '客人说"住三个晚上"。' },
        { question: '豪华间每晚多少钱？', options: ['四百元', '五百元', '六百元', '六百八十元'], correct: 3, explanation: '前台说"豪华间每晚六百八十元"。' },
        { question: '豪华间和标准间的区别是什么？', options: ['豪华间更大', '豪华间包括早餐', '豪华间有两张床', '没有区别'], correct: 1, explanation: '前台说"标准间不包括（早餐），豪华间包括双人早餐"。' },
        { question: '退房时间是什么时候？', options: ['上午十点', '上午十一点', '中午十二点', '下午两点'], correct: 2, explanation: '前台说"退房时间是中午十二点"。' }
      ]
    },
    {
      id: 'lc8',
      title: '课外活动讨论',
      titleEn: 'Extracurricular Activity Discussion',
      transcript: `老师：同学们，学校下学期要新开几个社团，你们有兴趣参加吗？\n小美：老师，有哪些新社团？\n老师：有机器人社团、摄影社团和话剧社团。\n大卫：机器人社团听起来很酷！每周活动几次？\n老师：每周二和周四下午四点到五点半。\n小美：摄影社团呢？\n老师：每周三下午，会有专业的摄影老师来教。学期末还会举办摄影展。\n大卫：我想参加机器人社团，可以同时参加两个社团吗？\n老师：可以，但是要保证不影响学习成绩。如果成绩下降了，可能要暂停参加。\n小美：我要参加摄影社团和话剧社团！\n老师：好的，我把你们的名字记下来。`,
      questions: [
        { question: '学校新开了几个社团？', options: ['两个', '三个', '四个', '五个'], correct: 1, explanation: '老师说"有机器人社团、摄影社团和话剧社团"，共三个。' },
        { question: '机器人社团每周活动几次？', options: ['一次', '两次', '三次', '四次'], correct: 1, explanation: '老师说"每周二和周四"，即每周两次。' },
        { question: '摄影社团的特别活动是什么？', options: ['比赛', '摄影展', '旅行', '讲座'], correct: 1, explanation: '老师说"学期末还会举办摄影展"。' },
        { question: '参加两个社团的条件是什么？', options: ['要交更多费用', '要得到家长同意', '不能影响学习成绩', '只有高年级学生可以'], correct: 2, explanation: '老师说"要保证不影响学习成绩。如果成绩下降了，可能要暂停参加"。' }
      ]
    },
    {
      id: 'lc9',
      title: '在机场',
      titleEn: 'At the Airport',
      transcript: `工作人员：您好，请问您的机票和护照。\n旅客：好的，给您。我的航班是下午两点飞北京的。\n工作人员：好的，您有几件行李要托运？\n旅客：两件，一个大箱子和一个小箱子。\n工作人员：让我称一下。大箱子二十三公斤，小箱子十五公斤，都没有超重。\n旅客：太好了。请问登机口在哪里？\n工作人员：您的登机口是A12，在二楼。登机时间是下午一点半，请提前到达。\n旅客：好的，谢谢！`,
      questions: [
        { question: '旅客要去哪里？', options: ['上海', '北京', '广州', '香港'], correct: 1, explanation: '旅客说"下午两点飞北京的"。' },
        { question: '旅客托运了几件行李？', options: ['一件', '两件', '三件', '四件'], correct: 1, explanation: '旅客说"两件，一个大箱子和一个小箱子"。' },
        { question: '登机口在哪里？', options: ['A10', 'A12', 'B12', 'A21'], correct: 1, explanation: '工作人员说"登机口是A12，在二楼"。' }
      ]
    },
    {
      id: 'lc10',
      title: '办手机套餐',
      titleEn: 'Getting a Phone Plan',
      transcript: `营业员：你好，请问需要什么服务？\n顾客：我想办一个新的手机套餐。\n营业员：我们现在有三种套餐。基本套餐每月五十八元，包含五个G的流量和一百分钟通话。标准套餐八十八元，有十个G的流量和三百分钟通话。高级套餐一百二十八元，流量不限。\n顾客：标准套餐够用吗？我平时上网比较多。\n营业员：如果您经常看视频的话，十个G可能不太够，建议选高级套餐。\n顾客：那就办高级套餐吧。需要什么证件？\n营业员：需要您的身份证。合约期是一年，提前取消要付违约金。`,
      questions: [
        { question: '基本套餐每月多少钱？', options: ['三十八元', '五十八元', '八十八元', '一百二十八元'], correct: 1, explanation: '营业员说"基本套餐每月五十八元"。' },
        { question: '顾客最后选了哪个套餐？', options: ['基本套餐', '标准套餐', '高级套餐', '没决定'], correct: 2, explanation: '顾客说"那就办高级套餐吧"。' },
        { question: '合约期是多长时间？', options: ['半年', '一年', '两年', '三年'], correct: 1, explanation: '营业员说"合约期是一年"。' }
      ]
    },
    {
      id: 'lc11',
      title: '计划生日聚会',
      titleEn: 'Planning a Birthday Party',
      transcript: `小红：下个星期六是小明的生日，我们给他办一个惊喜派对怎么样？\n小华：好主意！在哪里办？\n小红：我家客厅挺大的，可以在我家。\n小华：那我们需要准备什么？\n小红：我买蛋糕和装饰品，你负责买饮料和零食吧。\n小华：没问题。要不要准备一些游戏？\n小红：当然！我们可以玩卡拉OK和桌游。对了，别忘了叫上大卫和小美。\n小华：好的，我发微信通知大家。几点开始？\n小红：下午五点，让小明六点到，这样我们有时间准备。`,
      questions: [
        { question: '派对在哪里举办？', options: ['餐厅', '学校', '小红家', '小明家'], correct: 2, explanation: '小红说"可以在我家"。' },
        { question: '小华负责买什么？', options: ['蛋糕和装饰品', '饮料和零食', '蛋糕和饮料', '游戏和礼物'], correct: 1, explanation: '小红说"你负责买饮料和零食吧"。' },
        { question: '小明几点到？', options: ['四点', '五点', '六点', '七点'], correct: 2, explanation: '小红说"让小明六点到"。' }
      ]
    },
    {
      id: 'lc12',
      title: '丢了东西',
      titleEn: 'Lost and Found',
      transcript: `学生：老师，不好意思，我把我的书包忘在教室里了。\n老师：哪个教室？\n学生：三楼的305教室，下午第三节课的那个。\n老师：你的书包是什么样子的？\n学生：蓝色的，上面有一个白色的星星图案。里面有我的课本和笔记本电脑。\n老师：我帮你问问保安。你先去失物招领处看看，在一楼大厅旁边。\n学生：好的，谢谢老师。如果找不到怎么办？\n老师：你可以在学校网站上发一个失物启事，也可以去监控室看看录像。`,
      questions: [
        { question: '书包忘在哪间教室了？', options: ['203', '305', '302', '503'], correct: 1, explanation: '学生说"三楼的305教室"。' },
        { question: '书包是什么颜色的？', options: ['红色', '黑色', '蓝色', '绿色'], correct: 2, explanation: '学生说"蓝色的，上面有一个白色的星星图案"。' },
        { question: '失物招领处在哪里？', options: ['二楼', '一楼大厅旁边', '三楼', '保安室'], correct: 1, explanation: '老师说"在一楼大厅旁边"。' }
      ]
    },
    {
      id: 'lc13',
      title: '请家教',
      titleEn: 'Hiring a Tutor',
      transcript: `家长：你好，我想给我女儿请一个数学家教。\n老师：好的，您女儿现在几年级？\n家长：她上高二，明年要参加高考了。\n老师：她数学基础怎么样？\n家长：基础还行，但是应用题比较弱，每次考试都在那里丢分。\n老师：明白了。我建议每周上两次课，每次两个小时。费用是每小时一百五十元。\n家长：时间上可以安排在周末吗？她平时课很多。\n老师：可以，周六和周日上午都可以。第一次课免费试听。\n家长：太好了，那我们先试一次课。`,
      questions: [
        { question: '女儿上几年级？', options: ['高一', '高二', '高三', '初三'], correct: 1, explanation: '家长说"她上高二"。' },
        { question: '女儿的数学哪方面比较弱？', options: ['计算', '几何', '应用题', '代数'], correct: 2, explanation: '家长说"应用题比较弱"。' },
        { question: '家教的费用是多少？', options: ['每小时一百元', '每小时一百五十元', '每小时两百元', '每次两百元'], correct: 1, explanation: '老师说"费用是每小时一百五十元"。' }
      ]
    },
    {
      id: 'lc14',
      title: '办健身卡',
      titleEn: 'Gym Membership',
      transcript: `教练：欢迎来到阳光健身中心！请问是第一次来吗？\n顾客：是的，我想了解一下会员卡。\n教练：我们有月卡、季卡和年卡。月卡三百元，季卡八百元，年卡两千五百元。\n顾客：年卡平均下来每个月多少钱？\n教练：大约两百多一个月，最划算。而且年卡会员可以免费使用游泳池和参加团体课。\n顾客：都有什么团体课？\n教练：有瑜伽、搏击操、动感单车和有氧舞蹈，每天都有不同的课。\n顾客：营业时间是什么时候？\n教练：早上六点到晚上十点，全年无休。`,
      questions: [
        { question: '年卡多少钱？', options: ['两千元', '两千五百元', '三千元', '三千五百元'], correct: 1, explanation: '教练说"年卡两千五百元"。' },
        { question: '年卡会员的特别福利是什么？', options: ['免费停车', '免费游泳池和团体课', '免费私教课', '免费餐饮'], correct: 1, explanation: '教练说"年卡会员可以免费使用游泳池和参加团体课"。' },
        { question: '健身中心几点关门？', options: ['晚上八点', '晚上九点', '晚上十点', '晚上十一点'], correct: 2, explanation: '教练说"早上六点到晚上十点"。' }
      ]
    },
    {
      id: 'lc15',
      title: '谈论天气变化',
      titleEn: 'Discussing Weather Changes',
      transcript: `小李：今天天气真奇怪，早上还是大晴天，现在怎么突然下雨了？\n小王：天气预报说今天下午会有雷阵雨，我出门前看的。\n小李：难怪！我没带伞，都淋湿了。\n小王：你应该下载一个天气APP，随时可以看。\n小李：说得对。明天的天气怎么样？我和朋友约好去公园野餐。\n小王：让我看看。明天多云转晴，最高气温二十八度，应该很适合野餐。\n小李：太好了！那你要不要一起来？\n小王：好啊！我可以带一些水果和三明治。`,
      questions: [
        { question: '今天下午的天气怎么样？', options: ['晴天', '多云', '雷阵雨', '大风'], correct: 2, explanation: '小王说"今天下午会有雷阵雨"。' },
        { question: '明天的最高气温是多少？', options: ['二十五度', '二十六度', '二十八度', '三十度'], correct: 2, explanation: '小王说"最高气温二十八度"。' },
        { question: '小王要带什么去野餐？', options: ['饮料和蛋糕', '水果和三明治', '烧烤食材', '零食和啤酒'], correct: 1, explanation: '小王说"我可以带一些水果和三明治"。' }
      ]
    },
    {
      id: 'lc16',
      title: '买生日礼物',
      titleEn: 'Buying a Birthday Gift',
      transcript: `小美：我妈妈下周过生日，我想给她买个礼物，你有什么建议吗？\n小丽：你妈妈喜欢什么？\n小美：她平时喜欢看书和养花。\n小丽：那你可以买一束鲜花配一本好书，又实用又有心意。\n小美：我之前已经送过书了。这次想换个特别的。\n小丽：那送一个自制的按摩券怎么样？十张券，每张可以换一次你给她按摩半小时。\n小美：哈哈，这个主意太有创意了！不过我还是想买点实际的东西。\n小丽：那就买一个好看的花瓶吧，她可以用来插花。在网上选一个精致的陶瓷花瓶。\n小美：这个好！我现在就去看看。`,
      questions: [
        { question: '小美的妈妈喜欢什么？', options: ['做饭和运动', '看书和养花', '旅行和购物', '画画和音乐'], correct: 1, explanation: '小美说"她平时喜欢看书和养花"。' },
        { question: '为什么小美不想送书？', options: ['太贵了', '以前送过了', '妈妈不喜欢', '找不到好书'], correct: 1, explanation: '小美说"我之前已经送过书了"。' },
        { question: '最后小美决定买什么？', options: ['鲜花', '按摩券', '花瓶', '一本书'], correct: 2, explanation: '小美同意了买花瓶的建议，说"这个好！我现在就去看看"。' }
      ]
    },
    {
      id: 'lc17',
      title: '讨论一部电影',
      titleEn: 'Discussing a Movie',
      transcript: `大卫：你看了那部新上映的科幻电影吗？\n小红：看了！昨天晚上刚看的。你觉得怎么样？\n大卫：特效做得非常好，但是我觉得剧情有点复杂，中间有些地方我看不太懂。\n小红：确实，时间线太多了。不过演员的演技都挺好的，特别是男主角。\n大卫：对，他演得很自然。你给这部电影打几分？满分十分。\n小红：我给七分吧。画面和音乐很棒，但是故事可以讲得更清楚一些。\n大卫：差不多，我也给七分。下周还有一部动作片上映，要不要一起看？\n小红：好啊！提前买票吧，上次去的时候票都卖完了。`,
      questions: [
        { question: '大卫觉得电影怎么样？', options: ['太无聊', '特效好但剧情复杂', '很完美', '不好看'], correct: 1, explanation: '大卫说"特效做得非常好，但是我觉得剧情有点复杂"。' },
        { question: '小红给电影打了几分？', options: ['五分', '六分', '七分', '八分'], correct: 2, explanation: '小红说"我给七分吧"。' },
        { question: '他们下周想看什么类型的电影？', options: ['科幻片', '喜剧片', '动作片', '爱情片'], correct: 2, explanation: '大卫说"下周还有一部动作片上映"。' }
      ]
    },
    {
      id: 'lc18',
      title: '家长会',
      titleEn: 'Parent-Teacher Meeting',
      transcript: `老师：欢迎来参加家长会。小明最近在学校表现总体不错。\n家长：谢谢老师。他的学习情况怎么样？\n老师：语文和英语成绩都很好，一直在班上前五名。但是数学最近退步了，上次考试只考了七十五分。\n家长：是吗？他在家好像花了不少时间在数学上。\n老师：我注意到他上课有时候注意力不太集中，可能影响了学习效果。建议在家少玩电子游戏。\n家长：好的，我们会注意的。他和同学们相处得怎么样？\n老师：很好，他很友善，同学们都喜欢他。而且他积极参加课外活动，是篮球队的队员。\n家长：那就好。我们会督促他在数学上多下功夫的。`,
      questions: [
        { question: '小明的数学考了多少分？', options: ['六十五分', '七十五分', '八十五分', '九十五分'], correct: 1, explanation: '老师说"上次考试只考了七十五分"。' },
        { question: '老师发现小明上课有什么问题？', options: ['经常迟到', '注意力不集中', '不交作业', '和同学说话'], correct: 1, explanation: '老师说"他上课有时候注意力不太集中"。' },
        { question: '小明参加了什么课外活动？', options: ['足球队', '篮球队', '游泳队', '田径队'], correct: 1, explanation: '老师说"是篮球队的队员"。' }
      ]
    },
    {
      id: 'lc19',
      title: '银行开户',
      titleEn: 'Opening a Bank Account',
      transcript: `客户：你好，我想开一个银行账户。\n柜员：好的，请问您要开储蓄账户还是支票账户？\n客户：储蓄账户。利率是多少？\n柜员：目前的年利率是百分之一点五。如果存定期三年，利率可以到百分之三。\n客户：我先开一个活期的吧。最低存多少？\n柜员：最低一百元就可以开户。请出示您的身份证和手机号码。\n客户：好的，这是我的证件。\n柜员：需要开通网上银行和手机银行吗？可以随时查看余额和转账。\n客户：好的，都开通吧。\n柜员：请设置一个六位数的密码。`,
      questions: [
        { question: '客户要开什么类型的账户？', options: ['支票账户', '储蓄账户', '信用卡', '投资账户'], correct: 1, explanation: '客户说"储蓄账户"。' },
        { question: '活期储蓄的年利率是多少？', options: ['百分之一', '百分之一点五', '百分之二', '百分之三'], correct: 1, explanation: '柜员说"目前的年利率是百分之一点五"。' },
        { question: '开户最低需要存多少钱？', options: ['五十元', '一百元', '两百元', '五百元'], correct: 1, explanation: '柜员说"最低一百元就可以开户"。' }
      ]
    },
    {
      id: 'lc20',
      title: '图书馆借书',
      titleEn: 'Borrowing Books from the Library',
      transcript: `学生：你好，我想借几本书。\n图书管理员：好的，请出示你的借书证。\n学生：给您。我想找一本关于中国历史的书。\n图书管理员：中国历史的书在三楼的人文社科区。你可以在电脑上搜索具体的书名。\n学生：这本《中国通史》可以借多长时间？\n图书管理员：一般的书可以借三十天，教科书只能借十四天。这本是普通图书，可以借三十天。\n学生：如果到期看不完呢？\n图书管理员：可以续借一次，再延长十五天。不过如果有其他读者预约了就不能续借了。逾期每天罚款一元。\n学生：好的，我再借两本英语小说。\n图书管理员：每人最多可以同时借五本书。`,
      questions: [
        { question: '中国历史的书在哪里？', options: ['一楼', '二楼', '三楼', '四楼'], correct: 2, explanation: '管理员说"在三楼的人文社科区"。' },
        { question: '普通图书可以借多长时间？', options: ['十四天', '二十一天', '三十天', '六十天'], correct: 2, explanation: '管理员说"普通图书，可以借三十天"。' },
        { question: '逾期每天罚款多少？', options: ['五毛', '一元', '两元', '五元'], correct: 1, explanation: '管理员说"逾期每天罚款一元"。' }
      ]
    }
  ]
};

if (typeof window !== 'undefined') { window.LISTENING_DATA = LISTENING_DATA; }


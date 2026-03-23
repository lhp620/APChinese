// ============================================
// Writing Practice Module
// ============================================

const WRITING_PROMPTS = {
  storyNarration: [
    {
      id: 'sn1',
      title: '图书馆里的意外',
      imgUrl: 'assets/sn1_library.png',
      images: [
        { emoji: '📚', desc: '一个学生背着重重的书包走进安静的图书馆' },
        { emoji: '😲', desc: '学生不小心撞倒了一摞书，书掉在地上' },
        { emoji: '🤝', desc: '一位热心的图书管理员走过来帮忙捡书' },
        { emoji: '😊', desc: '他们成了朋友，学生开始在图书馆做义工' }
      ],
      sampleResponse: `星期六下午，小明背着沉重的书包走进了学校的图书馆。图书馆里很安静，只有几个人在看书。\n\n小明走到书架旁边的时候，他的书包不小心碰到了一摞放在桌子上的书。那些书全都掉到了地上，发出很大的声音。小明的脸一下子变红了，他觉得很不好意思。\n\n这时候，一位图书馆的阿姨走过来，微笑着说："没关系，我来帮你。"她弯下腰帮小明一起把书捡起来。阿姨一边捡书一边和小明聊天，问他喜欢看什么书。\n\n从那以后，小明每个周末都去图书馆。他不仅在那里看书，还主动帮忙整理书架。小明和图书馆的阿姨成了好朋友。他觉得在图书馆帮忙是一件很有意义的事情。`
    },
    {
      id: 'sn2',
      title: '下雨天的故事',
      imgUrl: 'assets/sn2_rain.png',
      images: [
        { emoji: '☀️', desc: '一个阳光明媚的早晨，女孩出门前决定不带伞' },
        { emoji: '🌧️', desc: '女孩走到半路，天空突然下起倾盆大雨' },
        { emoji: '🏪', desc: '女孩在一家小店门口躲雨，店主老爷爷看着她' },
        { emoji: '☂️', desc: '老爷爷借给女孩一把雨伞，女孩微笑着道谢回家' }
      ],
      sampleResponse: `今天早上天气很好，阳光明媚。小花看了看窗外，觉得不需要带伞，就高高兴兴地出门了。\n\n可是走到半路的时候，天突然变了。乌云遮住了太阳，很快就下起了大雨。小花没有伞，衣服很快就淋湿了。她只好跑到路边一家小店的门口躲雨。\n\n小店的老板是一位很和蔼的老爷爷。他看到小花浑身湿透了，就给她倒了一杯热水。老爷爷说："孩子，出门要注意看天气预报啊。"然后他从柜台后面拿出一把伞递给小花。\n\n小花非常感动，连声说谢谢。她打着伞开心地往家走去，心里想：下次出门一定要记得看天气预报，也要像老爷爷一样帮助别人。`
    },
    {
      id: 'sn3',
      title: '迷路的宠物狗',
      imgUrl: 'assets/sn3_dog.png',
      images: [
        { emoji: '🐕', desc: '一只可爱的小狗在小区的花丛里迷路了' },
        { emoji: '😢', desc: '一个小男孩发现了这只小狗，发现它找不到主人' },
        { emoji: '📱', desc: '男孩拿出手机拍了照片，并发到了小区群里' },
        { emoji: '👩', desc: '小狗的主人赶来跑过来抱住小狗，向男孩道谢' }
      ],
      sampleResponse: `周末的傍晚，明明在小区里散步。突然，他在花丛里发现了一只可爱的小狗。\n\n这只小狗看起来很害怕，一直叫。明明很快发现这只小狗迷路了，找不到它的主人。明明觉得小狗很可怜，决定帮助它。\n\n于是，明明拿出手机给小狗拍了一张照片，然后把照片和发现小狗的地点发到了小区的微信群里。他还写了一段话，问大家有没有人认识这只狗。\n\n没过多久，一位阿姨急急忙忙地跑了过来。原来她是小狗的主人，一直在到处找狗。看到她的狗平安无事，她十分激动地抱住了小狗，不停地向明明道谢。明明心里觉得特别开心。`
    },
    {
      id: 'sn4',
      title: '忘记带钱包',
      imgUrl: 'assets/sn4_wallet.png',
      images: [
        { emoji: '🍜', desc: '男生在面馆里开心地吃着一碗热腾腾的面条' },
        { emoji: '😨', desc: '吃完后准备付钱，惊讶地发现自己忘了带钱包' },
        { emoji: '🗣️', desc: '男生尴尬地向老板解释，旁边一位好心人看到' },
        { emoji: '💵', desc: '好心人帮他付了钱，男生要了微信以后把钱还给对方' }
      ],
      sampleResponse: `中午的时候，大卫肚子很饿，就走进了一家面馆。他点了一碗最爱吃的牛肉面，吃得很香。\n\n可是，当他吃完面准备付钱的时候，却发生了尴尬的事情。他摸了摸口袋，发现自己竟然忘记带钱包和手机了。大卫紧张得不知所措，脸也红了。\n\n他只好走到柜台前，结结巴巴地向老板解释。正当大卫不知道该怎么办时，旁边的一位好心人走过来，微笑着替他付了那碗面的钱。\n\n大卫非常感动，连声说谢谢。他向那位好心人要了联系方式，并保证一回家就把钱转给他。这次经历让大卫明白了社会上有很多乐于助人的人。`
    },
    {
      id: 'sn5',
      title: '修理自行车',
      imgUrl: 'assets/sn5_bike.png',
      images: [
        { emoji: '🚲', desc: '男孩骑着自行车去上学，车轮胎突然漏气了' },
        { emoji: '🏃', desc: '男孩焦急地推着车走，担心上学会迟到' },
        { emoji: '🔧', desc: '路边一位会修车的叔叔帮他补好了轮胎' },
        { emoji: '🏫', desc: '男孩骑着修好的车准时赶到了学校门前' }
      ],
      sampleResponse: `今天早上，李明像往常一样骑着自行车去上学。没走多远，他突然感觉到车子骑不动了，原来是轮胎漏气了。\n\n李明非常着急，因为马上就要上课了。他只好推着自行车往前跑，心里担心着今天肯定要迟到了，急得满头大汗。\n\n正在这时候，他经过了一个修车摊。修自行车的叔叔看到了李明着急的样子，马上放下手里的活，很快地帮他补好了轮胎。\n\n修好车后，李明对叔叔说了声谢谢，然后立刻骑上车飞快地往学校赶。幸运的是，当他冲到学校门口的时候，正好上课铃响了，他没有迟到。`
    },
    {
      id: 'sn6',
      title: '做饭的惊喜',
      imgUrl: 'assets/sn6_dinner.png',
      images: [
        { emoji: '🍳', desc: '女孩决定在周末给妈妈做一顿丰盛的晚餐' },
        { emoji: '📖', desc: '女孩一边看着食谱，一边在厨房里忙碌' },
        { emoji: '🥘', desc: '做好的饭菜端上桌，看起来非常美味' },
        { emoji: '👩', desc: '妈妈下班回来，看到晚餐感到非常惊喜和感动' }
      ],
      sampleResponse: `今天是母亲节，小月想给妈妈一个特别的礼物。她决定亲自下厨，为妈妈做一顿丰盛的晚餐。\n\n由于她是第一次做饭，所以非常认真。她一边看着网上的菜谱，一边在厨房里小心翼翼地切菜、炒菜。整个下午她都在厨房里忙碌。\n\n终于，在傍晚的时候，她把两菜一汤端上了餐桌。虽然看起来没有饭店里做的那么好看，但闻起来很香。\n\n晚上，妈妈下班回到家。当她看到桌子上热腾腾的饭菜时，她大吃一惊，非常感动。妈妈夸奖小月长大了，她们度过了一个温馨的晚上。`
    },
    {
      id: 'sn7',
      title: '捡到钱包',
      imgUrl: 'assets/sn7_lostwallet.png',
      images: [
        { emoji: '👛', desc: '两个男孩在公园的椅子上发现了一个遗失的钱包' },
        { emoji: '👀', desc: '他们打开一看，里面有很多现金和身份证' },
        { emoji: '👮', desc: '他们决定把钱包交给附近的警察局' },
        { emoji: '👍', desc: '警察表扬了他们，失主也拿回了钱包' }
      ],
      sampleResponse: `那是一个阳光明媚的周末，王东和朋友在公园里踢足球。休息的时候，他们在长椅上发现了一个棕色的钱包。\n\n他们好奇地打开钱包看了看，发现里面不仅有很多现金，还有身份证和银行卡。王东想，失主现在一定非常着急。\n\n于是，两个好朋友商量了一下，决定马上把钱包送给附近的警察局。他们跑到了派出所，把钱包交给了警察叔叔，并且说明了捡到钱包的过程。\n\n警察叔叔表扬了他们拾金不昧的精神。不久之后，警察联系到了失主，失主对这两个诚实的孩子表示了深深的感谢。`
    },
    {
      id: 'sn8',
      title: '考试准备',
      imgUrl: 'assets/sn8_exam.png',
      images: [
        { emoji: '📚', desc: '女孩为了期末考试，深夜还在书桌前努力复习' },
        { emoji: '😴', desc: '女孩太累了，趴在桌子上睡着了' },
        { emoji: '⏰', desc: '闹钟在早上响了，女孩惊醒后立刻跑向考场' },
        { emoji: '💯', desc: '考试成绩公布，女孩拿到了一百分，非常开心' }
      ],
      sampleResponse: `上个星期是期末考试周。为了能考出一个好成绩，丽丽每天都在非常努力地复习功课。有天晚上，她一直在书桌前复习到了深夜。\n\n因为实在太累了，丽丽看着看着书，就不知不觉地趴在桌子上睡着了。连灯都没有关。\n\n第二天早上，闹钟响了。丽丽猛地惊醒，发现已经快八点了！她赶紧穿上衣服，拿上书包，飞奔向学校的考场，差一点就迟到了。\n\n几天后，考试成绩公布了。因为复习得非常充分，丽丽考了一百分。看到这个好成绩，她觉得所有的辛苦和努力都是值得的。`
    },
    {
      id: 'sn9',
      title: '打篮球受伤',
      imgUrl: 'assets/sn9_basketball.png',
      images: [
        { emoji: '🏀', desc: '一群男生在篮球场上进行激烈的篮球比赛' },
        { emoji: '🤕', desc: '一个男生不小心摔倒，扭伤了脚踝，表情痛苦' },
        { emoji: '🚑', desc: '同学们马上将他扶起来，并去了学校的医务室' },
        { emoji: '🏥', desc: '医生帮他包扎好脚，朋友们在旁边陪伴着他' }
      ],
      sampleResponse: `星期五的下午，学校举行了一场激烈的篮球比赛。张华和他的同学们在场上拼命奔跑，大家都想赢得这场比赛。\n\n就在张华准备投篮的时候，他落地没站稳，不小心摔倒了。他的脚踝扭伤了，疼得满头大汗，坐在地上站不起来。\n\n看到张华受伤了，队友们立刻停止了比赛。大家赶紧跑过去，小心翼翼地把他扶起来，大家一起帮忙把他送去了学校的医务室。\n\n校医仔细给张华检查了伤口，并且帮他包扎好了脚。虽然张华受了伤，不能继续打篮球了，但是看到朋友们这么关心他，他心里觉得非常温暖。`
    },
    {
      id: 'sn10',
      title: '环保活动',
      imgUrl: 'assets/sn10_beach.png',
      images: [
        { emoji: '🗑️', desc: '社区活动中，人们自发来到海滩清理垃圾' },
        { emoji: '🧤', desc: '一个男孩戴着手套，用夹子捡起地上的塑料瓶' },
        { emoji: '♻️', desc: '大家将垃圾分类放进不同的垃圾桶里' },
        { emoji: '🌊', desc: '海滩恢复了干净，大家看着美丽的风景很满意' }
      ],
      sampleResponse: `为了庆祝地球日，这个周末，我们学校组织了一次去海滩清理垃圾的环保活动。我和很多同学都报名参加了。\n\n到了海滩以后，大家带上手套，拿上工具，开始认真地在沙滩上捡垃圾。我用夹子捡起了很多废弃的塑料瓶和食品包装袋。\n\n清理完之后，我们还学会了垃圾分类。大家把收集来的垃圾仔细地分好，有的放进可回收的箱子里，有的放进有害垃圾的箱子里。\n\n看着原本脏乱的海滩重新变得干净美丽，大家虽然很累，但是都觉得特别满意。保护环境是我们每个人的责任。`
    }
  ],
  emailReply: [
    {
      id: 'er1',
      title: '暑假计划讨论',
      email: `发件人：小红\n收件人：你\n主题：暑假计划\n\n你好！\n\n暑假快要到了，你有什么计划吗？我正在考虑两个选择：一是去北京参加中文夏令营，二是留在家里找一份暑期工作。\n\n中文夏令营听起来很有意思，可以提高中文水平，还能认识新朋友。但是暑期工作也不错，可以赚钱，而且能获得工作经验。\n\n你觉得我应该怎么选择？你暑假打算做什么？如果你也有兴趣，我们可以一起去夏令营！\n\n期待你的回信！\n\n小红`,
      instructions: 'Reply to the email addressing:\n1. Give your opinion on the two choices\n2. Share your own summer plans\n3. Suggest doing something together',
      sampleResponse: `小红：\n\n你好！谢谢你的来信！暑假确实快到了，我也一直在想怎么安排。\n\n关于你说的两个选择，我觉得都很好，但是如果你现在最需要提高中文水平，我建议你去参加夏令营。暑期工作以后还有很多机会，但是好的中文夏令营不是每年都有的。而且，参加夏令营既可以学中文，又可以认识新朋友，一举两得。\n\n至于我自己的暑假计划，我打算先去我奶奶家住两个星期，然后回来上一个暑期的美术课。如果你决定去夏令营的时间和我的美术课不冲突，我很有兴趣和你一起去！\n\n你能告诉我夏令营的具体时间和费用吗？这样我可以跟我父母商量一下。\n\n期待你的回复！\n\n你的朋友`
    },
    {
      id: 'er2',
      title: '选课建议',
      email: `发件人：大明\n收件人：你\n主题：下学期选课\n\n你好！\n\n我现在在为下学期的选课发愁。我需要再选一门选修课，现在犹豫要选美术还是音乐。\n\n我从小就对画画很感兴趣，但是从来没有正式学过。美术课可以让我学到一些基本技巧。可是我也很喜欢唱歌，听说音乐课的老师特别好，而且学期末有一个音乐会表演。\n\n你之前好像上过这两门课，能给我一些建议吗？这两门课的作业多吗？考试难不难？\n\n谢谢！\n\n大明`,
      instructions: 'Reply addressing:\n1. Share your experience with the courses\n2. Give a recommendation with reasons\n3. Describe the workload and exams',
      sampleResponse: `大明：\n\n你好！选课确实是一件需要好好考虑的事情，我很高兴能帮你！\n\n我去年上过美术课，今年正在上音乐课，所以两门课我都有经验。美术课的作业主要是画画和做手工，每周大约需要两到三个小时。考试的话，期中和期末各有一个作品展示，不需要笔试。音乐课的作业比较少，但是要每天练习唱歌或者练乐器。学期末的音乐会是一个很好的经历。\n\n如果你问我的建议，我觉得你可以选音乐课。原因有两个：第一，音乐课的老师确实非常好，上课很有趣；第二，学期末的音乐会是一个难得的表演机会，你会从中获得很多自信。\n\n不过最重要的是选你自己最喜欢的。你可以在开学第一周两门课都去旁听一下，感受一下再决定。\n\n祝你选课顺利！\n\n你的朋友`
    }
  ]
};

WRITING_PROMPTS.emailReply.push(
  {
    id: 'er3',
    title: '生日派对计划',
    email: `发件人：王朋\n收件人：你\n主题：李明的生日\n\n你好！\n\n李明的生日快到了，我想为他举办一个惊喜派对。作为他的好朋友，我想听听你的意见。\n\n你觉得我们在哪里办派对比较好？另外，我们应该准备什么食物和饮料？\n\n除了班上的同学，你觉得还可以邀请谁参加？\n\n期待你的回复！\n\n王朋`,
    instructions: 'Reply to the email addressing:\n1. Suggest a location for the party\n2. Recommend food and drinks\n3. Suggest whom else to invite',
    sampleResponse: `王朋：\n\n你好！为李明准备惊喜派对真是个好主意，我很高兴能帮忙。\n\n我觉得在公园办派对比较好，天气好的时候大家可以在外面踢球和聊天。食物方面，我建议准备他最喜欢的比萨饼和炸鸡，再买一个大大的水果蛋糕。饮料可以准备一些苹果汁和可乐。\n\n除了同班同学，我觉得也可以邀请他篮球队的朋友们，人多会更热闹。\n\n需要我帮忙买东西吗？随时联系我！\n\n你的朋友`
  },
  {
    id: 'er4',
    title: '申请交换生',
    email: `发件人：张老师\n收件人：你\n主题：去中国交换学习\n\n你好！\n\n学校正在挑选学生明年去中国做交换生。因为你的中文成绩很好，我想问问你有没有兴趣。\n\n如果你去中国，你最想去哪个城市？为什么？在交换期间，你最想体验哪些中国文化？\n\n请尽快回复我。\n\n张老师`,
    instructions: 'Reply to the email addressing:\n1. Express your interest and gratitude\n2. Choose a city and explain your reason\n3. Mention cultural experiences you wish to have',
    sampleResponse: `张老师：\n\n您好！非常感谢您给我这个机会，我对去中国做交换生非常感兴趣！\n\n如果能去中国，我最想去的城市是北京。因为北京是中国的首都，有很悠久的历史和文化，我一直想去看看长城和故宫。在交换期间，我最想体验的中国文化是书法和包饺子。我希望能在那里交到很多中国朋友，提高我的中文口语水平。\n\n请问申请这个项目都需要准备什么材料？非常感谢您的帮助！\n\n您的学生`
  },
  {
    id: 'er5',
    title: '学校社团',
    email: `发件人：白英爱\n收件人：你\n主题：参加什么社团\n\n你好！\n\n新学期开始了，学校有很多有趣的社团。我不知道该参加哪个好。\n\n我听说你参加了中文俱乐部和电脑社团。你觉得哪个社团更意思？你能不能给我介绍一下这两个社团平时的活动？\n\n如果我想参加，现在还可以报名吗？\n\n谢谢！\n\n白英爱`,
    instructions: 'Reply to the email addressing:\n1. Compare the two clubs\n2. Describe their usual activities\n3. Answer her question about registration',
    sampleResponse: `英爱：\n\n你好！很高兴收到你的邮件。\n\n两个社团都很有意思，但我个人觉得中文俱乐部更适合你，因为一直想练习中文。在中文俱乐部，我们平时会一起看中国电影，学习写毛笔字，有时还会一起做中国菜。而电脑社团主要是学习编程和做游戏，稍微有点难。\n\n如果你想报名中文俱乐部，现在完全来得及。我们这周五下午三点有招新活动，你可以跟我一起去看看。\n\n希望能和你在社团见！\n\n你的朋友`
  },
  {
    id: 'er6',
    title: '周末旅游',
    email: `发件人：高小音\n收件人：你\n主题：周末去哪儿玩\n\n你好！\n\n我们已经好几个月没见面了！这个周末我想开车去你的城市找你玩。\n\n你的城市有什么好玩的地方和好吃的餐厅吗？你最推荐我去哪里参观？如果有时间的话，我们晚上可以一起看电影吗？\n\n期待这个周末！\n\n高小音`,
    instructions: 'Reply to the email addressing:\n1. Show your excitement for her visit\n2. Recommend a place to visit and a restaurant\n3. Respond to her movie request',
    sampleResponse: `小音：\n\n你好！太好了，听到你要来我的城市找我玩，我特别兴奋！\n\n我的城市有很多好玩的地方，我最推荐你去参观国家博物馆，那里最近有一个很棒的艺术展览。参观完之后，带你去市中心的一家四川餐厅吃饭，他们家的麻婆豆腐特别地道。\n\n晚上一起看电影完全没问题！最近正好上映了一部很有名的喜剧片，我已经买好票了，保证我们一定会很开心。\n\n这周末见！\n\n你的朋友`
  },
  {
    id: 'er7',
    title: '学习中文的建议',
    email: `发件人：约翰\n收件人：你\n主题：请教中文学习问题\n\n你好！\n\n我是一年级的学生，刚开始学习中文。我觉得中文的汉字太难写了，而且发音也很难记住。\n\n听说你的中文说得很好，也是班上的第一名。请问你平时是怎么复习中文的？能不能给我一些记汉字的好建议？\n\n我很希望能跟你一起练习说中文。\n\n谢谢！\n\n约翰`,
    instructions: 'Reply to the email addressing:\n1. Encourage him in his learning\n2. Share your study methods and tips for characters\n3. Agree to practice speaking together',
    sampleResponse: `约翰：\n\n你好！学习中文刚开始确实有一点难，汉字和拼音都需要时间，所以你不要着急，慢慢来就行了。\n\n关于记汉字，我的建议是不要死记硬背。你可以去了解每个汉字的部首，很多汉字其实就像画画一样，理解了意思就很好记了。平时我每天都会拿出二十分钟写汉字练习。听力方面，我经常看一些有中文字幕的中国电视剧。\n\n我非常愿意和你一起练习说中文！我们可以每周二下课后在图书馆见面，用中文聊天半个小时。\n\n加油！\n\n你的朋友`
  },
  {
    id: 'er8',
    title: '健康饮食',
    email: `发件人：林老师\n收件人：你\n主题：关于学校食堂的调查\n\n同学你好！\n\n我是学校食堂的经理，林老师。为了让大家吃得更健康，我们在做一项调查。\n\n你觉得我们学校食堂的饭菜健康吗？学生们最喜欢吃哪些菜？为了改善饮食，你建议我们食堂增加一些什么样的新菜？\n\n谢谢你的反馈！\n\n林老师`,
    instructions: 'Reply to the email addressing:\n1. Give your opinion on the cafeteria food\n2. Mention the dishes that students like most\n3. Suggest new healthy dishes',
    sampleResponse: `林老师：\n\n您好！非常感谢您听取学生们的意见。\n\n我觉得我们学校食堂的饭菜总体来说味道不错，但在健康方面还有提高的空间，有时候油炸食品稍微多了一点。现在学生们最喜欢吃的是炸鸡和汉堡，每天中午都有很多人排队。\n\n为了改善饮食的健康，我建议食堂可以增加更多的新鲜蔬菜沙拉，还有一些中式炒菜，比如西红柿炒鸡蛋和清炒西兰花。另外，如果能提供一些新鲜的水果选项就更好了。\n\n希望能看到食堂的新菜单！\n\n一名学生`
  },
  {
    id: 'er9',
    title: '买礼物的困惑',
    email: `发件人：小云\n收件人：你\n主题：给妈妈买礼物\n\n你好！\n\n下周就是我妈妈的五十岁生日了，我想用自己打工赚的钱给她买一份特别的礼物。\n\n我在考虑送她一条贵重的手册，或者请她去吃一顿高级晚餐。你觉得哪个主意更好？或者你有什么其他的好建议吗？\n\n你一般过节的时候会给父母买什么？\n\n谢谢你的建议！\n\n小云`,
    instructions: 'Reply to the email addressing:\n1. Compare her two gift ideas and choose one\n2. Provide an alternative gift suggestion\n3. Share what you usually buy for your parents',
    sampleResponse: `小云：\n\n你好！你用自己赚的钱给妈妈买礼物，她一定会非常高兴的。\n\n关于你的两个想法，我觉得请她去吃高级晚餐更好。因为送礼物虽然贵重，但一顿晚餐可以让你和妈妈一起度过美好的时光，这比任何物品都珍贵。如果想更有意义一点，你其实也可以不用买，而是自己亲手为她做一桌菜，或者制作一本家庭相册回忆。\n\n我一般过节的时候，很少买很贵的东西。我通常会给他们写一封感谢信，或者买一束他们喜欢的花。\n\n祝你妈妈生日快乐！\n\n你的朋友`
  },
  {
    id: 'er10',
    title: '运动与健康',
    email: `发件人：马可\n收件人：你\n主题：一起去锻炼吧\n\n你好！\n\n最近我发现自己变胖了，而且上课总觉得很累。我想开始锻炼身体。\n\n我知道你经常运动，身体特别好。你平时每周锻炼几次？每次锻炼多长时间？\n\n我想参加一个运动班，你觉得打网球好还是去健身房好？如果有空的话，你想周末和我一起去运动吗？\n\n马可`,
    instructions: 'Reply to the email addressing:\n1. Share your exercise routine (frequency and duration)\n2. Advise playing tennis vs going to the gym\n3. Respond to his invitation',
    sampleResponse: `马可：\n\n你好！很高兴听到你想开始锻炼身体，运动确实能让人更有精神。\n\n我平时每周锻炼三次，一般是周一、周四和周末。每次我大概锻炼一个小时左右，跑跑步或者打打球。\n\n关于你的问题，我觉得刚开始锻炼，打网球比去健身房更好。因为打网球比较有意思，还可以和朋友一起互动，不容易觉得无聊，这样你能更容易坚持下去。\n\n我很乐意周末和你一起去运动！我们这周六下午去公园的网球场怎么样？你可以带上你的球拍。\n\n周末见！\n\n你的朋友`
  }
);

function initWriting() {
  renderWritingMenu();
}

function renderWritingMenu(activeTab = 'story') {
  const el = document.getElementById('writing-content');
  el.innerHTML = `
    <div class="glass-card" style="margin-bottom:var(--space-lg)">
      <p style="color:var(--text-secondary);font-size:0.9rem">
        <strong style="color:var(--gold-light)">📋 AP Writing Section:</strong>
        Two tasks, 15 minutes each. Task 1: Story Narration from 4 pictures. Task 2: Email Reply.
        Use the rubric to self-assess your writing. Score range: 0–6.
      </p>
    </div>
    
    <div class="tabs">
      <button class="tab ${activeTab === 'story' ? 'active' : ''}" onclick="showWritingTab('story')">📖 Story Narration 看图写故事</button>
      <button class="tab ${activeTab === 'email' ? 'active' : ''}" onclick="showWritingTab('email')">📧 Email Reply 回复邮件</button>
    </div>
    <div id="writing-tab-content"></div>
  `;
  showWritingTab(activeTab, false);
}

function showWritingTab(tab, clickEvent = true) {
  if (clickEvent && window.event && window.event.target) {
    document.querySelectorAll('#page-writing .tab').forEach(t => t.classList.remove('active'));
    window.event.target.classList.add('active');
  }
  
  const el = document.getElementById('writing-tab-content');
  const items = tab === 'story' ? WRITING_PROMPTS.storyNarration : WRITING_PROMPTS.emailReply;
  
  el.innerHTML = `
    <div class="item-list">
      ${items.map((item, i) => `
        <div class="item-card" onclick="start${tab === 'story' ? 'StoryNarration' : 'EmailReply'}(${i})">
          <span class="item-icon">${tab === 'story' ? '🖼️' : '📧'}</span>
          <div class="item-info">
            <h4>${item.title}</h4>
            <p>${tab === 'story' ? 'Story Narration' : 'Email Reply'} · 15 minutes</p>
          </div>
          <span class="item-badge new">Practice</span>
        </div>
      `).join('')}
    </div>
  `;
}

function startStoryNarration(index) {
  const prompt = WRITING_PROMPTS.storyNarration[index];
  const el = document.getElementById('writing-content');
  let timerSeconds = 15 * 60;
  let timerInterval;

  const imagesHtml = prompt.imgUrl 
    ? '<div style="text-align:center;margin-bottom:var(--space-lg)"><img src="' + prompt.imgUrl + '" alt="Story pictures" style="max-width:100%;border-radius:var(--radius-md);"></div>'
    : '<div class="story-images">' + prompt.images.map((img, i) => '<div class="story-image"><span class="image-number">' + (i + 1) + '</span><span>' + img.emoji + '</span><span class="image-desc">' + img.desc + '</span></div>').join('') + '</div>';
  
  el.innerHTML = `
    <button class="back-btn" onclick="clearInterval(window._writingTimer); renderWritingMenu('story')">← Back</button>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);align-items:start">
      <!-- Left: Prompt -->
      <div class="glass-card" style="margin-bottom:0;position:sticky;top:80px;height:calc(100vh - 120px);overflow-y:auto;padding:var(--space-md)">
        <h3 style="margin-bottom:var(--space-md);font-family:'Noto Sans SC',sans-serif">${prompt.title}</h3>
        <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:var(--space-lg)">
          Write a story based on the four pictures below. You have 15 minutes. Your story should connect all four scenes logically.
        </p>
        
        ${imagesHtml}
        
        <div style="display:flex;gap:var(--space-md);flex-wrap:wrap;margin-top:var(--space-xl)">
          <button class="btn btn-secondary" onclick="toggleSampleResponse('story', ${index})">📝 View Sample Response</button>
          <button class="btn btn-secondary" onclick="toggleRubric()">📊 Scoring Rubric</button>
        </div>
        
        <div class="sample-response" id="sample-response-box">
          <h4>📝 Sample High-Score Response (5-6)</h4>
          <p style="font-family:'Noto Sans SC',sans-serif;line-height:1.9;white-space:pre-wrap;margin-top:var(--space-md)">${prompt.sampleResponse}</p>
        </div>
        
        <div class="sample-response" id="rubric-box">
          <h4>📊 AP Writing Scoring Rubric (0-6)</h4>
          <div class="rubric-grid" style="margin-top:var(--space-md)">
            <div class="rubric-item"><h5>6 - Excellent</h5><p>Complete story, rich details, accurate grammar, smooth transitions</p></div>
            <div class="rubric-item"><h5>5 - Very Good</h5><p>Narrates all 4 pictures, good Chinese, minor errors</p></div>
            <div class="rubric-item"><h5>4 - Good</h5><p>Connects most pictures, adequate vocabulary, some errors</p></div>
            <div class="rubric-item"><h5>3 - Adequate</h5><p>Basic story, limited vocabulary, notable errors</p></div>
            <div class="rubric-item"><h5>2 - Weak</h5><p>Incomplete, disconnected, many errors</p></div>
            <div class="rubric-item"><h5>1 - Very Weak</h5><p>Barely addresses prompt, mostly incomprehensible</p></div>
          </div>
        </div>
      </div>

      <!-- Right: Writing Area -->
      <div class="glass-card" style="margin-bottom:0;height:calc(100vh - 120px);display:flex;flex-direction:column;padding:var(--space-md)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-md)">
          <h4>✍️ Your Story</h4>
          <div style="display:flex;align-items:center;gap:var(--space-md)">
            <span id="writing-timer" style="font-size:1.2rem;font-weight:700;font-variant-numeric:tabular-nums;color:var(--gold-light)">15:00</span>
            <button class="btn btn-sm btn-secondary" onclick="startWritingTimer()">▶️ Start Timer</button>
          </div>
        </div>
        <textarea class="writing-area" id="story-textarea" placeholder="在这里写你的故事..." oninput="updateWordCount()" style="flex:1;resize:none;margin-bottom:var(--space-sm)"></textarea>
        <div class="writing-stats">
          <span>Characters: <strong id="char-count">0</strong></span>
          <span>Estimated words: <strong id="word-count">0</strong></span>
        </div>
      </div>
    </div>
  `;
  
  window.startWritingTimer = () => {
    if (window._writingTimer) clearInterval(window._writingTimer);
    timerSeconds = 15 * 60;
    window._writingTimer = setInterval(() => {
      timerSeconds--;
      const m = Math.floor(timerSeconds / 60);
      const s = timerSeconds % 60;
      const timerEl = document.getElementById('writing-timer');
      if (timerEl) {
        timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        if (timerSeconds <= 60) timerEl.style.color = 'var(--incorrect)';
        else if (timerSeconds <= 180) timerEl.style.color = 'var(--warning)';
      }
      if (timerSeconds <= 0) {
        clearInterval(window._writingTimer);
        alert('⏰ Time is up! In the real exam, you would need to stop writing.');
      }
    }, 1000);
  };
}

function startEmailReply(index) {
  const prompt = WRITING_PROMPTS.emailReply[index];
  const el = document.getElementById('writing-content');
  
  el.innerHTML = `
    <button class="back-btn" onclick="clearInterval(window._writingTimer); renderWritingMenu('email')">← Back</button>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);align-items:start">
      
      <!-- Left: Incoming Email -->
      <div class="glass-card" style="margin-bottom:0;position:sticky;top:80px;height:calc(100vh - 120px);overflow-y:auto;padding:var(--space-md)">
        <div class="passage-container" style="margin-bottom:var(--space-md);max-height:none;overflow:visible;white-space:normal;">
          <div class="passage-type-badge" style="margin-bottom:var(--space-md)">📧 Incoming Email</div>
          <div style="font-family:'Noto Sans SC',sans-serif;line-height:1.6">${prompt.email.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="glass-card" style="margin-bottom:var(--space-xl);padding:var(--space-md)">
          <p style="color:var(--text-secondary);font-size:0.9rem">
            <strong style="color:var(--gold-light)">Instructions:</strong><br>
            <span style="display:inline-block;margin-top:var(--space-xs);white-space:normal">${prompt.instructions.replace(/\n/g, '<br>')}</span>
          </p>
        </div>
        
        <div style="display:flex;gap:var(--space-md);flex-wrap:wrap">
          <button class="btn btn-secondary" onclick="toggleSampleResponse('email', ${index})">📝 View Sample Response</button>
          <button class="btn btn-secondary" onclick="toggleRubric()">📊 Scoring Rubric</button>
        </div>
        
        <div class="sample-response" id="sample-response-box">
          <h4>📝 Sample High-Score Response (5-6)</h4>
          <p style="font-family:'Noto Sans SC',sans-serif;line-height:1.9;white-space:pre-wrap;margin-top:var(--space-md)">${prompt.sampleResponse}</p>
        </div>
        
        <div class="sample-response" id="rubric-box">
          <h4>📊 AP Email Reply Rubric (0-6)</h4>
          <div class="rubric-grid" style="margin-top:var(--space-md)">
            <div class="rubric-item"><h5>6 - Excellent</h5><p>Addresses all questions, appropriate format, rich language</p></div>
            <div class="rubric-item"><h5>5 - Very Good</h5><p>Addresses most points, good cohesion, minor errors</p></div>
            <div class="rubric-item"><h5>4 - Good</h5><p>Adequate response, some missed points, decent language</p></div>
            <div class="rubric-item"><h5>3 - Adequate</h5><p>Basic reply, limited detail, some errors</p></div>
            <div class="rubric-item"><h5>2 - Weak</h5><p>Incomplete reply, many errors, hard to understand</p></div>
            <div class="rubric-item"><h5>1 - Very Weak</h5><p>Barely addresses the email, mostly incomprehensible</p></div>
          </div>
        </div>
      </div>
      
      <!-- Right: Writing Area -->
      <div class="glass-card" style="margin-bottom:0;height:calc(100vh - 120px);display:flex;flex-direction:column;padding:var(--space-md)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-md)">
          <h4>✍️ Your Reply</h4>
          <div style="display:flex;align-items:center;gap:var(--space-md)">
            <span id="writing-timer" style="font-size:1.2rem;font-weight:700;font-variant-numeric:tabular-nums;color:var(--gold-light)">15:00</span>
            <button class="btn btn-sm btn-secondary" onclick="startWritingTimer()">▶️ Start Timer</button>
          </div>
        </div>
        <textarea class="writing-area" id="story-textarea" placeholder="在这里写你的回信..." oninput="updateWordCount()" style="flex:1;resize:none;margin-bottom:var(--space-sm)"></textarea>
        <div class="writing-stats">
          <span>Characters: <strong id="char-count">0</strong></span>
          <span>Estimated words: <strong id="word-count">0</strong></span>
        </div>
      </div>
      
    </div>
  `;
  
  window.startWritingTimer = () => {
    if (window._writingTimer) clearInterval(window._writingTimer);
    let timerSeconds = 15 * 60;
    window._writingTimer = setInterval(() => {
      timerSeconds--;
      const m = Math.floor(timerSeconds / 60);
      const s = timerSeconds % 60;
      const timerEl = document.getElementById('writing-timer');
      if (timerEl) {
        timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        if (timerSeconds <= 60) timerEl.style.color = 'var(--incorrect)';
        else if (timerSeconds <= 180) timerEl.style.color = 'var(--warning)';
      }
      if (timerSeconds <= 0) {
        clearInterval(window._writingTimer);
        alert('⏰ Time is up!');
      }
    }, 1000);
  };
}

function updateWordCount() {
  const text = document.getElementById('story-textarea')?.value || '';
  const chars = text.length;
  // Rough Chinese word estimate: Chinese characters ÷ 1.5
  const chineseChars = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = chineseChars > 0 ? Math.round(chineseChars / 1.5) : text.split(/\s+/).filter(Boolean).length;
  
  const charEl = document.getElementById('char-count');
  const wordEl = document.getElementById('word-count');
  if (charEl) charEl.textContent = chars;
  if (wordEl) wordEl.textContent = words;
}

function toggleSampleResponse() {
  document.getElementById('sample-response-box')?.classList.toggle('show');
}

function toggleRubric() {
  document.getElementById('rubric-box')?.classList.toggle('show');
}

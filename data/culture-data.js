// AP Chinese Cultural Knowledge Data
const CULTURE_DATA = [
  {
    id: 'holidays',
    name: '中国节日',
    nameEn: 'Chinese Holidays',
    icon: '🎊',
    questions: [
      { question: '春节是中国的哪个传统节日？', options: ['新年', '中秋节', '端午节', '清明节'], correct: 0, explanation: '春节就是中国农历新年，是中国最重要的传统节日。' },
      { question: '中秋节人们通常吃什么？', options: ['粽子', '饺子', '月饼', '汤圆'], correct: 2, explanation: '中秋节吃月饼是传统习俗，象征团圆。' },
      { question: '端午节是为了纪念哪位历史人物？', options: ['孔子', '屈原', '李白', '诸葛亮'], correct: 1, explanation: '端午节为纪念爱国诗人屈原，人们会吃粽子、赛龙舟。' },
      { question: '春节期间，红包里通常装的是什么？', options: ['糖果', '信', '钱', '照片'], correct: 2, explanation: '红包（压岁钱）是长辈给晚辈的现金礼物，寓意祝福。' },
      { question: '元宵节是农历几月几日？', options: ['正月初一', '正月十五', '五月初五', '八月十五'], correct: 1, explanation: '元宵节在正月十五，人们吃汤圆、赏花灯。' },
      { question: '清明节人们通常做什么？', options: ['吃月饼', '扫墓祭祖', '赛龙舟', '放烟花'], correct: 1, explanation: '清明节是扫墓祭祖的日子，也叫"踏青节"。' },
      { question: '春节前夜叫什么？', options: ['中秋夜', '除夕', '元宵夜', '七夕'], correct: 1, explanation: '除夕是农历新年前一天晚上，全家人会一起吃年夜饭。' },
      { question: '七夕节被称为中国的什么节日？', options: ['母亲节', '教师节', '情人节', '儿童节'], correct: 2, explanation: '七夕节源于牛郎织女的传说，被称为中国情人节。' }
    ]
  },
  {
    id: 'traditions',
    name: '传统文化',
    nameEn: 'Traditions',
    icon: '🏮',
    questions: [
      { question: '中国书法使用什么工具？', options: ['铅笔', '毛笔', '钢笔', '粉笔'], correct: 1, explanation: '中国书法传统上使用毛笔，是"文房四宝"之一。' },
      { question: '"文房四宝"不包括哪个？', options: ['笔', '墨', '尺', '砚'], correct: 2, explanation: '文房四宝是笔、墨、纸、砚，不包括尺。' },
      { question: '中国传统十二生肖的第一个是什么？', options: ['龙', '虎', '鼠', '牛'], correct: 2, explanation: '十二生肖顺序：鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪。' },
      { question: '京剧是哪个城市的传统艺术？', options: ['上海', '广州', '北京', '成都'], correct: 2, explanation: '京剧起源于北京，是中国最著名的戏曲形式之一。' },
      { question: '中国人过年贴"福"字时常常怎么贴？', options: ['正着贴', '倒着贴', '横着贴', '侧着贴'], correct: 1, explanation: '"福"倒着贴，因为"倒"和"到"谐音，寓意"福到了"。' },
      { question: '中国茶文化中，哪种茶最著名？', options: ['咖啡', '龙井茶', '奶茶', '可乐'], correct: 1, explanation: '龙井茶是中国最著名的绿茶之一，产自杭州西湖。' },
      { question: '太极拳是一种什么？', options: ['舞蹈', '武术', '音乐', '绘画'], correct: 1, explanation: '太极拳是中国传统武术，强调身心平衡。' },
      { question: '中国结象征什么？', options: ['分离', '悲伤', '团结和好运', '财富'], correct: 2, explanation: '中国结是传统装饰物，象征团结、幸福和好运。' }
    ]
  },
  {
    id: 'geography',
    name: '地理知识',
    nameEn: 'Geography',
    icon: '🗺️',
    questions: [
      { question: '中国的首都是哪里？', options: ['上海', '北京', '广州', '深圳'], correct: 1, explanation: '北京是中华人民共和国的首都。' },
      { question: '长城大约有多长？', options: ['一千公里', '五千公里', '两万公里', '一百公里'], correct: 2, explanation: '万里长城全长约21,196公里（约两万公里）。' },
      { question: '中国最长的河流是什么？', options: ['黄河', '长江', '珠江', '松花江'], correct: 1, explanation: '长江是中国最长的河流，全长约6,300公里。' },
      { question: '被称为"东方明珠"的是哪座城市？', options: ['北京', '广州', '上海', '香港'], correct: 2, explanation: '上海被称为"东方明珠"，是中国最大的城市之一。' },
      { question: '熊猫的故乡在中国的哪个省？', options: ['广东省', '四川省', '云南省', '山东省'], correct: 1, explanation: '四川省是大熊猫的主要栖息地。' },
      { question: '故宫在哪个城市？', options: ['南京', '西安', '北京', '杭州'], correct: 2, explanation: '故宫（紫禁城）位于北京市中心。' }
    ]
  },
  {
    id: 'food',
    name: '饮食文化',
    nameEn: 'Food Culture',
    icon: '🥢',
    questions: [
      { question: '饺子通常在什么节日吃？', options: ['中秋节', '春节', '端午节', '清明节'], correct: 1, explanation: '北方人过春节时吃饺子是传统习俗。' },
      { question: '中国的八大菜系不包括哪个？', options: ['川菜', '粤菜', '日本料理', '鲁菜'], correct: 2, explanation: '八大菜系是川、鲁、粤、苏、浙、闽、湘、徽菜。' },
      { question: '四川菜最大的特点是什么？', options: ['甜', '酸', '辣', '咸'], correct: 2, explanation: '川菜以麻辣著称，味道浓郁。' },
      { question: '火锅起源于中国的哪个地区？', options: ['北京', '上海', '重庆/四川', '广州'], correct: 2, explanation: '火锅源于重庆和四川地区。' },
      { question: '中国人吃饭用什么餐具？', options: ['刀叉', '筷子', '勺子', '手'], correct: 1, explanation: '筷子是中国最具代表性的餐具。' },
      { question: '"功夫茶"是哪个地区的茶文化？', options: ['北京', '四川', '福建和广东', '东北'], correct: 2, explanation: '功夫茶是福建和广东地区的传统泡茶方式。' }
    ]
  },
  {
    id: 'contemporary',
    name: '当代生活',
    nameEn: 'Contemporary Life',
    icon: '🏙️',
    questions: [
      { question: '中国最常用的移动支付方式是？', options: ['信用卡', '现金', '微信支付和支付宝', 'PayPal'], correct: 2, explanation: '微信支付和支付宝是中国最流行的移动支付方式。' },
      { question: '高考是什么？', options: ['大学毕业考试', '高中入学考试', '大学入学考试', '研究生考试'], correct: 2, explanation: '高考是中国的全国普通高等学校招生统一考试。' },
      { question: '中国学生通常几岁开始上小学？', options: ['五岁', '六岁', '七岁', '八岁'], correct: 1, explanation: '中国法律规定儿童年满六周岁上小学。' },
      { question: '中国的共享单车代表品牌是？', options: ['Uber', '滴滴', '摩拜和ofo', '美团'], correct: 2, explanation: '摩拜和ofo曾是中国最知名的共享单车品牌。' },
      { question: '微信除了通讯还能做什么？', options: ['只能聊天', '支付、购物、叫车等', '只能打电话', '只能看新闻'], correct: 1, explanation: '微信是一个超级应用，集通讯、支付、购物、社交等功能于一体。' },
      { question: '中国目前最流行的短视频平台是？', options: ['YouTube', '抖音', 'Instagram', 'Facebook'], correct: 1, explanation: '抖音（国际版TikTok）是中国最流行的短视频平台。' }
    ]
  }
];

if (typeof window !== 'undefined') { window.CULTURE_DATA = CULTURE_DATA; }

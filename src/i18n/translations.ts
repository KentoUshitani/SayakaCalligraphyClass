export type Lang = 'ja' | 'en' | 'zh' | 'ko';

export const translations = {
  // ─── Header ───
  header: {
    logo: { ja: '清楓習字教室', en: 'Sayaka Calligraphy', zh: '清枫书法教室', ko: '세이후 서예교실' },
    nav: {
      philosophy: { ja: '理念', en: 'Philosophy', zh: '理念', ko: '이념' },
      voices: { ja: '生徒の声', en: 'Voices', zh: '学员心声', ko: '학생 후기' },
      classes: { ja: 'クラス案内', en: 'Classes', zh: '课程介绍', ko: '수업 안내' },
      access: { ja: '教室アクセス', en: 'Access', zh: '教室地址', ko: '교실 위치' },
      online: { ja: 'オンライン', en: 'Online', zh: '在线课程', ko: '온라인' },
      faq: { ja: 'よくある質問', en: 'FAQ', zh: '常见问题', ko: 'FAQ' },
    },
    menuLabel: { ja: 'メニューを開く', en: 'Open menu', zh: '打开菜单', ko: '메뉴 열기' },
    lineTitle: { ja: 'LINEでお問い合わせ', en: 'Contact via LINE', zh: '通过LINE咨询', ko: 'LINE으로 문의' },
  },

  // ─── Hero ───
  hero: {
    title1: { ja: '字が整うと、', en: 'When your writing', zh: '字写端正，', ko: '글씨가 바르면,' },
    title2: { ja: '心も整う。', en: 'finds harmony, so does your heart.', zh: '心也端正。', ko: '마음도 바르다.' },
    subtitle1: { ja: 'あなたの内にある輝きを、', en: 'Let your inner brilliance', zh: '将你内心的光芒，', ko: '당신 안의 빛을,' },
    subtitle2: { ja: '筆に乗せて。', en: 'shine through the brush.', zh: '寄于笔端。', ko: '붓에 실어서.' },
    schoolName: { ja: '清楓習字教室', en: 'Sayaka Calligraphy Class', zh: '清枫书法教室', ko: '세이후 서예교실' },
    desc: {
      ja: '指導歴30年。兵庫県内12教室。\n清楓（さやか）習字教室へようこそ。',
      en: '30 years of teaching. 12 classrooms in Hyogo.\nWelcome to Sayaka Calligraphy Class.',
      zh: '30年教学经验。兵库县内12个教室。\n欢迎来到清枫书法教室。',
      ko: '30년의 지도 경력. 효고현 내 12교실.\n세이후 서예교실에 오신 것을 환영합니다.',
    },
    campaignLabel: {
      ja: '＼ 日本最大の書道団体「日本習字」／',
      en: "\\ Japan's largest calligraphy org: Nihon Shuji /",
      zh: '\\ 日本最大书法团体「日本习字」/',
      ko: "\\ 일본 최대 서예 단체 '일본습자' /",
    },
    campaignTitle: {
      ja: '🌸 春の入会キャンペーン実施中 🌸',
      en: '🌸 Spring Enrollment Campaign 🌸',
      zh: '🌸 春季入学优惠进行中 🌸',
      ko: '🌸 봄 입학 캠페인 진행 중 🌸',
    },
    campaignDesc: {
      ja: '今ご入会いただくと\n「習字道具一式（最大8,000円相当）」プレゼント！\n手ぶらでスタートできるチャンスです。',
      en: 'Enroll now and receive\na full calligraphy tool set (worth up to ¥8,000)!\nStart empty-handed.',
      zh: '现在入学即赠\n「书法工具全套（价值最高8,000日元）」！\n无需自备工具即可开始。',
      ko: '지금 입학하시면\n「서예 도구 세트(최대 8,000엔 상당)」선물!\n빈손으로 시작할 수 있는 기회입니다.',
    },
    campaignNote: {
      ja: '※日本習字にご入会の場合、入会金のほかに会費（手本代）が発生します。\n詳細は日本習字の公式サイトをご確認ください。',
      en: '* When joining Nihon Shuji, membership fees (textbook costs) apply in addition to the enrollment fee.\nPlease check the official Nihon Shuji website for details.',
      zh: '※加入日本习字时，除入会金外还需缴纳会费（字帖费）。\n详情请查看日本习字官方网站。',
      ko: '※일본습자에 입학 시, 입학금 외에 회비(교재비)가 발생합니다.\n자세한 내용은 일본습자 공식 사이트를 확인하세요.',
    },
    campaignLink: {
      ja: '日本習字公式サイトはこちら',
      en: 'Visit Nihon Shuji official site',
      zh: '日本习字官方网站',
      ko: '일본습자 공식 사이트 바로가기',
    },
    ctaText: {
      ja: 'まずはLINEでお気軽にご相談・\n単発レッスン（1回1,500円）のお申し込みを！',
      en: 'Contact us on LINE for a consultation\nor book a trial lesson (¥1,500/session)!',
      zh: '欢迎通过LINE轻松咨询，\n或预约单次课程（1次1,500日元）！',
      ko: 'LINE으로 편하게 상담하시거나\n단발 레슨(1회 1,500엔)을 신청하세요!',
    },
    addFriend: { ja: '友だち追加', en: 'Add Friend', zh: '添加好友', ko: '친구 추가' },
    imgAlt: { ja: '清楓習字教室 - 講師の書道作品', en: 'Sayaka Calligraphy - Instructor artwork', zh: '清枫书法教室 - 讲师书法作品', ko: '세이후 서예교실 - 강사 서예 작품' },
  },

  // ─── Philosophy ───
  philosophy: {
    label: { ja: 'PHILOSOPHY', en: 'PHILOSOPHY', zh: 'PHILOSOPHY', ko: 'PHILOSOPHY' },
    title1: { ja: '教えるのではなく、', en: 'Not teaching, but', zh: '不是教导，而是', ko: '가르치는 것이 아니라,' },
    titleHighlight: { ja: '引き出す', en: 'drawing out', zh: '引导', ko: '끌어내는 것' },
    imgAlt: { ja: '書道用具 - 筆、墨、硯', en: 'Calligraphy tools - brush, ink, inkstone', zh: '书法用具 - 毛笔、墨、砚台', ko: '서예 도구 - 붓, 먹, 벼루' },
    p1: {
      ja: '私は技術をただ教えるのではありません。\n生徒さん一人ひとりが持っている\n「良いもの」に光を当て、\n輝かせるのが私の役割です。',
      en: "I don't just teach technique.\nMy role is to shine a light on\nthe unique strengths each student possesses\nand help them flourish.",
      zh: '我不仅仅是传授技术。\n我的职责是发掘每位学员\n所拥有的「闪光点」，\n让其绽放光芒。',
      ko: '저는 단순히 기술을 가르치지 않습니다.\n학생 한 사람 한 사람이 가진\n「좋은 것」에 빛을 비추어\n빛나게 하는 것이 제 역할입니다.',
    },
    p2: {
      ja: '集中して筆を動かす時間は、\n心をリセットし、明日への活力を生みます。\n美しい字は一生の財産であり、\n何でも挑戦できる「自信」の源になります。',
      en: 'Focused brushwork resets the mind\nand generates energy for tomorrow.\nBeautiful writing is a lifelong treasure\nand the source of confidence to take on anything.',
      zh: '专注运笔的时间，\n能够重置心灵，焕发明日的活力。\n美丽的字是一生的财富，\n也是挑战一切的「自信」之源。',
      ko: '집중하여 붓을 움직이는 시간은\n마음을 리셋하고 내일의 활력을 만듭니다.\n아름다운 글씨는 평생의 재산이며,\n무엇이든 도전할 수 있는 「자신감」의 원천입니다.',
    },
  },

  // ─── Benefits ───
  benefits: {
    label: { ja: 'BENEFITS', en: 'BENEFITS', zh: 'BENEFITS', ko: 'BENEFITS' },
    title: { ja: '教室で得られるもの', en: 'What You Gain', zh: '您将收获', ko: '교실에서 얻는 것' },
    items: [
      {
        title: { ja: '心のデトックス', en: 'Mental Detox', zh: '心灵排毒', ko: '마음의 디톡스' },
        description: {
          ja: '集中して「無」になる時間。心が落ち着き、整う。',
          en: 'A time of focused emptiness. Your mind calms and finds balance.',
          zh: '专注于「无」的时间。让内心归于平静与安宁。',
          ko: '집중하여 「무」가 되는 시간. 마음이 안정되고 정돈됩니다.',
        },
      },
      {
        title: { ja: '一生モノの自信', en: 'Lifelong Confidence', zh: '一生受用的自信', ko: '평생의 자신감' },
        description: {
          ja: '成長が見えるから楽しい。何でも挑戦したくなる心へ。',
          en: 'Visible progress makes it fun. It builds a mindset to take on any challenge.',
          zh: '看得见的成长令人愉快。培养勇于挑战一切的心态。',
          ko: '성장이 보이니까 즐겁다. 무엇이든 도전하고 싶은 마음으로.',
        },
      },
      {
        title: { ja: 'あなただけの指導法', en: 'Personalized Guidance', zh: '专属于您的教学', ko: '나만의 지도법' },
        description: {
          ja: '子供からお年寄りまで。個性に合わせたオーダーメイドの指導。',
          en: 'From children to seniors. Tailored instruction that fits your individuality.',
          zh: '从儿童到老年人。根据个性量身定制的教学指导。',
          ko: '어린이부터 어르신까지. 개성에 맞춘 맞춤형 지도.',
        },
      },
    ],
  },

  // ─── Credentials ───
  credentials: {
    label: { ja: 'QUALITY ASSURANCE', en: 'QUALITY ASSURANCE', zh: 'QUALITY ASSURANCE', ko: 'QUALITY ASSURANCE' },
    title: { ja: '実績・信頼', en: 'Proven Track Record', zh: '实绩与信赖', ko: '실적・신뢰' },
    items: [
      {
        label: { ja: '最高段位', en: 'Highest Rank', zh: '最高段位', ko: '최고 단위' },
        value: { ja: '八段位', en: '8th Dan', zh: '八段位', ko: '8단' },
        subtitle: { ja: '日本習字教育財団', en: 'Nihon Shuji Foundation', zh: '日本习字教育财团', ko: '일본습자교육재단' },
      },
      {
        label: { ja: '指導歴', en: 'Teaching Career', zh: '教学经历', ko: '지도 경력' },
        value: { ja: '30年以上', en: '30+ Years', zh: '30年以上', ko: '30년 이상' },
        subtitle: { ja: '指導実績 1000名以上', en: '1000+ students taught', zh: '指导学员1000名以上', ko: '지도 실적 1000명 이상' },
      },
      {
        label: { ja: '資格', en: 'Qualification', zh: '资质', ko: '자격' },
        value: { ja: '教授免許', en: 'Teaching License', zh: '教授执照', ko: '교수 면허' },
        subtitle: { ja: '取得済', en: 'Certified', zh: '已取得', ko: '취득 완료' },
      },
    ],
  },

  // ─── Voices ───
  voices: {
    label: { ja: 'VOICES', en: 'VOICES', zh: 'VOICES', ko: 'VOICES' },
    title: { ja: '生徒さんたちの嬉しい変化', en: 'Heartwarming Student Transformations', zh: '学员们令人欣喜的变化', ko: '학생들의 기쁜 변화' },
    items: [
      {
        label: { ja: '生徒部', en: 'Student Class', zh: '学生部', ko: '학생부' },
        labelSub: { ja: '保護者様の声', en: "Parent's Voice", zh: '家长的心声', ko: '보호자의 목소리' },
        text: {
          ja: '弱々しい小さな字だった子が、力強く大きな字を書くように！周りからも「字が綺麗になったね！」と褒められ、表情が明るくなりました。何事にも自信をもって積極的に取り組めるようになっています。',
          en: 'My child went from writing small, timid characters to bold, confident strokes! Others compliment their handwriting, and their whole demeanor has brightened. They now approach everything with confidence and enthusiasm.',
          zh: '原本写字小而无力的孩子，现在能写出有力的大字了！周围的人都夸赞「字变漂亮了！」，孩子的表情也变得更加开朗。现在做什么事都充满了自信和积极性。',
          ko: '약하고 작은 글씨를 쓰던 아이가 힘차고 큰 글씨를 쓰게 되었습니다! 주변에서도 「글씨가 예뻐졌네!」라고 칭찬받고, 표정이 밝아졌습니다. 무엇이든 자신감을 가지고 적극적으로 임하게 되었습니다.',
        },
      },
      {
        label: { ja: '成人部', en: 'Adult Class', zh: '成人部', ko: '성인부' },
        labelSub: { ja: '生徒様の声', en: "Student's Voice", zh: '学员的心声', ko: '학생의 목소리' },
        text: {
          ja: '集中して字を書いていると迷いが消え、気持ちがスッキリします。字の上達とともに他の事にも自信を持てるようになり、趣味が同じ仲間と一緒に出掛けて楽しく過ごせるようになりました。',
          en: "When I concentrate on writing, doubts fade and my mind clears. As my writing improved, I gained confidence in other areas too. I've made wonderful friends who share the same hobby.",
          zh: '专注写字时，迷茫消散，心情舒畅。随着字的进步，我在其他方面也变得更加自信，还结识了志同道合的朋友，一起度过快乐的时光。',
          ko: '집중하여 글씨를 쓰다 보면 고민이 사라지고 기분이 상쾌해집니다. 글씨 실력이 향상되면서 다른 일에도 자신감이 생겼고, 같은 취미를 가진 친구들과 즐겁게 지낼 수 있게 되었습니다.',
        },
      },
    ],
  },

  // ─── Services ───
  services: {
    label: { ja: 'CLASSES', en: 'CLASSES', zh: 'CLASSES', ko: 'CLASSES' },
    title: { ja: 'クラス・料金案内', en: 'Classes & Pricing', zh: '课程与收费', ko: '수업・요금 안내' },
    student: {
      title: { ja: '生徒部', en: 'Student Class', zh: '学生部', ko: '학생부' },
      subtitle: { ja: '幼児〜中学生', en: 'Ages 4–15', zh: '幼儿～初中生', ko: '유아~중학생' },
      monthly: { ja: '月4回コース（1回60分）：', en: '4 sessions/month (60 min each):', zh: '每月4次课程（每次60分钟）：', ko: '월 4회 코스 (1회 60분):' },
      monthlyPrice: { ja: '月額 3,500円', en: '¥3,500/mo', zh: '月额 3,500日元', ko: '월 3,500엔' },
      single: { ja: '単発レッスン：', en: 'Single lesson:', zh: '单次课程：', ko: '단발 레슨:' },
      singlePrice: { ja: '1回 1,500円', en: '¥1,500/session', zh: '1次 1,500日元', ko: '1회 1,500엔' },
      note1: { ja: '※兄弟・姉妹で2人以上の場合は1人1,000円', en: '* ¥1,000/person for 2+ siblings', zh: '※兄弟姐妹2人以上时每人1,000日元', ko: '※형제·자매 2명 이상 시 1인 1,000엔' },
      note2: { ja: '※時間：1回 1時間', en: '* Duration: 1 hour per session', zh: '※时间：每次1小时', ko: '※시간: 1회 1시간' },
      note3: { ja: '※日本習字入会金 1,000円', en: '* Nihon Shuji enrollment: ¥1,000', zh: '※日本习字入会金 1,000日元', ko: '※일본습자 입학금 1,000엔' },
      desc: {
        ja: 'まずは「褒める」からスタート。\n左利きのお子様も個性を大切に指導します。',
        en: 'We start by praising.\nLeft-handed children are guided with respect for their individuality.',
        zh: '从「表扬」开始。\n左利手的孩子也会尊重其个性进行指导。',
        ko: '먼저 「칭찬」으로 시작합니다.\n왼손잡이 아이도 개성을 소중히 지도합니다.',
      },
      imgAlt: { ja: '生徒部（子供クラス）の様子', en: 'Student class in action', zh: '学生部（儿童班）授课情景', ko: '학생부(어린이 수업) 모습' },
    },
    adult: {
      title: { ja: '成人部', en: 'Adult Class', zh: '成人部', ko: '성인부' },
      subtitle: { ja: '高校生〜大人・保護者', en: 'High school – Adults', zh: '高中生～成人・家长', ko: '고등학생~성인 · 보호자' },
      monthly: { ja: '月4回コース：', en: '4 sessions/month:', zh: '每月4次课程：', ko: '월 4회 코스:' },
      monthlyPrice: { ja: '月額 5,500円', en: '¥5,500/mo', zh: '月额 5,500日元', ko: '월 5,500엔' },
      single: { ja: '単発レッスン：', en: 'Single lesson:', zh: '单次课程：', ko: '단발 레슨:' },
      singlePrice: { ja: '1回 1,500円', en: '¥1,500/session', zh: '1次 1,500日元', ko: '1회 1,500엔' },
      singleNote: { ja: '（1時間）', en: '(1 hour)', zh: '（1小时）', ko: '(1시간)' },
      extension: { ja: '延長：1時間半 2,000円 / 最大2時間 2,500円', en: 'Extension: 1.5h ¥2,000 / 2h max ¥2,500', zh: '延长：1.5小时 2,000日元 / 最长2小时 2,500日元', ko: '연장: 1시간 반 2,000엔 / 최대 2시간 2,500엔' },
      parentDiscount: {
        ja: '🎁 保護者割引：お子様2名以上ご入会で、\n保護者様の月4回のお月謝が',
        en: '🎁 Parent discount: With 2+ children enrolled,\nparent monthly fee becomes',
        zh: '🎁 家长优惠：2名以上孩子入学，\n家长月费降至',
        ko: '🎁 보호자 할인: 자녀 2명 이상 입학 시,\n보호자 월 4회 수업료가',
      },
      parentPrice: { ja: '4,400円', en: '¥4,400', zh: '4,400日元', ko: '4,400엔' },
      parentNote: { ja: '※お子様分のお月謝は別途必要です', en: "* Children's tuition is billed separately", zh: '※孩子的学费需另行缴纳', ko: '※자녀 수업료는 별도입니다' },
      note1: { ja: '※月3回以下の参加の月は、1回1,500円の単発レッスン料金での計算', en: '* Months with 3 or fewer sessions charged at ¥1,500/session', zh: '※每月参加3次以下时，按每次1,500日元的单次课程费计算', ko: '※월 3회 이하 참가 시 1회 1,500엔 단발 레슨 요금으로 계산' },
      note2: { ja: '※日本習字入会金 2,000円', en: '* Nihon Shuji enrollment: ¥2,000', zh: '※日本习字入会金 2,000日元', ko: '※일본습자 입학금 2,000엔' },
      imgAlt: { ja: '成人部（大人クラス）の様子', en: 'Adult class in action', zh: '成人部（成人班）授课情景', ko: '성인부(성인 수업) 모습' },
    },
    pinpoint: {
      title1: { ja: 'ピンポイント特化・', en: 'Pinpoint Focus &', zh: '精准特训・', ko: '핀포인트 특화・' },
      title2: { ja: '他教室併用クラス', en: 'Multi-School Class', zh: '多教室并用班', ko: '타 교실 병용 클래스' },
      desc1: {
        ja: '「他の教室で毛筆しか習っていない」「筆ペンやボールペン字だけ習いたい」という方も大歓迎！',
        en: '"I only learn brush calligraphy elsewhere" or "I want to focus on pen calligraphy" — everyone is welcome!',
        zh: '「在其他教室只学毛笔」「只想学钢笔字或圆珠笔字」的同学也非常欢迎！',
        ko: '「다른 교실에서 붓글씨만 배우고 있다」 「펜글씨만 배우고 싶다」는 분도 대환영!',
      },
      desc2: {
        ja: 'ご要望に沿って先生がオリジナルのお手本を作成し指導します。',
        en: 'The instructor creates original templates tailored to your needs.',
        zh: '老师会根据您的需求制作原创范本进行指导。',
        ko: '요청에 맞춰 선생님이 오리지널 교본을 작성하여 지도합니다.',
      },
      note: { ja: '※単発美文字レッスンのみの場合は入会金不要です', en: '* No enrollment fee for single penmanship lessons', zh: '※仅参加单次美字课程时无需入会金', ko: '※단발 미문자 레슨만의 경우 입학금 불요' },
    },
    qualification: {
      title1: { ja: '資格取得・', en: 'Certification &', zh: '资格取得・', ko: '자격 취득・' },
      title2: { ja: '指導者育成コース', en: 'Instructor Training', zh: '指导者培养课程', ko: '지도자 육성 코스' },
      desc1: { ja: '将来、習字の先生になりたい方へ。', en: 'For those who aspire to become calligraphy instructors.', zh: '面向将来想成为书法老师的您。', ko: '장래에 서예 선생님이 되고 싶은 분에게.' },
      desc2: {
        ja: '日本習字に入会し、初段以上を取得すれば指導者としての道が開けます。教室開業のサポートまで、30年の実績を持つ先生が伴走します。',
        en: 'Join Nihon Shuji, achieve 1st Dan or higher, and open the door to becoming an instructor. Our teacher with 30 years of experience will guide you every step of the way.',
        zh: '加入日本习字，取得初段以上便可踏上指导者之路。拥有30年经验的老师将全程陪伴指导，直至教室开业。',
        ko: '일본습자에 입학하여 초단 이상을 취득하면 지도자의 길이 열립니다. 교실 개업 지원까지, 30년의 실적을 가진 선생님이 함께합니다.',
      },
      note: { ja: '※日本習字入会金 2,000円', en: '* Nihon Shuji enrollment: ¥2,000', zh: '※日本习字入会金 2,000日元', ko: '※일본습자 입학금 2,000엔' },
    },
    classCta: {
      ja: '各コースの詳細や単発レッスンのご予約は、\nLINEでお気軽にお問い合わせください',
      en: 'For course details or to book a trial,\ncontact us on LINE',
      zh: '如需了解各课程详情或预约单次课程，\n请通过LINE联系我们',
      ko: '각 코스 상세 정보나 단발 레슨 예약은\nLINE으로 편하게 문의하세요',
    },
    commission: {
      label: { ja: 'COMMISSION WORKS', en: 'COMMISSION WORKS', zh: 'COMMISSION WORKS', ko: 'COMMISSION WORKS' },
      title: { ja: '筆耕・制作', en: 'Brush Writing & Commissions', zh: '笔耕・制作', ko: '필경・제작' },
      desc: {
        ja: '大切な名前に、光を当てるお手伝い。\nただ字を書くだけではなく、\nご依頼者様の「想い」を\n筆に乗せてお届けします。',
        en: 'Helping important names shine.\nMore than just writing—\nwe deliver your heartfelt wishes\nthrough the brush.',
        zh: '为珍贵的名字增添光彩。\n不仅仅是写字，\n更是将委托人的「心意」\n寄于笔端送达。',
        ko: '소중한 이름에 빛을 비추는 도움.\n단순히 글씨를 쓰는 것이 아니라\n의뢰자의 「마음」을\n붓에 실어 전합니다.',
      },
      meimei: { ja: '☀︎ 命名書', en: '☀︎ Name certificate', zh: '☀︎ 命名书', ko: '☀︎ 명명서' },
      noshi: { ja: '☀︎ のしがき・席札・ペナント書き', en: '☀︎ Gift/place cards & pennants', zh: '☀︎ 礼签・座位牌・锦旗书写', ko: '☀︎ 노시가키・자리 카드・페넌트' },
      kanban: { ja: '☀︎ 看板書き', en: '☀︎ Signboard writing', zh: '☀︎ 招牌书写', ko: '☀︎ 간판 쓰기' },
      hyousatsu: { ja: '☀︎ 表札書き', en: '☀︎ Nameplate writing', zh: '☀︎ 门牌书写', ko: '☀︎ 표찰 쓰기' },
      oudanmaku: { ja: '☀︎ 横断幕書き', en: '☀︎ Banner writing', zh: '☀︎ 横幅书写', ko: '☀︎ 현수막 쓰기' },
      priceNote: { ja: '⭕️ 大きさ、文字数により料金は変わります', en: '⭕️ Price varies by size and character count', zh: '⭕️ 价格因大小和字数而异', ko: '⭕️ 크기, 글자 수에 따라 요금이 달라집니다' },
      igLabel: { ja: '作品はInstagramで公開中', en: 'See our work on Instagram', zh: '作品在Instagram公开中', ko: '작품은 Instagram에서 공개 중' },
      igFollow: { ja: '@keisyu.eisuian をフォロー', en: 'Follow @keisyu.eisuian', zh: '关注 @keisyu.eisuian', ko: '@keisyu.eisuian 팔로우' },
      lineLabel: { ja: 'ご依頼・お見積りはLINEから', en: 'Inquiries & quotes via LINE', zh: '咨询・报价请通过LINE', ko: '의뢰・견적은 LINE으로' },
    },
    addFriend: { ja: '友だち追加', en: 'Add Friend', zh: '添加好友', ko: '친구 추가' },
  },

  // ─── Access & Schedule ───
  access: {
    label: { ja: 'ACCESS & SCHEDULE', en: 'ACCESS & SCHEDULE', zh: 'ACCESS & SCHEDULE', ko: 'ACCESS & SCHEDULE' },
    title: { ja: '教室案内・アクセス', en: 'Classrooms & Access', zh: '教室介绍・交通', ko: '교실 안내・접근' },
    regular: { ja: '定期教室', en: 'Regular Classrooms', zh: '固定教室', ko: '정기 교실' },
    irregular: { ja: '不定期教室（月1回〜）', en: 'Irregular Classrooms (1+/month)', zh: '不定期教室（每月1次～）', ko: '비정기 교실 (월 1회~)' },
    irregularNote: { ja: '次回開催日はLINEでお気軽にお問い合わせください。', en: 'Contact us on LINE for the next session date.', zh: '下次开课日期请通过LINE咨询。', ko: '다음 개최일은 LINE으로 문의하세요.' },
    external: { ja: '外部委託教室', en: 'Partner Classrooms', zh: '外部合作教室', ko: '외부 위탁 교실' },
    externalList: { ja: 'エディックきっず手柄校 / ルネス花北', en: 'Edic Kids Tegara / Renes Hanakita', zh: 'Edic Kids手柄校 / Renes花北', ko: 'Edic Kids 테가라교 / 르네스 하나키타' },
  },

  // ─── Online Lesson ───
  online: {
    label: { ja: 'ONLINE LESSON', en: 'ONLINE LESSON', zh: 'ONLINE LESSON', ko: 'ONLINE LESSON' },
    title: {
      ja: 'スマホ1つで、おうちが\n「心静まる書道教室」に。',
      en: 'Turn your home into\na peaceful calligraphy studio\nwith just a smartphone.',
      zh: '只需一部手机，\n家就变成「宁静的书法教室」。',
      ko: '스마트폰 하나로, 집이\n「마음이 고요해지는 서예교실」로.',
    },
    desc: {
      ja: '対面教室と一律料金で、全国どこからでも受講可能です。',
      en: 'Same pricing as in-person. Available from anywhere in Japan.',
      zh: '与面授教室统一价格，全日本均可参加。',
      ko: '대면 교실과 동일 요금으로 전국 어디서나 수강 가능합니다.',
    },
    noPC: {
      ja: '難しいパソコン設定や\n時間の拘束は不要です！',
      en: 'No complex PC setup\nor rigid scheduling needed!',
      zh: '无需复杂的电脑设置\n也不受时间约束！',
      ko: '어려운 PC 설정이나\n시간 구속은 불필요!',
    },
    pricingTitle: { ja: '料金', en: 'Pricing', zh: '费用', ko: '요금' },
    steps: [
      {
        title: { ja: '自分のペースで書く', en: 'Practice at your pace', zh: '按自己的节奏书写', ko: '자기 페이스로 쓰기' },
        description: {
          ja: '毎月届く日本習字のお手本、または先生がご要望に合わせて作成したオリジナルのお手本を見ながらご自宅で練習。',
          en: 'Practice at home with monthly Nihon Shuji templates or custom templates made by the instructor.',
          zh: '参照每月寄到的日本习字范本，或老师根据需求制作的原创范本在家练习。',
          ko: '매달 도착하는 일본습자 교본 또는 선생님이 맞춤 작성한 오리지널 교본을 보며 자택에서 연습.',
        },
      },
      {
        title: { ja: 'スマホで撮って送る', en: 'Snap & send', zh: '用手机拍照发送', ko: '스마트폰으로 촬영하여 전송' },
        description: {
          ja: '完成した作品をスマホで撮影し、LINEで送付。',
          en: 'Take a photo of your work with your phone and send via LINE.',
          zh: '用手机拍摄完成的作品，通过LINE发送。',
          ko: '완성된 작품을 스마트폰으로 촬영하여 LINE으로 전송.',
        },
      },
      {
        title: { ja: '添削動画が届く', en: 'Get video feedback', zh: '收到批改视频', ko: '첨삭 영상이 도착' },
        description: {
          ja: '先生が「実際に朱書き（添削）している手元の動画」と音声メッセージをLINEでお返しします。',
          en: 'The instructor sends back a video of their hands correcting your work with voice guidance via LINE.',
          zh: '老师会通过LINE回复「实际进行朱批（批改）的手部视频」和语音消息。',
          ko: '선생님이 「실제로 주서(첨삭)하는 손 영상」과 음성 메시지를 LINE으로 보내드립니다.',
        },
      },
    ],
    cta: {
      ja: 'オンラインレッスンのお申し込み・ご相談は\nLINEでお気軽にどうぞ',
      en: 'To sign up or inquire about online lessons,\ncontact us on LINE',
      zh: '在线课程的报名和咨询\n请通过LINE联系',
      ko: '온라인 레슨 신청・상담은\nLINE으로 편하게',
    },
  },

  // ─── Instructor ───
  instructor: {
    label: { ja: 'INSTRUCTOR', en: 'INSTRUCTOR', zh: 'INSTRUCTOR', ko: 'INSTRUCTOR' },
    title: { ja: '講師紹介', en: 'Meet the Instructor', zh: '讲师介绍', ko: '강사 소개' },
    name: { ja: '牛谷 日出心', en: 'Hideko Ushitani', zh: '牛谷 日出心', ko: '우시타니 히데코' },
    nameRomaji: { ja: 'Ushitani Hideko', en: '', zh: 'Ushitani Hideko', ko: 'Ushitani Hideko' },
    imgAlt: { ja: '講師 牛谷日出心', en: 'Instructor Hideko Ushitani', zh: '讲师 牛谷日出心', ko: '강사 우시타니 히데코' },
    p1: {
      ja: '「先生、昔から字がお上手だったんでしょう？」\nよくそう聞かれますが、実は小学生の頃は\n「字が雑」と怒られるような子供でした。',
      en: '"You must have always been good at calligraphy, right?"\nI\'m often asked this, but in elementary school\nI was actually scolded for messy handwriting.',
      zh: '「老师，您从小字就写得好吧？」\n经常被这样问，但其实小学时\n我是一个因为「字写得潦草」而被批评的孩子。',
      ko: '「선생님, 어렸을 때부터 글씨를 잘 쓰셨죠?」\n자주 이런 질문을 받지만, 사실 초등학생 때는\n「글씨가 엉망」이라고 혼나는 아이였습니다.',
    },
    p2: {
      ja: '転機は小学3年生。教室で「上手だね」と\n褒められたことで自信がつき、\n性格まで明るくなりました。',
      en: 'The turning point was 3rd grade.\nBeing praised "You\'re talented!" in class\ngave me confidence and even changed my personality.',
      zh: '转折点是小学三年级。在教室里被夸赞\n「写得真好」后充满了自信，\n性格也变得开朗了。',
      ko: '전환점은 초등학교 3학년. 교실에서 「잘하네!」라고\n칭찬받은 것으로 자신감이 생겼고,\n성격까지 밝아졌습니다.',
    },
    p3: {
      ja: '指導歴30年。私が大切にしているのは\n「教えるのではなく、引き出す」こと。\nダメなところを直すのではなく、\nその人だけが持つ「良いところ」を見つけ、\n光を当てるのが私の役目です。',
      en: "With 30 years of teaching, my philosophy is\n\"not to teach, but to draw out.\"\nRather than fixing weaknesses,\nmy mission is to find each person's\nunique strengths and illuminate them.",
      zh: '30年教学经验。我最珍视的是\n「不是教导，而是引导」。\n不是纠正缺点，\n而是发现每个人独有的「优点」，\n让其闪耀光芒。',
      ko: '지도 경력 30년. 제가 소중히 여기는 것은\n「가르치는 것이 아니라 끌어내는 것」.\n안 되는 곳을 고치는 것이 아니라\n그 사람만이 가진 「좋은 점」을 찾아\n빛을 비추는 것이 제 역할입니다.',
    },
    cred1: { ja: '日本習字教育財団 八段位', en: 'Nihon Shuji Foundation — 8th Dan', zh: '日本习字教育财团 八段位', ko: '일본습자교육재단 8단' },
    cred2: { ja: '教授免許取得', en: 'Licensed Instructor', zh: '教授执照已取得', ko: '교수 면허 취득' },
    cred3: { ja: '兵庫県内12教室を運営', en: '12 classrooms in Hyogo Prefecture', zh: '运营兵库县内12个教室', ko: '효고현 내 12교실 운영' },
    cred4: { ja: '指導実績1000名以上', en: '1000+ students taught', zh: '指导学员1000名以上', ko: '지도 실적 1000명 이상' },
  },

  // ─── FAQ ───
  faq: {
    label: { ja: 'FAQ', en: 'FAQ', zh: 'FAQ', ko: 'FAQ' },
    title: { ja: 'よくある質問', en: 'Frequently Asked Questions', zh: '常见问题', ko: '자주 묻는 질문' },
    items: [
      {
        question: { ja: '入会前に体験はできますか？', en: 'Can I try a lesson before enrolling?', zh: '入学前可以体验吗？', ko: '입학 전에 체험할 수 있나요?' },
        answer: {
          ja: '1回の単発レッスン（1,500円）としてお気軽にご参加いただき、教室の雰囲気をお試しください。',
          en: 'Yes! Join a single lesson (¥1,500) to experience the atmosphere.',
          zh: '可以！欢迎参加单次课程（1,500日元），体验教室的氛围。',
          ko: '네! 단발 레슨(1,500엔)으로 편하게 참가하여 교실 분위기를 체험하세요.',
        },
      },
      {
        question: { ja: 'うちの子、落ち着きがないのですが…', en: "My child can't sit still…", zh: '我的孩子坐不住怎么办…', ko: '우리 아이가 차분하지 않은데...' },
        answer: {
          ja: 'ご安心ください。集中力に繋がる遊びを取り入れた指導で、筆を持つと不思議とスイッチが入ります。',
          en: "Don't worry! We incorporate playful activities that build focus. The brush has a magical way of flipping the switch.",
          zh: '请放心。我们采用培养专注力的趣味教学方式，拿起毛笔后孩子会自然切换到专注状态。',
          ko: '안심하세요. 집중력으로 이어지는 놀이를 도입한 지도로, 붓을 잡으면 신기하게 집중 모드가 됩니다.',
        },
      },
      {
        question: {
          ja: '他の習字教室に通っていても、筆ペンや硬筆だけ習えますか？',
          en: 'Can I learn only pen calligraphy while attending another school?',
          zh: '在其他书法教室学习的同时，可以只学钢笔或硬笔吗？',
          ko: '다른 서예 교실에 다니면서 펜글씨만 배울 수 있나요?',
        },
        answer: {
          ja: '大歓迎です！学びたい内容に絞ってピンポイントで指導いたします。オリジナルのお手本をご用意します。',
          en: 'Absolutely! We offer pinpoint instruction on exactly what you want to learn, with custom templates.',
          zh: '非常欢迎！我们会针对您想学的内容进行精准指导，并准备原创范本。',
          ko: '대환영입니다! 배우고 싶은 내용에 맞춰 핀포인트로 지도합니다. 오리지널 교본도 준비합니다.',
        },
      },
      {
        question: { ja: '道具は何を買えばいいですか？', en: 'What supplies do I need?', zh: '需要购买什么工具？', ko: '도구는 뭘 사야 하나요?' },
        answer: {
          ja: '今ならキャンペーンで、教室推奨の「書きやすい道具一式」をプレゼント中！手ぶらで体験にお越しください。',
          en: "We're currently gifting a full recommended tool set! Come empty-handed for your trial.",
          zh: '目前活动期间赠送教室推荐的「易用工具全套」！无需自备工具即可来体验。',
          ko: '지금 캠페인으로 교실 추천 「쓰기 좋은 도구 세트」를 선물 중! 빈손으로 체험에 오세요.',
        },
      },
      {
        question: { ja: '入会金は必ずかかりますか？', en: 'Is the enrollment fee mandatory?', zh: '入会金是必须的吗？', ko: '입학금은 반드시 내야 하나요?' },
        answer: {
          ja: '「日本習字」に入会して段級位を取得する場合のみ必要です。単発の美文字レッスンをご希望の方は、入会金不要でご受講いただけます。',
          en: 'Only required when joining Nihon Shuji for rank certification. Single penmanship lessons have no enrollment fee.',
          zh: '仅在加入「日本习字」取得段级位时需要。只想参加单次美字课程的话，无需入会金。',
          ko: '「일본습자」에 입학하여 단급을 취득하는 경우에만 필요합니다. 단발 미문자 레슨을 원하시면 입학금 없이 수강 가능합니다.',
        },
      },
      {
        question: { ja: 'オンラインレッスンはパソコンが必要ですか？', en: 'Do I need a computer for online lessons?', zh: '在线课程需要电脑吗？', ko: '온라인 레슨에 PC가 필요한가요?' },
        answer: {
          ja: '不要です！スマホとLINEさえあれば動画での添削指導が受けられます。',
          en: 'No! A smartphone and LINE are all you need to receive video feedback.',
          zh: '不需要！只要有手机和LINE就可以接受视频批改指导。',
          ko: '필요 없습니다! 스마트폰과 LINE만 있으면 영상 첨삭 지도를 받을 수 있습니다.',
        },
      },
      {
        question: { ja: '墨で服が汚れるのが心配です…。', en: "I'm worried about ink staining my clothes…", zh: '担心墨汁弄脏衣服…', ko: '먹으로 옷이 더러워질까 걱정됩니다...' },
        answer: {
          ja: 'あらかじめ汚れても差し支えのない服装（黒っぽい服など）でお越しください。',
          en: 'Please wear clothes you don\'t mind getting stained (dark colors recommended).',
          zh: '请穿不怕弄脏的衣服（建议穿深色衣物）来上课。',
          ko: '미리 더러워져도 괜찮은 복장(어두운 색 옷 등)으로 와주세요.',
        },
      },
    ],
  },

  // ─── Footer ───
  footer: {
    tagline: {
      ja: '字を書くと、心は「無」になる。\n気持ちがスッキリと、\n前向きになれる場所。',
      en: 'When you write, the mind empties.\nA place where you feel refreshed\nand gain a positive outlook.',
      zh: '写字时，内心归于「无」。\n一个让心情舒畅、\n积极向前的地方。',
      ko: '글씨를 쓰면 마음이 「무」가 된다.\n기분이 상쾌해지고\n긍정적이 되는 곳.',
    },
    lineLabel: {
      ja: 'お問い合わせ・お申し込みはLINEから',
      en: 'Contact & enrollment via LINE',
      zh: '咨询・报名请通过LINE',
      ko: '문의・신청은 LINE으로',
    },
    copyright: { ja: '清楓習字教室', en: 'Sayaka Calligraphy Class', zh: '清枫书法教室', ko: '세이후 서예교실' },
  },

  // ─── Floating CTA ───
  floatingCta: {
    text: {
      ja: 'LINEで簡単！ご相談・お申し込み',
      en: 'Easy via LINE! Inquire & Enroll',
      zh: '通过LINE轻松咨询・报名',
      ko: 'LINE으로 간편! 상담・신청',
    },
  },

  // ─── Common ───
  common: {
    addFriend: { ja: '友だち追加', en: 'Add Friend', zh: '添加好友', ko: '친구 추가' },
  },
} as const;

import type { CheatSheetSection } from '../types/common';
import type { WritingTopic } from '../types/writing';

export const cheatSheetSections: CheatSheetSection[] = [
  {
    id: 'cs-narrative',
    title: 'Narrative Tenses (Hikâye Zamanları)',
    icon: '📖',
    color: 'emerald',
    items: [
      {
        title: 'Past Simple',
        content: 'Geçmişteki ana olayları kronolojik sırayla anlatır.',
        example: 'We met a few years ago. He offered to help me fix my car.',
      },
      {
        title: 'Past Continuous',
        content: 'Hikâyenin arka planını verir. Uzun eylem kısa eylemle kesilir.',
        example: 'I was driving home when I saw an accident.',
      },
      {
        title: 'Past Perfect',
        content: 'Hikâyedeki bir olaydan daha önce gerçekleşen olayı anlatır.',
        example: 'By the time they arrived, everyone else had gone home.',
      },
      {
        title: 'Bağlaçlar: when, while, as',
        content: 'Past Simple + Past Continuous cümlelerini bağlar.',
        example: 'Somebody stole my bag when I wasn\'t looking.',
      },
    ],
  },
  {
    id: 'cs-usedto',
    title: 'Used to & Usually',
    icon: '🔄',
    color: 'blue',
    items: [
      {
        title: 'used to + fiil',
        content: 'Geçmişteki uzun süreli alışkanlıklar ve durumlar için.',
        example: 'I used to play football every Saturday.',
      },
      {
        title: 'Olumsuz: didn\'t use to',
        content: 'Olumsuz formda "used" yı "use" olarak yazın.',
        example: 'My parents didn\'t use to go out much.',
      },
      {
        title: 'usually (Şimdiki zaman)',
        content: 'Used to\'nun şimdiki zaman karşılığı. Sıklık zarfı olarak kullanılır.',
        example: 'They usually go out to a restaurant once a week.',
      },
      {
        title: 'any more / any longer',
        content: 'Artık devam etmeyen alışkanlıklar için.',
        example: 'I don\'t play football any more.',
      },
    ],
  },
  {
    id: 'cs-future',
    title: 'Future Forms (Gelecek Zaman)',
    icon: '🚀',
    color: 'violet',
    items: [
      {
        title: 'will',
        content: 'Anlık kararlar, genel tahminler, teklifler ve vaatler.',
        example: 'I\'ll help you. / I think it will rain.',
      },
      {
        title: 'going to',
        content: 'Önceden verilmiş kararlar ve kanıtlara dayalı tahminler.',
        example: 'Look at those clouds — it\'s going to rain!',
      },
      {
        title: 'Present Continuous (gelecek)',
        content: 'Kesinleşmiş düzenlemeler ve randevular.',
        example: 'We\'re flying to Lisbon on Saturday.',
      },
    ],
  },
  {
    id: 'cs-conditional',
    title: 'First Conditional & Time Clauses',
    icon: '⚡',
    color: 'amber',
    items: [
      {
        title: 'If + Present Simple, will + fiil',
        content: 'Gelecekte gerçekleşme olasılığı olan durumlar.',
        example: 'If it rains, we\'ll stay at home.',
      },
      {
        title: 'unless = if not',
        content: 'Olumsuz koşul cümlelerinde kısayol.',
        example: 'Unless the government does more, tigers will die out.',
      },
      {
        title: 'when / as soon as / until / before / after',
        content: 'Zaman bağlaçlarından sonra Present Simple kullan (will DEĞİL).',
        example: 'I\'ll call you when I get home.',
      },
      {
        title: 'if vs when',
        content: 'if: belki olacak, belki olmayacak. when: olacağından eminim.',
        example: 'If I find a job... (belki) vs When I find a job... (kesin)',
      },
    ],
  },
  {
    id: 'cs-modals',
    title: 'Modals of Obligation',
    icon: '⚖️',
    color: 'red',
    items: [
      {
        title: 'must / have to / need to',
        content: 'Zorunluluk. must: resmi kurallar. have to/need to: genel.',
        example: 'Employees must wash their hands.',
      },
      {
        title: 'mustn\'t / can\'t',
        content: 'Yasak. mustn\'t: güçlü yasak. can\'t: konuşma dili.',
        example: 'Drivers mustn\'t text and drive.',
      },
      {
        title: 'don\'t have to / don\'t need to',
        content: 'Zorunlu değil (yapabilirsin ama mecbur değilsin).',
        example: 'University students don\'t have to wear a uniform.',
      },
      {
        title: 'should / ought to',
        content: 'Tavsiye ve öneriler.',
        example: 'You should see as much as possible.',
      },
    ],
  },
  {
    id: 'cs-comparatives',
    title: 'Comparatives & Superlatives',
    icon: '📊',
    color: 'teal',
    items: [
      {
        title: 'Tek heceli: -er / -est',
        content: 'rich → richer, the richest.',
        example: 'She\'s a bit happier than she used to be.',
      },
      {
        title: 'Çok heceli: more / the most',
        content: 'careful → more careful, the most careful.',
        example: 'Life\'s a lot more interesting than before.',
      },
      {
        title: 'Düzensiz sıfatlar',
        content: 'good → better → the best. bad → worse → the worst.',
        example: 'This is the best meal I\'ve ever eaten.',
      },
      {
        title: 'as ... as / not as ... as',
        content: 'Eşitlik ve eşitsizlik karşılaştırması.',
        example: 'Japanese food isn\'t as spicy as Mexican food.',
      },
      {
        title: 'Derece zarfları',
        content: 'a lot, much, far (büyük fark). slightly, a bit, a little (küçük fark).',
        example: 'That\'s by far the highest mountain I\'ve ever climbed.',
      },
    ],
  },
];

export const writingTopics: WritingTopic[] = [
  {
    id: 'wt-biography',
    title: 'Biyografi Yazma',
    prompt: 'Tanıdığınız veya bildiğiniz birinin biyografisini yazın. Bu kişinin neden sizin için önemli olduğunu, en çok neyi hatırladığınızı ve hayatındaki önemli olayları anlatın. Zamanı tanımlayan sözcükler (from, while, during, meanwhile, over) kullanmaya dikkat edin.',
    type: 'narrative',
  },
  {
    id: 'wt-discussion',
    title: 'Tartışma Yazısı (Discussion Essay)',
    prompt: '"Büyük şehirlerde yaşamak, küçük kasabalarda yaşamaktan daha mı iyidir?" konusunu tartışın. Her iki tarafın da avantajlarını ve dezavantajlarını değerlendirin. Neden (because, since, due to) ve sonuç (as a result, so) bağlaçlarını kullanın.',
    type: 'argumentative',
  },
  {
    id: 'wt-culture',
    title: 'Kültür Farklılıkları',
    prompt: 'Bir yabancı ülkenin kültürü hakkında bir yazı yazın. Bu kültürün sizin kültürünüzle nasıl farklı olduğunu (karşılaştırma ve üstünlük dereceleri kullanarak) açıklayın. Yemek, giyim, selamlaşma, aile hayatı gibi konulara değinin.',
    type: 'descriptive',
  },
  {
    id: 'wt-food-review',
    title: 'Yemek/Restoran İncelemesi',
    prompt: 'Gittiğiniz bir restoran veya yediğiniz özel bir yemek hakkında bir inceleme yazın. Yemeği tanımlayan sıfatlar (tasty, spicy, creamy, crunchy, bitter, fresh) kullanın. Karşılaştırma yapıları ve superlative ifadeler kullanın.',
    type: 'descriptive',
  },
  {
    id: 'wt-friendship-story',
    title: 'Arkadaşlık Hikâyesi',
    prompt: 'Yakın bir arkadaşınızla nasıl tanıştığınızın hikâyesini anlatın. Narrative tenses (Past Simple, Past Continuous, Past Perfect) kullanarak hikâyeyi zenginleştirin. İlişki kelimelerini (get on well with, have in common, keep in touch) dahil edin.',
    type: 'narrative',
  },
  {
    id: 'wt-environment',
    title: 'Çevre Sorunları',
    prompt: '"Hükümetler çevre sorunlarını çözmek için daha fazla şey yapmalı mıdır?" konusunu tartışın. İklim değişikliği, nesli tehlike altındaki türler ve geri dönüşüm gibi konulara değinin. Modals of obligation (must, should, have to) kullanın.',
    type: 'opinion',
  },
];

const APP_VERSION = "0.2.6";

const QUESTIONS = [
  {
    "id": "ch1-q001",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "after",
    "question": "骨格筋の基本的な機能的収縮単位として最も適切なのはどれか。",
    "choices": [
      "筋線維",
      "筋原線維",
      "サルコメア",
      "筋線維束"
    ],
    "answer": 2,
    "explanation": "サルコメアはZ線から隣接するZ線までの範囲で、骨格筋の基本的な機能的収縮単位である。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-q002",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "question": "構造の大きい順として正しいものはどれか。",
    "choices": [
      "サルコメア→筋フィラメント→筋原線維→筋線維→骨格筋",
      "骨格筋→筋線維→筋原線維→筋フィラメント→サルコメア",
      "筋線維→骨格筋→筋原線維→サルコメア→筋フィラメント",
      "骨格筋→筋原線維→筋線維→筋フィラメント→サルコメア"
    ],
    "answer": 1,
    "explanation": "骨格筋の内部では、筋線維の中に筋原線維が並び、筋原線維はサルコメアが連なって構成される。筋フィラメントはサルコメアを構成するアクチンとミオシンのフィラメントである。"
  },
  {
    "id": "ch1-q003",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "question": "筋線維の中に多数並んでいる円柱状の構造はどれか。",
    "choices": [
      "筋原線維",
      "腱",
      "神経終末",
      "骨膜"
    ],
    "answer": 0,
    "explanation": "筋線維の中には、筋線維の長さ方向に多数の筋原線維（Myofibril）が並んでいる。"
  },
  {
    "id": "ch1-q004",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "after",
    "question": "1つのサルコメアの範囲として正しいものはどれか。",
    "choices": [
      "A帯からH帯まで",
      "Z線から隣接するZ線まで",
      "M線からM線まで",
      "I帯からA帯まで"
    ],
    "answer": 1,
    "explanation": "サルコメアはZ線から隣接するZ線までの範囲を指す。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-q005",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "after",
    "question": "A帯について、最も適切なものはどれか。",
    "choices": [
      "ミオシンフィラメントが存在する範囲",
      "アクチンだけが存在する範囲",
      "Z線からZ線までの全範囲",
      "神経筋接合部の領域"
    ],
    "answer": 0,
    "explanation": "A帯はミオシンフィラメントが存在する範囲で、骨格筋では暗帯として見える。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-q006",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "after",
    "question": "A帯の中で、ミオシンのみが存在しアクチンが存在しない部分はどれか。",
    "choices": [
      "I帯",
      "H帯",
      "Z線",
      "M線"
    ],
    "answer": 1,
    "explanation": "H帯はA帯の中でミオシンのみが存在し、アクチンと重ならない部分である。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-q007",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "after",
    "question": "H帯の中央を通る暗い線はどれか。",
    "choices": [
      "Z線",
      "I帯",
      "M線",
      "筋鞘"
    ],
    "answer": 2,
    "explanation": "M線はH帯の中央を通る線で、ミオシンフィラメントの正しい配列を維持する。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-q008",
    "chapter": 1,
    "category": "筋系・フィラメント",
    "type": "standard",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "after",
    "question": "ミオシンフィラメントとアクチンフィラメントの組み合わせとして正しいものはどれか。",
    "choices": [
      "ミオシン＝細い、アクチン＝太い",
      "ミオシン＝太い、アクチン＝細い",
      "両方とも太い",
      "両方とも細い"
    ],
    "answer": 1,
    "explanation": "ミオシンは太いフィラメント、アクチンは細いフィラメントである。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-q009",
    "chapter": 1,
    "category": "筋系・調節タンパク質",
    "type": "standard",
    "question": "安静時にアクチン上のミオシン結合部位を覆っているタンパク質はどれか。",
    "choices": [
      "トロポニン",
      "トロポミオシン",
      "ネプリン",
      "ミオグロビン"
    ],
    "answer": 1,
    "explanation": "安静時はトロポミオシンがアクチン上のミオシン結合部位を覆っている。"
  },
  {
    "id": "ch1-q010",
    "chapter": 1,
    "category": "筋系・調節タンパク質",
    "type": "standard",
    "question": "カルシウムイオンが直接結合する調節タンパク質はどれか。",
    "choices": [
      "トロポニン",
      "ミオシン",
      "アクチン",
      "ネプリン"
    ],
    "answer": 0,
    "explanation": "カルシウムイオンがトロポニンと結合するとトロポミオシンが移動し、アクチン上のミオシン結合部位が露出する。"
  },
  {
    "id": "ch1-q011",
    "chapter": 1,
    "category": "神経筋接合部",
    "type": "standard",
    "question": "神経筋接合部で神経から筋へ信号を伝える神経伝達物質はどれか。",
    "choices": [
      "ドーパミン",
      "アセチルコリン",
      "セロトニン",
      "アドレナリン"
    ],
    "answer": 1,
    "explanation": "神経筋接合部ではアセチルコリン（ACh）が放出され、筋線維側のACh受容体と結合する。"
  },
  {
    "id": "ch1-q012",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "image": "assets/figures/contraction.svg",
    "figureMode": "after",
    "question": "筋収縮の過程で最初に起こるものはどれか。",
    "choices": [
      "カルシウムがトロポニンに結合する",
      "ミオシンがアクチンに結合する",
      "神経の活動電位が神経筋接合部に到達しAChが放出される",
      "筋小胞体がATPを放出する"
    ],
    "answer": 2,
    "explanation": "神経の活動電位が神経筋接合部に到達するとAChが放出され、その後、筋線維側の受容体への結合へ進む。"
  },
  {
    "id": "ch1-q013",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "image": "assets/figures/contraction.svg",
    "figureMode": "after",
    "question": "AChが筋線維側で結合する場所はどれか。",
    "choices": [
      "ACh受容体",
      "トロポニン",
      "ミオシン頭部",
      "GTO"
    ],
    "answer": 0,
    "explanation": "AChはシナプス間隙を越えて筋線維側の運動終板にあるACh受容体と結合する。"
  },
  {
    "id": "ch1-q014",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "image": "assets/figures/contraction.svg",
    "figureMode": "after",
    "question": "筋線維の活動電位を細胞内部へ伝える構造はどれか。",
    "choices": [
      "T管",
      "筋小胞体",
      "M線",
      "腱"
    ],
    "answer": 0,
    "explanation": "活動電位は筋鞘に発生し、T管を通って細胞内部へ伝わる。"
  },
  {
    "id": "ch1-q015",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "image": "assets/figures/contraction.svg",
    "figureMode": "after",
    "question": "活動電位を受けてカルシウムイオンを放出する構造はどれか。",
    "choices": [
      "筋小胞体",
      "筋原線維",
      "腱",
      "骨膜"
    ],
    "answer": 0,
    "explanation": "活動電位がT管を通って筋線維内部へ伝わると、筋小胞体からCa²⁺が放出される。"
  },
  {
    "id": "ch1-q016",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "image": "assets/figures/filament_sliding.webp",
    "figureMode": "after",
    "question": "フィラメント滑走説について正しい説明はどれか。",
    "choices": [
      "アクチンとミオシンそのものが短くなる",
      "フィラメント自体の長さは変わらず、互いに滑り込む",
      "サルコメアが分解される",
      "Z線が筋線維の中を移動する"
    ],
    "answer": 1,
    "explanation": "フィラメント滑走説では、フィラメント自体の長さは変化せず、アクチンとミオシンが互いに滑り込むことで筋全体が短縮・伸張する。",
    "figureCaption": "フィラメント滑走説：収縮前と収縮後の比較"
  },
  {
    "id": "ch1-q017",
    "chapter": 1,
    "category": "筋活動様式",
    "type": "standard",
    "question": "外的負荷を上回る力を筋が発揮して筋が短くなる活動はどれか。",
    "choices": [
      "短縮性筋活動",
      "伸張性筋活動",
      "等尺性筋活動",
      "受動的伸張"
    ],
    "answer": 0,
    "explanation": "短縮性筋活動では筋の発揮する力が外的負荷を上回り、筋が短縮する。"
  },
  {
    "id": "ch1-q018",
    "chapter": 1,
    "category": "筋活動様式",
    "type": "standard",
    "question": "筋が力を発揮しながら長くなる活動はどれか。",
    "choices": [
      "短縮性筋活動",
      "伸張性筋活動",
      "等尺性筋活動",
      "弛緩"
    ],
    "answer": 1,
    "explanation": "伸張性筋活動では筋の発揮する力が外的負荷の抵抗を下回り、筋が伸張されながら力を発揮する。"
  },
  {
    "id": "ch1-q019",
    "chapter": 1,
    "category": "筋活動様式",
    "type": "standard",
    "question": "筋の長さが変化しない活動はどれか。",
    "choices": [
      "短縮性",
      "伸張性",
      "等尺性",
      "滑走性"
    ],
    "answer": 2,
    "explanation": "等尺性筋活動では筋の発揮する力と外的負荷が等しく、筋の長さが変化しない。"
  },
  {
    "id": "ch1-q020",
    "chapter": 1,
    "category": "筋活動様式",
    "type": "standard",
    "question": "バックスクワットでしゃがむ局面における、大腿四頭筋・大殿筋の筋活動として最も適切なものはどれか。",
    "choices": [
      "短縮性",
      "伸張性",
      "等尺性のみ",
      "活動しない"
    ],
    "answer": 1,
    "explanation": "バックスクワットでしゃがむ局面では、大腿四頭筋と大殿筋が伸張性筋活動を行う。"
  },
  {
    "id": "ch1-q021",
    "chapter": 1,
    "category": "筋線維タイプ",
    "type": "standard",
    "question": "酸化能力と疲労耐性が高く、収縮・弛緩速度が遅い線維はどれか。",
    "choices": [
      "タイプⅠ線維",
      "タイプⅡa線維",
      "タイプⅡx線維",
      "すべて同じ"
    ],
    "answer": 0,
    "explanation": "タイプⅠ（SO）線維は酸化能力と疲労耐性が高く、収縮・弛緩速度は遅い。"
  },
  {
    "id": "ch1-q022",
    "chapter": 1,
    "category": "筋線維タイプ",
    "type": "standard",
    "question": "無酸素性能力に優れ、力は強いが疲労しやすい筋線維はどれか。",
    "choices": [
      "タイプⅠ",
      "タイプⅡa",
      "タイプⅡx",
      "錘内線維"
    ],
    "answer": 2,
    "explanation": "タイプⅡx（FG）線維は無酸素性能力に優れ、力は強いが疲労しやすいとされる。"
  },
  {
    "id": "ch1-q023",
    "chapter": 1,
    "category": "筋線維タイプ",
    "type": "standard",
    "question": "長距離走やウォーキングで貢献度が高い筋線維はどれか。",
    "choices": [
      "タイプⅠ",
      "タイプⅡa",
      "タイプⅡx",
      "錘外線維のみ"
    ],
    "answer": 0,
    "explanation": "持久的な活動ではタイプⅠ線維の貢献度が高い。"
  },
  {
    "id": "ch1-q024",
    "chapter": 1,
    "category": "神経系",
    "type": "standard",
    "question": "中枢神経系（CNS）に含まれるものはどれか。",
    "choices": [
      "脳と脊髄",
      "脳と筋肉",
      "脊髄と腱",
      "末梢神経と筋肉"
    ],
    "answer": 0,
    "explanation": "中枢神経系（CNS）は脳と脊髄から構成される。"
  },
  {
    "id": "ch1-q025",
    "chapter": 1,
    "category": "神経系",
    "type": "standard",
    "question": "末梢から中枢へ情報を送る神経はどれか。",
    "choices": [
      "運動（遠心性）神経",
      "感覚（求心性）神経",
      "体性神経のみ",
      "交感神経のみ"
    ],
    "answer": 1,
    "explanation": "感覚（求心性）神経は末梢から中枢へ情報を送る。"
  },
  {
    "id": "ch1-q026",
    "chapter": 1,
    "category": "神経系・ニューロン",
    "type": "standard",
    "question": "他のニューロンからの信号を受け取る「アンテナ部分」に相当する構造はどれか。",
    "choices": [
      "樹状突起",
      "軸索",
      "筋小胞体",
      "運動終板"
    ],
    "answer": 0,
    "explanation": "樹状突起は他のニューロンからの信号を受け取る部分として説明されている。"
  },
  {
    "id": "ch1-q027",
    "chapter": 1,
    "category": "神経系・ニューロン",
    "type": "standard",
    "question": "細胞体から伸びる長い「ケーブル」に相当する構造はどれか。",
    "choices": [
      "樹状突起",
      "軸索",
      "筋鞘",
      "錘内線維"
    ],
    "answer": 1,
    "explanation": "軸索は細胞体から伸びる長い構造で、脊髄から筋肉まで信号を伝える。"
  },
  {
    "id": "ch1-q028",
    "chapter": 1,
    "category": "神経系・筋紡錘",
    "type": "standard",
    "image": "assets/figures/spindle_gto.svg",
    "figureMode": "after",
    "question": "筋紡錘が主に検知するものはどれか。",
    "choices": [
      "筋の長さ（伸張）の変化",
      "筋が発揮する張力",
      "骨密度",
      "ACh濃度"
    ],
    "answer": 0,
    "explanation": "筋紡錘は筋の長さの変化、特に急速な伸張を感知する。"
  },
  {
    "id": "ch1-q029",
    "chapter": 1,
    "category": "神経系・GTO",
    "type": "standard",
    "image": "assets/figures/spindle_gto.svg",
    "figureMode": "after",
    "question": "ゴルジ腱器官（GTO）が主に検知するものはどれか。",
    "choices": [
      "筋の長さ",
      "筋が発揮する力（張力）",
      "筋線維の色",
      "骨の長さ"
    ],
    "answer": 1,
    "explanation": "GTOは筋が発揮する力（張力）の大きさを検知するセンサーとして説明されている。"
  },
  {
    "id": "ch1-q030",
    "chapter": 1,
    "category": "神経系・運動単位",
    "type": "standard",
    "question": "運動単位について正しい説明はどれか。",
    "choices": [
      "1本の筋線維だけを指す",
      "1つの運動神経と、それが支配する筋線維のグループを指す",
      "筋と腱の接合部を指す",
      "骨と骨をつなぐ組織を指す"
    ],
    "answer": 1,
    "explanation": "運動単位は、1つの運動神経と、それが支配する筋線維のグループから構成される。"
  },
  {
    "id": "ch1-q031",
    "chapter": 1,
    "category": "神経系・サイズの原理",
    "type": "standard",
    "question": "サイズの原理による運動単位の動員順序として正しいものはどれか。",
    "choices": [
      "タイプⅡx→Ⅱa→Ⅰ",
      "タイプⅡa→Ⅰ→Ⅱx",
      "タイプⅠ→Ⅱa→Ⅱx",
      "すべて同時"
    ],
    "answer": 2,
    "explanation": "サイズの原理では、タイプⅠ→タイプⅡa→タイプⅡxの順に運動単位が動員される。"
  },
  {
    "id": "ch1-q032",
    "chapter": 1,
    "category": "神経系・運動単位",
    "type": "standard",
    "question": "すでに活動している運動単位の発火頻度を増やす力の調節機構はどれか。",
    "choices": [
      "運動単位の動員",
      "発火頻度の調節（Rate coding）",
      "骨リモデリング",
      "伸張反射"
    ],
    "answer": 1,
    "explanation": "筋力の調節には、運動単位の動員と発火頻度の調節（Rate coding）が関与する。"
  },
  {
    "id": "ch1-q033",
    "chapter": 1,
    "category": "骨格系",
    "type": "standard",
    "image": "assets/figures/long_bone.svg",
    "figureMode": "after",
    "question": "長骨の中央の長い部分を何というか。",
    "choices": [
      "骨端",
      "骨幹",
      "骨膜",
      "海綿骨"
    ],
    "answer": 1,
    "explanation": "骨幹（Diaphysis）は長骨の中央の長い部分である。"
  },
  {
    "id": "ch1-q034",
    "chapter": 1,
    "category": "骨格系",
    "type": "standard",
    "image": "assets/figures/skeleton.svg",
    "figureMode": "after",
    "question": "頭蓋・脊柱・胸骨・肋骨などを含む骨格はどれか。",
    "choices": [
      "付属性骨格",
      "軸性骨格",
      "末梢骨格",
      "筋骨格"
    ],
    "answer": 1,
    "explanation": "軸性骨格には頭蓋、脊柱、胸骨、肋骨が含まれ、重要臓器の保護や筋の付着部として機能する。"
  },
  {
    "id": "ch1-q035",
    "chapter": 1,
    "category": "骨格系・リモデリング",
    "type": "standard",
    "image": "assets/figures/long_bone.svg",
    "figureMode": "after",
    "question": "古い骨を破壊する細胞はどれか。",
    "choices": [
      "骨芽細胞",
      "破骨細胞",
      "筋線維",
      "骨膜細胞"
    ],
    "answer": 1,
    "explanation": "破骨細胞（Osteoclast）は古い骨を破壊する細胞である。"
  },
  {
    "id": "ch1-q036",
    "chapter": 1,
    "category": "骨格系・リモデリング",
    "type": "standard",
    "image": "assets/figures/long_bone.svg",
    "figureMode": "after",
    "question": "新しい骨の合成を促す細胞はどれか。",
    "choices": [
      "破骨細胞",
      "骨芽細胞",
      "GTO",
      "錘内線維"
    ],
    "answer": 1,
    "explanation": "骨芽細胞（Osteoblast）は新しい骨の合成を促す細胞である。"
  },
  {
    "id": "ch1-q037",
    "chapter": 1,
    "category": "骨格系・ウォルフの法則",
    "type": "standard",
    "image": "assets/figures/long_bone.svg",
    "figureMode": "after",
    "question": "ウォルフの法則の説明として最も適切なのはどれか。",
    "choices": [
      "骨は負荷に関係なく一定の構造を保つ",
      "骨は課せられたストレス（負荷）に対して適応する",
      "骨密度はカルシウム摂取量だけで決まる",
      "骨は筋収縮によって直接短縮する"
    ],
    "answer": 1,
    "explanation": "ウォルフの法則は、骨が加えられたストレス（負荷）に応じて適応するという考え方である。"
  },
  {
    "id": "ch1-q038",
    "chapter": 1,
    "category": "骨格系・腱靭帯",
    "type": "standard",
    "question": "筋と骨を結合する組織はどれか。",
    "choices": [
      "靭帯",
      "腱",
      "筋紡錘",
      "筋膜"
    ],
    "answer": 1,
    "explanation": "腱は筋と骨を結合する組織である。"
  },
  {
    "id": "ch1-q039",
    "chapter": 1,
    "category": "骨格系・腱靭帯",
    "type": "standard",
    "question": "骨と骨をつなぎ、コラーゲンに加えてエラスチンを含む組織はどれか。",
    "choices": [
      "腱",
      "靭帯",
      "筋原線維",
      "骨膜"
    ],
    "answer": 1,
    "explanation": "靭帯は骨と骨をつなぐ組織で、コラーゲンに加えてエラスチンも含む。"
  },
  {
    "id": "ch1-q040",
    "chapter": 1,
    "category": "骨格系・総合",
    "type": "standard",
    "question": "身体運動の流れとして最も適切なものはどれか。",
    "choices": [
      "骨が神経を作り、筋が骨を分解する",
      "神経系が信号を送り、神経筋接合部で筋に伝わり、筋が力を生み、腱を通じて骨を動かす",
      "筋が骨を直接押して関節を動かす",
      "腱が神経信号を作り、骨が筋を収縮させる"
    ],
    "answer": 1,
    "explanation": "章のまとめでは、神経系→神経筋接合部→筋系（サルコメア）→腱→骨格系という一本の流れとして整理されている。"
  },
  {
    "id": "ch1-case001-q01",
    "chapter": 1,
    "category": "ケーススタディ・筋収縮",
    "type": "case",
    "caseId": "case-001",
    "caseTitle": "高負荷トレーニング中の筋収縮",
    "question": "クライアントが高負荷のレジスタンストレーニングを行っている。神経から筋へ信号が伝わる最初の段階として、最も適切なのはどれか。",
    "choices": [
      "筋小胞体からCa²⁺が放出される",
      "神経筋接合部へ活動電位が到達しAChが放出される",
      "トロポニンがCa²⁺と結合する",
      "ミオシンがアクチンを引き込む"
    ],
    "answer": 1,
    "explanation": "まず神経の活動電位が神経筋接合部に到達してAChが放出される。その後、AChが受容体に結合し、筋鞘に活動電位が生じ、T管を介してCa²⁺放出へ進む。"
  },
  {
    "id": "ch1-case001-q02",
    "chapter": 1,
    "category": "ケーススタディ・筋収縮",
    "type": "case",
    "caseId": "case-001",
    "caseTitle": "高負荷トレーニング中の筋収縮",
    "question": "前問の状態から筋線維内部へ活動電位が伝わった。次に起こる現象はどれか。",
    "choices": [
      "筋小胞体がCa²⁺を放出する",
      "GTOが骨密度を測定する",
      "腱が短縮する",
      "骨芽細胞が活動する"
    ],
    "answer": 0,
    "explanation": "活動電位がT管を通って細胞内部へ伝わると、筋小胞体がCa²⁺を放出する。"
  },
  {
    "id": "ch1-case001-q03",
    "chapter": 1,
    "category": "ケーススタディ・筋収縮",
    "type": "case",
    "caseId": "case-001",
    "caseTitle": "高負荷トレーニング中の筋収縮",
    "question": "Ca²⁺が放出された後、アクチンとミオシンの結合を可能にする直接の変化として正しいものはどれか。",
    "choices": [
      "Ca²⁺がトロポニンに結合し、トロポミオシンが移動する",
      "AChがミオシンに結合する",
      "GTOがトロポミオシンを分解する",
      "ATPがアクチンを分解する"
    ],
    "answer": 0,
    "explanation": "Ca²⁺がトロポニンと結合するとトロポミオシンが移動し、アクチン上のミオシン結合部位が露出する。"
  },
  {
    "id": "ch1-case002-q01",
    "chapter": 1,
    "category": "ケーススタディ・筋活動様式",
    "type": "case",
    "caseId": "case-002",
    "caseTitle": "スクワットの3局面",
    "question": "クライアントがバックスクワットでしゃがんでいる。大腿四頭筋・大殿筋の主な筋活動様式はどれか。",
    "choices": [
      "短縮性",
      "伸張性",
      "等尺性",
      "筋活動はない"
    ],
    "answer": 1,
    "explanation": "スクワットでしゃがむ局面では、大腿四頭筋と大殿筋が伸張性筋活動を行う。"
  },
  {
    "id": "ch1-case002-q02",
    "chapter": 1,
    "category": "ケーススタディ・筋活動様式",
    "type": "case",
    "caseId": "case-002",
    "caseTitle": "スクワットの3局面",
    "question": "同じスクワットで、立ち上がる局面における大腿四頭筋・大殿筋の筋活動はどれか。",
    "choices": [
      "短縮性",
      "伸張性",
      "等尺性",
      "完全弛緩"
    ],
    "answer": 0,
    "explanation": "スクワットで立ち上がる局面では、大腿四頭筋と大殿筋が短縮性筋活動を行う。"
  },
  {
    "id": "ch1-case002-q03",
    "chapter": 1,
    "category": "ケーススタディ・筋活動様式",
    "type": "case",
    "caseId": "case-002",
    "caseTitle": "スクワットの3局面",
    "question": "スクワット中、脊柱起立筋や腹部の筋群が姿勢を安定させるために行っている活動として最も適切なものはどれか。",
    "choices": [
      "短縮性のみ",
      "伸張性のみ",
      "等尺性",
      "筋紡錘による受動活動"
    ],
    "answer": 2,
    "explanation": "脊柱起立筋や腹部の筋群は、動作中に等尺性筋活動によって姿勢を安定させる。"
  },
  {
    "id": "ch1-case003-q01",
    "chapter": 1,
    "category": "ケーススタディ・筋線維",
    "type": "case",
    "caseId": "case-003",
    "caseTitle": "長距離走と筋線維",
    "question": "長距離走を目的とするクライアントで、貢献度が高い筋線維タイプはどれか。",
    "choices": [
      "タイプⅠ",
      "タイプⅡaのみ",
      "タイプⅡxのみ",
      "錘内線維"
    ],
    "answer": 0,
    "explanation": "長距離走やウォーキングなどの持久的活動では、タイプⅠ線維の貢献度が高い。"
  },
  {
    "id": "ch1-case003-q02",
    "chapter": 1,
    "category": "ケーススタディ・筋線維",
    "type": "case",
    "caseId": "case-003",
    "caseTitle": "長距離走と筋線維",
    "question": "同じクライアントが短時間で大きな力を発揮する活動を行う場合、より関与が高い筋線維タイプはどれか。",
    "choices": [
      "タイプⅠのみ",
      "タイプⅡ、特にⅡx",
      "錘内線維のみ",
      "筋線維タイプに違いはない"
    ],
    "answer": 1,
    "explanation": "スプリントやウエイトリフティングなどではタイプⅡ線維の貢献度が高く、特にタイプⅡxは大きな力を発揮できる一方、疲労しやすい。"
  },
  {
    "id": "ch1-case004-q01",
    "chapter": 1,
    "category": "ケーススタディ・感覚受容器",
    "type": "case",
    "caseId": "case-004",
    "caseTitle": "ストレッチとジャンプ",
    "question": "クライアントが急速に筋を伸張された直後に力強い短縮性筋活動を行う。この動作で利用される仕組みとして最も適切なのはどれか。",
    "choices": [
      "伸張反射を利用する",
      "ウォルフの法則を利用する",
      "GTOだけを刺激する",
      "骨芽細胞を直接刺激する"
    ],
    "answer": 0,
    "explanation": "プライオメトリックトレーニングでは、素早い伸張の直後に短縮性筋活動を行い、伸張反射を利用してより力強い収縮を引き出す。"
  },
  {
    "id": "ch1-case004-q02",
    "chapter": 1,
    "category": "ケーススタディ・感覚受容器",
    "type": "case",
    "caseId": "case-004",
    "caseTitle": "ストレッチとジャンプ",
    "question": "筋紡錘とGTOを区別する場合、最も適切な組み合わせはどれか。",
    "choices": [
      "筋紡錘＝張力、GTO＝筋長",
      "筋紡錘＝筋長・伸張、GTO＝張力",
      "両方＝骨密度",
      "筋紡錘＝ACh、GTO＝Ca²⁺"
    ],
    "answer": 1,
    "explanation": "筋紡錘は筋の長さの変化を、GTOは筋が発揮する力（張力）を検知する。"
  },
  {
    "id": "ch1-case005-q01",
    "chapter": 1,
    "category": "ケーススタディ・運動単位",
    "type": "case",
    "caseId": "case-005",
    "caseTitle": "負荷増加と運動単位",
    "question": "軽い負荷から徐々に負荷を増やしていくとき、サイズの原理に従う運動単位の動員順序はどれか。",
    "choices": [
      "タイプⅡx→Ⅱa→Ⅰ",
      "タイプⅠ→Ⅱa→Ⅱx",
      "Ⅱa→Ⅱx→Ⅰ",
      "すべて同時"
    ],
    "answer": 1,
    "explanation": "サイズの原理により、タイプⅠ→Ⅱa→Ⅱxの順に運動単位が動員される。"
  },
  {
    "id": "ch1-case005-q02",
    "chapter": 1,
    "category": "ケーススタディ・運動単位",
    "type": "case",
    "caseId": "case-005",
    "caseTitle": "負荷増加と運動単位",
    "question": "さらに大きな力が必要になった場合、運動単位の力調節に関与するもう一つの仕組みはどれか。",
    "choices": [
      "発火頻度の調節（Rate coding）",
      "骨リモデリング",
      "筋紡錘の短縮",
      "AChの骨への結合"
    ],
    "answer": 0,
    "explanation": "力の調節には、運動単位の動員と発火頻度の調節（Rate coding）が関与する。"
  },
  {
    "id": "ch1-q041",
    "chapter": 1,
    "category": "総合・識別",
    "type": "standard",
    "question": "「長さセンサー」と「力センサー」の組み合わせとして最も適切なのはどれか。",
    "choices": [
      "筋紡錘＝長さ、GTO＝力",
      "GTO＝長さ、筋紡錘＝力",
      "ACh＝長さ、Ca²⁺＝力",
      "骨芽細胞＝長さ、破骨細胞＝力"
    ],
    "answer": 0,
    "explanation": "筋紡錘は筋の長さ・伸張を検知し、GTOは発揮される力・張力を検知する。"
  },
  {
    "id": "ch1-q042",
    "chapter": 1,
    "category": "総合・識別",
    "type": "standard",
    "question": "次のうち、筋と骨の関係を正しく表しているものはどれか。",
    "choices": [
      "筋→靭帯→骨",
      "筋→腱→骨",
      "筋→GTO→骨",
      "筋→筋紡錘→骨"
    ],
    "answer": 1,
    "explanation": "筋が生み出した力は腱を通じて骨に伝わり、骨格が関節を中心に運動を生み出す。"
  },
  {
    "id": "ch1-q043",
    "chapter": 1,
    "category": "総合・識別",
    "type": "standard",
    "question": "次のうち、骨のリモデリングに直接関わる細胞の組み合わせはどれか。",
    "choices": [
      "破骨細胞と骨芽細胞",
      "筋紡錘とGTO",
      "トロポニンとトロポミオシン",
      "樹状突起と軸索"
    ],
    "answer": 0,
    "explanation": "骨のリモデリングには古い骨を破壊する破骨細胞と、新しい骨の合成を促す骨芽細胞が関わる。"
  },
  {
    "id": "ch1-q044",
    "chapter": 1,
    "category": "総合・応用",
    "type": "standard",
    "question": "「神経系→神経筋接合部→筋系→腱→骨格系」という流れを理解することの意味として、章のまとめに最も合うものはどれか。",
    "choices": [
      "各用語を独立して暗記するため",
      "身体運動が生じる一連のストーリーとして理解するため",
      "骨格筋を神経から切り離して考えるため",
      "筋線維タイプを無視して考えるため"
    ],
    "answer": 1,
    "explanation": "章のまとめでは、この一連の流れを丸暗記ではなくストーリーとして説明できることが次章以降の理解を助けるとしている。"
  },
  {
    "id": "ch1-fig001",
    "chapter": 1,
    "category": "図・サルコメア",
    "type": "figure",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "question",
    "question": "図に示されたZ線から隣接するZ線までの範囲を何というか。",
    "choices": [
      "I帯",
      "A帯",
      "サルコメア",
      "H帯"
    ],
    "answer": 2,
    "explanation": "Z線から隣接するZ線までが1つのサルコメアである。サルコメアは骨格筋の基本的な機能的収縮単位である。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-fig002",
    "chapter": 1,
    "category": "図・サルコメア",
    "type": "figure",
    "image": "assets/figures/sarcomere_structure.webp",
    "figureMode": "question",
    "question": "図の中央に示された、ミオシンのみが存在する領域はどれか。",
    "choices": [
      "I帯",
      "H帯",
      "Z線",
      "M線"
    ],
    "answer": 1,
    "explanation": "H帯はA帯の中央付近にあり、ミオシンのみが存在する領域である。中央のM線はH帯の中央を通る。",
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係"
  },
  {
    "id": "ch1-fig003",
    "chapter": 1,
    "category": "図・筋収縮",
    "type": "figure",
    "image": "assets/figures/contraction.svg",
    "figureMode": "question",
    "question": "図の⑤に相当する現象として正しいのはどれか。",
    "choices": [
      "AChが放出される",
      "Ca²⁺が放出される",
      "AChが受容体に結合する",
      "活動電位がT管へ伝わる"
    ],
    "answer": 1,
    "explanation": "筋線維内へ活動電位が伝わると、筋小胞体からCa²⁺が放出される。Ca²⁺はトロポニンに結合し、筋収縮の開始につながる。"
  },
  {
    "id": "ch1-fig004",
    "chapter": 1,
    "category": "図・筋紡錘とGTO",
    "type": "figure",
    "image": "assets/figures/spindle_gto.svg",
    "figureMode": "question",
    "question": "筋の長さの変化を主に検知する受容器は図のどちらか。",
    "choices": [
      "筋紡錘",
      "ゴルジ腱器官（GTO）",
      "両方とも張力のみを検知する",
      "どちらも検知しない"
    ],
    "answer": 0,
    "explanation": "筋紡錘は筋の長さや伸張の変化を検知する。GTOは主に筋が発揮する張力を検知する。"
  }
]

const STORAGE_KEY = "cptmate_v01_state";

const defaultState = {
  answers: {},
  bookmarks: {},
  currentIndex: 0,
  lastViewed: "home"
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function answeredCount() {
  return Object.keys(state.answers).length;
}

function correctCount() {
  return Object.values(state.answers).filter(a => a.correct).length;
}

function accuracy() {
  const n = answeredCount();
  return n ? Math.round(correctCount() / n * 100) : 0;
}


const CHOICE_EXPLANATIONS = {
  "筋線維": "骨格筋を構成する細長い細胞。筋線維の内部には多数の筋原線維が並ぶ。",
  "筋原線維": "筋線維の内部に筋線維の長さ方向へ多数並ぶ円柱状の構造。サルコメアが連なって構成される。",
  "サルコメア": "Z線から隣接するZ線までの範囲で、骨格筋の基本的な機能的収縮単位。",
  "筋線維束": "複数の筋線維がまとまった束。サルコメアより大きな構造単位。",
  "筋フィラメント": "サルコメアを構成するアクチンとミオシンなどのフィラメント。",
  "ミオシンフィラメントが存在する範囲": "A帯はミオシンフィラメントが存在する範囲。",
  "アクチンだけが存在する範囲": "I帯に相当する特徴。ミオシンと重ならないアクチンの範囲。",
  "Z線からZ線までの全範囲": "Z線から隣接するZ線までがサルコメアであり、A帯やI帯などを含む。",
  "神経筋接合部の領域": "神経と筋線維の間で信号を伝える場所であり、A帯の定義ではない。",
  "A帯からH帯まで": "A帯とH帯はサルコメア内の異なる領域であり、サルコメア全体の定義ではない。",
  "M線からM線まで": "M線はH帯の中央にある線で、サルコメアの両端を示すものではない。",
  "I帯からA帯まで": "I帯とA帯はサルコメア内の異なる領域であり、サルコメアの範囲を示す定義ではない。",
  "H帯": "A帯の中で、アクチンと重ならないミオシンだけの部分。",
  "I帯": "アクチンのみが存在し、ミオシンが重なっていない範囲。",
  "M線": "H帯の中央にある線で、ミオシンフィラメント同士の配列を保つ。",
  "Z線": "サルコメアの両端を区切る境界線。",
  "トロポミオシン": "安静時にアクチン上のミオシン結合部位を覆っている調節タンパク質。",
  "トロポニン": "カルシウムイオンと結合し、トロポミオシンの移動を介して筋収縮のスイッチに関わる調節タンパク質。",
  "カルシウムがトロポニンに結合する": "カルシウムイオンがトロポニンに結合するとトロポミオシンが移動し、ミオシン結合部位が露出する。",
  "トロポニンがCa²⁺と結合する": "カルシウムイオンがトロポニンに結合すると、トロポミオシンがアクチンの結合部位から移動する。",
  "アクチン": "細いフィラメントを構成するタンパク質。ミオシン頭部との結合によって力発揮に関わる。",
  "ミオシン": "太いフィラメントを構成するタンパク質。頭部がアクチンに結合して力を発揮する。",
  "ミオシン頭部": "ATPを利用してアクチンと相互作用し、アクチンを引き込む部分。",
  "ミオシンがアクチンに結合する": "アクチンの結合部位が露出した後にクロスブリッジを形成する過程。",
  "ミオシンがアクチンを引き込む": "クロスブリッジ形成後のパワーストロークによってアクチンがサルコメア中央部へ引き込まれる。",
  "フィラメント自体の長さは変わらず、互いに滑り込む": "フィラメント滑走説の考え方。アクチンとミオシンが互いに滑り込むことで筋が短縮・伸張する。",
  "アセチルコリン": "神経筋接合部で神経から筋へ信号を伝える神経伝達物質。",
  "ACh受容体": "神経筋接合部の筋線維側にあり、AChが結合する受容体。",
  "運動終板": "筋線維側にある神経筋接合部の特殊な領域。ACh受容体が存在する。",
  "T管": "筋線維の膜に生じた活動電位を細胞内部へ伝える構造。",
  "筋小胞体": "活動電位を受けてカルシウムイオンを放出する構造。",
  "筋小胞体からCa²⁺が放出される": "T管を通った活動電位を受けて筋小胞体からカルシウムイオンが放出される。",
  "神経の活動電位が神経筋接合部に到達しAChが放出される": "筋収縮の流れの最初の段階。神経の活動電位が神経筋接合部に到達するとAChが放出される。",
  "神経筋接合部へ活動電位が到達しAChが放出される": "神経の活動電位が神経筋接合部に到達し、AChが放出される段階。",
  "短縮性筋活動": "筋の発揮する力が外的負荷を上回り、筋が短縮する活動。",
  "伸張性筋活動": "筋が力を発揮しながら外的負荷によって伸張される活動。",
  "等尺性筋活動": "筋の発揮する力と外的負荷が等しく、筋の長さが変化しない活動。",
  "短縮性": "筋が力を発揮しながら短くなる活動。",
  "伸張性": "筋が力を発揮しながら長くなる活動。",
  "等尺性": "筋の長さが変化しない活動。",
  "受動的伸張": "筋が自ら力を発揮するのではなく、外力によって伸張される状態。",
  "伸張性のみ": "スクワットのしゃがむ局面では該当するが、問題の条件によっては他の筋活動様式も存在する。",
  "等尺性のみ": "姿勢安定に関わる筋ではみられるが、スクワット全体では短縮性・伸張性も存在する。",
  "筋活動はない": "スクワットでは動作を支える筋活動が生じるため適切ではない。",
  "タイプⅠ": "酸化能力と疲労耐性が高く、収縮・弛緩速度が遅い線維。",
  "タイプⅠ線維": "SO線維とも呼ばれ、酸化能力と疲労耐性が高い。",
  "タイプⅡa": "中程度の酸化能力と無酸素性能力を持ち、ある程度の疲労耐性を持つ線維。",
  "タイプⅡa線維": "FOG線維とも呼ばれ、中程度の酸化能力と無酸素性能力を持つ。",
  "タイプⅡx": "無酸素性能力に優れ、力は強いが疲労しやすい線維。",
  "タイプⅡx線維": "FG線維とも呼ばれ、無酸素性能力に優れ、力は強いが疲労しやすい。",
  "タイプⅡ、特にⅡx": "短時間で大きな力を発揮する活動ではタイプⅡの貢献度が高く、Ⅱxは特に力が強いが疲労しやすい。",
  "タイプⅠのみ": "持久的活動ではタイプⅠの貢献度が高いが、運動では他の線維が一切関与しないという意味ではない。",
  "タイプⅡaのみ": "タイプⅡaは中間的な特性を持つが、問題の条件だけでⅡaのみと限定する根拠はない。",
  "タイプⅡxのみ": "タイプⅡxは大きな力を発揮するが、他の線維が関与しないという意味ではない。",
  "筋線維タイプに違いはない": "タイプⅠ、Ⅱa、Ⅱxには酸化能力、疲労耐性、収縮速度などの違いがある。",
  "脳と脊髄": "中枢神経系（CNS）を構成する。",
  "脳と筋肉": "脳はCNSに含まれるが、筋肉は神経系の構成要素ではない。",
  "脊髄と腱": "脊髄はCNSに含まれるが、腱は神経系の構成要素ではない。",
  "末梢神経と筋肉": "末梢神経はPNSに含まれるが、筋肉は神経系の構成要素ではない。",
  "運動（遠心性）神経": "中枢から末梢へ運動の指令を送る神経。",
  "感覚（求心性）神経": "末梢から中枢へ感覚情報を送る神経。",
  "樹状突起": "他のニューロンからの信号を受け取るアンテナ部分。",
  "軸索": "細胞体から伸び、信号を伝える長い構造。",
  "筋紡錘": "筋の長さの変化、特に急速な伸張を検知する感覚受容器。",
  "GTO": "ゴルジ腱器官。筋が発揮する力（張力）を検知する感覚受容器。",
  "筋紡錘＝長さ、GTO＝力": "筋紡錘は筋長・伸張、GTOは筋が発揮する力（張力）を検知する。",
  "筋紡錘＝筋長・伸張、GTO＝張力": "筋紡錘は筋長・伸張、GTOは張力を検知する。",
  "筋紡錘＝張力、GTO＝筋長": "筋紡錘とGTOの検知対象が逆になっている。",
  "GTO＝長さ、筋紡錘＝力": "筋紡錘とGTOの検知対象が逆になっている。",
  "伸張反射": "急速な筋伸張に対して、伸張された筋を収縮させる反射。",
  "伸張反射を利用する": "急速な伸張の直後に短縮性筋活動を行うことで、より力強い収縮を引き出す仕組み。",
  "運動単位の動員": "活動させる運動単位の数を増やして力を調節する仕組み。",
  "発火頻度の調節（Rate coding）": "すでに活動している運動単位の発火頻度を増やして力を調節する仕組み。",
  "タイプⅠ→Ⅱa→Ⅱx": "サイズの原理による動員順序。負荷が増えるにつれてタイプⅠ、Ⅱa、Ⅱxの順に動員される。",
  "タイプⅡx→Ⅱa→Ⅰ": "サイズの原理とは逆の順序。正しい順序はタイプⅠ→Ⅱa→Ⅱx。",
  "タイプⅡa→Ⅰ→Ⅱx": "タイプⅠが最初に動員されるというサイズの原理に合わない順序。",
  "Ⅱa→Ⅱx→Ⅰ": "タイプⅠが最初に動員されるというサイズの原理に合わない順序。",
  "タイプⅡa→Ⅱx→Ⅰ": "タイプⅠが最初に動員されるというサイズの原理に合わない順序。",
  "すべて同時": "軽い負荷では一部の運動単位から動員され、負荷が増えるにつれて追加されるため適切ではない。",
  "骨幹": "長骨の中央の長い部分。",
  "骨端": "長骨の両端の部分。",
  "骨膜": "骨の表面を覆う膜。",
  "海綿骨": "密度が低く、長骨内部や椎骨などに存在する骨組織。",
  "軸性骨格": "頭蓋、脊柱、胸骨、肋骨などからなる骨格。",
  "付属性骨格": "上肢・下肢の骨からなる骨格。",
  "破骨細胞": "古い骨を破壊する細胞。",
  "骨芽細胞": "新しい骨の合成を促す細胞。",
  "破骨細胞と骨芽細胞": "骨のリモデリングに関わる2種類の細胞。",
  "ウォルフの法則": "骨は課せられたストレス（負荷）に対して適応するという考え方。",
  "骨は課せられたストレス（負荷）に対して適応する": "ウォルフの法則の基本的な考え方。",
  "骨は負荷に関係なく一定の構造を保つ": "骨は負荷に応じて適応するため、この記述はウォルフの法則と反する。",
  "骨密度はカルシウム摂取量だけで決まる": "骨の適応には力学的負荷も関わるため、「だけで決まる」とするのは不適切。",
  "腱": "筋と骨を結合する組織。主にコラーゲンで構成される。",
  "靭帯": "骨と骨をつなぐ組織。コラーゲンに加えてエラスチンを含む。",
  "筋膜": "筋などを取り囲む結合組織で、骨と骨をつなぐ靭帯とは異なる。",
  "筋→腱→骨": "筋が生み出した力を腱を通じて骨へ伝える関係。",
  "筋→靭帯→骨": "靭帯は骨と骨をつなぐ組織であり、筋と骨を直接つなぐものではない。",
  "筋→GTO→骨": "GTOは力を検知する感覚受容器であり、筋と骨をつなぐ構造ではない。",
  "筋→筋紡錘→骨": "筋紡錘は筋の長さを検知する感覚受容器であり、筋と骨をつなぐ構造ではない。",
  "神経系が信号を送り、神経筋接合部で筋に伝わり、筋が力を生み、腱を通じて骨を動かす": "神経から筋へ信号が伝わり、筋が発揮した力が腱を通じて骨へ伝わり、運動が生じるという章全体の流れ。",
  "各用語を独立して暗記するため": "章の知識は相互に関連しており、単独暗記だけでは身体運動の流れを理解しにくい。",
  "身体運動が生じる一連のストーリーとして理解するため": "神経系、筋系、腱、骨格系を一連の流れとして理解することが重要。",
  "骨が神経を作り、筋が骨を分解する": "神経系・筋系・骨格系の役割を逆にした記述。",
  "筋が骨を直接押して関節を動かす": "筋は収縮して腱を介して骨を引っ張ることで関節運動に関与する。",
  "腱が神経信号を作り、骨が筋を収縮させる": "腱や骨が神経信号を作ったり筋を収縮させたりするわけではない。",
  "両方とも太い": "ミオシンは太いフィラメント、アクチンは細いフィラメントであり、両方が太いわけではない。",
  "両方とも細い": "ミオシンは太いフィラメント、アクチンは細いフィラメントである。",
  "ミオシン＝太い、アクチン＝細い": "ミオシンは太いフィラメント、アクチンは細いフィラメント。",
  "ミオシン＝細い、アクチン＝太い": "ミオシンとアクチンの太さが逆になっている。",
  "神経終末": "神経筋接合部で神経側から信号を伝える終末部。",
  "骨膜": "骨の表面を覆う膜。",
  "骨膜細胞": "骨膜は骨表面を覆う膜であり、問題の筋線維内部の構造ではない。",
  "筋鞘": "筋細胞を包む細胞膜。",
  "ミオグロビン": "筋線維内で酸素に関係するタンパク質。筋原線維そのものではない。",
  "ネプリン": "この章で筋収縮の基本構造として問われているサルコメアや筋原線維とは異なるタンパク質。",
  "トロポニンとトロポミオシン": "どちらもアクチンフィラメントに関わる調節タンパク質。",
  "筋小胞体がATPを放出する": "筋小胞体はATPを放出する構造ではなく、カルシウムイオンを放出する。",
  "ATPがアクチンを分解する": "ATPはアクチンを分解するためではなく、ミオシン頭部の状態変化やアクチンからの解離などに関わる。",
  "Z線が筋線維の中を移動する": "筋収縮ではフィラメントが滑り込むのであり、Z線が筋線維内を移動するわけではない。",
  "サルコメアが分解される": "筋収縮ではサルコメアが分解されるのではなく、フィラメントが滑り込むことで短縮する。",
  "カルシウムがトロポニンに結合する": "カルシウムがトロポニンに結合することが、トロポミオシンを移動させる引き金になる。",
  "骨芽細胞を直接刺激する": "骨芽細胞は骨形成に関わるが、筋紡錘の伸張反射を説明する仕組みではない。",
  "ウォルフの法則を利用する": "ウォルフの法則は骨の負荷適応を説明する考え方で、急速な筋伸張による反射ではない。",
  "筋紡錘の短縮": "筋紡錘は筋の長さの変化を検知する受容器であり、伸張反射の説明として筋紡錘そのものの短縮を指すものではない。",
  "GTOだけを刺激する": "GTOは張力を検知するが、急速な筋伸張による伸張反射の中心は筋紡錘である。",
  "腱が短縮する": "腱は筋収縮の力を骨へ伝える結合組織であり、筋活動様式の分類対象となる筋そのものではない。",
  "骨芽細胞が活動する": "骨芽細胞は骨形成に関わる細胞で、筋線維内部で起こるCa²⁺放出の次の段階ではない。",
  "錘内線維": "筋紡錘の内部にある特殊な筋線維。",
  "錘内線維のみ": "筋紡錘は錘内線維を含むが、問題の「長距離走で貢献度が高い筋線維タイプ」という分類とは異なる。",
  "錘外線維のみ": "錘外線維は通常の筋線維で、筋紡錘内の特殊な錘内線維とは異なる。",
  "筋紡錘による受動活動": "筋紡錘は受動的に伸ばされることを検知するが、プライオメトリック動作では伸張反射という反射機構が利用される。",
  "両方＝骨密度": "筋紡錘とGTOは骨密度を検知するセンサーではない。",
  "ACh＝長さ、Ca²⁺＝力": "AChとCa²⁺は神経筋接合部や筋収縮に関わる物質で、筋長と張力を検知するセンサーの組み合わせではない。",
  "筋紡錘＝ACh、GTO＝Ca²⁺": "筋紡錘とGTOはAChやCa²⁺を検知するセンサーではない。",
  "骨の長さ": "筋紡錘やGTOが主に検知する対象ではない。",
  "骨密度": "筋紡錘やGTOが主に検知する対象ではない。",
  "筋線維の色": "筋線維タイプの特徴を示す問いでは、色だけでタイプを決めることはできない。",
  "アドレナリン": "神経筋接合部で筋線維へ信号を伝える主な神経伝達物質として問われているのはACh。",
  "ドーパミン": "神経伝達物質の一つだが、神経筋接合部で筋へ信号を伝える物質ではない。",
  "セロトニン": "神経伝達物質の一つだが、神経筋接合部で筋へ信号を伝える物質ではない。",
  "体性神経のみ": "体性神経系は骨格筋の随意運動に関わるが、神経系全体には自律神経系なども含まれる。",
  "交感神経のみ": "交感神経は自律神経系の一部であり、神経系全体を表すものではない。",
  "筋と腱の接合部を指す": "GTOは筋と腱の接合部に存在する感覚受容器だが、運動単位の定義ではない。",
  "1本の筋線維だけを指す": "運動単位は1本の筋線維ではなく、1つの運動神経とそれが支配する筋線維のグループ。",
  "1つの運動神経と、それが支配する筋線維のグループを指す": "運動単位の定義。1つの運動神経と、それが支配する筋線維群からなる。",
  "末梢神経と筋肉": "末梢神経はPNSに含まれるが、筋肉は神経系の分類には含まれない。",
  "脳と筋肉": "脳はCNSに含まれるが、筋肉はCNSの構成要素ではない。",
  "脳と脊髄": "CNSは脳と脊髄からなる。",
  "筋→腱→骨": "筋が生み出した力を腱が骨へ伝える。",
  "筋→靭帯→骨": "靭帯は骨と骨をつなぐ組織。",
  "筋→GTO→骨": "GTOは張力を検知する感覚受容器。",
  "筋→筋紡錘→骨": "筋紡錘は筋の長さ・伸張を検知する感覚受容器。",
  "骨格筋→筋線維→筋原線維→筋フィラメント→サルコメア": "教材の階層を大きい順に並べた関係。筋フィラメントはサルコメアを構成し、サルコメアは筋原線維の中で連なっている。",
  "サルコメア→筋フィラメント→筋原線維→筋線維→骨格筋": "大きさの順序が逆向きに並んでいる。",
  "筋線維→骨格筋→筋原線維→サルコメア→筋フィラメント": "骨格筋は筋線維より大きな構造なので、順序が不適切。",
  "骨格筋→筋原線維→筋線維→筋フィラメント→サルコメア": "筋線維は筋原線維より大きな構造なので、順序が不適切。",
  "骨格筋を神経から切り離して考えるため": "身体運動は神経系、筋系、腱、骨格系が連携して生じるため、この理解とは反する。",
  "筋線維タイプを無視して考えるため": "筋線維タイプは筋の機能や運動特性を理解する重要な要素。",
  "骨が神経を作り、筋が骨を分解する": "神経系・筋系・骨格系の役割を逆にした記述。",
  "腱が神経信号を作り、骨が筋を収縮させる": "神経信号は神経系から伝わり、筋収縮は筋線維で起こる。",
  "骨リモデリング": "古い骨を壊し、新しい骨を作る過程。",
  "骨密度": "骨の強さや構造を評価する指標の一つで、筋紡錘やGTOの検知対象ではない。",
  "骨は筋収縮によって直接短縮する": "骨は筋の収縮で引っ張られて運動するが、骨自体が筋のように短縮するわけではない。",
  "骨は負荷に関係なく一定の構造を保つ": "骨は負荷に応じて適応するため、ウォルフの法則と反する。",
  "筋が骨を直接押して関節を動かす": "筋は収縮して腱を介して骨を引っ張り、関節運動を生み出す。",
  "筋が骨を直接押して関節を動かす": "筋は収縮して腱を介して骨を引っ張り、関節運動を生み出す。",
  "両方とも同じ情報（筋の長さ）を検知する": "筋紡錘は筋長・伸張、GTOは張力を検知するため、同じではない。",
  "筋紡錘とGTO": "筋紡錘は筋長・伸張、GTOは張力を検知するという役割分担がある。",
  "骨と骨をつなぐ組織を指す": "靭帯の説明。腱は筋と骨を結合する。",
  "筋と骨を結合する組織を指す": "腱の説明。靭帯は骨と骨をつなぐ。",
  "最大努力に近い高負荷": "運動単位の追加動員に関係するが、選択肢としてのこの表現だけでは正解を示さない。",
  "すべて同じ": "筋線維タイプには酸化能力、疲労耐性、収縮速度などの違いがある。",
  "筋活動はない": "スクワットでは動作と姿勢保持のため筋活動が必要。",
  "完全弛緩": "スクワット中は筋が動作と姿勢保持に関与するため適切ではない。",
  "弛緩": "筋の力発揮がなくなる状態を指し、筋活動様式の3分類そのものではない。",
  "滑走性": "フィラメント滑走説は筋収縮の仕組みを説明する理論で、筋活動様式の名称ではない。",
  "骨リモデリング": "骨が古い組織を壊し新しい組織を作る過程で、筋収縮の直接的な段階ではない。",
  "骨芽細胞が活動する": "骨芽細胞は骨形成に関わる細胞で、筋収縮のCa²⁺放出の次に起こる現象ではない。",
  "錘内線維のみ": "筋紡錘内に存在する特殊な線維だが、長距離走で高い貢献度を持つ筋線維タイプの分類とは別の概念。",
  "錘外線維のみ": "通常の筋線維であり、筋紡錘内部の錘内線維とは別の構造。",
  "筋紡錘の短縮": "筋紡錘は筋長の変化を検知する受容器であり、伸張反射の説明としては適切ではない。",
  "GTOだけを刺激する": "GTOは張力を検知するが、急速な伸張に対する伸張反射は筋紡錘が中心となる。",
  "ウォルフの法則を利用する": "ウォルフの法則は骨の負荷適応を説明する考え方で、筋伸張直後の反射ではない。",
  "両方＝骨密度": "筋紡錘とGTOは骨密度を検知する器官ではない。",
  "ACh＝長さ、Ca²⁺＝力": "AChとCa²⁺は筋収縮の過程に関わる物質で、筋長・張力を検知する受容器の組み合わせではない。",
  "筋紡錘＝ACh、GTO＝Ca²⁺": "筋紡錘とGTOはAChやCa²⁺を検知する器官ではない。"
};

function screenEl() {
  return document.getElementById("screen");
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.nav === name);
  });
}

function renderHome() {
  state.lastViewed = "home";
  saveState();
  setActiveNav("home");

  const answered = answeredCount();
  const correct = correctCount();

  screenEl().innerHTML = `
    <section class="hero">
      <div class="label">CPTmate v${APP_VERSION}</div>
      <h2>今日も1問ずつ、確実に。</h2>
      <p>問題を解く → 解説で理解する → 間違いを復習する。この学習サイクルをここから育てていきます。</p>
      <button class="primary-btn full" onclick="startPractice()">問題演習を始める</button>
    </section>

    <div class="section-title"><h2>学習状況</h2><span>ローカル保存</span></div>
    <section class="card">
      <div class="stat-grid">
        <div class="stat"><div class="num">${answered}</div><div class="label">解答済み</div></div>
        <div class="stat"><div class="num">${accuracy()}%</div><div class="label">正答率</div></div>
      </div>
    </section>

    <div class="section-title"><h2>学習メニュー</h2></div>
    <div class="menu-grid">
      <button class="menu-item" onclick="startPractice()"><strong>通常問題</strong><small>第1章の問題を解く</small></button>
      <button class="menu-item" onclick="renderReview()"><strong>間違えた問題</strong><small>${wrongCount()}問を復習</small></button>
      <button class="menu-item" onclick="renderStats()"><strong>学習状況</strong><small>正答率と進捗を見る</small></button>
      <button class="menu-item" onclick="renderSettings()"><strong>設定</strong><small>データ管理</small></button>
    </div>

    <div class="section-title"><h2>現在のコンテンツ</h2></div>
    <section class="card">
      <h3>第1章：筋系、神経系、骨格系</h3>
      <p style="color:var(--muted);line-height:1.7;margin:0;">第1章の問題演習を拡張中。今後、ケーススタディ・図問題・復習機能を順次強化します。</p>
    </section>
  `;
}

function startPractice(index = 0) {
  state.currentIndex = index;
  state.lastViewed = "practice";
  saveState();
  renderQuestion();
}


function explainChoice(q, choice, index) {
  if (CHOICE_EXPLANATIONS[choice]) return CHOICE_EXPLANATIONS[choice];

  const correctChoice = q.choices[q.answer];
  if (index === q.answer) return q.explanation;

  return `この選択肢は「${correctChoice}」を問う今回の条件には当てはまりません。`;
}

function ensureOptionReviewStyles() {
  if (document.getElementById("cptmate-option-review-styles")) return;
  const style = document.createElement("style");
  style.id = "cptmate-option-review-styles";
  style.textContent = `
    .option-review {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(38, 94, 99, 0.14);
    }
    .option-review-title {
      font-size: 15px;
      font-weight: 800;
      margin-bottom: 12px;
      color: var(--text, #24383a);
    }
    .option-explanation {
      display: block !important;
      width: 100% !important;
      box-sizing: border-box !important;
      margin: 0 0 10px !important;
      padding: 13px 14px !important;
      border: 1px solid rgba(30, 60, 65, 0.12) !important;
      border-radius: 14px !important;
      background: #fff !important;
      overflow: hidden !important;
    }
    .option-explanation.is-correct {
      border-left: 5px solid #2f8f78 !important;
    }
    .option-explanation.is-wrong {
      border-left: 5px solid #c8ced0 !important;
    }
    .option-explanation-head {
      display: grid !important;
      grid-template-columns: 34px minmax(0, 1fr) auto !important;
      align-items: center !important;
      column-gap: 10px !important;
      width: 100% !important;
      min-width: 0 !important;
    }
    .option-explanation-letter {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 9px !important;
      background: #edf3f3 !important;
      color: #285f63 !important;
      font-size: 15px !important;
      font-weight: 900 !important;
      line-height: 1 !important;
      flex: 0 0 32px !important;
    }
    .option-explanation-choice {
      display: block !important;
      min-width: 0 !important;
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 800 !important;
      line-height: 1.55 !important;
      color: var(--text, #24383a) !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }
    .option-explanation-mark {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-width: 28px !important;
      font-size: 20px !important;
      line-height: 1 !important;
      white-space: nowrap !important;
    }
    .option-explanation-body {
      display: block !important;
      margin: 9px 0 0 44px !important;
      padding-top: 9px !important;
      border-top: 1px solid rgba(30, 60, 65, 0.08) !important;
      font-size: 14px !important;
      line-height: 1.75 !important;
      color: var(--muted, #607174) !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }
    @media (max-width: 430px) {
      .option-explanation { padding: 12px !important; }
      .option-explanation-head { grid-template-columns: 32px minmax(0, 1fr) auto !important; column-gap: 8px !important; }
      .option-explanation-letter { width: 30px !important; height: 30px !important; flex-basis: 30px !important; }
      .option-explanation-choice { font-size: 15px !important; }
      .option-explanation-body { margin-left: 40px !important; font-size: 13.5px !important; }
    }
  `;
  document.head.appendChild(style);
}

function renderOptionReview(q) {
  const letters = ["A", "B", "C", "D"];

  return `
    <div class="option-review">
      <div class="option-review-title">選択肢を確認</div>
      ${q.choices.map((choice, i) => `
        <div class="option-explanation ${i === q.answer ? "is-correct" : "is-wrong"}">
          <div class="option-explanation-head">
            <span class="option-explanation-letter">${letters[i]}</span>
            <span class="option-explanation-choice">${choice}</span>
            <span class="option-explanation-mark">${i === q.answer ? "⭕" : "✕"}</span>
          </div>
          <div class="option-explanation-body">
            ${explainChoice(q, choice, i)}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}


function ensureFigureStyles() {
  if (document.getElementById("cptmateFigureStyles")) return;
  const style = document.createElement("style");
  style.id = "cptmateFigureStyles";
  style.textContent = `
    .question-figure {
      margin: 14px 0 18px;
      padding: 10px;
      background: #f7fbfb;
      border: 1px solid var(--line);
      border-radius: 18px;
      overflow: hidden;
    }
    .question-figure img {
      display: block;
      width: 100%;
      max-height: 430px;
      object-fit: contain;
      border-radius: 12px;
      background: #fff;
    }
    .question-figure-caption {
      margin: 8px 4px 0;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
    }
    .figure-source-note {
      margin-top: 6px;
      font-size: 11px;
      color: var(--muted);
      text-align: center;
    }
  `;
  document.head.appendChild(style);
}

function renderQuestionFigure(q) {
  if (!q.image) return "";
  ensureFigureStyles();
  const caption = q.figureCaption || ({
    "assets/figures/sarcomere_structure.webp": "サルコメア・アクチン・ミオシンと各帯の関係",
    "assets/figures/filament_sliding.webp": "フィラメント滑走説：収縮前と収縮後の比較",
    "assets/figures/contraction.svg": "神経から筋収縮までの流れ（CPTmate模式図）",
    "assets/figures/neuron.svg": "神経細胞の基本構造（CPTmate模式図）",
    "assets/figures/spindle_gto.svg": "筋紡錘とゴルジ腱器官の役割（CPTmate模式図）",
    "assets/figures/long_bone.svg": "長骨の主な構造（CPTmate模式図）",
    "assets/figures/skeleton.svg": "軸性骨格と付属性骨格（CPTmate模式図）"
  })[q.image] || "図を確認しながら考えてみましょう。";
  return `
    <figure class="question-figure">
      <img src="${q.image}" alt="${caption}" loading="lazy">
      <figcaption class="question-figure-caption">${caption}</figcaption>
    </figure>
  `;
}

function renderQuestion() {
  ensureOptionReviewStyles();
  setActiveNav("practice");
  const q = QUESTIONS[state.currentIndex % QUESTIONS.length];
  const saved = state.answers[q.id];
  const bookmarked = !!state.bookmarks[q.id];
  const letters = ["A", "B", "C", "D"];

  let choices = q.choices.map((choice, i) => {
    let cls = "";
    if (saved) {
      if (i === q.answer) cls = "correct";
      else if (i === saved.selected && !saved.correct) cls = "wrong";
    }
    return `<button class="choice ${cls}" ${saved ? "disabled" : ""} onclick="answerQuestion(${i})">
      <span class="letter">${letters[i]}</span><span>${choice}</span>
    </button>`;
  }).join("");

  const result = saved ? `
    <div class="result ${saved.correct ? "correct" : "wrong"}">
      <div class="result-status">
        <span class="result-status-icon">${saved.correct ? "⭕" : "❌"}</span>
        <span>${saved.correct ? "正解" : "不正解"}</span>
      </div>

      ${saved.correct ? "" : `
        <div class="correct-answer-line">
          正解：${letters[q.answer]}　${q.choices[q.answer]}
        </div>
      `}

      <div class="explanation">
        <strong>解説</strong>
        <br>
        ${q.explanation}
      </div>

      ${renderOptionReview(q)}
    </div>

    <button class="primary-btn full" onclick="nextQuestion()">次の問題</button>
  ` : "";

  screenEl().innerHTML = `
    <div class="back-row">
      <button class="back-btn" onclick="renderHome()">‹</button>
      <h2>問題演習</h2>
    </div>

    <section class="card">
      ${q.type === "case" ? `
        <div class="case-badge">
          CASE STUDY${q.caseTitle ? `　${q.caseTitle}` : ""}
        </div>
      ` : ""}

      <div class="question-head">
        <span>第${q.chapter}章　${q.category}</span>
        <span>${state.currentIndex + 1} / ${QUESTIONS.length}</span>
      </div>
      <div class="bookmark-row">
        <button class="bookmark" onclick="toggleBookmark('${q.id}')">${bookmarked ? "★" : "☆"}</button>
      </div>
      ${saved ? renderQuestionFigure(q) : (q.figureMode === "question" ? renderQuestionFigure(q) : "")}
      <p class="question-text">${q.question}</p>
      <div>${choices}</div>
      ${result}
    </section>
  `;
}

function answerQuestion(selected) {
  const q = QUESTIONS[state.currentIndex % QUESTIONS.length];
  const correct = selected === q.answer;
  state.answers[q.id] = {
    selected,
    correct,
    answeredAt: new Date().toISOString()
  };
  saveState();
  renderQuestion();
}

function nextQuestion() {
  state.currentIndex = (state.currentIndex + 1) % QUESTIONS.length;
  saveState();
  renderQuestion();
}

function toggleBookmark(id) {
  state.bookmarks[id] = !state.bookmarks[id];
  saveState();
  renderQuestion();
}

function wrongCount() {
  return Object.values(state.answers).filter(a => !a.correct).length;
}

function renderReview() {
  setActiveNav("review");
  const wrong = QUESTIONS.filter(q => state.answers[q.id] && !state.answers[q.id].correct);

  screenEl().innerHTML = `
    <div class="back-row"><h2>復習</h2></div>
    <section class="card">
      <h3>間違えた問題</h3>
      ${wrong.length ? wrong.map(q => `
        <div class="list-item">
          <div><strong>${q.category}</strong><br><small>${q.question}</small></div>
          <button class="secondary-btn" onclick="startSpecific('${q.id}')">解く</button>
        </div>
      `).join("") : `<div class="empty">まだ間違えた問題はありません。<br>問題を解いてみましょう。</div>`}
    </section>
    <section class="card">
      <h3>ブックマーク</h3>
      ${QUESTIONS.filter(q => state.bookmarks[q.id]).map(q => `
        <div class="list-item">
          <div><strong>${q.category}</strong><br><small>${q.question}</small></div>
          <button class="secondary-btn" onclick="startSpecific('${q.id}')">解く</button>
        </div>
      `).join("") || `<div class="empty">ブックマークした問題はありません。</div>`}
    </section>
  `;
}

function startSpecific(id) {
  const index = QUESTIONS.findIndex(q => q.id === id);
  if (index >= 0) startPractice(index);
}

function renderStats() {
  setActiveNav("stats");
  const total = QUESTIONS.length;
  const answered = answeredCount();
  const correct = correctCount();

  screenEl().innerHTML = `
    <div class="back-row"><h2>学習状況</h2></div>
    <section class="card">
      <div class="stat-grid">
        <div class="stat"><div class="num">${answered}</div><div class="label">解答済み</div></div>
        <div class="stat"><div class="num">${accuracy()}%</div><div class="label">正答率</div></div>
        <div class="stat"><div class="num">${correct}</div><div class="label">正解数</div></div>
        <div class="stat"><div class="num">${wrongCount()}</div><div class="label">不正解数</div></div>
      </div>
    </section>

    <section class="card">
      <h3>第1章の進捗</h3>
      <div style="display:flex;justify-content:space-between;font-size:13px;">
        <span>${answered} / ${total} 問</span><span>${Math.round(answered / total * 100)}%</span>
      </div>
      <div class="progress"><div style="width:${Math.min(100, answered / total * 100)}%"></div></div>
    </section>
  `;
}

function renderSettings() {
  setActiveNav("settings");
  screenEl().innerHTML = `
    <div class="back-row"><h2>設定</h2></div>
    <section class="card">
      <h3>データ</h3>
      <p style="color:var(--muted);line-height:1.7;">v0.1では学習データをこのiPhoneのブラウザ内に保存しています。正式版ではバックアップ書き出し・復元を追加します。</p>
      <button class="secondary-btn full" onclick="exportBackup()">現在の学習データをバックアップ</button>
      <button class="secondary-btn full" onclick="resetProgress()">学習データをリセット</button>
    </section>
    <section class="card">
      <h3>アプリ情報</h3>
      <p style="margin:0 0 14px;color:var(--muted);">CPTmate v${APP_VERSION}<br>GitHub Pages向け試作版</p>
      <button class="primary-btn full" onclick="checkForAppUpdate()">最新版を確認・更新</button>
      <p id="updateStatus" style="margin:10px 0 0;color:var(--muted);font-size:13px;text-align:center;">現在のバージョン：v${APP_VERSION}</p>
    </section>
  `;
}

function compareVersions(a, b) {
  const pa = String(a).split(".").map(n => parseInt(n, 10) || 0);
  const pb = String(b).split(".").map(n => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0;
    const y = pb[i] || 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}

async function checkForAppUpdate() {
  const status = document.getElementById("updateStatus");
  if (status) status.textContent = "最新版を確認しています…";

  try {
    const res = await fetch(`version.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const latest = await res.json();
    const latestVersion = String(latest.version || "").trim();

    if (!latestVersion) throw new Error("version.jsonのバージョン情報がありません。");

    if (compareVersions(latestVersion, APP_VERSION) > 0) {
      if (!confirm(`最新版 v${latestVersion} が利用できます。\n\n最新版へ更新しますか？`)) {
        if (status) status.textContent = `現在のバージョン：v${APP_VERSION}`;
        return;
      }

      if (status) status.textContent = `v${latestVersion} へ更新しています…`;
      location.replace(`${location.pathname}?update=${Date.now()}${location.hash}`);
      return;
    }

    if (status) status.textContent = `最新版です（v${APP_VERSION}）`;
    alert(`最新版です。現在のバージョンは v${APP_VERSION} です。`);
  } catch (error) {
    console.error(error);
    if (status) status.textContent = "更新確認に失敗しました。通信状態を確認してください。";
    alert("最新版を確認できませんでした。\n通信状態を確認して、もう一度お試しください。");
  }
}

function exportBackup() {
  const payload = {
    app: "CPTmate",
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CPTmate_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function resetProgress() {
  if (!confirm("学習履歴とブックマークをリセットします。よろしいですか？")) return;
  state = { ...defaultState };
  saveState();
  renderSettings();
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const nav = btn.dataset.nav;
    if (nav === "home") renderHome();
    if (nav === "practice") startPractice();
    if (nav === "review") renderReview();
    if (nav === "stats") renderStats();
    if (nav === "settings") renderSettings();
  });
});

document.getElementById("bookmarkFilterBtn").addEventListener("click", renderReview);

renderHome();
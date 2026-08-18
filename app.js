const APP_VERSION = "0.2.43";

const QUESTIONS = [
  {
    "id": "ch1-q001",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-q002",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "question": "構造の大きい順として正しいものはどれか。",
    "choices": [
      "サルコメア→筋フィラメント→筋原線維→筋線維→骨格筋",
      "骨格筋→筋線維→筋原線維→サルコメア→筋フィラメント",
      "筋線維→骨格筋→筋原線維→サルコメア→筋フィラメント",
      "骨格筋→筋原線維→筋線維→筋フィラメント→サルコメア"
    ],
    "answer": 1,
    "explanation": "骨格筋の内部では、筋線維の中に筋原線維が並び、筋原線維はサルコメアが連なって構成される。サルコメアはアクチンとミオシンなどの筋フィラメントから構成される。",
    "sourceType": "original"
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
    "explanation": "筋線維の中には、筋線維の長さ方向に多数の筋原線維（Myofibril）が並んでいる。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q004",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-q005",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-q006",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-q007",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-q008",
    "chapter": 1,
    "category": "筋系・フィラメント",
    "type": "standard",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
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
    "explanation": "安静時はトロポミオシンがアクチン上のミオシン結合部位を覆っている。",
    "sourceType": "original"
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
    "explanation": "カルシウムイオンがトロポニンと結合するとトロポミオシンが移動し、アクチン上のミオシン結合部位が露出する。",
    "sourceType": "original"
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
    "explanation": "神経筋接合部ではアセチルコリン（ACh）が放出され、筋線維側のACh受容体と結合する。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q012",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "figureId": "fig-ch1-contraction",
    "image": "assets/figures/contraction_fig1_5.svg",
    "figureMode": "after",
    "question": "筋収縮の過程で最初に起こるものはどれか。",
    "choices": [
      "カルシウムがトロポニンに結合する",
      "ミオシンがアクチンに結合する",
      "神経の活動電位が神経筋接合部に到達しAChが放出される",
      "筋小胞体がATPを放出する"
    ],
    "answer": 2,
    "explanation": "神経の活動電位が神経筋接合部に到達するとAChが放出され、その後、筋線維側の受容体への結合へ進む。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q013",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "figureId": "fig-ch1-contraction",
    "image": "assets/figures/contraction_fig1_5.svg",
    "figureMode": "after",
    "question": "AChが筋線維側で結合する場所はどれか。",
    "choices": [
      "ACh受容体",
      "トロポニン",
      "ミオシン頭部",
      "GTO"
    ],
    "answer": 0,
    "explanation": "AChはシナプス間隙を越えて筋線維側の運動終板にあるACh受容体と結合する。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q014",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "figureId": "fig-ch1-contraction",
    "image": "assets/figures/contraction_fig1_5.svg",
    "figureMode": "after",
    "question": "筋線維の活動電位を細胞内部へ伝える構造はどれか。",
    "choices": [
      "T管",
      "筋小胞体",
      "M線",
      "腱"
    ],
    "answer": 0,
    "explanation": "活動電位は筋鞘に発生し、T管を通って細胞内部へ伝わる。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q015",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "figureId": "fig-ch1-contraction",
    "image": "assets/figures/contraction_fig1_5.svg",
    "figureMode": "after",
    "question": "活動電位を受けてカルシウムイオンを放出する構造はどれか。",
    "choices": [
      "筋小胞体",
      "筋原線維",
      "腱",
      "骨膜"
    ],
    "answer": 0,
    "explanation": "活動電位がT管を通って筋線維内部へ伝わると、筋小胞体からCa²⁺が放出される。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q016",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "figureId": "fig-ch1-filament-sliding",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "フィラメント滑走説：収縮前と収縮後の比較",
    "sourceType": "original"
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
    "explanation": "短縮性筋活動では筋の発揮する力が外的負荷を上回り、筋が短縮する。",
    "sourceType": "original"
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
    "explanation": "伸張性筋活動では筋の発揮する力が外的負荷の抵抗を下回り、筋が伸張されながら力を発揮する。",
    "sourceType": "original"
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
    "explanation": "等尺性筋活動では筋の発揮する力と外的負荷が等しく、筋の長さが変化しない。",
    "sourceType": "original"
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
    "explanation": "バックスクワットでしゃがむ局面では、大腿四頭筋と大殿筋が伸張性筋活動を行う。",
    "sourceType": "original"
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
    "explanation": "タイプⅠ（SO）線維は酸化能力と疲労耐性が高く、収縮・弛緩速度は遅い。",
    "sourceType": "original"
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
    "explanation": "タイプⅡx（FG）線維は無酸素性能力に優れ、力は強いが疲労しやすいとされる。",
    "sourceType": "original"
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
    "explanation": "持久的な活動ではタイプⅠ線維の貢献度が高い。",
    "sourceType": "original"
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
    "explanation": "中枢神経系（CNS）は脳と脊髄から構成される。",
    "sourceType": "original"
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
    "explanation": "感覚（求心性）神経は末梢から中枢へ情報を送る。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q026",
    "chapter": 1,
    "category": "神経系・ニューロン",
    "type": "standard",
    "figureId": "fig-ch1-neuron",
    "image": "assets/figures/neuron_fig1_6.svg",
    "figureMode": "after",
    "question": "他のニューロンからの信号を受け取る「アンテナ部分」に相当する構造はどれか。",
    "choices": [
      "樹状突起",
      "軸索",
      "筋小胞体",
      "運動終板"
    ],
    "answer": 0,
    "explanation": "樹状突起は他のニューロンからの信号を受け取る部分として説明されている。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q027",
    "chapter": 1,
    "category": "神経系・ニューロン",
    "type": "standard",
    "figureId": "fig-ch1-neuron",
    "image": "assets/figures/neuron_fig1_6.svg",
    "figureMode": "after",
    "question": "細胞体から伸びる長い「ケーブル」に相当する構造はどれか。",
    "choices": [
      "樹状突起",
      "軸索",
      "筋鞘",
      "錘内線維"
    ],
    "answer": 1,
    "explanation": "軸索は細胞体から伸びる長い構造で、脊髄から筋肉まで信号を伝える。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q028",
    "chapter": 1,
    "category": "神経系・筋紡錘",
    "type": "standard",
    "figureId": "fig-ch1-spindle-gto",
    "image": "assets/figures/spindle_gto_fig1_7.svg",
    "figureMode": "after",
    "question": "筋紡錘が主に検知するものはどれか。",
    "choices": [
      "筋の長さ（伸張）の変化",
      "筋が発揮する張力",
      "骨密度",
      "ACh濃度"
    ],
    "answer": 0,
    "explanation": "筋紡錘は筋の長さの変化、特に急速な伸張を感知する。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q029",
    "chapter": 1,
    "category": "神経系・GTO",
    "type": "standard",
    "figureId": "fig-ch1-spindle-gto",
    "image": "assets/figures/spindle_gto_fig1_7.svg",
    "figureMode": "after",
    "question": "ゴルジ腱器官（GTO）が主に検知するものはどれか。",
    "choices": [
      "筋の長さ",
      "筋が発揮する力（張力）",
      "筋線維の色",
      "骨の長さ"
    ],
    "answer": 1,
    "explanation": "GTOは筋が発揮する力（張力）の大きさを検知するセンサーとして説明されている。",
    "sourceType": "original"
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
    "explanation": "運動単位は、1つの運動神経と、それが支配する筋線維のグループから構成される。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q031",
    "chapter": 1,
    "category": "神経系・サイズの原理",
    "type": "standard",
    "question": "タイプII線維の運動単位について、教科書の説明に合うものはどれか。",
    "choices": [
      "タイプI線維の運動単位よりサイズが小さく、閾値も低い",
      "タイプI線維の運動単位よりサイズが大きく、活性化するための閾値も高い",
      "タイプI線維の運動単位とサイズ・閾値は必ず同じ",
      "タイプII線維の運動単位は動員されない"
    ],
    "answer": 1,
    "explanation": "教科書では、タイプII線維の運動単位はタイプI線維の運動単位よりサイズが大きく、活性化するための閾値も高いと説明されている。",
    "sourceType": "original"
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
    "explanation": "筋力の調節には、運動単位の動員と発火頻度の調節（Rate coding）が関与する。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q033",
    "chapter": 1,
    "category": "骨格系",
    "type": "standard",
    "figureId": "fig-ch1-long-bone",
    "image": "assets/figures/long_bone_fig1_8.svg",
    "figureMode": "after",
    "question": "長骨の中央の長い部分を何というか。",
    "choices": [
      "骨端",
      "骨幹",
      "骨膜",
      "海綿骨"
    ],
    "answer": 1,
    "explanation": "骨幹（Diaphysis）は長骨の中央の長い部分である。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q034",
    "chapter": 1,
    "category": "骨格系",
    "type": "standard",
    "figureId": "fig-ch1-skeleton",
    "image": "assets/figures/skeleton_fig1_9.svg",
    "figureMode": "after",
    "question": "頭蓋・脊柱・胸骨・肋骨などを含む骨格はどれか。",
    "choices": [
      "付属性骨格",
      "軸性骨格",
      "末梢骨格",
      "筋骨格"
    ],
    "answer": 1,
    "explanation": "軸性骨格には頭蓋、脊柱、胸骨、肋骨が含まれ、重要臓器の保護や筋の付着部として機能する。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q035",
    "chapter": 1,
    "category": "骨格系・リモデリング",
    "type": "standard",
    "figureId": "fig-ch1-long-bone",
    "image": "assets/figures/long_bone_fig1_8.svg",
    "figureMode": "after",
    "question": "古い骨を破壊する細胞はどれか。",
    "choices": [
      "骨芽細胞",
      "破骨細胞",
      "筋線維",
      "骨膜細胞"
    ],
    "answer": 1,
    "explanation": "破骨細胞（Osteoclast）は古い骨を破壊する細胞である。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q036",
    "chapter": 1,
    "category": "骨格系・リモデリング",
    "type": "standard",
    "figureId": "fig-ch1-long-bone",
    "image": "assets/figures/long_bone_fig1_8.svg",
    "figureMode": "after",
    "question": "新しい骨の合成を促す細胞はどれか。",
    "choices": [
      "破骨細胞",
      "骨芽細胞",
      "GTO",
      "錘内線維"
    ],
    "answer": 1,
    "explanation": "骨芽細胞（Osteoblast）は新しい骨の合成を促す細胞である。",
    "sourceType": "original"
  },
  {
    "id": "ch1-q037",
    "chapter": 1,
    "category": "骨格系・ウォルフの法則",
    "type": "standard",
    "figureId": "fig-ch1-long-bone",
    "image": "assets/figures/long_bone_fig1_8.svg",
    "figureMode": "after",
    "question": "ウォルフの法則の説明として最も適切なのはどれか。",
    "choices": [
      "骨は負荷に関係なく一定の構造を保つ",
      "骨は課せられたストレス（負荷）に対して適応する",
      "骨密度はカルシウム摂取量だけで決まる",
      "骨は筋収縮によって直接短縮する"
    ],
    "answer": 1,
    "explanation": "ウォルフの法則は、骨が加えられたストレス（負荷）に応じて適応するという考え方である。",
    "sourceType": "original"
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
    "explanation": "腱は筋と骨を結合する組織である。",
    "sourceType": "original"
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
    "explanation": "靭帯は骨と骨をつなぐ組織で、コラーゲンに加えてエラスチンも含む。",
    "sourceType": "original"
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
    "explanation": "章のまとめでは、神経系→神経筋接合部→筋系（サルコメア）→腱→骨格系という一本の流れとして整理されている。",
    "sourceType": "original"
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
    "explanation": "まず神経の活動電位が神経筋接合部に到達してAChが放出される。その後、AChが受容体に結合し、筋鞘に活動電位が生じ、T管を介してCa²⁺放出へ進む。",
    "sourceType": "original"
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
    "explanation": "活動電位がT管を通って細胞内部へ伝わると、筋小胞体がCa²⁺を放出する。",
    "sourceType": "original"
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
    "explanation": "Ca²⁺がトロポニンと結合するとトロポミオシンが移動し、アクチン上のミオシン結合部位が露出する。",
    "sourceType": "original"
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
    "explanation": "スクワットでしゃがむ局面では、大腿四頭筋と大殿筋が伸張性筋活動を行う。",
    "sourceType": "original"
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
    "explanation": "スクワットで立ち上がる局面では、大腿四頭筋と大殿筋が短縮性筋活動を行う。",
    "sourceType": "original"
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
    "explanation": "脊柱起立筋や腹部の筋群は、動作中に等尺性筋活動によって姿勢を安定させる。",
    "sourceType": "original"
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
    "explanation": "長距離走やウォーキングなどの持久的活動では、タイプⅠ線維の貢献度が高い。",
    "sourceType": "original"
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
    "explanation": "スプリントやウエイトリフティングなどではタイプⅡ線維の貢献度が高く、特にタイプⅡxは大きな力を発揮できる一方、疲労しやすい。",
    "sourceType": "original"
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
    "explanation": "プライオメトリックトレーニングでは、素早い伸張の直後に短縮性筋活動を行い、伸張反射を利用してより力強い収縮を引き出す。",
    "sourceType": "original"
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
    "explanation": "筋紡錘は筋の長さの変化を、GTOは筋が発揮する力（張力）を検知する。",
    "sourceType": "original"
  },
  {
    "id": "ch1-case005-q01",
    "chapter": 1,
    "category": "ケーススタディ・運動単位",
    "type": "case",
    "caseId": "case-005",
    "caseTitle": "負荷増加と運動単位",
    "question": "高負荷でより大きな力を発揮する際、活動させる運動単位の数を増やして力を調節する仕組みはどれか。",
    "choices": [
      "運動単位の動員",
      "発火頻度の調節（Rate coding）",
      "筋紡錘の伸張",
      "骨リモデリング"
    ],
    "answer": 0,
    "explanation": "教科書では、神経系による筋力調節の1つ目の仕組みとして、活性化される運動単位の数を変える「運動単位の動員」が説明されている。",
    "sourceType": "original"
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
    "explanation": "力の調節には、運動単位の動員と発火頻度の調節（Rate coding）が関与する。",
    "sourceType": "original"
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
    "explanation": "筋紡錘は筋の長さ・伸張を検知し、GTOは発揮される力・張力を検知する。",
    "sourceType": "original"
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
    "explanation": "筋が生み出した力は腱を通じて骨に伝わり、骨格が関節を中心に運動を生み出す。",
    "sourceType": "original"
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
    "explanation": "骨のリモデリングには古い骨を破壊する破骨細胞と、新しい骨の合成を促す骨芽細胞が関わる。",
    "sourceType": "original"
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
    "explanation": "章のまとめでは、この一連の流れを丸暗記ではなくストーリーとして説明できることが次章以降の理解を助けるとしている。",
    "sourceType": "original"
  },
  {
    "id": "ch1-fig001",
    "chapter": 1,
    "category": "図・サルコメア",
    "type": "figure",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-fig002",
    "chapter": 1,
    "category": "図・サルコメア",
    "type": "figure",
    "figureId": "fig-ch1-sarcomere",
    "image": "assets/figures/sarcomere_fig1_4.svg",
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
    "figureCaption": "サルコメア・アクチン・ミオシンと各帯の関係",
    "sourceType": "original"
  },
  {
    "id": "ch1-fig003",
    "chapter": 1,
    "category": "図・筋収縮",
    "type": "figure",
    "figureId": "fig-ch1-contraction",
    "image": "assets/figures/contraction_fig1_5.svg",
    "figureMode": "question",
    "question": "図(b)で、活動電位がT管を通じて筋線維内部に伝わった後に起こる現象はどれか。",
    "choices": [
      "AChが放出される",
      "筋小胞体からCa²⁺が放出される",
      "AChが受容体に結合する",
      "ミオシンがアクチンを引き込む"
    ],
    "answer": 1,
    "explanation": "図1.5の流れでは、活動電位がT管を通じて筋線維内部に伝わると、筋小胞体からCa²⁺が放出される。",
    "sourceType": "original"
  },
  {
    "id": "ch1-fig004",
    "chapter": 1,
    "category": "図・筋紡錘とGTO",
    "type": "figure",
    "figureId": "fig-ch1-spindle-gto",
    "image": "assets/figures/spindle_gto_fig1_7.svg",
    "figureMode": "question",
    "question": "筋の長さの変化を主に検知する受容器は図のどちらか。",
    "choices": [
      "筋紡錘",
      "ゴルジ腱器官（GTO）",
      "両方とも張力のみを検知する",
      "どちらも検知しない"
    ],
    "answer": 0,
    "explanation": "筋紡錘は筋の長さや伸張の変化を検知する。GTOは主に筋が発揮する張力を検知する。",
    "sourceType": "original"
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
state.lastViewed = "home";
saveState();
let practiceQueue = [{
  "id": "ch1-review-001",
  "chapter": 1,
  "category": "章末確認・筋系",
  "type": "standard",
  "question": "骨格筋の基本的な収縮単位はどれか。",
  "choices": [
    "筋線維",
    "サルコメア",
    "筋原線維",
    "筋小胞体"
  ],
  "answer": 1,
  "explanation": "サルコメアはZ線からZ線までの構造で、筋収縮の最小機能単位である。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第1部 確認問題1"
},
{
  "id": "ch1-review-002",
  "chapter": 1,
  "category": "章末確認・筋系",
  "type": "standard",
  "question": "ミオシンの主な役割として正しいものはどれか。",
  "choices": [
    "カルシウムを貯蔵する",
    "ATPを合成する",
    "アクチンを引き込む",
    "神経伝達物質を放出する"
  ],
  "answer": 2,
  "explanation": "ミオシン頭部はアクチンと結合し、パワーストロークによってアクチンを引き込む。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第1部 確認問題2"
},
{
  "id": "ch1-review-003",
  "chapter": 1,
  "category": "章末確認・筋系",
  "type": "standard",
  "question": "安静時にアクチン上のミオシン結合部位を覆っているタンパク質はどれか。",
  "choices": [
    "トロポニン",
    "トロポミオシン",
    "ミオシン",
    "カルモジュリン"
  ],
  "answer": 1,
  "explanation": "トロポミオシンがミオシン結合部位を覆っている。カルシウムがトロポニンに結合すると、その位置関係が変化して収縮が進む。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第1部 確認問題3"
},
{
  "id": "ch1-review-004",
  "chapter": 1,
  "category": "章末確認・神経系",
  "type": "standard",
  "question": "神経筋接合部で骨格筋へ放出される神経伝達物質はどれか。",
  "choices": [
    "ドーパミン",
    "アセチルコリン",
    "セロトニン",
    "ノルアドレナリン"
  ],
  "answer": 1,
  "explanation": "骨格筋の神経筋接合部ではアセチルコリンが放出され、筋線維側へ興奮を伝える。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第2部 確認問題1"
},
{
  "id": "ch1-review-005",
  "chapter": 1,
  "category": "章末確認・筋収縮",
  "type": "standard",
  "question": "筋収縮の過程で、カルシウムが直接結合するタンパク質はどれか。",
  "choices": [
    "ミオシン",
    "トロポミオシン",
    "トロポニン",
    "アクチン"
  ],
  "answer": 2,
  "explanation": "カルシウムはトロポニンに結合し、その結果としてトロポミオシンの位置が変化し、アクチンとミオシンの相互作用が進む。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第2部 確認問題2"
},
{
  "id": "ch1-review-006",
  "chapter": 1,
  "category": "章末確認・筋活動様式",
  "type": "standard",
  "question": "一般に最も大きな筋力を発揮できる筋活動様式はどれか。",
  "choices": [
    "短縮性筋活動",
    "等尺性筋活動",
    "伸張性筋活動",
    "弛緩"
  ],
  "answer": 2,
  "explanation": "教材では、伸張性筋活動が最も大きな筋力を発揮できると整理されている。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第2部 確認問題3"
},
{
  "id": "ch1-review-007",
  "chapter": 1,
  "category": "章末確認・骨格系",
  "type": "standard",
  "question": "ウォルフの法則として正しいものはどれか。",
  "choices": [
    "骨は荷重刺激に適応する",
    "骨は生涯変化しない",
    "運動では骨密度は変化しない",
    "骨は負荷を受けるほど必ず弱くなる"
  ],
  "answer": 0,
  "explanation": "ウォルフの法則は、骨が加えられる力や負荷に適応して構造を変化させるという考え方である。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第4部 確認問題1"
},
{
  "id": "ch1-review-008",
  "chapter": 1,
  "category": "章末確認・骨格系",
  "type": "standard",
  "question": "骨芽細胞の主な役割はどれか。",
  "choices": [
    "骨吸収",
    "骨形成",
    "神経伝達",
    "筋収縮"
  ],
  "answer": 1,
  "explanation": "骨芽細胞は新しい骨を形成する。骨吸収を担うのは破骨細胞である。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第4部 確認問題2"
},
{
  "id": "ch1-review-009",
  "chapter": 1,
  "category": "章末確認・腱と靭帯",
  "type": "standard",
  "question": "靭帯が連結するものはどれか。",
  "choices": [
    "筋肉と骨",
    "骨と骨",
    "筋肉と筋肉",
    "神経と筋肉"
  ],
  "answer": 1,
  "explanation": "靭帯は骨と骨を連結する結合組織である。筋肉と骨をつなぐのは腱である。",
  "sourceType": "review",
  "sourceLabel": "章末確認問題",
  "sourceNote": "第1章 第4部 確認問題3"
},
{
  "id": "ch1-mock-001",
  "chapter": 1,
  "category": "模擬問題・筋収縮",
  "type": "standard",
  "question": "骨格筋が大きな力を発揮するとき、アクチンとミオシンの相互作用を直接担う構造として最も適切なのはどれか。",
  "choices": [
    "アクトミオシンのクロスブリッジ",
    "筋紡錘",
    "ゴルジ腱器官",
    "骨芽細胞"
  ],
  "answer": 0,
  "explanation": "アクチンとミオシンが相互作用するクロスブリッジ形成は筋収縮の中心的な機構である。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.15 問10の論点を再構成"
},
{
  "id": "ch1-mock-002",
  "chapter": 1,
  "category": "模擬問題・筋活動様式",
  "type": "standard",
  "question": "最大努力時の骨格筋で、筋の短縮速度が高くなるほど短縮性筋力は一般にどうなるか。",
  "choices": [
    "高くなる",
    "低くなる",
    "変化しない",
    "速度とは無関係に一定になる"
  ],
  "answer": 1,
  "explanation": "模擬問題集で扱われている力―速度関係では、短縮性収縮では短縮速度が高いほど発揮できる筋力は低下する。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.16 問15の論点を再構成"
},
{
  "id": "ch1-mock-003",
  "chapter": 1,
  "category": "模擬問題・運動単位",
  "type": "standard",
  "question": "すべての運動単位に共通する特徴として最も適切なのはどれか。",
  "choices": [
    "同じタイプの筋線維だけを含む",
    "同じサイズの運動ニューロンを含む",
    "ほぼ同じ数の筋線維を含む",
    "必ず同じ大きさの筋線維を含む"
  ],
  "answer": 0,
  "explanation": "1つの運動単位は1個の運動ニューロンと、それが支配する筋線維から構成される。1つの運動単位内の筋線維は同じタイプになる。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.16 問16の論点を再構成"
},
{
  "id": "ch1-mock-004",
  "chapter": 1,
  "category": "模擬問題・エネルギー",
  "type": "standard",
  "question": "筋収縮に直接利用される化学エネルギーを蓄えている物質はどれか。",
  "choices": [
    "クレアチンリン酸",
    "ATP",
    "グルコース",
    "乳酸"
  ],
  "answer": 1,
  "explanation": "筋収縮で直接利用されるエネルギー源はATPである。クレアチンリン酸はATP再合成に利用される。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.17 問22の論点を再構成"
},
{
  "id": "ch1-mock-005",
  "chapter": 1,
  "category": "模擬問題・加齢と筋",
  "type": "standard",
  "question": "サルコペニアを最も適切に表しているのはどれか。",
  "choices": [
    "加齢に伴う筋量・筋機能の低下",
    "加齢に伴う骨密度だけの低下",
    "遺伝による骨形成異常",
    "一時的な筋肉痛"
  ],
  "answer": 0,
  "explanation": "サルコペニアは加齢に伴う筋量や筋機能の低下を指す。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.17 問24の論点を再構成"
},
{
  "id": "ch1-mock-006",
  "chapter": 1,
  "category": "模擬問題・神経適応",
  "type": "standard",
  "question": "レジスタンストレーニング開始初期にみられる筋力向上の主な要因として最も適切なのはどれか。",
  "choices": [
    "神経系の適応",
    "骨密度の急激な増加",
    "筋線維数の急激な増加",
    "脂肪細胞の増加"
  ],
  "answer": 0,
  "explanation": "トレーニング初期の筋力向上には、筋肥大だけでなく神経系の適応が大きく関与する。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.17 問26の論点を再構成"
},
{
  "id": "ch1-mock-007",
  "chapter": 1,
  "category": "模擬問題・発火頻度",
  "type": "standard",
  "question": "レジスタンストレーニング初期の筋力発揮の調節に関係する神経系の変化として適切なのはどれか。",
  "choices": [
    "運動単位の発火頻度の上昇",
    "骨芽細胞の活動低下",
    "筋小胞体の消失",
    "腱の短縮"
  ],
  "answer": 0,
  "explanation": "運動単位の発火頻度を高めることは、すでに活動している運動単位が発揮する力の調節に関係する。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.21 問41の論点を再構成"
},
{
  "id": "ch1-mock-008",
  "chapter": 1,
  "category": "模擬問題・反射",
  "type": "standard",
  "question": "筋の長さが急激に変化したときに生じる不随意の反応として最も適切なのはどれか。",
  "choices": [
    "伸張反射",
    "屈曲反射",
    "交叉性伸展反射",
    "姿勢反射のみ"
  ],
  "answer": 0,
  "explanation": "筋の長さの急激な変化は筋紡錘からの情報を介して伸張反射を引き起こす。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.21 問45の論点を再構成"
},
{
  "id": "ch1-mock-009",
  "chapter": 1,
  "category": "模擬問題・筋活動様式",
  "type": "standard",
  "question": "運動中に「ネガティブ」と呼ばれる局面で、主働筋に生じている筋活動として最も適切なのはどれか。",
  "choices": [
    "等尺性筋活動",
    "短縮性筋活動",
    "伸張性筋活動",
    "完全弛緩"
  ],
  "answer": 2,
  "explanation": "一般にネガティブ局面は、筋が外力に抗しながら伸ばされる伸張性筋活動を指す。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.22 問48の論点を再構成"
},
{
  "id": "ch1-mock-010",
  "chapter": 1,
  "category": "模擬問題・筋活動",
  "type": "standard",
  "question": "ベンチプレスで主働筋に対して拮抗する筋として考えられる組み合わせはどれか。",
  "choices": [
    "三角筋前部と上腕二頭筋",
    "三角筋後部と上腕二頭筋",
    "三角筋後部と上腕三頭筋",
    "大胸筋と上腕三頭筋"
  ],
  "answer": 1,
  "explanation": "ベンチプレスの押す動作に対して、肩関節の動作などを考えると三角筋後部や上腕二頭筋が拮抗側として扱われる。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.31 問43の論点を再構成"
},
{
  "id": "ch1-mock-011",
  "chapter": 1,
  "category": "模擬問題・筋活動",
  "type": "standard",
  "question": "デッドリフトで体幹を安定させる際、等尺性に働く筋として最も適切なのはどれか。",
  "choices": [
    "大殿筋",
    "腓腹筋",
    "脊柱起立筋",
    "前脛骨筋"
  ],
  "answer": 2,
  "explanation": "デッドリフトでは脊柱起立筋群が体幹を安定させるために等尺性に働く場面がある。",
  "sourceType": "mock",
  "sourceLabel": "模擬問題（再構成）",
  "sourceNote": "NSCA-CPT模擬問題集 p.32 問49の論点を再構成"
}
];
let practiceLabel = "第1章すべて";
let practiceSessionAnswers = {};
let practiceCompleted = false;

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

function resetPageScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function screenEl() {
  return document.getElementById("screen");
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.nav === name);
  });
}

function renderHome() {
  resetPageScroll();
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
      <button class="primary-btn full" onclick="openPracticeSelectorClean()">問題演習を始める</button>
    </section>

    <div class="section-title"><h2>学習状況</h2><button class="text-btn" onclick="renderStats()">詳細を見る →</button></div>
    <section class="card">
      <div class="stat-grid">
        <div class="stat"><div class="num">${answered}</div><div class="label">解答済み</div></div>
        <div class="stat"><div class="num">${accuracy()}%</div><div class="label">正答率</div></div>
      </div>
    </section>

    <div class="section-title"><h2>現在のコンテンツ</h2></div>
    <section class="card">
      <h3>第1章：筋系、神経系、骨格系</h3>
      <p style="color:var(--muted);line-height:1.7;margin:0;">第1章の問題演習を拡張中。今後、ケーススタディ・図問題・復習機能を順次強化します。</p>
    </section>
  `;
}

function startPractice(index = 0) {
  const ids = QUESTIONS.map(q => q.id);
  startPracticeQueue(ids, "第1章すべて", index);
}

function startPracticeQueue(ids, label, index = 0) {
  practiceQueue = ids.filter(id => QUESTIONS.some(q => q.id === id));
  practiceLabel = label || "問題演習";
  practiceSessionAnswers = {};
  practiceCompleted = false;
  if (!practiceQueue.length) {
    alert("この条件に該当する問題がありません。");
    return;
  }
  state.currentIndex = Math.max(0, Math.min(index, practiceQueue.length - 1));
  state.lastViewed = "practice";
  saveState();
  renderQuestion();
}

function getPracticeQuestions() {
  const ids = practiceQueue.length ? practiceQueue : QUESTIONS.map(q => q.id);
  return ids.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean);
}

function openPracticeSelectorClean() {
  practiceQueue = [];
  practiceLabel = "第1章すべて";
  practiceSessionAnswers = {};
  practiceCompleted = false;
  state.currentIndex = 0;
  state.lastViewed = "practice-selector";
  saveState();
  renderPracticeSelector();
}


function getRandomPoolItems(questions) {
  const normal = [];
  const cases = new Map();
  questions.forEach(q => {
    if (q.type === "case" && q.caseId) {
      if (!cases.has(q.caseId)) cases.set(q.caseId, []);
      cases.get(q.caseId).push(q);
    } else {
      normal.push(q);
    }
  });
  cases.forEach(group => group.sort((a,b) => (a.caseOrder||0) - (b.caseOrder||0)));
  return { normal, cases: [...cases.values()] };
}

function shuffleArray(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildRandomPracticeIds(questions, targetCount) {
  const { normal, cases } = getRandomPoolItems(questions);
  const shuffledNormal = shuffleArray(normal);
  const shuffledCases = shuffleArray(cases);
  const units = [
    ...shuffledNormal.map(q => [q]),
    ...shuffledCases
  ];
  const picked = [];
  for (const unit of shuffleArray(units)) {
    if (picked.length >= targetCount) break;
    // ケースは途中で切らず、ケース全体を連続出題する。
    picked.push(...unit);
  }
  // ケースを含めてtargetCountを大きく超えないようにしたい場合でも、
  // ケース途中で切ることはせず、そのままケース全体を採用する。
  return picked.map(q => q.id);
}

function startRandomPractice(scope, targetCount) {
  const questions = scope === "all"
    ? QUESTIONS
    : QUESTIONS.filter(q => q.chapter === Number(scope));
  if (!questions.length) {
    alert("この条件に該当する問題がありません。");
    return;
  }
  const max = questions.length;
  const count = Math.max(1, Math.min(Number(targetCount) || 10, max));
  const ids = buildRandomPracticeIds(questions, count);
  startPracticeQueue(ids, scope === "all"
    ? `全体ランダム（${ids.length}問）`
    : `第${scope}章ランダム（${ids.length}問）`);
}

function renderPracticeSelector(selectedChapter = null) {
  resetPageScroll();
  // 問題選択画面で使用するスタイルはensureFigureStyles内に定義されているため、
  // 初回表示でもCSS注入前に描画されないよう、innerHTMLより前に確実に注入する。
  ensureFigureStyles();
  // 問題選択画面を開いた時は、前回の演習状態を持ち込まない。
  // ホームから初回に開いた場合と、問題を解いて戻った場合で表示が変わらないようにする。
  practiceQueue = [];
  practiceLabel = "第1章すべて";
  practiceSessionAnswers = {};
  practiceCompleted = false;
  state.currentIndex = 0;
  state.lastViewed = "practice-selector";
  saveState();
  setActiveNav("practice");
  const chapters = [...new Set(QUESTIONS.map(q => q.chapter))].sort((a,b) => a-b);
  const chapter = selectedChapter || chapters[0] || 1;
  const chapterQuestions = QUESTIONS.filter(q => q.chapter === chapter);

  // 第1章問題数の実データを基準に表示する。
  // 開発中に「バージョンだけ更新されて問題データが古い」状態を検知できるようにする。
  if (chapter === 1 && chapterQuestions.length !== 80) {
    console.error("CPTmate 第1章問題データ不一致:", {
      expected: 80,
      actual: chapterQuestions.length,
      appVersion: APP_VERSION
    });
  }

  // 大分類は「1問＝1分類」にして、合計数が章の総問題数と必ず一致するようにする。
  // 特にケーススタディは、内容上「筋系」「神経」などに属していても
  // 大分類では「総合・ケーススタディ」にのみ計上する。
  const major = {
    "筋系・筋収縮": q => {
      if (/^(総合|ケーススタディ)/.test(q.category)) return false;
      return /^(筋系|筋収縮|筋活動様式|筋線維タイプ)/.test(q.category)
        || /^(図・筋収縮|図・サルコメア)/.test(q.category)
        || /^(章末確認・筋系|章末確認・筋収縮|章末確認・筋活動様式)/.test(q.category)
        || /^(模擬問題・筋収縮|模擬問題・筋活動様式|模擬問題・エネルギー|模擬問題・加齢と筋|模擬問題・筋活動)/.test(q.category);
    },
    "神経・感覚": q => {
      if (/^(総合|ケーススタディ)/.test(q.category)) return false;
      return /^(神経|神経筋接合部)/.test(q.category)
        || q.category.includes("筋紡錘")
        || q.category.includes("GTO")
        || /^(章末確認・神経)/.test(q.category)
        || /^(模擬問題・運動単位|模擬問題・神経適応|模擬問題・発火頻度|模擬問題・反射)/.test(q.category);
    },
    "骨格・結合組織": q => {
      if (/^(総合|ケーススタディ)/.test(q.category)) return false;
      return q.category.startsWith("骨格系")
        || /^(章末確認・骨格|章末確認・腱)/.test(q.category);
    },
    "総合・ケーススタディ": q => q.category.startsWith("総合") || q.category.startsWith("ケーススタディ")
  };

  const majorButtons = Object.entries(major).map(([name, fn]) => {
    const ids = chapterQuestions.filter(fn).map(q => q.id);
    if (!ids.length) return "";
    return `<button class="practice-select-item" onclick='startPracticeQueue(${JSON.stringify(ids)}, ${JSON.stringify(name)})'><strong>${name}</strong><span>${ids.length}問</span></button>`;
  }).join("");

  // 開発中のデータ不整合を検出。大分類の合計が章問題数と違う場合はコンソールに警告を出す。
  const classifiedIds = Object.values(major).flatMap(fn => chapterQuestions.filter(fn).map(q => q.id));
  const uniqueClassifiedIds = new Set(classifiedIds);
  if (uniqueClassifiedIds.size !== chapterQuestions.length || classifiedIds.length !== uniqueClassifiedIds.size) {
    console.warn("大分類の問題数が章総問題数と一致していません", {
      chapter,
      total: chapterQuestions.length,
      classified: uniqueClassifiedIds.size,
      duplicated: classifiedIds.length - uniqueClassifiedIds.size
    });
  }

  screenEl().innerHTML = `
    <div class="back-row"><button class="back-btn" onclick="renderHome()">‹</button><h2>問題演習</h2></div>
    <section class="card practice-selector-card">
      <div class="selector-section-title">章を選択</div>
      <div class="chapter-select-list">${chapters.map(ch => `
        <button class="chapter-select-item ${ch === chapter ? "active" : ""}" onclick="renderPracticeSelector(${ch})"><strong>第${ch}章</strong><span>${QUESTIONS.filter(q => q.chapter === ch).length}問</span></button>
      `).join("")}</div>
      <div class="selector-kicker" style="margin-top:16px;">選択中：第${chapter}章</div>
      <h3>どこから解きますか？</h3>
      <p class="selector-note">章を通して解くほか、分類や問題番号を絞って確認できます。</p>
      <button class="practice-select-item primary-choice" onclick='startPracticeQueue(${JSON.stringify(chapterQuestions.map(q=>q.id))}, ${JSON.stringify(`第${chapter}章すべて`)})'><strong>第${chapter}章すべて</strong><span>${chapterQuestions.length}問</span></button>
    </section>

    <section class="card">
      <div class="selector-section-title">大分類</div>
      <div class="practice-select-list">${majorButtons}</div>
    </section>


    <section class="card">
      <div class="selector-section-title">ランダム問題</div>
      <p class="selector-note">通常問題は1問単位でランダム抽選します。ケーススタディはケース単位で選び、選択されたケースは連番のまま出題します。</p>
      <div class="practice-select-list">
        <button class="practice-select-item" onclick="startRandomPractice(${chapter}, 10)"><strong>第${chapter}章からランダム10問</strong></button>
        <button class="practice-select-item" onclick="startRandomPractice(${chapter}, 20)"><strong>第${chapter}章からランダム20問</strong></button>
        <button class="practice-select-item" onclick="startRandomPractice(${chapter}, 30)"><strong>第${chapter}章からランダム30問</strong></button>
        <button class="practice-select-item" onclick="startRandomPractice('all', 10)"><strong>全体からランダム10問</strong></button>
        <button class="practice-select-item" onclick="startRandomPractice('all', 20)"><strong>全体からランダム20問</strong></button>
        <button class="practice-select-item" onclick="startRandomPractice('all', 30)"><strong>全体からランダム30問</strong></button>
      </div>
    </section>

    <section class="card">
      <div class="selector-section-title">問題番号で指定</div>
      <p class="selector-note">作問チェック用に、例えば「41〜50問」だけをまとめて確認できます。</p>
      <div class="range-row">
        <input id="rangeStart" class="range-input" type="number" min="1" max="${chapterQuestions.length}" value="1" inputmode="numeric">
        <span>〜</span>
        <input id="rangeEnd" class="range-input" type="number" min="1" max="${chapterQuestions.length}" value="${Math.min(10, chapterQuestions.length)}" inputmode="numeric">
        <button class="primary-btn range-btn" onclick="startPracticeRange(${chapter})">この範囲を解く</button>
      </div>
    </section>
  `;
}

function startPracticeRange(chapter) {
  const all = QUESTIONS.filter(q => q.chapter === chapter);
  const start = Math.max(1, parseInt(document.getElementById("rangeStart")?.value || "1", 10));
  const end = Math.min(all.length, parseInt(document.getElementById("rangeEnd")?.value || String(all.length), 10));
  if (start > end) { alert("開始番号は終了番号以下にしてください。"); return; }
  const selected = all.slice(start - 1, end);
  startPracticeQueue(selected.map(q=>q.id), `第${chapter}章 ${start}〜${end}問`);
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
  if (!document.getElementById('cptmate-source-badge-style')) { const st=document.createElement('style'); st.id='cptmate-source-badge-style'; st.textContent=".question-info-row{display:flex;align-items:center;justify-content:space-between;min-height:42px;margin:2px 0 8px;}.source-badge-wrap{display:flex;align-items:center;}.source-badge{display:inline-flex;align-items:center;margin:0;padding:4px 9px;border:1px solid var(--line,#d8dde6);border-radius:999px;font-size:12px;font-weight:700;line-height:1.2;background:var(--card,#fff);color:var(--muted,#667085)}.source-badge.source-mock,.source-badge.source-review{font-weight:800}"; document.head.appendChild(st); }

  if (document.getElementById("cptmateFigureStyles")) return;
  const style = document.createElement("style");
  style.id = "cptmateFigureStyles";
  style.textContent = `
    .question-figure {
      margin: 16px 0 20px;
      padding: 10px;
      background: #f7fbfb;
      border: 1px solid var(--line);
      border-radius: 18px;
      overflow: hidden;
    }
    .figure-in-explanation {
      margin: 18px 0 4px;
      background: #fff;
    }
    .figure-zoom-trigger {
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: zoom-in;
      text-align: left;
    }
    .question-figure img {
      display: block;
      width: 100%;
      max-height: 680px;
      object-fit: contain;
      border-radius: 12px;
      background: #fff;
    }
    .figure-zoom-hint {
      position: absolute;
      right: 10px;
      bottom: 10px;
      padding: 6px 9px;
      border-radius: 999px;
      background: rgba(23,79,82,.9);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      pointer-events: none;
    }
    .question-figure-caption {
      margin: 8px 4px 0;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
    }
    .figure-modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: none;
    }
    .figure-modal.open {
      display: block;
    }
    .figure-modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(8, 25, 27, .82);
    }
    .figure-modal-panel {
      position: absolute;
      inset: 24px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .figure-modal-panel img {
      max-width: 96vw;
      max-height: 88vh;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 12px 40px rgba(0,0,0,.35);
      pointer-events: auto;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      transform-origin: center center;
      will-change: transform;
    }

    body.figure-modal-open {
      overflow: hidden !important;
      touch-action: none;
    }
    .figure-modal-panel {
      overflow: hidden;
    }

    .figure-modal-close {
      position: absolute;
      top: 0;
      right: 4px;
      width: 44px;
      height: 44px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.95);
      color: #174f52;
      font-size: 30px;
      line-height: 1;
      cursor: pointer;
      z-index: 2;
      pointer-events: auto;
    }
    .figure-modal-caption {
      max-width: 94%;
      margin-top: 10px;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,.94);
      color: #174f52;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      pointer-events: none;
    }
    body.figure-modal-open {
      overflow: hidden;
    }
    .post-answer-actions {
      display: grid;
      gap: 10px;
      margin-top: 12px;
    }
    .secondary-btn.full {
      width: 100%;
      min-height: 48px;
    }
    .chapter-select-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin-bottom: 4px; }
    .chapter-select-item { display:flex; align-items:center; justify-content:space-between; gap:8px; min-height:48px; padding:10px 12px; border:1px solid var(--line); border-radius:12px; background:#fff; color:var(--text); text-align:left; cursor:pointer; }
    .chapter-select-item.active { border-color: rgba(23,79,82,.38); background:#eef7f6; }
    .chapter-select-item strong { font-size:14px; }
    .chapter-select-item span { color:var(--muted); font-size:11px; font-weight:800; }
    .practice-selector-card h3 { margin: 6px 0 6px; }
    .selector-kicker { color: var(--muted); font-size: 13px; font-weight: 800; }
    .selector-note { color: var(--muted); line-height: 1.65; margin: 0 0 14px; font-size: 13px; }
    .selector-section-title { font-weight: 900; margin-bottom: 12px; }
    .practice-select-list { display: grid; gap: 9px; }
    .practice-select-item { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 15px 16px; border: 1px solid var(--line); border-radius: 15px; background: #fff; color: var(--text); text-align: left; cursor: pointer; }
    .practice-select-item strong { font-size: 15px; line-height: 1.45; }
    .practice-select-item span { color: var(--muted); font-size: 12px; font-weight: 800; white-space: nowrap; }
    .practice-select-item.primary-choice { border-color: rgba(23,79,82,.28); background: #eef7f6; }
    .practice-mode-bar { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 8px 0 12px; padding: 9px 12px; border-radius: 12px; background: #eef4f4; color: #285f63; font-size: 12px; font-weight: 800; }
    .practice-mode-bar button { border: 0; background: transparent; color: #285f63; font-weight: 900; padding: 4px 0; cursor: pointer; }
    .range-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 8px; align-items: center; }
    .range-input { width: 100%; box-sizing: border-box; min-height: 46px; border: 1px solid var(--line); border-radius: 12px; padding: 0 12px; font-size: 16px; background: #fff; color: var(--text); }
    .range-btn { grid-column: 1 / -1; }
  `;
  document.head.appendChild(style);
}


function renderQuestionFigure(q, mode = "default") {
  if (!q.image) return "";
  ensureFigureStyles();
  const caption = q.figureCaption || ({
    "assets/figures/sarcomere_fig1_4.svg": "サルコメア・アクチン・ミオシンと各帯の関係",
    "assets/figures/sarcomere_fig1_4.svg": "フィラメント滑走説：収縮前と収縮後の比較",
    "assets/figures/contraction_fig1_5.svg": "神経から筋収縮までの流れ",
    "assets/figures/neuron.svg": "神経細胞の基本構造",
    "assets/figures/spindle_gto_fig1_7.svg": "筋紡錘とゴルジ腱器官の役割",
    "assets/figures/long_bone_fig1_8.svg": "長骨の主な構造",
    "assets/figures/skeleton_fig1_9.svg": "軸性骨格と付属性骨格"
  })[q.image] || "図を確認しながら考えてみましょう。";
  const safeCaption = caption.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, " ");
  return `
    <figure class="question-figure ${mode === "explanation" ? "figure-in-explanation" : "figure-in-question"}">
      <button class="figure-zoom-trigger" type="button" onclick="openFigureModal('${q.image}?v=${APP_VERSION}','${safeCaption}')" aria-label="図を拡大">
        <img src="${q.image}?v=${APP_VERSION}" alt="${caption}" loading="lazy">
      </button>
      <figcaption class="question-figure-caption">${caption}</figcaption>
    </figure>
  `;
}

function openFigureModal(src, caption) {
  ensureFigureStyles();
  let modal = document.getElementById("cptmateFigureModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "cptmateFigureModal";
    modal.className = "figure-modal";
    modal.innerHTML = `
      <div class="figure-modal-backdrop" onclick="closeFigureModal()"></div>
      <div class="figure-modal-panel" role="dialog" aria-modal="true" aria-label="図の拡大表示">
        <button class="figure-modal-close" type="button" onclick="closeFigureModal()" aria-label="閉じる">×</button>
        <img id="figureModalImage" src="" alt="" draggable="false">
        <div id="figureModalCaption" class="figure-modal-caption"></div>
      </div>
    `;
    document.body.appendChild(modal);
    setupFigureModalZoom();
  }
  const image = document.getElementById("figureModalImage");
  const captionEl = document.getElementById("figureModalCaption");
  image.src = src;
  image.alt = caption;
  captionEl.textContent = caption;
  resetFigureModalZoom();
  modal.classList.add("open");
  document.body.classList.add("figure-modal-open");
}

function setupFigureModalZoom() {
  const image = document.getElementById("figureModalImage");
  if (!image || image.dataset.zoomReady === "1") return;
  image.dataset.zoomReady = "1";

  let scale = 1;
  let startScale = 1;
  let startDistance = 0;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let startOffsetX = 0;
  let startOffsetY = 0;
  let dragging = false;

  const distance = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  const apply = () => {
    image.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${scale})`;
  };
  const clampOffset = () => {
    const maxX = Math.max(0, (image.getBoundingClientRect().width - window.innerWidth) / 2 + 80);
    const maxY = Math.max(0, (image.getBoundingClientRect().height - window.innerHeight) / 2 + 80);
    offsetX = Math.max(-maxX, Math.min(maxX, offsetX));
    offsetY = Math.max(-maxY, Math.min(maxY, offsetY));
  };

  image.addEventListener("touchstart", (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      startDistance = distance(e.touches[0], e.touches[1]);
      startScale = scale;
      dragging = false;
    } else if (e.touches.length === 1 && scale > 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startOffsetX = offsetX;
      startOffsetY = offsetY;
      dragging = true;
    }
  }, {passive:false});

  image.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (e.touches.length === 2 && startDistance > 0) {
      scale = Math.max(1, Math.min(5, startScale * distance(e.touches[0], e.touches[1]) / startDistance));
      if (scale === 1) { offsetX = 0; offsetY = 0; }
      clampOffset();
      apply();
    } else if (e.touches.length === 1 && dragging && scale > 1) {
      offsetX = startOffsetX + (e.touches[0].clientX - startX);
      offsetY = startOffsetY + (e.touches[0].clientY - startY);
      clampOffset();
      apply();
    }
  }, {passive:false});

  image.addEventListener("touchend", (e) => {
    if (e.touches.length < 2) startDistance = 0;
    if (e.touches.length === 0) dragging = false;
    if (scale <= 1.02) { scale = 1; offsetX = 0; offsetY = 0; apply(); }
  }, {passive:false});

  image.addEventListener("dblclick", (e) => {
    e.preventDefault();
    scale = scale > 1 ? 1 : 2.5;
    if (scale === 1) { offsetX = 0; offsetY = 0; }
    apply();
  });

  image._resetFigureZoom = () => {
    scale = 1; offsetX = 0; offsetY = 0; startDistance = 0; dragging = false; apply();
  };
}

function resetFigureModalZoom() {
  const image = document.getElementById("figureModalImage");
  if (image && image._resetFigureZoom) image._resetFigureZoom();
  else if (image) image.style.transform = "translate3d(0,0,0) scale(1)";
}

function closeFigureModal() {
  const modal = document.getElementById("cptmateFigureModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.classList.remove("figure-modal-open");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeFigureModal();
});


function renderPracticeComplete() {
  setActiveNav("practice");
  const queue = getPracticeQuestions();
  const results = queue.map(q => practiceSessionAnswers[q.id]).filter(Boolean);
  const correct = results.filter(a => a.correct).length;
  const total = results.length;
  const rate = total ? Math.round(correct / total * 100) : 0;

  screenEl().innerHTML = `
    <div class="back-row">
      <button class="back-btn" onclick="renderPracticeSelector()">‹</button>
      <h2>演習完了</h2>
    </div>
    <section class="card" style="text-align:center;padding:28px 20px;">
      <div style="font-size:18px;font-weight:700;margin-bottom:18px;">${practiceLabel}</div>
      <div class="stat-grid">
        <div class="stat"><div class="num">${total}</div><div class="label">解答数</div></div>
        <div class="stat"><div class="num">${rate}%</div><div class="label">正答率</div></div>
      </div>
      <p style="color:var(--muted);line-height:1.7;margin:20px 0;">この演習はここで終了です。<br>同じ問題をもう一度解くこともできます。</p>
      <button class="primary-btn full" onclick="restartCurrentPractice()">もう一度この演習を解く</button>
      <button class="secondary-btn full" onclick="renderPracticeSelector()">演習選択へ戻る</button>
    </section>
  `;
}

function restartCurrentPractice() {
  practiceSessionAnswers = {};
  practiceCompleted = false;
  state.currentIndex = 0;
  saveState();
  renderQuestion();
}


function getSourceLabel(sourceType, question) {
  if (question?.sourceLabel) return question.sourceLabel;
  if (sourceType === "mock") return "模擬問題";
  if (sourceType === "review") return "章末確認問題";
  return "CPTmateオリジナル";
}
function renderSourceBadge(question) {
  const type = question?.sourceType || "original";
  return `<span class="source-badge source-${type}">${getSourceLabel(type, question)}</span>`;
}

function renderQuestion() {
  ensureOptionReviewStyles();
  setActiveNav("practice");
  const queue = getPracticeQuestions();
  if (!queue.length) { renderPracticeSelector(); return; }
  if (practiceCompleted) {
    renderPracticeComplete();
    return;
  }
  const q = queue[state.currentIndex];
  const sourceBadge = renderSourceBadge(q);
  const saved = practiceSessionAnswers[q.id];
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

  // 「question」図は回答前から表示。
  // 「after」図は回答後の解説欄だけに表示。
  const questionFigure = (!saved && q.figureMode === "question")
    ? renderQuestionFigure(q, "question")
    : "";

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
        ${q.figureMode === "after" ? renderQuestionFigure(q, "explanation") : ""}
      </div>

      ${renderOptionReview(q)}
    </div>

    <div class="post-answer-actions">
      <button class="secondary-btn full" onclick="retryQuestion()">もう一度この問題を解く</button>
      <button class="primary-btn full" onclick="nextQuestion()">次の問題</button>
    </div>
  ` : "";

  screenEl().innerHTML = `
    <div class="back-row">
      <button class="back-btn" onclick="renderHome()">‹</button>
      <h2>問題演習</h2>
    </div>
    <div class="practice-mode-bar">${practiceLabel}<button onclick="renderPracticeSelector()">演習を変更</button></div>

    <section class="card">
      ${q.type === "case" ? `
        <div class="case-badge">
          CASE STUDY${q.caseTitle ? `　${q.caseTitle}` : ""}
        </div>
      ` : ""}

      <div class="question-head">
        <span>第${q.chapter}章　${q.category}</span>
        <span>この演習：${state.currentIndex + 1} / ${queue.length}</span>
      </div>
      <div class="question-info-row">
        <div class="source-badge-wrap">${sourceBadge}</div>
        <button class="bookmark" onclick="toggleBookmark('${q.id}')">${bookmarked ? "★" : "☆"}</button>
      </div>

      ${questionFigure}
      <p class="question-text">${q.question}</p>
      <div>${choices}</div>
      ${result}
    </section>
  `;
}

function retryQuestion() {
  const queue = getPracticeQuestions();
  const q = queue[state.currentIndex];
  delete practiceSessionAnswers[q.id];
  renderQuestion();
}


function answerQuestion(selected) {
  const queue = getPracticeQuestions();
  const q = queue[state.currentIndex];
  const correct = selected === q.answer;
  const record = {
    selected,
    correct,
    answeredAt: new Date().toISOString()
  };
  state.answers[q.id] = record;
  practiceSessionAnswers[q.id] = record;
  saveState();
  renderQuestion();
}

function nextQuestion() {
  const queue = getPracticeQuestions();
  if (state.currentIndex >= queue.length - 1) {
    practiceCompleted = true;
    state.lastViewed = "practice-complete";
    saveState();
    renderPracticeComplete();
    return;
  }
  state.currentIndex += 1;
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
      <p style="color:var(--muted);line-height:1.7;margin-top:0;">一度間違えた問題をもう一度解き直します。</p>
      ${wrong.length ? wrong.map(q => `
        <div class="list-item">
          <div><strong>${q.category}</strong><br><small>${q.question}</small></div>
          <button class="secondary-btn" onclick="startSpecific('${q.id}')">解く</button>
        </div>
      `).join("") : `<div class="empty">まだ間違えた問題はありません。<br>問題を解いてみましょう。</div>`}
    </section>
  `;
}

function renderFavorites() {
  setActiveNav("favorites");
  const favorites = QUESTIONS.filter(q => state.bookmarks[q.id]);

  screenEl().innerHTML = `
    <div class="back-row"><h2>お気に入り</h2></div>
    <section class="card">
      <h3>⭐ お気に入りの問題</h3>
      <p style="color:var(--muted);line-height:1.7;margin-top:0;">あとで見返したい問題をここにまとめています。</p>
      ${favorites.length ? favorites.map(q => `
        <div class="list-item">
          <div><strong>${q.category}</strong><br><small>${q.question}</small></div>
          <button class="secondary-btn" onclick="startSpecific('${q.id}')">解く</button>
        </div>
      `).join("") : `<div class="empty">お気に入りに登録した問題はありません。<br>問題画面の☆を押して登録できます。</div>`}
    </section>
  `;
}

function startSpecific(id) {
  const q = QUESTIONS.find(q => q.id === id);
  if (q) startPracticeQueue([q.id], `${q.category}・1問`);
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

const FIGURE_LIBRARY = {
  "fig-ch1-sarcomere": { chapter: 1, title: "サルコメア・アクチン・ミオシン", image: "assets/figures/sarcomere_fig1_4.svg", caption: "図1.4に対応するCPTmate学習図。Z線・A帯・H帯・M線・I帯、アクチン・ミオシンの関係を確認する。" },
  "fig-ch1-contraction": { chapter: 1, title: "神経刺激から筋収縮まで", image: "assets/figures/contraction_fig1_5.svg", caption: "図1.5に対応するCPTmate学習図。神経筋接合部からCa²⁺放出、トロポニン・トロポミオシンを経て収縮へ至る流れ。" },
  "fig-ch1-neuron": { chapter: 1, title: "神経細胞の模式図", image: "assets/figures/neuron_fig1_6.svg", caption: "図1.6に対応するCPTmate学習図。樹状突起・細胞体・軸索・髄鞘・ランビエ絞輪・軸索終末の位置関係を確認する。" },
  "fig-ch1-filament-sliding": { chapter: 1, title: "フィラメント滑走", image: "assets/figures/sarcomere_fig1_4.svg", caption: "図1.4のサルコメア構造を使って、フィラメントの重なりと各帯の関係を確認する。" },
  "fig-ch1-spindle-gto": { chapter: 1, title: "筋紡錘とゴルジ腱器官（GTO）", image: "assets/figures/spindle_gto_fig1_7.svg", caption: "図1.7に対応するCPTmate学習図。筋紡錘とGTOの構造・位置関係を確認する。" },
  "fig-ch1-long-bone": { chapter: 1, title: "長骨の構造と骨リモデリング", image: "assets/figures/long_bone_fig1_8.svg", caption: "図1.8に対応するCPTmate学習図。長骨の主要構造を確認する。" },
  "fig-ch1-skeleton": { chapter: 1, title: "軸性骨格と付属性骨格", image: "assets/figures/skeleton_fig1_9.svg", caption: "図1.9に対応するCPTmate学習図。成人男性骨格の前面・後面と軸性／付属性の位置関係を確認する。" }
};

function getFigureCatalog() {
  const used = {};
  QUESTIONS.forEach(q => {
    if (!q.figureId || !FIGURE_LIBRARY[q.figureId]) return;
    used[q.figureId] ??= [];
    used[q.figureId].push(q.id);
  });
  return Object.entries(FIGURE_LIBRARY)
    .filter(([id]) => used[id]?.length)
    .map(([id, fig]) => ({
      id, ...fig, ids: used[id]
    }));
}

function renderFigureGallery() {
  setActiveNav("settings");
  const figures = getFigureCatalog();
  screenEl().innerHTML = `
    <div class="back-row">
      <button class="back-btn" onclick="renderSettings()">‹</button>
      <h2>図・イラスト一覧</h2>
    </div>
    <section class="card figure-gallery-card">
      <p style="color:var(--muted);line-height:1.7;margin-top:0;">
        CPTmateで現在使用している図を確認できます。図をタップすると全画面で確認できます。
      </p>
      <div class="figure-gallery-list">
        ${figures.map((fig, i) => {
          const safeCaption = fig.caption.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, " ");
          return `
            <button class="figure-gallery-item" type="button" onclick="openFigureModal('${fig.image}?v=${APP_VERSION}','${safeCaption}')">
              <div class="figure-gallery-thumb"><img src="${fig.image}?v=${APP_VERSION}" alt="${fig.caption}" loading="lazy"></div>
              <div class="figure-gallery-meta">
                <strong>${fig.caption}</strong>
                <span>第${fig.chapter}章　使用問題 ${fig.ids.length}問</span>
              </div>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
  ensureFigureGalleryStyles();
}

function ensureFigureGalleryStyles() {
  if (document.getElementById("cptmateFigureGalleryStyles")) return;
  const style = document.createElement("style");
  style.id = "cptmateFigureGalleryStyles";
  style.textContent = `
    .figure-gallery-list{display:grid;gap:12px}
    .figure-gallery-item{display:flex;gap:14px;align-items:center;width:100%;padding:12px;border:1px solid var(--line);border-radius:16px;background:#fff;text-align:left;cursor:pointer}
    .figure-gallery-thumb{width:112px;height:82px;flex:0 0 112px;border-radius:12px;background:#f7f9f9;display:flex;align-items:center;justify-content:center;overflow:hidden}
    .figure-gallery-thumb img{width:100%;height:100%;object-fit:contain}
    .figure-gallery-meta{min-width:0;display:flex;flex-direction:column;gap:5px}
    .figure-gallery-meta strong{font-size:14px;line-height:1.45}
    .figure-gallery-meta span{font-size:12px;color:var(--muted)}
  `;
  document.head.appendChild(style);
}

function renderSettings() {
  setActiveNav("settings");
  screenEl().innerHTML = `
    <div class="back-row"><h2>設定</h2></div>
    <section class="card">
      <h3>データ</h3>
      <p style="color:var(--muted);line-height:1.7;">学習データはこのiPhoneのブラウザ内に保存されます。必要に応じてバックアップ・復元ができます。</p>
      <button class="secondary-btn full" onclick="exportBackup()">現在の学習データをバックアップ</button>
      <button class="secondary-btn full" onclick="importBackup()">バックアップから復元</button>
      <button class="secondary-btn full" onclick="renderFigureGallery()">図・イラスト一覧</button>
      <input id="backupFileInput" type="file" accept="application/json,.json" style="display:none" onchange="importBackupFile(event)">
      <button class="secondary-btn full" onclick="resetProgress()">学習データをリセット</button>
    </section>
    <section class="card">
      <h3>アプリ情報</h3>
      <p style="margin:0 0 14px;color:var(--muted);">CPTmate v${APP_VERSION}<br>GitHub Pages向け試作版<br>第1章収録問題：${QUESTIONS.filter(q => q.chapter === 1).length}問</p>
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
  const currentVersion = APP_VERSION;
  if (status) status.textContent = "最新版を確認しています…";

  try {
    // version.json は必ずキャッシュを回避して確認する。
    const checkUrl = `version.json?check=${Date.now()}`;
    const res = await fetch(checkUrl, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const latest = await res.json();
    const latestVersion = String(latest.version || "").trim();
    if (!latestVersion) throw new Error("version.jsonのバージョン情報がありません。");

    if (compareVersions(latestVersion, currentVersion) <= 0) {
      if (status) status.textContent = `最新版です（v${currentVersion}）`;
      return;
    }

    if (!confirm(`最新版 v${latestVersion} が利用できます。\n\n最新版へ更新しますか？`)) {
      if (status) status.textContent = `現在のバージョン：v${currentVersion}`;
      return;
    }

    if (status) status.textContent = `v${latestVersion} のファイルを取得しています…`;

    // app.js / style.css を「新しいURL」として直接取得し、ブラウザキャッシュを使わせない。
    // 取得確認後にページを再読み込みするため、旧app.jsのまま表示される問題を防ぐ。
    const assetBase = new URL(".", window.location.href);
    const assetNames = ["app.js", "style.css"];
    for (const assetName of assetNames) {
      const assetUrl = new URL(assetName, assetBase);
      assetUrl.searchParams.set("v", latestVersion);
      assetUrl.searchParams.set("update", String(Date.now()));

      const assetRes = await fetch(assetUrl.toString(), {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" }
      });
      if (!assetRes.ok) throw new Error(`${assetName}: HTTP ${assetRes.status}`);

      const assetText = await assetRes.text();

      // app.js は取得したファイルのAPP_VERSIONを確認してから反映する。
      if (assetName === "app.js") {
        const match = assetText.match(/const APP_VERSION\s*=\s*"([^"]+)"/);
        if (!match || compareVersions(match[1], latestVersion) !== 0) {
          throw new Error(`app.jsのバージョンが一致しません（取得: ${match?.[1] || "不明"} / 最新: ${latestVersion}）`);
        }

        // Cache Storage に残っている旧ファイルがある環境でも、
        // 次回読み込み時に新しいURLを優先できるように保存する。
        if ("caches" in window) {
          const cache = await caches.open("cptmate-assets-v1");
          await cache.put(assetUrl.toString(), new Response(assetText, {
            headers: { "Content-Type": "application/javascript; charset=utf-8" }
          }));
        }
      } else if (assetName === "style.css" && "caches" in window) {
        const cache = await caches.open("cptmate-assets-v1");
        await cache.put(assetUrl.toString(), new Response(assetText, {
          headers: { "Content-Type": "text/css; charset=utf-8" }
        }));
      }
    }

    if (status) status.textContent = `v${latestVersion} を確認しました。再読み込みしています…`;

    // ページ自体も新しいURLで再読み込みする。
    // app.js/style.cssには同じバージョンのクエリを付けるため、
    // Safari/GitHub Pagesの古い静的アセットを掴む可能性を下げる。
    const url = new URL(window.location.href);
    url.searchParams.set("update", String(Date.now()));
    url.searchParams.set("v", latestVersion);
    window.location.replace(url.toString());
  } catch (error) {
    console.error("CPTmate update check failed:", error);
    if (status) status.textContent = "更新確認に失敗しました。";
    alert(`最新版への更新に失敗しました。\n\n${error.message || error}\n\n通信状態とGitHub Pagesの公開状態を確認してください。`);
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

function importBackup() {
  const input = document.getElementById("backupFileInput");
  if (input) input.click();
}

function importBackupFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || ""));
      if (!payload || payload.app !== "CPTmate" || !payload.state) {
        throw new Error("invalid backup");
      }
      if (!confirm("バックアップの学習データで現在の学習データを置き換えます。よろしいですか？")) return;
      state = {
        ...defaultState,
        ...payload.state,
        answers: { ...(payload.state.answers || {}) },
        bookmarks: { ...(payload.state.bookmarks || {}) }
      };
      saveState();
      renderSettings();
      alert("学習データを復元しました。");
    } catch (error) {
      console.error("CPTmate backup restore failed:", error);
      alert("バックアップを読み込めませんでした。CPTmateで作成したバックアップJSONを選択してください。");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
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
    if (nav === "favorites") renderFavorites();
    if (nav === "practice") renderPracticeSelector();
    if (nav === "review") renderReview();
    if (nav === "stats") renderStats();
    if (nav === "settings") renderSettings();
  });
});


renderHome();
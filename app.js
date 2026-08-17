const QUESTIONS = [
  {
    "id": "ch1-q001",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "question": "骨格筋の基本的な機能的収縮単位として最も適切なのはどれか。",
    "choices": [
      "筋線維",
      "筋原線維",
      "サルコメア",
      "筋線維束"
    ],
    "answer": 2,
    "explanation": "サルコメアはZ線から隣接するZ線までの範囲で、骨格筋の基本的な機能的収縮単位である。"
  },
  {
    "id": "ch1-q002",
    "chapter": 1,
    "category": "筋系・構造",
    "type": "standard",
    "question": "構造の大きい順として、資料の説明に合うものはどれか。",
    "choices": [
      "サルコメア→筋フィラメント→筋原線維→筋線維→骨格筋",
      "骨格筋→筋線維→筋原線維→筋フィラメント→サルコメア",
      "筋線維→骨格筋→筋原線維→サルコメア→筋フィラメント",
      "骨格筋→筋原線維→筋線維→筋フィラメント→サルコメア"
    ],
    "answer": 1,
    "explanation": "資料では、骨格筋＞筋線維＞筋原線維＞筋フィラメント＞サルコメアの順に大きいと整理されている。"
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
    "question": "1つのサルコメアの範囲として正しいものはどれか。",
    "choices": [
      "A帯からH帯まで",
      "Z線から隣接するZ線まで",
      "M線からM線まで",
      "I帯からA帯まで"
    ],
    "answer": 1,
    "explanation": "サルコメアはZ線から隣接するZ線までの範囲を指す。"
  },
  {
    "id": "ch1-q005",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "question": "A帯について、資料の説明に最も合うものはどれか。",
    "choices": [
      "ミオシンフィラメントが存在する範囲",
      "アクチンだけが存在する範囲",
      "Z線からZ線までの全範囲",
      "神経筋接合部の領域"
    ],
    "answer": 0,
    "explanation": "A帯はミオシンフィラメントが存在する範囲で、骨格筋では暗帯として見える。"
  },
  {
    "id": "ch1-q006",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "question": "A帯の中で、ミオシンのみが存在しアクチンが存在しない部分はどれか。",
    "choices": [
      "I帯",
      "H帯",
      "Z線",
      "M線"
    ],
    "answer": 1,
    "explanation": "H帯はA帯の中でミオシンのみが存在し、アクチンと重ならない部分である。"
  },
  {
    "id": "ch1-q007",
    "chapter": 1,
    "category": "筋系・サルコメア",
    "type": "standard",
    "question": "H帯の中央を通る暗い線はどれか。",
    "choices": [
      "Z線",
      "I帯",
      "M線",
      "筋鞘"
    ],
    "answer": 2,
    "explanation": "M線はH帯の中央を通る線で、ミオシンフィラメントの正しい配列を維持する。"
  },
  {
    "id": "ch1-q008",
    "chapter": 1,
    "category": "筋系・フィラメント",
    "type": "standard",
    "question": "ミオシンフィラメントとアクチンフィラメントの組み合わせとして正しいものはどれか。",
    "choices": [
      "ミオシン＝細い、アクチン＝太い",
      "ミオシン＝太い、アクチン＝細い",
      "両方とも太い",
      "両方とも細い"
    ],
    "answer": 1,
    "explanation": "資料ではミオシンを太いフィラメント、アクチンを細いフィラメントとして説明している。"
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
    "explanation": "資料では、カルシウムイオンがトロポニンと結合し、その後トロポミオシンが移動すると説明されている。"
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
    "question": "資料で示される筋収縮の流れとして最初に起こるものはどれか。",
    "choices": [
      "カルシウムがトロポニンに結合する",
      "ミオシンがアクチンに結合する",
      "神経の活動電位が神経筋接合部に到達しAChが放出される",
      "筋小胞体がATPを放出する"
    ],
    "answer": 2,
    "explanation": "資料では、神経の活動電位が神経筋接合部に到達し、AChが放出されることから流れが始まる。"
  },
  {
    "id": "ch1-q013",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "question": "AChが筋線維側で結合する場所として資料に示されているのはどれか。",
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
    "question": "活動電位を受けてカルシウムイオンを放出する構造はどれか。",
    "choices": [
      "筋小胞体",
      "筋原線維",
      "腱",
      "骨膜"
    ],
    "answer": 0,
    "explanation": "資料では、活動電位を受けて筋小胞体がCa²⁺を放出すると説明されている。"
  },
  {
    "id": "ch1-q016",
    "chapter": 1,
    "category": "筋収縮・流れ",
    "type": "standard",
    "question": "フィラメント滑走説について正しい説明はどれか。",
    "choices": [
      "アクチンとミオシンそのものが短くなる",
      "フィラメント自体の長さは変わらず、互いに滑り込む",
      "サルコメアが分解される",
      "Z線が筋線維の中を移動する"
    ],
    "answer": 1,
    "explanation": "フィラメント滑走説では、フィラメント自体の長さは変化せず、アクチンとミオシンが互いに滑り込むことで筋全体が短縮・伸張する。"
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
    "question": "バックスクワットでしゃがむ局面において、大腿四頭筋・大殿筋の筋活動として資料の説明に合うものはどれか。",
    "choices": [
      "短縮性",
      "伸張性",
      "等尺性のみ",
      "活動しない"
    ],
    "answer": 1,
    "explanation": "資料では、バックスクワットのしゃがむ局面で大腿四頭筋・大殿筋が伸張性筋活動を行うと説明している。"
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
    "explanation": "資料ではタイプⅠ（SO）線維は酸化能力・疲労耐性が高く、収縮・弛緩速度は遅いと説明されている。"
  },
  {
    "id": "ch1-q022",
    "chapter": 1,
    "category": "筋線維タイプ",
    "type": "standard",
    "question": "資料で、無酸素性能力に優れ、力は強いが疲労しやすいとされるのはどれか。",
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
    "question": "長距離走やウォーキングで貢献度が高いと資料で説明される線維はどれか。",
    "choices": [
      "タイプⅠ",
      "タイプⅡa",
      "タイプⅡx",
      "錘外線維のみ"
    ],
    "answer": 0,
    "explanation": "持久的な活動ではタイプⅠ線維の貢献度が高いと説明されている。"
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
    "explanation": "資料ではCNSを脳・脊髄と定義している。"
  },
  {
    "id": "ch1-q025",
    "chapter": 1,
    "category": "神経系",
    "type": "standard",
    "question": "末梢から中枢へ情報を送る神経として資料で示されるのはどれか。",
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
    "question": "筋紡錘が主に検知するものとして資料に合うのはどれか。",
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
    "explanation": "資料では運動単位を、1人の指揮官と複数の演奏者のセットになぞらえ、運動神経とそれが支配する筋線維群として説明している。"
  },
  {
    "id": "ch1-q031",
    "chapter": 1,
    "category": "神経系・サイズの原理",
    "type": "standard",
    "question": "サイズの原理による運動単位の動員順序として資料に合うものはどれか。",
    "choices": [
      "タイプⅡx→Ⅱa→Ⅰ",
      "タイプⅡa→Ⅰ→Ⅱx",
      "タイプⅠ→Ⅱa→Ⅱx",
      "すべて同時"
    ],
    "answer": 2,
    "explanation": "資料ではタイプⅠ→タイプⅡa→タイプⅡxの順に動員されると説明されている。"
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
    "explanation": "資料では、力の調節機構として運動単位の動員と発火頻度の調節（Rate coding）の2つを挙げている。"
  },
  {
    "id": "ch1-q033",
    "chapter": 1,
    "category": "骨格系",
    "type": "standard",
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
    "question": "ウォルフの法則の説明として最も適切なのはどれか。",
    "choices": [
      "骨は負荷に関係なく一定の構造を保つ",
      "骨は課せられたストレス（負荷）に対して適応する",
      "骨密度はカルシウム摂取量だけで決まる",
      "骨は筋収縮によって直接短縮する"
    ],
    "answer": 1,
    "explanation": "資料ではウォルフの法則を、骨が課せられたストレス（負荷）に対して適応する考え方として説明している。"
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
    "explanation": "靭帯は骨と骨をつなぐ組織で、コラーゲンに加えてエラスチンも含むと資料で説明されている。"
  },
  {
    "id": "ch1-q040",
    "chapter": 1,
    "category": "骨格系・総合",
    "type": "standard",
    "question": "資料の章全体の流れとして最も適切なのはどれか。",
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
    "explanation": "資料の流れでは、まず神経の活動電位が神経筋接合部に到達し、AChが放出される。その後に受容体結合、筋鞘の活動電位、Ca²⁺放出へ進む。"
  },
  {
    "id": "ch1-case001-q02",
    "chapter": 1,
    "category": "ケーススタディ・筋収縮",
    "type": "case",
    "caseId": "case-001",
    "caseTitle": "高負荷トレーニング中の筋収縮",
    "question": "前問の状態から筋線維内部へ活動電位が伝わった。次に資料の流れで起こる現象はどれか。",
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
    "question": "クライアントがバックスクワットでしゃがんでいる。資料の説明に基づく大腿四頭筋・大殿筋の主な筋活動様式はどれか。",
    "choices": [
      "短縮性",
      "伸張性",
      "等尺性",
      "筋活動はない"
    ],
    "answer": 1,
    "explanation": "資料では、しゃがむ局面で大腿四頭筋・大殿筋が伸張性筋活動を行うと説明されている。"
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
    "explanation": "資料では、立ち上がる局面で大腿四頭筋・大殿筋が短縮性筋活動を行うと説明している。"
  },
  {
    "id": "ch1-case002-q03",
    "chapter": 1,
    "category": "ケーススタディ・筋活動様式",
    "type": "case",
    "caseId": "case-002",
    "caseTitle": "スクワットの3局面",
    "question": "スクワット中、脊柱起立筋や腹部の筋群が姿勢を安定させるために行っている活動として資料に合うものはどれか。",
    "choices": [
      "短縮性のみ",
      "伸張性のみ",
      "等尺性",
      "筋紡錘による受動活動"
    ],
    "answer": 2,
    "explanation": "資料では、脊柱起立筋や腹部の筋群は動作中ずっと等尺性で姿勢を安定させると説明している。"
  },
  {
    "id": "ch1-case003-q01",
    "chapter": 1,
    "category": "ケーススタディ・筋線維",
    "type": "case",
    "caseId": "case-003",
    "caseTitle": "長距離走と筋線維",
    "question": "長距離走を目的とするクライアントで、資料上、貢献度が高いと考えられる筋線維タイプはどれか。",
    "choices": [
      "タイプⅠ",
      "タイプⅡaのみ",
      "タイプⅡxのみ",
      "錘内線維"
    ],
    "answer": 0,
    "explanation": "資料では、長距離走やウォーキングなどの持久的活動でタイプⅠ線維の貢献度が高いと説明している。"
  },
  {
    "id": "ch1-case003-q02",
    "chapter": 1,
    "category": "ケーススタディ・筋線維",
    "type": "case",
    "caseId": "case-003",
    "caseTitle": "長距離走と筋線維",
    "question": "同じクライアントが短時間で大きな力を発揮する活動を行う場合、資料上、より関与が高いのはどの線維タイプか。",
    "choices": [
      "タイプⅠのみ",
      "タイプⅡ、特にⅡx",
      "錘内線維のみ",
      "筋線維タイプに違いはない"
    ],
    "answer": 1,
    "explanation": "資料では、スプリントやウエイトリフティングなどではタイプⅡの貢献度が高く、特にⅡxは力が強いが疲労しやすいと説明されている。"
  },
  {
    "id": "ch1-case004-q01",
    "chapter": 1,
    "category": "ケーススタディ・感覚受容器",
    "type": "case",
    "caseId": "case-004",
    "caseTitle": "ストレッチとジャンプ",
    "question": "クライアントが急速に筋を伸張された直後に力強い短縮性筋活動を行う。資料が説明する仕組みとして最も適切なのはどれか。",
    "choices": [
      "伸張反射を利用する",
      "ウォルフの法則を利用する",
      "GTOだけを刺激する",
      "骨芽細胞を直接刺激する"
    ],
    "answer": 0,
    "explanation": "資料では、プライオメトリックトレーニングが素早い伸張の直後に短縮性筋活動を行い、伸張反射を利用してより力強い収縮を引き出すと説明している。"
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
    "explanation": "資料では、筋紡錘は筋の長さの変化、GTOは筋が発揮する力（張力）を検知すると対比している。"
  },
  {
    "id": "ch1-case005-q01",
    "chapter": 1,
    "category": "ケーススタディ・運動単位",
    "type": "case",
    "caseId": "case-005",
    "caseTitle": "負荷増加と運動単位",
    "question": "軽い負荷から徐々に負荷を増やしていくとき、資料のサイズの原理に従う運動単位の動員順序はどれか。",
    "choices": [
      "タイプⅡx→Ⅱa→Ⅰ",
      "タイプⅠ→Ⅱa→Ⅱx",
      "Ⅱa→Ⅱx→Ⅰ",
      "すべて同時"
    ],
    "answer": 1,
    "explanation": "資料では、サイズの原理によりタイプⅠ→Ⅱa→Ⅱxの順に動員されると説明している。"
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
    "explanation": "資料では、力の調節には運動単位の動員と発火頻度の調節（Rate coding）があると説明している。"
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
    "explanation": "資料では、筋紡錘を筋の長さ・伸張を監視するセンサー、GTOを発揮される力・張力を監視するセンサーとして整理している。"
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
    "explanation": "資料では、筋が生み出した力が腱を通じて骨を引っ張り、骨格が関節を中心に運動を生み出す流れでまとめている。"
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
  }
];

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
      <div class="label">CPTmate v0.1</div>
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
      <p style="color:var(--muted);line-height:1.7;margin:0;">v0.1では、第1章を使って問題演習の土台を確認します。今後、章・ケース・図問題を順次追加します。</p>
    </section>
  `;
}

function startPractice(index = 0) {
  state.currentIndex = index;
  state.lastViewed = "practice";
  saveState();
  renderQuestion();
}

function renderQuestion() {
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
      <strong>${saved.correct ? "正解" : "不正解"}</strong>
      <div>${saved.correct ? "その選択で正解です。" : `正解は ${letters[q.answer]}：${q.choices[q.answer]}`}</div>
      <div class="explanation"><strong>解説</strong><br>${q.explanation}</div>
    </div>
    <button class="primary-btn full" onclick="nextQuestion()">次の問題</button>
  ` : "";

  screenEl().innerHTML = `
    <div class="back-row">
      <button class="back-btn" onclick="renderHome()">‹</button>
      <h2>問題演習</h2>
    </div>

    <section class="card">
      <div class="question-head">
        <span>第${q.chapter}章　${q.category}</span>
        <span>${state.currentIndex + 1} / ${QUESTIONS.length}</span>
      </div>
      <div class="bookmark-row">
        <button class="bookmark" onclick="toggleBookmark('${q.id}')">${bookmarked ? "★" : "☆"}</button>
      </div>
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
      <p style="margin:0;color:var(--muted);">CPTmate v0.1<br>GitHub Pages向け試作版</p>
    </section>
  `;
}

function exportBackup() {
  const payload = {
    app: "CPTmate",
    version: "0.1",
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

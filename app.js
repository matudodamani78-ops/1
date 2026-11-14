(function () {
  "use strict";

  var MATERIALS = [
  {
    "id": "pla-basic",
    "name": "PLA 基础款",
    "name_en": "PLA",
    "category": "PLA",
    "price": 69,
    "temp_max": 55,
    "tensile": 55,
    "elongation": 6,
    "odor": 2,
    "warp": 2,
    "difficulty": 1,
    "uv": 2,
    "nozzle": "190-220",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": false,
    "note": "最通用，细节好、几乎不翘边；脆，不耐热，不适合户外和承力件。",
    "flexible": false
  },
  {
    "id": "pla-highspeed",
    "name": "PLA 高速款",
    "name_en": "PLA High Speed",
    "category": "PLA",
    "price": 89,
    "temp_max": 55,
    "tensile": 60,
    "elongation": 8,
    "odor": 1,
    "warp": 2,
    "difficulty": 1,
    "uv": 2,
    "nozzle": "200-230",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": false,
    "note": "流动性好，可上高速机；层间结合优于普通 PLA，耐温仍是短板。",
    "flexible": false
  },
  {
    "id": "pla-tough",
    "name": "PLA 高韧款",
    "name_en": "Tough PLA",
    "category": "PLA",
    "price": 109,
    "temp_max": 60,
    "tensile": 50,
    "elongation": 15,
    "odor": 1,
    "warp": 2,
    "difficulty": 1,
    "uv": 2,
    "nozzle": "200-220",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": false,
    "note": "抗冲击明显好于普通 PLA，适合卡扣、外壳；仍不适合高温环境。",
    "flexible": false
  },
  {
    "id": "pla-silk",
    "name": "丝绸 PLA",
    "name_en": "Silk PLA",
    "category": "PLA",
    "price": 99,
    "temp_max": 50,
    "tensile": 45,
    "elongation": 5,
    "odor": 1,
    "warp": 2,
    "difficulty": 2,
    "uv": 1,
    "nozzle": "200-220",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": false,
    "note": "表面有金属光泽，适合手办和装饰件；强度一般，层间结合偏弱。",
    "flexible": false
  },
  {
    "id": "pla-wood",
    "name": "木纹 PLA",
    "name_en": "Wood-filled PLA",
    "category": "PLA",
    "price": 129,
    "temp_max": 50,
    "tensile": 35,
    "elongation": 4,
    "odor": 3,
    "warp": 2,
    "difficulty": 2,
    "uv": 1,
    "nozzle": "195-220",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": true,
    "note": "木粉填充，有木纹质感；易堵嘴、磨损黄铜喷嘴，建议 0.5mm 以上喷嘴。",
    "flexible": false
  },
  {
    "id": "pla-cf",
    "name": "PLA-CF 碳纤",
    "name_en": "PLA-CF",
    "category": "PLA",
    "price": 189,
    "temp_max": 60,
    "tensile": 65,
    "elongation": 3,
    "odor": 3,
    "warp": 2,
    "difficulty": 2,
    "uv": 2,
    "nozzle": "210-230",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": true,
    "note": "刚度高、尺寸稳定，表面哑光；很脆，必须用硬化喷嘴。",
    "flexible": false
  },
  {
    "id": "petg-basic",
    "name": "PETG 基础款",
    "name_en": "PETG",
    "category": "PETG",
    "price": 99,
    "temp_max": 75,
    "tensile": 50,
    "elongation": 80,
    "odor": 2,
    "warp": 3,
    "difficulty": 2,
    "uv": 3,
    "nozzle": "220-250",
    "bed": "70-80",
    "enclosure": false,
    "abrasive": false,
    "note": "韧性好、耐水、比 PLA 耐温；易拉丝、粘床，首层间隙要调好。",
    "flexible": false
  },
  {
    "id": "petg-clear",
    "name": "PETG 高透款",
    "name_en": "Clear PETG",
    "category": "PETG",
    "price": 119,
    "temp_max": 70,
    "tensile": 48,
    "elongation": 70,
    "odor": 2,
    "warp": 3,
    "difficulty": 2,
    "uv": 3,
    "nozzle": "220-250",
    "bed": "70-80",
    "enclosure": false,
    "abrasive": false,
    "note": "透光率高，适合灯罩、展示件；层纹明显，想要通透需慢速打印。",
    "flexible": false
  },
  {
    "id": "petg-cf",
    "name": "PETG-CF 碳纤",
    "name_en": "PETG-CF",
    "category": "PETG",
    "price": 199,
    "temp_max": 80,
    "tensile": 55,
    "elongation": 10,
    "odor": 3,
    "warp": 3,
    "difficulty": 3,
    "uv": 3,
    "nozzle": "230-250",
    "bed": "70-80",
    "enclosure": false,
    "abrasive": true,
    "note": "刚性和耐热比普通 PETG 略好，表面哑光；需硬化喷嘴。",
    "flexible": false
  },
  {
    "id": "abs-basic",
    "name": "ABS 基础款",
    "name_en": "ABS",
    "category": "ABS",
    "price": 79,
    "temp_max": 95,
    "tensile": 42,
    "elongation": 25,
    "odor": 5,
    "warp": 5,
    "difficulty": 3,
    "uv": 2,
    "nozzle": "230-260",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": false,
    "note": "便宜、耐温、可打磨可丙酮抛光；气味大、必须封箱，否则必翘边。",
    "flexible": false
  },
  {
    "id": "abs-hi",
    "name": "高抗冲 ABS",
    "name_en": "High-impact ABS",
    "category": "ABS",
    "price": 109,
    "temp_max": 100,
    "tensile": 38,
    "elongation": 40,
    "odor": 4,
    "warp": 5,
    "difficulty": 3,
    "uv": 2,
    "nozzle": "230-260",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": false,
    "note": "抗冲击更好，适合外壳、工具手柄；仍怕紫外线和翘边。",
    "flexible": false
  },
  {
    "id": "asa-basic",
    "name": "ASA 基础款",
    "name_en": "ASA",
    "category": "ASA",
    "price": 149,
    "temp_max": 100,
    "tensile": 45,
    "elongation": 20,
    "odor": 4,
    "warp": 4,
    "difficulty": 4,
    "uv": 5,
    "nozzle": "240-265",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": false,
    "note": "户外首选，抗 UV、不易黄变；需要封箱和较高热床温度。",
    "flexible": false
  },
  {
    "id": "tpu-95a",
    "name": "TPU 95A",
    "name_en": "TPU 95A",
    "category": "TPU",
    "price": 139,
    "temp_max": 80,
    "tensile": 35,
    "elongation": 500,
    "odor": 2,
    "warp": 1,
    "difficulty": 3,
    "uv": 3,
    "nozzle": "220-240",
    "bed": "40-60",
    "enclosure": false,
    "abrasive": false,
    "note": "软硬适中，密封圈、减震垫、鞋垫都合适；必须慢速打印。",
    "flexible": true
  },
  {
    "id": "tpu-85a",
    "name": "TPU 85A",
    "name_en": "TPU 85A",
    "category": "TPU",
    "price": 169,
    "temp_max": 75,
    "tensile": 28,
    "elongation": 600,
    "odor": 2,
    "warp": 1,
    "difficulty": 4,
    "uv": 3,
    "nozzle": "220-235",
    "bed": "40-60",
    "enclosure": false,
    "abrasive": false,
    "note": "更软更弹，适合密封和减震；难打，最好用直驱挤出机。",
    "flexible": true
  },
  {
    "id": "tpu-98a",
    "name": "TPU 98A",
    "name_en": "TPU 98A",
    "category": "TPU",
    "price": 129,
    "temp_max": 85,
    "tensile": 40,
    "elongation": 400,
    "odor": 2,
    "warp": 1,
    "difficulty": 2,
    "uv": 3,
    "nozzle": "220-240",
    "bed": "40-60",
    "enclosure": false,
    "abrasive": false,
    "note": "偏硬，接近橡胶鞋底手感；适合滚轮、脚垫、耐磨件。",
    "flexible": true
  },
  {
    "id": "pa6",
    "name": "尼龙 PA6/66",
    "name_en": "Nylon PA6/66",
    "category": "PA",
    "price": 189,
    "temp_max": 110,
    "tensile": 75,
    "elongation": 150,
    "odor": 3,
    "warp": 4,
    "difficulty": 4,
    "uv": 3,
    "nozzle": "250-270",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": false,
    "note": "强韧耐磨，齿轮、铰链、卡扣的经典材料；吸湿严重，必须干燥。",
    "flexible": false
  },
  {
    "id": "pa12",
    "name": "尼龙 PA12",
    "name_en": "Nylon PA12",
    "category": "PA",
    "price": 229,
    "temp_max": 120,
    "tensile": 65,
    "elongation": 200,
    "odor": 3,
    "warp": 4,
    "difficulty": 4,
    "uv": 3,
    "nozzle": "250-270",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": false,
    "note": "吸湿比 PA6 略低、更柔韧，尺寸稳定性更好；仍建议封箱和干燥。",
    "flexible": false
  },
  {
    "id": "pa-cf",
    "name": "尼龙 PA-CF",
    "name_en": "PA-CF",
    "category": "PA",
    "price": 299,
    "temp_max": 130,
    "tensile": 110,
    "elongation": 3,
    "odor": 3,
    "warp": 4,
    "difficulty": 4,
    "uv": 4,
    "nozzle": "260-280",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": true,
    "note": "强度、刚性、耐温都很突出，适合功能原型；脆，需硬化喷嘴和干燥。",
    "flexible": false
  },
  {
    "id": "pa-gf",
    "name": "尼龙 PA-GF",
    "name_en": "PA-GF",
    "category": "PA",
    "price": 249,
    "temp_max": 140,
    "tensile": 100,
    "elongation": 2,
    "odor": 3,
    "warp": 4,
    "difficulty": 4,
    "uv": 4,
    "nozzle": "260-280",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": true,
    "note": "耐热最好的一档，刚性极高；玻纤磨损喷嘴，建议硬化喷嘴。",
    "flexible": false
  },
  {
    "id": "pc",
    "name": "PC 聚碳酸酯",
    "name_en": "Polycarbonate",
    "category": "PC",
    "price": 199,
    "temp_max": 120,
    "tensile": 65,
    "elongation": 90,
    "odor": 3,
    "warp": 4,
    "difficulty": 4,
    "uv": 3,
    "nozzle": "260-290",
    "bed": "100-110",
    "enclosure": true,
    "abrasive": false,
    "note": "高强高韧耐温，透明件和防护件常用；打印温度高，必须封箱。",
    "flexible": false
  },
  {
    "id": "pc-abs",
    "name": "PC-ABS 合金",
    "name_en": "PC-ABS",
    "category": "PC",
    "price": 169,
    "temp_max": 105,
    "tensile": 55,
    "elongation": 30,
    "odor": 4,
    "warp": 4,
    "difficulty": 3,
    "uv": 3,
    "nozzle": "250-270",
    "bed": "95-110",
    "enclosure": true,
    "abrasive": false,
    "note": "兼顾 ABS 的好打印和 PC 的强度，适合汽车内饰件；仍有气味。",
    "flexible": false
  },
  {
    "id": "pva",
    "name": "PVA 水溶支撑",
    "name_en": "PVA",
    "category": "支撑",
    "price": 399,
    "temp_max": 50,
    "tensile": 35,
    "elongation": 200,
    "odor": 2,
    "warp": 1,
    "difficulty": 3,
    "uv": 1,
    "nozzle": "190-220",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": false,
    "note": "水溶支撑，适合复杂悬空结构；极易受潮，必须密封干燥保存。",
    "flexible": false
  },
  {
    "id": "hips",
    "name": "HIPS 易拆支撑",
    "name_en": "HIPS",
    "category": "支撑",
    "price": 99,
    "temp_max": 80,
    "tensile": 35,
    "elongation": 40,
    "odor": 4,
    "warp": 4,
    "difficulty": 3,
    "uv": 2,
    "nozzle": "230-250",
    "bed": "90-110",
    "enclosure": true,
    "abrasive": false,
    "note": "可溶于柠檬烯，常作 ABS 的易拆支撑或低成本替代；有气味、需封箱。",
    "flexible": false
  },
  {
    "id": "pla-marble",
    "name": "大理石 PLA",
    "name_en": "Marble PLA",
    "category": "PLA",
    "price": 119,
    "temp_max": 50,
    "tensile": 45,
    "elongation": 5,
    "odor": 1,
    "warp": 2,
    "difficulty": 2,
    "uv": 1,
    "nozzle": "200-220",
    "bed": "50-60",
    "enclosure": false,
    "abrasive": false,
    "note": "仿石材纹理，适合装饰件和浮雕；填料可能轻微磨损喷嘴。",
    "flexible": false
  }
];

  var CATEGORIES = ["PLA", "PETG", "ABS", "ASA", "TPU", "PA", "PC", "支撑"];

  var CRITERIA = ["temp", "strength", "toughness", "ease", "price", "uv", "odor", "rigidity", "softness"];
  var CRITERION_LABELS = {
    temp: "耐温", strength: "强度", toughness: "韧性", ease: "易打印",
    price: "价格", uv: "耐候", odor: "低气味", rigidity: "刚性", softness: "柔性"
  };
  var CRITERION_COLORS = {
    temp: "#0ea5e9", strength: "#6366f1", toughness: "#10b981", ease: "#f59e0b",
    price: "#ef4444", uv: "#8b5cf6", odor: "#14b8a6", rigidity: "#64748b", softness: "#ec4899"
  };

  var SCENARIOS = {
    outdoor: {
      label: "户外 / 耐候",
      desc: "日晒雨淋、长期户外，最怕 UV 老化和开裂",
      weights: { temp: 0.25, uv: 0.30, toughness: 0.10, strength: 0.10, ease: 0.10, price: 0.10, rigidity: 0.05 }
    },
    structural: {
      label: "结构 / 承力件",
      desc: "支架、齿轮、夹具，要求强度和抗冲击",
      weights: { strength: 0.35, toughness: 0.15, temp: 0.15, ease: 0.10, price: 0.15, rigidity: 0.10 }
    },
    decorative: {
      label: "外观 / 摆件",
      desc: "手办、模型、灯罩，好看好打比强度重要",
      weights: { ease: 0.30, price: 0.25, odor: 0.15, strength: 0.10, temp: 0.10, uv: 0.05, rigidity: 0.05 }
    },
    flexible: {
      label: "柔性 / 密封件",
      desc: "密封圈、减震垫、可弯折卡扣",
      weights: { toughness: 0.40, softness: 0.25, price: 0.20, ease: 0.15 }
    },
    hightemp: {
      label: "高温环境",
      desc: "发动机舱、灯具旁、热水附近，长期 90℃ 以上",
      weights: { temp: 0.40, strength: 0.20, uv: 0.10, ease: 0.10, price: 0.10, rigidity: 0.10 }
    },
    budget: {
      label: "低成本 / 试错",
      desc: "打样、批量试错，先便宜好打再谈性能",
      weights: { price: 0.45, ease: 0.25, strength: 0.10, temp: 0.10, rigidity: 0.10 }
    },
    beginner: {
      label: "新手 / 少折腾",
      desc: "第一次打印，容错率优先，少翘边、少堵嘴",
      weights: { ease: 0.35, price: 0.20, odor: 0.15, strength: 0.10, temp: 0.10, rigidity: 0.10 }
    }
  };

  var EXP_LIMIT = { beginner: 2, intermediate: 3, expert: 5 };
  var EXP_LABELS = { beginner: "新手", intermediate: "进阶", expert: "熟练" };
  var FLEX_LABELS = { any: "不限", rigid: "刚性件", flexible: "柔性件" };
  var CUT_LABELS = {
    temp: "耐温不达标", price: "超出预算", tensile: "强度不足",
    flexible: "不是柔性材料", rigid: "柔性材料（你需要刚性）",
    odor: "气味超出容忍", enclosure: "需要封箱打印机",
    abrasive: "需要硬化喷嘴", experience: "超出经验档位"
  };

  var RADAR_AXES = [
    ["strength", "强度"], ["temp", "耐温"], ["toughness", "韧性"],
    ["ease", "易打印"], ["price", "性价比"], ["uv", "耐候"]
  ];
  var RADAR_COLORS = ["#0f766e", "#6366f1", "#f59e0b", "#ec4899"];
  var SCATTER_COLORS = {
    PLA: "#0f766e", PETG: "#0ea5e9", ABS: "#f59e0b", ASA: "#8b5cf6",
    TPU: "#ec4899", PA: "#6366f1", PC: "#64748b", "支撑": "#14b8a6"
  };

  var FIELD_STANDARDS = [
    { field: "拉伸强度 / 断裂伸长率", standard: "ISO 527-1/-2、ASTM D638", note: "TDS 常见条件为 23℃ / 50%RH；不同拉伸速度结果不可直接比较" },
    { field: "长期耐温", standard: "ISO 75（HDT，0.45 MPa）或厂商长期使用温度", note: "HDT 与“长期使用温度”是两种口径，不能混比" },
    { field: "冲击强度（本工具暂未收录）", standard: "ISO 179-1（Charpy）、ASTM D256（Izod）", note: "缺口/无缺口、摆锤能量不同，数据不可直接对比" },
    { field: "阻燃（本工具暂未收录）", standard: "UL 94（V-0 / V-1 / V-2 等）", note: "需要样条或整机测试，不能只按材料种类推断" },
    { field: "食品接触（本工具未做认证）", standard: "FDA 21 CFR、EU 10/2011", note: "色母、助剂和打印件表面都会影响合规，线材合格不等于成品合格" },
    { field: "气味 / VOC 排放", standard: "UL 2904 等排放测试方法", note: "没有统一的“气味 1–5 分”行业标准，本工具该字段为编辑评分" }
  ];

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function clamp(v) { return Math.max(0, Math.min(1, v)); }

  function dryingTip(m) {
    if (m.category === "PA" || m.category === "PVA") return "打印前需干燥";
    if (m.category === "TPU" || m.category === "PETG" || m.category === "PC" || m.category === "ASA") return "易吸潮，建议密封/干燥";
    return "通常免干燥";
  }

  function normalize(m, key) {
    if (key === "temp") return clamp(m.temp_max / 150);
    if (key === "strength") return clamp(m.tensile / 120);
    if (key === "toughness") return clamp(Math.log10(1 + m.elongation) / Math.log10(601));
    if (key === "ease") return 1 - (m.difficulty - 1) / 4;
    if (key === "price") return clamp(1 - (m.price - 60) / 340);
    if (key === "uv") return m.uv / 5;
    if (key === "odor") return 1 - (m.odor - 1) / 4;
    if (key === "rigidity") return m.flexible ? 0 : 1;
    if (key === "softness") return m.flexible ? 1 : 0;
    return 0;
  }

  function weightsFor(req) {
    var base = Object.assign({}, SCENARIOS[req.scenario].weights);
    var map = { price: "w_price", strength: "w_strength", temp: "w_temp" };
    Object.keys(map).forEach(function (k) {
      var delta = (req[map[k]] - 50) / 50 * 0.15;
      base[k] = Math.max(0, (base[k] || 0) + delta);
    });
    var total = Object.keys(base).reduce(function (s, k) { return s + base[k]; }, 0);
    if (total <= 0) return Object.assign({}, SCENARIOS[req.scenario].weights);
    var res = {};
    Object.keys(base).forEach(function (k) { if (base[k] > 0) res[k] = base[k] / total; });
    return res;
  }

  function scoreMaterial(m, scenario, weights) {
    var w = weights || SCENARIOS[scenario].weights;
    var total = Object.keys(w).reduce(function (s, k) { return s + w[k] * normalize(m, k); }, 0);
    return Math.round(total * 1000) / 10;
  }

  function breakdownFor(m, scenario, weights) {
    var w = weights || SCENARIOS[scenario].weights;
    return CRITERIA.filter(function (k) { return w[k] > 0; }).map(function (k) {
      return {
        key: k,
        label: CRITERION_LABELS[k],
        points: Math.round(w[k] * 100 * normalize(m, k) * 10) / 10,
        max: Math.round(w[k] * 100 * 10) / 10,
        color: CRITERION_COLORS[k]
      };
    });
  }

  function passes(m, req, skip) {
    var checks = [
      ["temp", m.temp_max >= req.min_temp],
      ["price", m.price <= req.max_price],
      ["tensile", m.tensile >= req.min_tensile],
      ["flexible", req.flexibility !== "flexible" || m.flexible],
      ["rigid", req.flexibility !== "rigid" || !m.flexible],
      ["odor", m.odor <= req.odor_tolerance],
      ["enclosure", (!m.enclosure) || req.enclosure],
      ["abrasive", (!m.abrasive) || req.hardened_nozzle],
      ["experience", m.difficulty <= EXP_LIMIT[req.experience]]
    ];
    return checks.every(function (pair) { return pair[0] === skip || pair[1]; });
  }

  function filterMaterials(req) {
    var passed = [], cuts = {};
    MATERIALS.forEach(function (m) {
      var failed = null;
      if (m.temp_max < req.min_temp) failed = "temp";
      else if (m.price > req.max_price) failed = "price";
      else if (m.tensile < req.min_tensile) failed = "tensile";
      else if (req.flexibility === "flexible" && !m.flexible) failed = "flexible";
      else if (req.flexibility === "rigid" && m.flexible) failed = "rigid";
      else if (m.odor > req.odor_tolerance) failed = "odor";
      else if (m.enclosure && !req.enclosure) failed = "enclosure";
      else if (m.abrasive && !req.hardened_nozzle) failed = "abrasive";
      else if (m.difficulty > EXP_LIMIT[req.experience]) failed = "experience";
      if (!failed) passed.push(m);
      else cuts[failed] = (cuts[failed] || 0) + 1;
    });
    return { passed: passed, cuts: cuts };
  }

  function buildExplanation(m, req) {
    var reasons = [], warnings = [], sc = req.scenario;
    if (req.min_temp > 0) reasons.push("长期耐温 " + m.temp_max + "℃，达到你要求的 ≥" + req.min_temp + "℃");
    if (req.max_price < 1000) reasons.push("约 " + Math.round(m.price) + " 元/kg，在 " + Math.round(req.max_price) + " 元预算内");
    if (req.min_tensile > 0) reasons.push("拉伸强度 " + Math.round(m.tensile) + " MPa，满足 ≥" + Math.round(req.min_tensile) + " MPa");
    if (req.flexibility === "flexible" || (sc === "flexible" && m.flexible)) reasons.push("柔性材料，可用于密封圈、减震垫和可弯折结构");
    if (sc === "outdoor" && m.uv >= 4) reasons.push("耐候 " + m.uv + "/5，抗紫外线，户外长期使用不易粉化");
    if (sc === "hightemp" && m.temp_max >= 100) reasons.push("属于耐高温材料，适合灯具旁、发动机舱等高温位置");
    if (sc === "budget" && m.price <= 100) reasons.push("单价低，适合反复打样和大批量打印");
    if (sc === "decorative" && m.difficulty <= 2 && m.warp <= 2) reasons.push("易打印、翘边少，适合外观件和摆件");
    if (sc === "beginner" && m.difficulty <= 2) reasons.push("打印难度 " + m.difficulty + "/5、翘边倾向 " + m.warp + "/5，新手也容易成功");
    if (m.difficulty <= 2 && m.warp <= 2 && reasons.length < 3 && !reasons.some(function (t) { return t.indexOf("新手") !== -1; })) {
      reasons.push("免封箱、翘边少，普通打印机就能稳定出件");
    }
    if (m.flexible && m.elongation >= 400 && sc !== "flexible" && reasons.length < 3) {
      reasons.push("断裂伸长率 " + Math.round(m.elongation) + "%，回弹和抗冲击很好");
    }
    if (reasons.length < 2) {
      if (m.tensile >= 80) reasons.push("强度高（" + Math.round(m.tensile) + " MPa），适合受力件");
      else if (m.temp_max >= 100) reasons.push("耐温较好（" + m.temp_max + "℃）");
      else if (m.price <= 90) reasons.push("价格便宜，适合先打样验证结构");
      else reasons.push("强度、耐温、价格比较均衡，可以作为通用材料");
    }
    if (m.odor >= 4) warnings.push("气味较大（" + m.odor + "/5），建议通风或封箱打印");
    if (m.abrasive) warnings.push("含纤维/颗粒，需换硬化喷嘴，否则会快速磨损黄铜喷嘴");
    if (m.enclosure && !req.enclosure) warnings.push("建议封箱打印，否则容易翘边、开裂");
    if (m.warp >= 4) warnings.push("翘边倾向 " + m.warp + "/5，建议加裙边、胶水或封箱");
    if (m.category === "PA" || m.category === "PVA") warnings.push("易吸湿，打印前需干燥，平时密封保存");
    return { reasons: reasons.slice(0, 4), warnings: warnings.slice(0, 3) };
  }

  function hintFor(key, cands) {
    var count = cands.length;
    if (key === "price") return "把预算提高到 " + Math.min.apply(null, cands.map(function (c) { return c.price; })) + " 元/kg，可多出 " + count + " 种候选";
    if (key === "temp") return "把耐温要求降到 " + Math.max.apply(null, cands.map(function (c) { return c.temp_max; })) + "℃，可多出 " + count + " 种候选";
    if (key === "tensile") return "把强度要求降到 " + Math.max.apply(null, cands.map(function (c) { return c.tensile; })) + " MPa，可多出 " + count + " 种候选";
    if (key === "odor") return "把气味容忍放宽到 " + Math.max.apply(null, cands.map(function (c) { return c.odor; })) + "/5，可多出 " + count + " 种候选";
    if (key === "flexible" || key === "rigid") return "把柔性要求改成「不限」，可多出 " + count + " 种候选";
    if (key === "enclosure") return "勾选「有封箱 / 封闭打印机」，可多出 " + count + " 种候选";
    if (key === "abrasive") return "勾选「已换硬化喷嘴」，可多出 " + count + " 种候选";
    if (key === "experience") return "把经验档位调到「熟练」，可多出 " + count + " 种候选";
    return "";
  }

  function parseReq(params) {
    var sp = new URLSearchParams(params || "");
    var sc = sp.get("scenario");
    if (!SCENARIOS[sc]) sc = "structural";
    var flex = sp.get("flexibility");
    if (!FLEX_LABELS[flex]) flex = "any";
    var exp = sp.get("experience");
    if (!EXP_LIMIT[exp]) exp = "intermediate";
    function num(k, d, lo, hi) {
      var v = parseFloat(sp.get(k));
      if (isNaN(v)) return d;
      return Math.max(lo, Math.min(hi, v));
    }
    return {
      scenario: sc,
      min_temp: num("min_temp", 0, 0, 300),
      max_price: num("max_price", 300, 1, 2000),
      min_tensile: num("min_tensile", 0, 0, 300),
      flexibility: flex,
      odor_tolerance: Math.round(num("odor_tolerance", 5, 1, 5)),
      experience: exp,
      enclosure: sp.get("enclosure") === "1" || sp.get("enclosure") === "on",
      hardened_nozzle: sp.get("hardened_nozzle") === "1" || sp.get("hardened_nozzle") === "on",
      w_price: num("w_price", 50, 0, 100),
      w_strength: num("w_strength", 50, 0, 100),
      w_temp: num("w_temp", 50, 0, 100)
    };
  }

  function reqToQuery(req) {
    var sp = new URLSearchParams();
    sp.set("scenario", req.scenario);
    sp.set("min_temp", String(req.min_temp));
    sp.set("max_price", String(req.max_price));
    sp.set("min_tensile", String(req.min_tensile));
    sp.set("flexibility", req.flexibility);
    sp.set("odor_tolerance", String(req.odor_tolerance));
    sp.set("experience", req.experience);
    sp.set("enclosure", req.enclosure ? "1" : "0");
    sp.set("hardened_nozzle", req.hardened_nozzle ? "1" : "0");
    sp.set("w_price", String(req.w_price));
    sp.set("w_strength", String(req.w_strength));
    sp.set("w_temp", String(req.w_temp));
    return sp.toString();
  }

  function exportCSV() {
    var rows = [["id","名称","英文名","类别","价格(元/kg)","长期耐温(℃)","拉伸强度(MPa)","断裂伸长率(%)","气味(1-5)","翘边(1-5)","难度(1-5)","耐候(1-5)","喷嘴温度","热床温度","需要封箱","需要硬化喷嘴","备注"]];
    MATERIALS.forEach(function (m) {
      rows.push([
        m.id, m.name, m.name_en, m.category, m.price, m.temp_max, m.tensile, m.elongation,
        m.odor, m.warp, m.difficulty, m.uv, m.nozzle, m.bed,
        m.enclosure ? "是" : "否", m.abrasive ? "是" : "否", m.note
      ]);
    });
    var csv = "\ufeff" + rows.map(function (r) {
      return r.map(function (cell) {
        return '"' + String(cell == null ? "" : cell).replace(/"/g, '""') + '"';
      }).join(",");
    }).join("\r\n");
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "filaments.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  var root = document.getElementById("app-root");

  function setNavActive(route) {
    document.querySelectorAll("#main-nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-route") === route);
    });
  }

  // ---------- Views ----------

  function renderHome(qs) {
    setNavActive("home");
    var req = parseReq(qs);
    var prefilled = !!qs;
    var scenarioChips = Object.keys(SCENARIOS).map(function (key, idx) {
      var item = SCENARIOS[key];
      return '<label class="chip" data-label="' + esc(item.label) + '">'
        + '<input type="radio" name="scenario" value="' + esc(key) + '"' + (req.scenario === key ? ' checked' : '') + '>'
        + '<span class="chip-body"><span class="chip-idx">0' + (idx + 1) + '</span>'
        + '<strong>' + esc(item.label) + '</strong>'
        + '<small>' + esc(item.desc) + '</small></span></label>';
    }).join("");

    var flexOpts = Object.keys(FLEX_LABELS).map(function (k) {
      return '<option value="' + esc(k) + '"' + (req.flexibility === k ? ' selected' : '') + '>' + esc(FLEX_LABELS[k]) + '</option>';
    }).join("");

    var odorOpts = [1, 2, 3, 4, 5].map(function (lv) {
      var suf = lv === 1 ? "（无味）" : (lv === 5 ? "（刺鼻）" : "");
      return '<option value="' + lv + '"' + (req.odor_tolerance === lv ? ' selected' : '') + '>' + lv + ' 档' + suf + '</option>';
    }).join("");

    var expOpts = Object.keys(EXP_LABELS).map(function (k) {
      return '<option value="' + esc(k) + '"' + (req.experience === k ? ' selected' : '') + '>' + esc(EXP_LABELS[k]) + '</option>';
    }).join("");

    var slidersHtml = [["price", "价格"], ["strength", "强度"], ["temp", "耐温"]].map(function (pair) {
      var val = req["w_" + pair[0]];
      return '<label class="slider-row"><span>更看重' + pair[1] + '</span>'
        + '<input type="range" name="w_' + pair[0] + '" min="0" max="100" step="5" value="' + val + '" data-output="idx-w-' + pair[0] + '">'
        + '<output id="idx-w-' + pair[0] + '">' + val + '</output></label>';
    }).join("");

    root.innerHTML =
      '<section class="hero hero-split">'
      + '<div class="hero-copy">'
      + '<span class="eyebrow">FDM MATERIAL SPEC · ' + MATERIALS.length + ' FILAMENTS · 7 SCENARIOS</span>'
      + '<h1>按需求筛材料，<span class="accent">别买回来再试</span></h1>'
      + '<p class="lead">先按耐温、预算、柔性、封箱与喷嘴条件硬筛，再按工况权重打分，给出前 3 名材料与量化依据。</p>'
      + '</div>'
      + '<aside class="spec-strip" aria-label="常见耗材速览">'
      + '<div class="spec-strip-head"><span>MATERIAL</span><span>MAX TEMP / USE</span><span>PRICE</span></div>'
      + '<a class="spec-row" href="#/materials?category=PLA"><span class="tag cat-PLA">PLA</span><span class="spec-desc">55℃ · 易打印 / 外观原型</span><span class="spec-price">¥69+</span></a>'
      + '<a class="spec-row" href="#/materials?category=PETG"><span class="tag cat-PETG">PETG</span><span class="spec-desc">75℃ · 耐水韧性 / 通用结构</span><span class="spec-price">¥99+</span></a>'
      + '<a class="spec-row" href="#/materials?category=ASA"><span class="tag cat-ASA">ASA</span><span class="spec-desc">100℃ · 抗 UV / 户外首选</span><span class="spec-price">¥149</span></a>'
      + '<a class="spec-row" href="#/materials?category=TPU"><span class="tag cat-TPU">TPU</span><span class="spec-desc">80℃ · 高弹柔性 / 密封减震</span><span class="spec-price">¥129+</span></a>'
      + '<a class="spec-row" href="#/materials?category=PA"><span class="tag cat-PA">PA-CF</span><span class="spec-desc">130℃ · 高强工程 / 需硬化嘴</span><span class="spec-price">¥189+</span></a>'
      + '</aside></section>'
      + '<form class="card form-card two-step' + (prefilled ? ' step-two-active' : '') + '" id="recommend-form">'
      + '<section class="step step-1">'
      + '<div class="step-head"><span class="step-badge">1</span><div><h2>用在哪儿？</h2><p class="muted">场景决定打分权重，先选一个最接近的。</p></div></div>'
      + '<div class="chips" role="radiogroup" aria-label="使用场景">' + scenarioChips + '</div>'
      + '<div class="form-actions"><button type="button" class="btn btn-primary" id="to-step-2">下一步：填写条件</button></div>'
      + '</section>'
      + '<section class="step step-2">'
      + '<div class="step-head"><span class="step-badge">2</span><div><h2>硬条件与打印环境 <span class="tag tag-accent" id="selected-scenario-badge"></span></h2><p class="muted">不满足硬条件的材料会被直接淘汰，留空或 0 表示不限。</p></div></div>'
      + '<div class="form-grid">'
      + '<label class="field"><span>最低长期耐温 <em>℃</em></span><input type="number" name="min_temp" min="0" max="300" value="' + req.min_temp + '"><small>0 表示不限。PLA 约 55℃，PETG 约 75℃，ABS 约 95℃</small></label>'
      + '<label class="field"><span>最高预算 <em>元/kg</em></span><input type="number" name="max_price" min="1" max="2000" value="' + req.max_price + '"><small>按常见零售价估算，仅作筛选参考</small></label>'
      + '<label class="field"><span>最低拉伸强度 <em>MPa</em></span><input type="number" name="min_tensile" min="0" max="300" value="' + req.min_tensile + '"><small>0 表示不限。外壳约 30，承力件 50 以上</small></label>'
      + '<label class="field"><span>柔性要求</span><select name="flexibility">' + flexOpts + '</select><small>做密封圈、减震垫时选「柔性件」</small></label>'
      + '<label class="field"><span>气味容忍</span><select name="odor_tolerance">' + odorOpts + '</select><small>ABS / ASA 通常 4–5 档，PLA 约 1–2 档</small></label>'
      + '<label class="field"><span>你的打印经验</span><select name="experience">' + expOpts + '</select><small>新手会过滤掉难度 3 以上的材料</small></label>'
      + '</div>'
      + '<div class="check-row">'
      + '<label class="check"><input type="checkbox" name="enclosure"' + (req.enclosure ? ' checked' : '') + '> 我有封箱 / 封闭式打印机</label>'
      + '<label class="check"><input type="checkbox" name="hardened_nozzle"' + (req.hardened_nozzle ? ' checked' : '') + '> 已换硬化喷嘴（可打碳纤 / 玻纤 / 木粉）</label>'
      + '</div>'
      + '<details class="advanced"><summary>高级：微调打分权重（可选）</summary><p class="muted">50 为场景默认值，数字越大越看重该项；推荐结果页还能继续拖动。</p><div class="sliders">' + slidersHtml + '</div></details>'
      + '<div class="form-actions"><button type="button" class="btn btn-ghost" id="to-step-1">上一步</button><button type="submit" class="btn btn-primary">为我推荐</button><a href="#/materials" class="btn btn-ghost">先看看材料库</a></div>'
      + '</section></form>'
      + '<p class="fine-print">评分 = Σ（场景权重 × 单指标归一化得分），所有计算均在浏览器本地实时完成。</p>';

    var form = document.getElementById("recommend-form");
    var scBadge = document.getElementById("selected-scenario-badge");
    function syncBadge() {
      var ch = form.querySelector('input[name="scenario"]:checked');
      if (ch && scBadge) scBadge.textContent = "已选：" + SCENARIOS[ch.value].label;
    }
    form.querySelectorAll('input[name="scenario"]').forEach(function (r) { r.addEventListener("change", syncBadge); });
    syncBadge();

    document.getElementById("to-step-2").addEventListener("click", function () {
      form.classList.add("step-two-active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("to-step-1").addEventListener("click", function () {
      form.classList.remove("step-two-active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    form.querySelectorAll('.advanced input[type="range"]').forEach(function (inp) {
      inp.addEventListener("input", function () {
        var out = document.getElementById(inp.getAttribute("data-output"));
        if (out) out.textContent = inp.value;
      });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var sp = new URLSearchParams();
      sp.set("scenario", fd.get("scenario") || "structural");
      sp.set("min_temp", fd.get("min_temp") || "0");
      sp.set("max_price", fd.get("max_price") || "300");
      sp.set("min_tensile", fd.get("min_tensile") || "0");
      sp.set("flexibility", fd.get("flexibility") || "any");
      sp.set("odor_tolerance", fd.get("odor_tolerance") || "5");
      sp.set("experience", fd.get("experience") || "intermediate");
      sp.set("enclosure", fd.get("enclosure") ? "1" : "0");
      sp.set("hardened_nozzle", fd.get("hardened_nozzle") ? "1" : "0");
      sp.set("w_price", fd.get("w_price") || "50");
      sp.set("w_strength", fd.get("w_strength") || "50");
      sp.set("w_temp", fd.get("w_temp") || "50");
      location.hash = "#/recommend?" + sp.toString();
    });
  }

  function renderResult(qs) {
    setNavActive("home");
    var req = parseReq(qs);
    var sc = SCENARIOS[req.scenario];
    var res = filterMaterials(req);
    var passed = res.passed;
    var cuts = res.cuts;

    var pills = [];
    if (req.min_temp > 0) pills.push("耐温 ≥ " + req.min_temp + "℃");
    pills.push("预算 ≤ " + req.max_price + " 元/kg");
    if (req.min_tensile > 0) pills.push("强度 ≥ " + req.min_tensile + " MPa");
    if (req.flexibility !== "any") pills.push(FLEX_LABELS[req.flexibility]);
    pills.push("气味 ≤ " + req.odor_tolerance + "/5");
    pills.push(req.enclosure ? "有封箱" : "无封箱");
    pills.push(req.hardened_nozzle ? "有硬化喷嘴" : "普通喷嘴");
    pills.push("经验：" + EXP_LABELS[req.experience]);

    var backHash = "#/? " + reqToQuery(req);
    backHash = "#/" + "?" + reqToQuery(req);

    if (!passed.length) {
      var cutsHtml = Object.keys(cuts).sort(function (a, b) { return cuts[b] - cuts[a]; }).map(function (k) {
        return '<li><span>' + esc(CUT_LABELS[k] || k) + '</span><strong>' + cuts[k] + ' 种</strong></li>';
      }).join("");
      var hints = Object.keys(cuts).sort(function (a, b) { return cuts[b] - cuts[a]; }).slice(0, 2).map(function (k) {
        var cands = MATERIALS.filter(function (m) { return passes(m, req, k); });
        return cands.length ? hintFor(k, cands) : "";
      }).filter(Boolean);
      var hintsHtml = hints.length ? '<div class="hint-box"><h3>最有效的放宽方式</h3><ul>' + hints.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join("") + '</ul></div>' : '';
      root.innerHTML =
        '<section class="page-head"><div class="page-head-row"><div><span class="eyebrow">推荐结果</span>'
        + '<h1>推荐结果 <span class="tag tag-lg">' + esc(sc.label) + '</span></h1>'
        + '<p class="muted">' + esc(sc.desc) + ' · 从 ' + MATERIALS.length + ' 种材料中筛出 0 种候选</p></div></div>'
        + '<div class="pills">' + pills.map(function (p) { return '<span class="pill">' + esc(p) + '</span>'; }).join("") + '</div></section>'
        + '<section class="card empty"><h2>没有材料同时满足这些条件</h2>'
        + '<p class="muted">共 ' + MATERIALS.length + ' 种材料，全部被硬条件挡住。各条件淘汰的数量如下：</p>'
        + '<ul class="cuts">' + cutsHtml + '</ul>' + hintsHtml
        + '<div class="form-actions"><a class="btn btn-primary" href="' + backHash + '">调整条件</a><a class="btn btn-ghost" href="#/materials">浏览全部材料</a></div></section>';
      return;
    }

    function computeScored(curReq) {
      var w = weightsFor(curReq);
      return passed.map(function (m) {
        return { m: m, score: scoreMaterial(m, curReq.scenario, w), bd: breakdownFor(m, curReq.scenario, w) };
      }).sort(function (a, b) { return b.score - a.score || a.m.price - b.m.price; });
    }

    var scored = computeScored(req);
    var topIds = scored.slice(0, 3).map(function (x) { return x.m.id; }).join(",");

    var slidersHtml = [["price", "更看重价格"], ["strength", "更看重强度"], ["temp", "更看重耐温"]].map(function (pair) {
      var val = req["w_" + pair[0]];
      return '<label class="slider-row"><span>' + pair[1] + '</span>'
        + '<input type="range" name="w_' + pair[0] + '" min="0" max="100" step="5" value="' + val + '" data-output="res-w-' + pair[0] + '">'
        + '<output id="res-w-' + pair[0] + '">' + val + '</output></label>';
    }).join("");

    root.innerHTML =
      '<section class="page-head"><div class="page-head-row"><div><span class="eyebrow">推荐结果</span>'
      + '<h1>推荐结果 <span class="tag tag-lg">' + esc(sc.label) + '</span></h1>'
      + '<p class="muted">' + esc(sc.desc) + ' · 从 ' + MATERIALS.length + ' 种材料中筛出 ' + passed.length + ' 种候选，展示前 3 名</p></div>'
      + '<div class="page-actions"><button type="button" class="btn btn-ghost" id="copy-link">复制链接</button>'
      + '<a class="btn btn-ghost" href="' + backHash + '">调整条件</a>'
      + '<a class="btn btn-ghost" id="compare-top-btn" href="#/compare?ids=' + encodeURIComponent(topIds) + '">对比这 3 种</a></div></div>'
      + '<div class="pills">' + pills.map(function (p) { return '<span class="pill">' + esc(p) + '</span>'; }).join("") + '</div></section>'
      + '<div class="card weight-panel" id="weight-form"><div class="weight-head"><div><h2>微调权重</h2><p class="muted">50 为场景默认值，拖动滑杆实时重新排序。</p></div></div>'
      + '<div class="sliders">' + slidersHtml + '</div></div>'
      + '<div class="rec-grid" id="rec-grid"></div>'
      + '<section class="card"><h2>通过筛选的材料得分（前 8）</h2><p class="muted">以下材料都通过了硬条件，按综合分排序，方便你横向比较。</p>'
      + '<div class="table-wrap"><table class="table"><thead><tr><th>材料</th><th>类别</th><th>价格</th><th>长期耐温</th><th class="num">综合分</th></tr></thead>'
      + '<tbody id="ranked-tbody"></tbody></table></div></section>';

    function paintCards(curReq) {
      var list = computeScored(curReq);
      var top3 = list.slice(0, 3);
      var recGrid = document.getElementById("rec-grid");
      recGrid.innerHTML = top3.map(function (entry, idx) {
        var m = entry.m;
        var exp = buildExplanation(m, curReq);
        var warnHtml = exp.warnings.length ? '<ul class="warnings">' + exp.warnings.map(function (w) { return '<li>' + esc(w) + '</li>'; }).join("") + '</ul>' : '';
        var bdHtml = entry.bd.map(function (row) {
          var pct = row.max ? (row.points / row.max * 100).toFixed(1) : "0.0";
          return '<div class="bd-row"><span class="bd-label">' + esc(row.label) + '</span>'
            + '<div class="bd-track"><div class="bd-fill" style="width:' + pct + '%;background:' + row.color + '"></div></div>'
            + '<span class="bd-val">' + row.points.toFixed(1) + '</span></div>';
        }).join("");
        return '<article class="card rec-card' + (idx === 0 ? ' rec-card-top' : '') + '">'
          + '<div class="rec-head"><span class="rank rank-' + (idx + 1) + '">#' + (idx + 1) + '</span>'
          + '<div class="rec-title"><h2><a class="name-link" href="#/material/' + esc(m.id) + '">' + esc(m.name) + '</a> <span class="tag cat-' + esc(m.category) + '">' + esc(m.category) + '</span></h2>'
          + '<p class="muted">' + esc(m.name_en) + '</p></div>'
          + '<div class="score-ring" style="--value:' + Math.round(entry.score) + '"><div class="score-ring-inner"><strong>' + Math.round(entry.score) + '</strong><small>综合分</small></div></div></div>'
          + '<ul class="reasons">' + exp.reasons.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join("") + '</ul>'
          + warnHtml
          + '<div class="metrics"><div><strong>' + Math.round(m.price) + '</strong><small>元/kg</small></div>'
          + '<div><strong>' + m.temp_max + '</strong><small>长期耐温 ℃</small></div>'
          + '<div><strong>' + Math.round(m.tensile) + '</strong><small>拉伸 MPa</small></div>'
          + '<div><strong>' + Math.round(m.elongation) + '</strong><small>伸长 %</small></div></div>'
          + '<div class="breakdown" aria-label="得分构成">' + bdHtml + '</div>'
          + '<p class="fine-print">' + esc(m.note) + '</p>'
          + '<p class="print-params">喷嘴 ' + esc(m.nozzle) + '℃ · 热床 ' + esc(m.bed) + '℃ · ' + esc(dryingTip(m)) + '</p></article>';
      }).join("");

      document.getElementById("ranked-tbody").innerHTML = list.slice(0, 8).map(function (entry) {
        var m = entry.m;
        return '<tr><td><a class="name-link" href="#/material/' + esc(m.id) + '">' + esc(m.name) + '</a></td>'
          + '<td>' + esc(m.category) + '</td><td>' + Math.round(m.price) + ' 元/kg</td>'
          + '<td>' + m.temp_max + '℃</td><td class="num">' + entry.score.toFixed(1) + '</td></tr>';
      }).join("");

      document.getElementById("compare-top-btn").href = "#/compare?ids=" + encodeURIComponent(top3.map(function (x) { return x.m.id; }).join(","));
    }

    paintCards(req);

    var copyBtn = document.getElementById("copy-link");
    if (copyBtn && navigator.clipboard) {
      copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href).then(function () {
          copyBtn.textContent = "已复制";
          setTimeout(function () { copyBtn.textContent = "复制链接"; }, 1500);
        });
      });
    }

    document.querySelectorAll('#weight-form input[type="range"]').forEach(function (inp) {
      inp.addEventListener("input", function () {
        var out = document.getElementById(inp.getAttribute("data-output"));
        if (out) out.textContent = inp.value;
        req[inp.name] = parseFloat(inp.value);
        paintCards(req);
        if (history.replaceState) history.replaceState(null, "", "#/recommend?" + reqToQuery(req));
      });
    });
  }

  function renderMaterials(qs) {
    setNavActive("materials");
    var sp = new URLSearchParams(qs || "");
    var cat = sp.get("category") || "";
    var q = (sp.get("q") || "").trim();
    var sort = sp.get("sort") || "default";
    var noEnc = sp.get("no_enclosure") === "1";
    var noAbr = sp.get("no_abrasive") === "1";
    var flexOnly = sp.get("flexible_only") === "1";

    var cats = CATEGORIES.filter(function (c) { return MATERIALS.some(function (m) { return m.category === c; }); });
    var filtered = MATERIALS.filter(function (m) {
      if (cat && m.category !== cat) return false;
      if (q) {
        var lq = q.toLowerCase();
        if (m.name.toLowerCase().indexOf(lq) === -1 && m.name_en.toLowerCase().indexOf(lq) === -1 && m.note.toLowerCase().indexOf(lq) === -1) return false;
      }
      if (noEnc && m.enclosure) return false;
      if (noAbr && m.abrasive) return false;
      if (flexOnly && !m.flexible) return false;
      return true;
    });

    if (sort === "price_asc") filtered.sort(function (a, b) { return a.price - b.price || a.difficulty - b.difficulty; });
    else if (sort === "price_desc") filtered.sort(function (a, b) { return b.price - a.price; });
    else if (sort === "temp_desc") filtered.sort(function (a, b) { return b.temp_max - a.temp_max || a.price - b.price; });
    else if (sort === "tensile_desc") filtered.sort(function (a, b) { return b.tensile - a.tensile || a.price - b.price; });
    else if (sort === "difficulty_asc") filtered.sort(function (a, b) { return a.difficulty - b.difficulty || a.price - b.price; });

    function tabHref(c) {
      var p = new URLSearchParams();
      if (c) p.set("category", c);
      if (q) p.set("q", q);
      if (sort !== "default") p.set("sort", sort);
      if (noEnc) p.set("no_enclosure", "1");
      if (noAbr) p.set("no_abrasive", "1");
      if (flexOnly) p.set("flexible_only", "1");
      var s = p.toString();
      return "#/materials" + (s ? "?" + s : "");
    }

    var tabsHtml = '<a href="' + tabHref("") + '" class="' + (!cat ? 'active' : '') + '">全部</a>'
      + cats.map(function (c) { return '<a href="' + tabHref(c) + '" class="' + (cat === c ? 'active' : '') + '">' + esc(c) + '</a>'; }).join("");

    var rowsHtml = filtered.map(function (m) {
      return '<tr>'
        + '<td class="col-check"><input type="checkbox" class="cmp-box" value="' + esc(m.id) + '" aria-label="选择 ' + esc(m.name) + '"></td>'
        + '<td><strong><a class="name-link" href="#/material/' + esc(m.id) + '">' + esc(m.name) + '</a></strong><small class="muted block">' + esc(m.name_en) + ' · ' + esc(m.nozzle) + '℃ / 热床 ' + esc(m.bed) + '℃</small></td>'
        + '<td><span class="tag cat-' + esc(m.category) + '">' + esc(m.category) + '</span></td>'
        + '<td class="num" data-label="价格">' + Math.round(m.price) + ' 元/kg</td>'
        + '<td class="num" data-label="长期耐温">' + m.temp_max + '℃</td>'
        + '<td class="num" data-label="拉伸强度">' + Math.round(m.tensile) + ' MPa</td>'
        + '<td class="num" data-label="伸长率">' + Math.round(m.elongation) + '%</td>'
        + '<td class="num" data-label="难度">' + m.difficulty + '/5</td>'
        + '<td class="num" data-label="气味">' + m.odor + '/5</td>'
        + '<td class="num" data-label="耐候">' + m.uv + '/5</td>'
        + '</tr>';
    }).join("");

    root.innerHTML =
      '<section class="page-head"><span class="eyebrow">' + MATERIALS.length + ' 种耗材</span>'
      + '<h1>材料库 <span class="tag tag-lg">' + MATERIALS.length + ' 种</span></h1>'
      + '<p class="muted">勾选 2–4 种材料可以横向对比，支持按类别、打印条件筛选与排序。</p></section>'
      + '<div class="toolbar"><div class="tabs">' + tabsHtml + '</div>'
      + '<form class="search filter-form" id="mat-filter-form">'
      + '<select name="sort" class="sort-select" id="mat-sort">'
      + '<option value="default"' + (sort === "default" ? ' selected' : '') + '>默认排序</option>'
      + '<option value="price_asc"' + (sort === "price_asc" ? ' selected' : '') + '>价格从低到高</option>'
      + '<option value="price_desc"' + (sort === "price_desc" ? ' selected' : '') + '>价格从高到低</option>'
      + '<option value="temp_desc"' + (sort === "temp_desc" ? ' selected' : '') + '>耐温从高到低</option>'
      + '<option value="tensile_desc"' + (sort === "tensile_desc" ? ' selected' : '') + '>强度从高到低</option>'
      + '<option value="difficulty_asc"' + (sort === "difficulty_asc" ? ' selected' : '') + '>打印难度从易到难</option></select>'
      + '<input type="search" name="q" value="' + esc(q) + '" placeholder="搜索名称或备注…">'
      + '<button type="submit" class="btn btn-ghost">搜索</button>'
      + '<div class="quick-filters">'
      + '<label class="qf-check"><input type="checkbox" name="no_enclosure" value="1"' + (noEnc ? ' checked' : '') + '> 免封箱</label>'
      + '<label class="qf-check"><input type="checkbox" name="no_abrasive" value="1"' + (noAbr ? ' checked' : '') + '> 普通喷嘴可用</label>'
      + '<label class="qf-check"><input type="checkbox" name="flexible_only" value="1"' + (flexOnly ? ' checked' : '') + '> 仅柔性材料</label>'
      + '</div></form></div>'
      + '<p class="muted result-count">显示 ' + filtered.length + ' / ' + MATERIALS.length + ' 种' + (cat ? ' · 类别 ' + esc(cat) : '') + (q ? ' · 关键词「' + esc(q) + '」' : '') + '</p>'
      + '<div class="card table-wrap"><table class="table materials-table"><thead><tr>'
      + '<th class="col-check"><span class="visually-hidden">对比</span></th><th>材料</th><th>类别</th><th>价格</th><th>长期耐温</th><th>拉伸强度</th><th>伸长率</th><th>难度</th><th>气味</th><th>耐候</th>'
      + '</tr></thead><tbody>' + rowsHtml + '</tbody></table></div>'
      + '<div class="compare-bar" id="compare-bar"><span>已选 <strong id="cmp-count">0</strong> 种（最多 4 种<span id="cmp-limit-hint" class="cmp-limit-hint"></span>）</span>'
      + '<button type="button" class="btn btn-primary" id="cmp-btn" disabled>开始对比</button><button type="button" class="btn btn-ghost" id="cmp-clear">清空</button></div>'
      + '<div class="form-actions"><button type="button" class="btn btn-ghost" id="export-csv-btn">导出全部为 CSV</button></div>';

    document.getElementById("export-csv-btn").addEventListener("click", exportCSV);

    var ff = document.getElementById("mat-filter-form");
    function applyFilters() {
      var fd = new FormData(ff);
      var p = new URLSearchParams();
      if (cat) p.set("category", cat);
      if (fd.get("q")) p.set("q", fd.get("q").trim());
      if (fd.get("sort") && fd.get("sort") !== "default") p.set("sort", fd.get("sort"));
      if (fd.get("no_enclosure")) p.set("no_enclosure", "1");
      if (fd.get("no_abrasive")) p.set("no_abrasive", "1");
      if (fd.get("flexible_only")) p.set("flexible_only", "1");
      location.hash = "#/materials" + (p.toString() ? "?" + p.toString() : "");
    }
    ff.addEventListener("submit", function (e) { e.preventDefault(); applyFilters(); });
    ff.querySelectorAll("select, input[type='checkbox']").forEach(function (el) { el.addEventListener("change", applyFilters); });

    // Compare persistence
    var KEY = "filament_compare_ids";
    var boxes = Array.prototype.slice.call(document.querySelectorAll(".cmp-box"));
    var countEl = document.getElementById("cmp-count");
    var hintEl = document.getElementById("cmp-limit-hint");
    var cmpBtn = document.getElementById("cmp-btn");
    var bar = document.getElementById("compare-bar");
    var clrBtn = document.getElementById("cmp-clear");

    function loadStored() {
      try { var a = JSON.parse(sessionStorage.getItem(KEY) || "[]"); return Array.isArray(a) ? a : []; } catch (e) { return []; }
    }
    function saveStored(ids) {
      try { sessionStorage.setItem(KEY, JSON.stringify(ids)); } catch (e) {}
    }
    var stored = loadStored();
    boxes.forEach(function (b) { if (stored.indexOf(b.value) !== -1) b.checked = true; });

    function sync(changed) {
      var ids = loadStored();
      var vis = {};
      boxes.forEach(function (b) { vis[b.value] = b.checked; });
      ids = ids.filter(function (id) { return !(id in vis) || vis[id]; });
      boxes.forEach(function (b) {
        if (b.checked && ids.indexOf(b.value) === -1) {
          if (ids.length < 4) ids.push(b.value);
          else if (changed === b) b.checked = false;
        }
      });
      saveStored(ids);
      return ids;
    }
    function renderBar(ids) {
      countEl.textContent = ids.length;
      cmpBtn.disabled = ids.length < 2;
      bar.classList.toggle("active", ids.length > 0);
      var full = ids.length >= 4;
      hintEl.textContent = full ? " · 已选满" : "";
      boxes.forEach(function (b) { b.disabled = full && !b.checked; });
      cmpBtn.onclick = function () {
        if (ids.length >= 2) location.hash = "#/compare?ids=" + encodeURIComponent(ids.slice(0, 4).join(","));
      };
    }
    boxes.forEach(function (b) { b.addEventListener("change", function () { renderBar(sync(b)); }); });
    clrBtn.addEventListener("click", function () {
      boxes.forEach(function (b) { b.checked = false; b.disabled = false; });
      saveStored([]);
      renderBar([]);
    });
    renderBar(sync(null));
  }

  function renderDetail(id) {
    setNavActive("materials");
    var m = MATERIALS.filter(function (x) { return x.id === id; })[0];
    if (!m) {
      root.innerHTML = '<section class="card error-page"><h1>找不到该材料</h1><p class="muted">材料「' + esc(id) + '」不存在。</p><a class="btn btn-primary" href="#/materials">返回材料库</a></section>';
      return;
    }
    var scScores = Object.keys(SCENARIOS).map(function (k) {
      return { label: SCENARIOS[k].label, score: scoreMaterial(m, k) };
    }).sort(function (a, b) { return b.score - a.score; }).slice(0, 3);

    root.innerHTML =
      '<section class="page-head"><div class="page-head-row"><div><span class="eyebrow">材料档案</span>'
      + '<h1>' + esc(m.name) + ' <span class="tag tag-lg cat-' + esc(m.category) + '">' + esc(m.category) + '</span></h1>'
      + '<p class="muted">' + esc(m.name_en) + ' · ' + esc(m.id) + '</p></div>'
      + '<div class="page-actions"><a class="btn btn-ghost" href="#/materials">返回材料库</a></div></div></section>'
      + '<div class="detail-grid"><section class="card"><h2>关键参数</h2>'
      + '<div class="metrics detail-metrics">'
      + '<div><strong>' + Math.round(m.price) + '</strong><small>元/kg</small></div>'
      + '<div><strong>' + m.temp_max + '</strong><small>长期耐温 ℃</small></div>'
      + '<div><strong>' + Math.round(m.tensile) + '</strong><small>拉伸 MPa</small></div>'
      + '<div><strong>' + Math.round(m.elongation) + '</strong><small>伸长 %</small></div></div>'
      + '<table class="table detail-table"><tbody>'
      + '<tr><th>打印难度</th><td>' + m.difficulty + '/5</td><th>翘边倾向</th><td>' + m.warp + '/5</td></tr>'
      + '<tr><th>气味</th><td>' + m.odor + '/5</td><th>耐候</th><td>' + m.uv + '/5</td></tr>'
      + '<tr><th>喷嘴温度</th><td>' + esc(m.nozzle) + '℃</td><th>热床温度</th><td>' + esc(m.bed) + '℃</td></tr>'
      + '<tr><th>需要封箱</th><td>' + (m.enclosure ? '是' : '否') + '</td><th>需要硬化喷嘴</th><td>' + (m.abrasive ? '是' : '否') + '</td></tr>'
      + '<tr><th>柔性材料</th><td>' + (m.flexible ? '是' : '否') + '</td><th>干燥</th><td>' + esc(dryingTip(m)) + '</td></tr>'
      + '</tbody></table></section>'
      + '<section class="card"><h2>适合的场景</h2><p class="muted">按各场景默认权重打分，仅供横向参考。</p>'
      + scScores.map(function (r) {
          return '<div class="bar-row"><span class="bar-name">' + esc(r.label) + '</span>'
            + '<div class="bar-track"><div class="bar-fill" style="width:' + r.score + '%"></div></div>'
            + '<span class="bar-val">' + r.score.toFixed(1) + '</span></div>';
        }).join("")
      + '<h2 class="mt">使用建议</h2><p class="detail-note">' + esc(m.note || "暂无备注。") + '</p>'
      + '<p class="data-note">拉伸/伸长按 ISO 527 量级整理；耐温为厂商数据或 ISO 75 HDT 参考；1–5 分为编辑评分。<a href="#/about">数据说明</a></p></section></div>';
  }

  function renderCompare(qs) {
    setNavActive("compare");
    var sp = new URLSearchParams(qs || "");
    var rawIds = (sp.get("ids") || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    var seen = {}, chosen = [];
    rawIds.forEach(function (id) {
      if (!seen[id]) {
        seen[id] = true;
        var found = MATERIALS.filter(function (m) { return m.id === id; })[0];
        if (found && chosen.length < 4) chosen.push(found);
      }
    });

    if (chosen.length < 2) {
      root.innerHTML =
        '<section class="page-head"><span class="eyebrow">能力对照</span><h1>材料对比</h1></section>'
        + '<section class="card empty"><h2>还差一点</h2><p class="muted">至少勾选 2 种材料（最多 4 种）才能对比，回材料库再选几种吧。</p>'
        + '<div class="form-actions"><a class="btn btn-primary" href="#/materials">去材料库勾选</a></div></section>';
      return;
    }

    var rows = [];
    function addRow(label, vals, fmt, dir, unit) {
      var best = [];
      var uniq = vals.filter(function (v, i, a) { return a.indexOf(v) === i; });
      if (dir && uniq.length > 1) {
        var target = dir === "low" ? Math.min.apply(null, vals) : Math.max.apply(null, vals);
        vals.forEach(function (v, idx) { if (v === target) best.push(idx); });
      }
      rows.push({ label: label, unit: unit || "", cells: vals.map(fmt), best: best });
    }

    addRow("价格", chosen.map(function (m) { return m.price; }), function (v) { return Math.round(v); }, "low", "元/kg");
    addRow("长期耐温", chosen.map(function (m) { return m.temp_max; }), function (v) { return v; }, "high", "℃");
    addRow("拉伸强度", chosen.map(function (m) { return m.tensile; }), function (v) { return Math.round(v); }, "high", "MPa");
    addRow("断裂伸长率", chosen.map(function (m) { return m.elongation; }), function (v) { return Math.round(v); }, "high", "%");
    addRow("打印难度 *", chosen.map(function (m) { return m.difficulty; }), function (v) { return v; }, "low", "/5");
    addRow("翘边倾向 *", chosen.map(function (m) { return m.warp; }), function (v) { return v; }, "low", "/5");
    addRow("气味 *", chosen.map(function (m) { return m.odor; }), function (v) { return v; }, "low", "/5");
    addRow("耐候 *", chosen.map(function (m) { return m.uv; }), function (v) { return v; }, "high", "/5");
    addRow("喷嘴温度", chosen.map(function (m) { return m.nozzle; }), function (v) { return v; }, null, "℃");
    addRow("热床温度", chosen.map(function (m) { return m.bed; }), function (v) { return v; }, null, "℃");
    addRow("需要封箱", chosen.map(function (m) { return m.enclosure; }), function (v) { return v ? "是" : "否"; });
    addRow("需要硬化喷嘴", chosen.map(function (m) { return m.abrasive; }), function (v) { return v ? "是" : "否"; });
    addRow("柔性材料", chosen.map(function (m) { return m.flexible; }), function (v) { return v ? "是" : "否"; });
    addRow("干燥建议", chosen.map(function (m) { return dryingTip(m); }), function (v) { return v; });

    // Radar SVG
    var rw = 360, rh = 340, cx = rw / 2, cy = rh / 2 + 4, rad = 116, step = 2 * Math.PI / RADAR_AXES.length;
    function poly(vals) {
      return vals.map(function (v, idx) {
        var ang = -Math.PI / 2 + idx * step;
        return (cx + rad * v * Math.cos(ang)).toFixed(1) + "," + (cy + rad * v * Math.sin(ang)).toFixed(1);
      }).join(" ");
    }
    var gridSvg = [0.25, 0.5, 0.75, 1.0].map(function (lv) {
      return '<polygon points="' + poly(RADAR_AXES.map(function () { return lv; })) + '" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1"/>';
    }).join("");
    var axesSvg = RADAR_AXES.map(function (pair, idx) {
      var ang = -Math.PI / 2 + idx * step;
      var x = (cx + rad * Math.cos(ang)).toFixed(1), y = (cy + rad * Math.sin(ang)).toFixed(1);
      var lx = (cx + (rad + 24) * Math.cos(ang)).toFixed(1), ly = (cy + (rad + 24) * Math.sin(ang)).toFixed(1);
      var anchor = Math.cos(ang) > 0.3 ? "start" : (Math.cos(ang) < -0.3 ? "end" : "middle");
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" stroke="rgba(148,163,184,0.28)" stroke-width="1"/>'
        + '<text x="' + lx + '" y="' + ly + '" text-anchor="' + anchor + '" class="radar-label">' + pair[1] + '</text>';
    }).join("");
    var seriesSvg = chosen.map(function (m, idx) {
      var col = RADAR_COLORS[idx % RADAR_COLORS.length];
      var vals = RADAR_AXES.map(function (pair) { return normalize(m, pair[0]); });
      var dots = vals.map(function (v, pIdx) {
        var ang = -Math.PI / 2 + pIdx * step;
        return '<circle cx="' + (cx + rad * v * Math.cos(ang)).toFixed(1) + '" cy="' + (cy + rad * v * Math.sin(ang)).toFixed(1) + '" r="3" fill="' + col + '"/>';
      }).join("");
      return '<polygon points="' + poly(vals) + '" fill="' + col + '" fill-opacity="0.12" stroke="' + col + '" stroke-width="2"/>' + dots;
    }).join("");
    var legendSvg = chosen.map(function (m, idx) {
      return '<span><i style="background:' + RADAR_COLORS[idx % RADAR_COLORS.length] + '"></i>' + esc(m.name) + '</span>';
    }).join("");

    // Bar metrics
    var barSpecs = [
      ["价格优势（越便宜越长）", "元/kg", chosen.map(function (m) { return m.price; }), function (v) { return Math.round(v) + " 元"; }, "low"],
      ["长期耐温", "℃", chosen.map(function (m) { return m.temp_max; }), function (v) { return v + " ℃"; }, "high"],
      ["拉伸强度", "MPa", chosen.map(function (m) { return m.tensile; }), function (v) { return Math.round(v) + " MPa"; }, "high"],
      ["断裂伸长率", "%", chosen.map(function (m) { return m.elongation; }), function (v) { return Math.round(v) + "%"; }, "high"],
      ["耐候", "/5", chosen.map(function (m) { return m.uv; }), function (v) { return v + "/5"; }, "high"]
    ];
    var barsHtml = barSpecs.map(function (spec) {
      var vals = spec[2], peak = Math.max.apply(null, vals) || 1, floor = Math.min.apply(null, vals) || 1;
      var inner = chosen.map(function (m, idx) {
        var v = vals[idx];
        var w = spec[4] === "low" && v > 0 ? (floor / v * 100) : (v / peak * 100);
        return '<div class="bar-row"><span class="bar-name">' + esc(m.name) + '</span>'
          + '<div class="bar-track"><div class="bar-fill" style="width:' + w.toFixed(1) + '%"></div></div>'
          + '<span class="bar-val">' + esc(spec[3](v)) + '</span></div>';
      }).join("");
      return '<section class="card"><h3>' + esc(spec[0]) + ' <small class="muted">' + esc(spec[1]) + '</small></h3>' + inner + '</section>';
    }).join("");

    root.innerHTML =
      '<section class="page-head"><div class="page-head-row"><div><span class="eyebrow">能力对照</span><h1>材料对比</h1>'
      + '<p class="muted">绿色高亮表示该项在对比中占优（平局不单独标绿）；雷达图看能力形状，柱状图看具体差距。</p></div>'
      + '<div class="page-actions"><button type="button" class="btn btn-ghost" onclick="window.print()">打印 / 导出 PDF</button>'
      + '<a class="btn btn-ghost" href="#/materials">重新选择</a></div></div></section>'
      + '<div class="card table-wrap"><table class="table cmp-table"><thead><tr><th class="row-head">指标</th>'
      + chosen.map(function (m) {
          return '<th><a class="name-link" href="#/material/' + esc(m.id) + '">' + esc(m.name) + '</a><small class="cmp-cat cat-text-' + esc(m.category) + '">' + esc(m.category) + '</small></th>';
        }).join("")
      + '</tr></thead><tbody>'
      + rows.map(function (r) {
          return '<tr><th>' + esc(r.label) + (r.unit ? ' <small>' + esc(r.unit) + '</small>' : '') + '</th>'
            + r.cells.map(function (c, i) { return '<td class="' + (r.best.indexOf(i) !== -1 ? 'best' : '') + '">' + esc(c) + '</td>'; }).join("")
            + '</tr>';
        }).join("")
      + '</tbody></table></div>'
      + '<p class="data-note">数据口径：拉伸强度与断裂伸长率按 ISO 527 / ASTM D638 量级整理；长期耐温为厂商数据或 ISO 75 HDT 参考；带 <strong>*</strong> 的“难度 / 翘边 / 气味 / 耐候”为编辑评分，不是行业标准。<a href="#/about">查看数据说明</a></p>'
      + '<section class="card radar-card"><h3>能力雷达图 <small class="muted">越靠外越强</small></h3>'
      + '<svg viewBox="0 0 ' + rw + ' ' + rh + '" class="radar" role="img" aria-label="材料能力雷达图">' + gridSvg + axesSvg + seriesSvg + '</svg>'
      + '<div class="radar-legend">' + legendSvg + '</div></section>'
      + '<div class="metric-grid">' + barsHtml + '</div>';
  }

  function renderStats() {
    setNavActive("stats");
    var total = MATERIALS.length;
    var avgPrice = Math.round(MATERIALS.reduce(function (s, m) { return s + m.price; }, 0) / total);
    var avgTemp = Math.round(MATERIALS.reduce(function (s, m) { return s + m.temp_max; }, 0) / total);
    var flexCnt = MATERIALS.filter(function (m) { return m.flexible; }).length;

    var w = 680, h = 380, left = 56, right = 24, top = 24, bottom = 52;
    var pw = w - left - right, ph = h - top - bottom, xMax = 160, yMax = 120;
    function px(v) { return left + Math.min(Math.max(v, 0), xMax) / xMax * pw; }
    function py(v) { return top + (1 - Math.min(Math.max(v, 0), yMax) / yMax) * ph; }

    var gridX = [0,20,40,60,80,100,120,140,160].map(function (v) {
      var x = px(v).toFixed(1);
      return '<line x1="' + x + '" y1="' + top + '" x2="' + x + '" y2="' + (h - bottom) + '" stroke="rgba(148,163,184,0.2)"/>'
        + '<text x="' + x + '" y="' + (h - bottom + 18) + '" text-anchor="middle" class="scatter-tick">' + v + '</text>';
    }).join("");
    var gridY = [0,20,40,60,80,100,120].map(function (v) {
      var y = py(v).toFixed(1);
      return '<line x1="' + left + '" y1="' + y + '" x2="' + (w - right) + '" y2="' + y + '" stroke="rgba(148,163,184,0.2)"/>'
        + '<text x="' + (left - 10) + '" y="' + (parseFloat(y) + 4) + '" text-anchor="end" class="scatter-tick">' + v + '</text>';
    }).join("");
    var pts = MATERIALS.map(function (m) {
      var r = (4 + clamp((m.price - 60) / 340) * 10).toFixed(1);
      var col = SCATTER_COLORS[m.category] || "#64748b";
      return '<a href="#/material/' + esc(m.id) + '" class="scatter-link">'
        + '<circle cx="' + px(m.temp_max).toFixed(1) + '" cy="' + py(m.tensile).toFixed(1) + '" r="' + r + '" fill="' + col + '" fill-opacity="0.78" stroke="#ffffff" stroke-width="1.2">'
        + '<title>' + esc(m.name) + '：' + m.temp_max + '℃ / ' + m.tensile + ' MPa / ' + m.price + ' 元/kg（点击查看详情）</title></circle></a>';
    }).join("");

    var usedCats = CATEGORIES.filter(function (c) { return MATERIALS.some(function (m) { return m.category === c; }); });
    var legend = usedCats.map(function (c) {
      return '<span><i style="background:' + (SCATTER_COLORS[c] || "#64748b") + '"></i>' + esc(c) + '</span>';
    }).join("");

    var catCounts = usedCats.map(function (c) { return { label: c, count: MATERIALS.filter(function (m) { return m.category === c; }).length }; });
    var maxCat = Math.max.apply(null, catCounts.map(function (x) { return x.count; })) || 1;
    var pBuckets = [
      ["< 80 元", MATERIALS.filter(function (m) { return m.price < 80; }).length],
      ["80–120 元", MATERIALS.filter(function (m) { return m.price >= 80 && m.price < 120; }).length],
      ["120–200 元", MATERIALS.filter(function (m) { return m.price >= 120 && m.price < 200; }).length],
      ["200–300 元", MATERIALS.filter(function (m) { return m.price >= 200 && m.price < 300; }).length],
      ["≥ 300 元", MATERIALS.filter(function (m) { return m.price >= 300; }).length]
    ];
    var maxPB = Math.max.apply(null, pBuckets.map(function (x) { return x[1]; })) || 1;
    var dCounts = [1,2,3,4,5].map(function (lv) { return [lv + " 级", MATERIALS.filter(function (m) { return m.difficulty === lv; }).length]; });
    var maxD = Math.max.apply(null, dCounts.map(function (x) { return x[1]; })) || 1;

    function bars(list, maxV) {
      return list.map(function (item) {
        var lbl = item.label || item[0], cnt = item.count != null ? item.count : item[1];
        return '<div class="bar-row"><span class="bar-name">' + esc(lbl) + '</span>'
          + '<div class="bar-track"><div class="bar-fill" style="width:' + (cnt / maxV * 100).toFixed(1) + '%"></div></div>'
          + '<span class="bar-val">' + cnt + '</span></div>';
      }).join("");
    }

    root.innerHTML =
      '<section class="page-head"><span class="eyebrow">材料库概览</span><h1>数据统计</h1>'
      + '<p class="muted">看看材料库的整体构成，判断这 ' + total + ' 款耗材够不够覆盖你的需求；点击散点图气泡可直达材料详情。</p></section>'
      + '<div class="stat-grid">'
      + '<div class="stat-card"><strong>' + total + '</strong><span>种材料</span></div>'
      + '<div class="stat-card"><strong>' + avgPrice + '</strong><span>平均价格（元/kg）</span></div>'
      + '<div class="stat-card"><strong>' + avgTemp + '</strong><span>平均长期耐温（℃）</span></div>'
      + '<div class="stat-card"><strong>' + flexCnt + '</strong><span>柔性材料</span></div></div>'
      + '<section class="card"><h3>耐温 × 强度分布 <small class="muted">气泡越大，价格越高</small></h3>'
      + '<svg viewBox="0 0 ' + w + ' ' + h + '" class="scatter" role="img" aria-label="耐温与强度散点图">' + gridX + gridY
      + '<line x1="' + left + '" y1="' + (h - bottom) + '" x2="' + (w - right) + '" y2="' + (h - bottom) + '" stroke="#98a2b3"/>'
      + '<line x1="' + left + '" y1="' + top + '" x2="' + left + '" y2="' + (h - bottom) + '" stroke="#98a2b3"/>'
      + pts
      + '<text x="' + (w / 2) + '" y="' + (h - 12) + '" text-anchor="middle" class="scatter-axis">长期耐温 ℃</text>'
      + '<text x="16" y="' + (h / 2) + '" transform="rotate(-90 16 ' + (h / 2) + ')" text-anchor="middle" class="scatter-axis">拉伸强度 MPa</text></svg>'
      + '<div class="radar-legend">' + legend + '</div></section>'
      + '<div class="two-col"><section class="card"><h3>类别分布</h3>' + bars(catCounts, maxCat) + '</section>'
      + '<section class="card"><h3>价格档位</h3>' + bars(pBuckets, maxPB) + '</section></div>'
      + '<section class="card"><h3>打印难度分布</h3>' + bars(dCounts, maxD) + '</section>'
      + '<div class="form-actions"><button type="button" class="btn btn-ghost" id="stats-export-btn">导出全部数据（CSV）</button></div>';

    document.getElementById("stats-export-btn").addEventListener("click", exportCSV);
  }

  function renderAbout() {
    setNavActive("about");
    root.innerHTML =
      '<section class="page-head"><span class="eyebrow">数据口径</span><h1>哪些是行业标准，哪些是编辑评分</h1>'
      + '<p class="muted lead">FDM 耗材的部分性能有成熟的 ISO / ASTM 测试方法，但“气味、翘边、难度”这类体验指标没有统一标准。这个页面把两者分开说明，避免把经验分当成材料认证。</p></section>'
      + '<div class="two-col"><section class="card"><h2>有标准可依的字段</h2><div class="table-wrap"><table class="table standards-table">'
      + '<thead><tr><th>字段</th><th>常用标准</th><th>口径提示</th></tr></thead><tbody>'
      + FIELD_STANDARDS.map(function (r) {
          return '<tr><td>' + esc(r.field) + '</td><td><code>' + esc(r.standard) + '</code></td><td class="muted">' + esc(r.note) + '</td></tr>';
        }).join("")
      + '</tbody></table></div></section>'
      + '<section class="card"><h2>编辑评分（1–5 分）</h2><p class="muted">下面四项没有统一的行业评分标准，是本工具为了选型做的经验分级：</p>'
      + '<ul class="reasons"><li>打印难度：综合喷嘴/热床温度、翘边、堵嘴风险的主观分级</li><li>翘边倾向：按材料收缩特性和封箱要求估计</li><li>气味：按打印时的主观气味强度分级</li><li>耐候：按抗 UV / 水解的常见经验分级</li></ul>'
      + '<p class="muted">它们只用于本工具内部的横向比较，不能当作材料认证或厂商 TDS 指标。</p></section></div>'
      + '<section class="card"><h2>数据来源与限制</h2><div class="about-grid">'
      + '<div><h3>数据从哪来</h3><p class="muted">' + MATERIALS.length + ' 种材料的参数按常见厂商公开技术数据表（TDS）的量级整理，价格取国内电商常见零售区间。不同品牌、不同批次、不同打印参数都会带来差异。</p></div>'
      + '<div><h3>哪些不能直接比</h3><p class="muted">HDT 与长期使用温度、缺口与无缺口冲击、不同打印方向（XY / Z）的强度都不可直接横比；本工具只做选型筛选，不替代材料认证或结构仿真。</p></div>'
      + '<div><h3>食品接触与阻燃</h3><p class="muted">线材通过 FDA / EU 10/2011 认证，不代表打印件也合规；UL 94 阻燃等级需要样条测试。这两项目前没有纳入推荐条件，避免给出误导性结论。</p></div>'
      + '<div><h3>气味与排放</h3><p class="muted">气味评分是主观判断。若关注排放，应参考 UL 2904 等 3D 打印排放测试方法，并在通风环境中打印。</p></div></div>'
      + '<p class="fine-print">参考：<a href="https://www.iso.org/search.html?q=ISO%20527" target="_blank" rel="noopener">ISO 527</a> · '
      + '<a href="https://www.astm.org/d0638-22.html" target="_blank" rel="noopener">ASTM D638</a> · '
      + '<a href="https://chemicalinsights.ul.org/wp-content/uploads/2026/06/3DPrinting_BasicFacts.pdf" target="_blank" rel="noopener">UL Chemical Insights：3D 打印排放</a> · '
      + '<a href="https://wiki.polymaker.com/~/revisions/XuCCXhYZGkPoqFyfoO5q/polymaker-products/more-about-our-products/documents/technical-data-sheets/polycarbonate/polymax-tm-pc" target="_blank" rel="noopener">Polymaker TDS 示例</a></p></section>'
      + '<div class="form-actions"><a class="btn btn-primary" href="#/">去选材料</a><a class="btn btn-ghost" href="#/materials">浏览材料库</a></div>';
  }

  function router() {
    var hash = location.hash || "#/";
    var parts = hash.slice(1).split("?");
    var path = parts[0] || "/";
    var qs = parts[1] || "";

    if (path === "/" || path === "/home") renderHome(qs);
    else if (path === "/recommend") renderResult(qs);
    else if (path === "/materials") renderMaterials(qs);
    else if (path.indexOf("/material/") === 0) renderDetail(decodeURIComponent(path.slice("/material/".length)));
    else if (path === "/compare") renderCompare(qs);
    else if (path === "/stats") renderStats();
    else if (path === "/about") renderAbout();
    else renderHome("");
    window.scrollTo(0, 0);
  }

  // Theme toggle
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        try { localStorage.setItem("fa_theme", "light"); } catch (e) {}
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        try { localStorage.setItem("fa_theme", "dark"); } catch (e) {}
      }
    });
  }

  window.addEventListener("hashchange", router);
  router();
})();

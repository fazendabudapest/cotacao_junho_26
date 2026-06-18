// ── FORNECEDORES & CATEGORIAS ────────────────────────────────────────────────
var suppliers = [
  {key:'t3',       label:'3 Tentos', cls:'c-amber', visible:true},
  {key:'agrofel',  label:'Agrofel',  cls:'c-green', visible:true},
  {key:'cotrijal', label:'Cotrijal', cls:'c-coral', visible:true},
  {key:'roos',     label:'Roos',     cls:'c-teal',  visible:true},
  {key:'produza',  label:'Produza',  cls:'c-blue',  visible:true},
  {key:'futura',   label:'Futura',   cls:'c-cream', visible:true}
];
var cats = ['Adjuvante','Herbicida','Fungicida','Inseticida','Fertilizante','Outros produtos'];
var catVisible = {Adjuvante:true,Herbicida:true,Fungicida:true,Inseticida:true,Fertilizante:true,'Outros produtos':true};
var supplierColors = ['c-amber','c-green','c-coral','c-teal','c-blue','c-cream','c-purple','c-gray'];

// ── PRODUTOS (array definitivo) ───────────────────────────────────────────────
var products = [
  {name:'Easymix',      cat:'Adjuvante',  qty:179.18, t3:null, agrofel:{p:'Actoil',v:63.85}, cotrijal:{p:'',v:59}, roos:null, produza:{p:'Protac',v:72}, futura:null, vencedor:null},
  {name:'Áureo',        cat:'Adjuvante',  qty:659,    t3:{p:'MEES (BASF)',v:22}, agrofel:{p:'',v:22.22}, cotrijal:{p:'',v:22.75}, roos:{p:'RUMBA',v:15.5}, produza:{p:'',v:20}, futura:{p:'RANDAY (SIMILAR/MELHOR)',v:13.2}, vencedor:null},
  {name:'Spray Care',   cat:'Adjuvante',  qty:134,    t3:null, agrofel:{p:'Tech full',v:73.4}, cotrijal:{p:'',v:57}, roos:{p:'BECTRON BRANDT',v:98}, produza:{p:'Foam',v:70}, futura:{p:'BARUC 30ML/HÁ LIFE AGRO',v:84.4}, vencedor:null},
  {name:'Ally',         cat:'Herbicida',  qty:17.22,  t3:{p:'',v:860}, agrofel:{p:'Zartan UPL',v:307}, cotrijal:{p:'',v:845}, roos:{p:'WIKINK 60%',v:346}, produza:{p:'Metsulfuron Nortox',v:330}, futura:null, vencedor:null},
  {name:'Dual Gold',    cat:'Herbicida',  qty:368.34, t3:{p:'PREVENT GOLD',v:34}, agrofel:{p:'Metolox UPL',v:43}, cotrijal:{p:'',v:35}, roos:{p:'LEME S METALACLORO',v:34.5}, produza:{p:'Methos 960',v:38}, futura:{p:'',v:31.45}, vencedor:null},
  {name:'Select',       cat:'Herbicida',  qty:72.1,   t3:{p:'VIANCE',v:28}, agrofel:{p:'',v:37.16}, cotrijal:{p:'',v:35.75}, roos:{p:'CLETODIM NORTOX24%',v:32}, produza:{p:'Cletodim',v:32}, futura:null, vencedor:null},
  {name:'Zapp QI',      cat:'Herbicida',  qty:3400.36,t3:{p:'CRUCIAL e/ou TECNUP',v:25}, agrofel:{p:'Roundup Original mais',v:25.76}, cotrijal:{p:'ZAP QI 500',v:24.5}, roos:{p:'ORIGINAL MAIS',v:22}, produza:{p:'Preciso XK ou Roundup',v:24.8}, futura:{p:'',v:28.14}, vencedor:null},
  {name:'Calaris',      cat:'Herbicida',  qty:314,    t3:null, agrofel:null, cotrijal:null, roos:{p:'CALARIS',v:50.5}, produza:{p:'Calaris Nortox',v:48.16}, futura:{p:'',v:51.01}, vencedor:null},
  {name:'Elevore',      cat:'Herbicida',  qty:32,     t3:null, agrofel:null, cotrijal:null, roos:null, produza:{p:'',v:790}, futura:null, vencedor:null},
  {name:'Versatilis',   cat:'Fungicida',  qty:65.1,   t3:{p:'',v:180}, agrofel:null, cotrijal:{p:'Versatilis',v:185}, roos:{p:'',v:178}, produza:{p:'',v:205}, futura:null, vencedor:null},
  {name:'Miravis',      cat:'Fungicida',  qty:31.8,   t3:null, agrofel:null, cotrijal:{p:'Miravis',v:533}, roos:{p:'CARAMBA',v:87.5}, produza:null, futura:{p:'',v:411.06}, vencedor:null},
  {name:'Miravis Duo',  cat:'Fungicida',  qty:275,    t3:null, agrofel:null, cotrijal:{p:'MIRAVIS DUO',v:229}, roos:{p:'BLAVITY',v:353.5}, produza:null, futura:{p:'',v:178.03}, vencedor:null},
  {name:'Priori Xtra',  cat:'Fungicida',  qty:34.8,   t3:{p:'TEBURAZ',v:39}, agrofel:{p:'Sphere max',v:227.8}, cotrijal:{p:'',v:141.5}, roos:{p:'APROACH POWER',v:82.5}, produza:{p:'Helmstar Plus',v:55}, futura:{p:'',v:94.82}, vencedor:null},
  {name:'Fox Xpro',     cat:'Fungicida',  qty:93,     t3:{p:'BLAVITY 250ml/ha',v:330}, agrofel:{p:'',v:263.12}, cotrijal:{p:'Fox Xpro',v:249}, roos:{p:'ALMADA',v:71}, produza:{p:'',v:252}, futura:null, vencedor:null},
  {name:'Previnil',     cat:'Fungicida',  qty:1041.5, t3:{p:'ABSOLUTO FIX',v:25}, agrofel:{p:'Safenith',v:32.17}, cotrijal:{p:'Bravonil',v:28.5}, roos:{p:'',v:25.5}, produza:{p:'Absoluto fix 720',v:27}, futura:null, vencedor:null},
  {name:'Odin',         cat:'Fungicida',  qty:78,     t3:{p:'TEBURAZ (Tebuco + Azoxi)',v:39}, agrofel:{p:'',v:36.56}, cotrijal:{p:'Odin 430',v:37.5}, roos:{p:'TEBUCONAZOLE 43%',v:36}, produza:{p:'',v:34.5}, futura:null, vencedor:null},
  {name:'Elatus',       cat:'Fungicida',  qty:54,     t3:{p:'BELYAN',v:190}, agrofel:null, cotrijal:{p:'',v:415}, roos:null, produza:null, futura:{p:'',v:355.23}, vencedor:null},
  {name:'Fox Xpro',     cat:'Fungicida',  qty:228,    t3:{p:'BLAVITY 250ml/ha',v:330}, agrofel:{p:'',v:263.12}, cotrijal:{p:'',v:249}, roos:null, produza:{p:'',v:252}, futura:{p:'MITRION EMBALAGEM',v:235.77}, vencedor:null},
  {name:'Fox Supra',    cat:'Fungicida',  qty:160,    t3:{p:'EXCALIA MAX (Sumitomo)',v:175}, agrofel:{p:'',v:324.48}, cotrijal:null, roos:{p:'SUGOY',v:74}, produza:{p:'',v:310}, futura:null, vencedor:null},
  {name:'Unizeb',       cat:'Fungicida',  qty:1120,   t3:{p:'Sino-Agri ou Trizeb',v:26}, agrofel:{p:'',v:29.66}, cotrijal:{p:'UNIZEB GOLD',v:26.95}, roos:{p:'INDOZEB 750 WG',v:28.5}, produza:{p:'',v:26.5}, futura:null, vencedor:null},
  {name:'Engeo Pleno S',cat:'Inseticida', qty:191.65, t3:{p:'TALISMAN FMC',v:61}, agrofel:{p:'Sperto UPL',v:95}, cotrijal:{p:'',v:101}, roos:null, produza:{p:'Connect',v:34}, futura:{p:'',v:84.11}, vencedor:null},
  {name:'Perito',       cat:'Inseticida', qty:50,     t3:{p:'MAGNUM',v:42.5}, agrofel:{p:'',v:49.55}, cotrijal:null, roos:{p:'MAGNUM 97% ADAMA',v:45}, produza:{p:'',v:42}, futura:null, vencedor:null},
  {name:'Primoleo',     cat:'Inseticida', qty:588,    t3:{p:'ULTIMATO',v:18}, agrofel:{p:'Megatraz',v:23.88}, cotrijal:null, roos:null, produza:{p:'Ultimato',v:19}, futura:{p:'',v:18.35}, vencedor:null},
  {name:'Primatop',     cat:'Inseticida', qty:444,    t3:null, agrofel:null, cotrijal:null, roos:{p:'ULTIMATO ATRAZ 50%',v:16.3}, produza:null, futura:{p:'',v:23.69}, vencedor:null},
  {name:'Verdavis',     cat:'Inseticida', qty:347.5,  t3:null, agrofel:{p:'Curbix',v:81.52}, cotrijal:null, roos:null, produza:null, futura:{p:'',v:387.62}, vencedor:null},
  {name:'Brilhante',    cat:'Inseticida', qty:358.5,  t3:{p:'',v:18.5}, agrofel:{p:'Upmyl UPL',v:19.72}, cotrijal:null, roos:null, produza:{p:'Bazuca',v:18}, futura:null, vencedor:null},
  {name:'Expedition',   cat:'Inseticida', qty:59.75,  t3:{p:'PRÊMIO STAR FMC',v:190}, agrofel:null, cotrijal:null, roos:null, produza:null, futura:null, vencedor:null}
];

products = products.concat([
  {name:'BELYAN',                       cat:'Outros produtos', qty:0, t3:{p:'BELYAN',v:190}, cotrijal:{p:'BELYAN',v:189}, vencedor:null},
  {name:'MIRAVIS EXTRA',                cat:'Outros produtos', qty:0, cotrijal:{p:'MIRAVIS EXTRA',v:233}, vencedor:null},
  {name:'OFF ROAD',                     cat:'Outros produtos', qty:0, cotrijal:{p:'OFF ROAD',v:16.5}, vencedor:null},
  {name:'TOPIK',                        cat:'Outros produtos', qty:0, cotrijal:{p:'TOPIK',v:565}, vencedor:null},
  {name:'MATCH',                        cat:'Outros produtos', qty:0, cotrijal:{p:'MATCH',v:37.5}, vencedor:null},
  {name:'MODUS',                        cat:'Outros produtos', qty:0, cotrijal:{p:'MODUS',v:92}, vencedor:null},
  {name:'LASTRO',                       cat:'Outros produtos', qty:0, cotrijal:{p:'LASTRO',v:102.5}, vencedor:null},
  {name:'YARAVITA ZNTRAC 40 ZN',        cat:'Outros produtos', qty:0, cotrijal:{p:'YARAVITA ZNTRAC 40 ZN',v:78}, vencedor:null},
  {name:'BRAVONIL',                     cat:'Outros produtos', qty:0, cotrijal:{p:'BRAVONIL',v:28.5}, vencedor:null},
  {name:'APROVE',                       cat:'Outros produtos', qty:0, cotrijal:{p:'APROVE',v:105}, vencedor:null},
  {name:'FOXULTRA',                     cat:'Outros produtos', qty:0, cotrijal:{p:'FOXULTRA',v:325}, vencedor:null},
  {name:'VESSARYA',                     cat:'Outros produtos', qty:0, cotrijal:{p:'VESSARYA',v:148}, vencedor:null},
  {name:'KEYRA',                        cat:'Outros produtos', qty:0, cotrijal:{p:'KEYRA',v:163}, vencedor:null},
  {name:'REGLONE',                      cat:'Outros produtos', qty:0, cotrijal:{p:'REGLONE',v:27}, vencedor:null},
  {name:'HEAT 350 GR',                  cat:'Outros produtos', qty:0, cotrijal:{p:'HEAT 350 GR',v:1085}, vencedor:null},
  {name:'ZETAMAX',                      cat:'Outros produtos', qty:0, cotrijal:{p:'ZETAMAX',v:109.5}, vencedor:null},
  {name:'STONE',                        cat:'Outros produtos', qty:0, cotrijal:{p:'STONE',v:79.5}, vencedor:null},
  {name:'CERTERO',                      cat:'Outros produtos', qty:0, cotrijal:{p:'CERTERO',v:144}, vencedor:null},
  {name:'VERTIMEC',                     cat:'Outros produtos', qty:0, cotrijal:{p:'VERTIMEC',v:91}, vencedor:null},
  {name:'BIOTROP TRICOTROP TRICODERMA', cat:'Outros produtos', qty:0, cotrijal:{p:'BIOTROP TRICOTROP TRICODERMA',v:1175}, vencedor:null},
  {name:'BIOTROP TAKOTROP',             cat:'Outros produtos', qty:0, cotrijal:{p:'BIOTROP TAKOTROP',v:61}, vencedor:null}
]);

// ── LEVANTAMENTO COTRIJAL ────────────────────────────────────────────────────
var cotrijalLevantamento = [
  ['ALLY 40 GR',0.845],['APROVE',105],['AUREO',22.75],['BELYAN',189],
  ['BIOTROP TAKOTROP',61],['BIOTROP TRICOTROP TRICODERMA',1175],['BRAVONIL',28.5],
  ['BRILHANTE',21],['CALARIS',60],['CERTERO',144],['DUAL GOLD',35],['EAZYMIX',59],
  ['ELATUS',415],['ENGEO PLENO S',101],['EXPEDITION',129.5],['FOX Xpro',249],
  ['FOXULTRA',325],['HEAT 350 GR',1085],['KEYRA',163],['LASTRO',102.5],['MATCH',37.5],
  ['MIRAVIS',545],['MIRAVIS DUO',229],['MIRAVIS EXTRA',233],['MODUS',92],
  ['ODIN 430',37.5],['OFROOD',16.5],['Off road',16.5],['PERITO',48],['PRIMATOP',26.5],
  ['PRIMOLEO',21.25],['QUIMIFOL CoMo PLUS',299],['QUIMIFOL RAYNITRO VIGOR',413],
  ['REGLONE',27],['SELECT',35.75],['SPRAY CARE',57],['STONE',79.5],['TOPIK',565],
  ['UNIZEB GOLD',26.95],['VERDAVIS',482.5],['VERSATILIS',185],['VERTIMEC',91],
  ['VESSARYA',148],['YARAVITA ZNTRAC 40 ZN',78],['ZAP QI 500',24.5],['ZETAMAX',109.5]
];

// BUG FIX: não sobrescreve preços cotrijal já definidos no array de produtos
function applyCotrijalLevantamento(){
  cotrijalLevantamento.forEach(function(row){
    var name=row[0], price=row[1];
    var prod=findProduct(name);
    if(!prod){
      prod={name:name, cat:'Outros produtos', qty:0, vencedor:null};
      products.push(prod);
    }
    if(!prod.cotrijal || !prod.cotrijal.v){
      prod.cotrijal={p:name, v:price};
    }
  });
}

// ── ESTADO ───────────────────────────────────────────────────────────────────
var safras = [{id:1, name:'Safra 26-27', active:true}];
var nextSafraId = 2;
var apps = [];
var nextAppId = 1;
var editingAppId = null;
var draftItems = [];
var offers = [];
var culturaFilter = null; // null = todas
var simulationProductFilter = null;
var sackPrices = {};

// ── FORMATAÇÃO ───────────────────────────────────────────────────────────────
function fmtNumber(v){
  return (Number(v)||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function fmt(v){ return 'R$ '+fmtNumber(v); }
function fmtS(v){ return fmtNumber(v); }

// BUG FIX: parseMoney lida corretamente com ponto decimal e formato BR
function parseMoney(v){
  if(typeof v==='number') return v;
  if(v===null||v===undefined) return null;
  var s=String(v).replace(/R\$\s*/g,'').trim();
  var n;
  if(s.indexOf(',')>=0){
    // Formato BR: 1.234,56 → remover ponto de milhar, trocar vírgula
    n=parseFloat(s.replace(/\./g,'').replace(',','.'));
  } else if(/^-?\d{1,3}(\.\d{3})+$/.test(s)){
    n=parseFloat(s.replace(/\./g,''));
  } else {
    // Ponto já é decimal ou número inteiro
    n=parseFloat(s.replace(/[^0-9.-]/g,''));
  }
  return isNaN(n)?null:n;
}

function parseDecimal(v){
  if(typeof v==='number') return v;
  if(v===null||v===undefined) return 0;
  var clean=String(v).trim();
  if(clean.indexOf(',')>=0) clean=clean.replace(/\./g,'').replace(',','.');
  else if(/^-?\d{1,3}(\.\d{3})+$/.test(clean)) clean=clean.replace(/\./g,'');
  else clean=clean.replace(/[^0-9.-]/g,'');
  var n=parseFloat(clean);
  return isNaN(n)?0:n;
}

function searchKey(value){
  var key=String(value||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/y/g,'i').replace(/[^a-z0-9]/g,'');
  if(key==='ofrood') return 'offroad';
  return key;
}

function pvFactor(){
  var selicEl=document.getElementById('selicrate');
  var dateEl=document.getElementById('prazodate');
  var selic=selicEl?(parseFloat(selicEl.value)/100||0.145):0.145;
  var dueStr=dateEl?dateEl.value:'2027-04-30';
  var today=new Date();
  var due=new Date(dueStr);
  var days=Math.max((due-today)/(1000*60*60*24),0);
  return Math.pow(1+selic,days/365);
}

// ── STICKY HELPERS (corrigidos) ───────────────────────────────────────────────
var L0=0,L1=92,L2=212;
var H1=34,H2=34;

// BUG FIX: span2=true para células rowspan=2 → altura correta
function stickyHead(top,left,span2){
  var h=span2?(H1+H2):(top===0?H1:H2);
  return 'position:sticky;top:'+top+'px;'+(left!==undefined?'left:'+left+'px;':'')+'z-index:'+(left!==undefined?4:3)+';height:'+h+'px;box-sizing:border-box;';
}

// BUG FIX: background var(--surface) em vez de var(--bg) para combinar com a tabela
function stickyLeft(left){
  return 'position:sticky;left:'+left+'px;z-index:1;background:var(--surface);';
}

// ── FILTROS ──────────────────────────────────────────────────────────────────
function buildFilters(){
  document.getElementById('supplierfilters').innerHTML=suppliers.map(function(s){
    return '<label><input type="checkbox" class="supchk" data-key="'+s.key+'" '+(s.visible?'checked':'')+'>'+s.label+'</label>';
  }).join('');
  document.getElementById('catfilters').innerHTML=cats.map(function(c){
    return '<label><input type="checkbox" class="catchk" data-cat="'+c+'" '+(catVisible[c]?'checked':'')+'>'+c+'</label>';
  }).join('');
}

// ── TABELA DE COTAÇÕES ────────────────────────────────────────────────────────
function renderTable(){
  var q=document.getElementById('search').value.toLowerCase();
  var winnerOnly=document.getElementById('winneronly')&&document.getElementById('winneronly').checked;
  var vis=suppliers.filter(function(s){ return s.visible; });

  var html='<tr>';
  html+='<th class="c-gray" style="'+stickyHead(0,L0,true)+'min-width:80px;" rowspan="2">Tipo</th>';
  html+='<th class="c-gray" style="'+stickyHead(0,L1,true)+'min-width:120px;" rowspan="2">Nome comercial</th>';
  html+='<th class="c-gray" style="'+stickyHead(0,L2,true)+'min-width:60px;" rowspan="2">Qtd</th>';
  if(!winnerOnly){
    vis.forEach(function(s){ html+='<th class="'+s.cls+'" style="'+stickyHead(0)+'text-align:center;" colspan="2">'+s.label+'</th>'; });
  }
  html+='<th class="c-purple" style="'+stickyHead(0)+'text-align:center;" colspan="3">Vencedor</th></tr><tr>';
  if(!winnerOnly){
    vis.forEach(function(s){
      html+='<th class="'+s.cls+'" style="'+stickyHead(H1)+'min-width:110px;">Produto</th>';
      html+='<th class="'+s.cls+'" style="'+stickyHead(H1)+'min-width:75px;">Preço</th>';
    });
  }
  html+='<th class="c-purple" style="'+stickyHead(H1)+'min-width:75px;">Empresa</th>';
  html+='<th class="c-purple" style="'+stickyHead(H1)+'min-width:95px;">Produto</th>';
  html+='<th class="c-purple" style="'+stickyHead(H1)+'min-width:70px;">Preço</th></tr>';

  products.forEach(function(prod,idx){
    if(!catVisible[prod.cat]) return;
    if(q&&prod.name.toLowerCase().indexOf(q)===-1) return;
    if(winnerOnly&&!prod.vencedor) return;

    // Menor preço entre fornecedores visíveis (indicador visual)
    var minPrice=null,minKey=null;
    if(!winnerOnly){
      vis.forEach(function(s){
        var cell=prod[s.key];
        if(cell&&cell.v>0&&(minPrice===null||cell.v<minPrice)){ minPrice=cell.v; minKey=s.key; }
      });
    }

    html+='<tr>';
    html+='<td class="c-gray" style="'+stickyLeft(L0)+'">'+prod.cat+'</td>';
    html+='<td class="c-gray" style="'+stickyLeft(L1)+'font-weight:600;">'+prod.name+'</td>';
    html+='<td class="c-gray" style="'+stickyLeft(L2)+'">'+prod.qty+'</td>';
    if(!winnerOnly){
      vis.forEach(function(s){
        var cell=prod[s.key];
        if(!cell){
          html+='<td style="color:var(--text-tertiary);"></td><td style="color:var(--text-tertiary);"></td>';
        } else {
          var isVenc=prod.vencedor&&prod.vencedor.s===s.label&&prod.vencedor.v===cell.v;
          var isBest=!isVenc&&minKey===s.key;
          html+='<td>'+(cell.p||'')+'</td>';
          html+='<td class="pricecell'+(isVenc?' venc':isBest?' best':'')+'" data-idx="'+idx+'" data-skey="'+s.key+'">'+fmt(cell.v)+'</td>';
        }
      });
    }
    if(prod.vencedor){
      html+='<td class="c-purple winner-selected" data-idx="'+idx+'" title="Clique para remover o vencedor" style="font-weight:600;">'+prod.vencedor.s+'</td>';
      html+='<td class="c-purple winner-selected" data-idx="'+idx+'" title="Clique para remover o vencedor">'+(prod.vencedor.p||prod.name)+'</td>';
      html+='<td class="c-purple winner-selected" data-idx="'+idx+'" title="Clique para remover o vencedor" style="font-weight:600;">'+fmt(prod.vencedor.v)+'</td>';
    } else {
      html+='<td style="color:var(--text-tertiary);" colspan="3">toque num preço</td>';
    }
    html+='</tr>';
  });
  document.getElementById('tbl').innerHTML=html;
  renderQuoteSummary();
  buildProductPicker();
}

// ── ABAS ────────────────────────────────────────────────────────────────────
function showTab(tab){
  document.querySelectorAll('.tab-button').forEach(function(b){ b.classList.toggle('active',b.dataset.tab===tab); });
  document.getElementById('quotes-panel').classList.toggle('active',tab==='quotes');
  document.getElementById('simulations-panel').classList.toggle('active',tab==='simulations');
  document.getElementById('purchases-panel').classList.toggle('active',tab==='purchases');
}

// ── SELETOR DE PRODUTO ───────────────────────────────────────────────────────
function buildProductPicker(){
  var picker=document.getElementById('productpicker');
  if(!picker) return;
  var selected=picker.value;
  picker.innerHTML='<option value="">Selecione um produto</option>';
  products.forEach(function(prod,idx){
    var label=prod.name+' - '+prod.cat;
    label+=prod.vencedor?' - '+prod.vencedor.s+' '+fmt(prod.vencedor.v):' - sem vencedor';
    var option=document.createElement('option');
    option.value=idx;
    option.textContent=label;
    picker.appendChild(option);
  });
  picker.value=selected;
}

// ── UTILITÁRIOS DE FORNECEDOR ────────────────────────────────────────────────
function supplierKey(label){
  return label.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'').slice(0,18)||'fornecedor';
}
function ensureSupplier(label){
  var key=supplierKey(label),base=key,count=2;
  while(suppliers.find(function(s){ return s.key===key&&s.label!==label; })){ key=base+count++; }
  var existing=suppliers.find(function(s){ return s.key===key||s.label===label; });
  if(existing) return existing;
  var supplier={key:key,label:label,cls:supplierColors[suppliers.length%supplierColors.length],visible:true};
  suppliers.push(supplier);
  return supplier;
}
function ensureCategory(cat){
  if(!cat) return;
  if(cats.indexOf(cat)===-1){ cats.push(cat); catVisible[cat]=true; }
}
function findProduct(name,qty){
  var wanted=searchKey(name);
  var matches=products.filter(function(p){ return searchKey(p.name)===wanted; });
  if(matches.length===0){
    matches=products.filter(function(p){ return searchKey(p.name).indexOf(wanted)>=0||wanted.indexOf(searchKey(p.name))>=0; });
  }
  if(qty!==undefined&&qty!==null){
    var byQty=matches.find(function(p){ return Math.abs(Number(p.qty)-Number(qty))<0.01; });
    if(byQty) return byQty;
  }
  return matches[0];
}

// ── IMPORTAÇÃO EXCEL ─────────────────────────────────────────────────────────
function importQuoteRows(rowsBySheet,supplierName){
  var missing=rowsBySheet['Produtos_faltantes']||rowsBySheet['produtos_faltantes'];
  var quote=rowsBySheet['Preenchimento']||rowsBySheet['preenchimento'];
  if(!missing||!quote) throw new Error('A planilha precisa ter as abas Preenchimento e Produtos_faltantes.');
  var supplier=ensureSupplier(supplierName);

  missing.slice(2).forEach(function(row){
    var cat=row[0],name=row[1],qty=parseMoney(row[5]);
    if(!name) return;
    ensureCategory(cat);
    var prod=findProduct(name,qty);
    if(!prod){
      prod={name:String(name).trim(),cat:cat||'Outros',qty:qty||0,vencedor:null};
      products.push(prod);
    } else { prod.cat=cat||prod.cat; prod.qty=qty||prod.qty; }
  });

  quote.slice(8).forEach(function(row){
    var name=row[0],price=parseMoney(row[2]),similar=row[4];
    if(!name||price===null||price<=0) return;
    var prod=findProduct(name,parseMoney(row[1]));
    if(!prod){
      prod={name:String(name).trim(),cat:'Outros',qty:parseMoney(row[1])||0,vencedor:null};
      products.push(prod);
      ensureCategory('Outros');
    }
    prod[supplier.key]={p:similar?String(similar).trim():'',v:price};
  });

  buildOffers();
  buildFilters();
  renderTable();
}

// ── TOTAIS ───────────────────────────────────────────────────────────────────
function supplierTotal(skey){
  var t=0;
  products.forEach(function(p){ var c=p[skey]; if(c){ t+=c.v*p.qty; } });
  return t;
}
function winnerTotal(){
  var t=0;
  products.forEach(function(p){ if(p.vencedor){ t+=p.vencedor.v*p.qty; } });
  return t;
}
function winnerTotalBySupplier(sLabel){
  var t=0;
  products.forEach(function(p){ if(p.vencedor&&p.vencedor.s===sLabel){ t+=p.vencedor.v*p.qty; } });
  return t;
}
function renderQuoteSummary(){
  var box=document.getElementById('quote-summary');
  if(!box) return;
  var html=suppliers.map(function(s){
    var wt=winnerTotalBySupplier(s.label);
    var winLine=wt>0?'<small style="display:block;font-size:11px;margin-top:2px;opacity:0.75;">Vencedor: '+fmt(wt)+'</small>':'';
    return '<div class="quote-total-card '+s.cls+'"><span>'+s.label+'</span><strong>'+fmt(supplierTotal(s.key))+'</strong>'+winLine+'</div>';
  }).join('');
  html+='<div class="quote-total-card winner-total"><span>Total vencedores</span><strong>'+fmt(winnerTotal())+'</strong></div>';
  box.innerHTML=html;
}

// ── EXPORTAR CSV ─────────────────────────────────────────────────────────────
function exportWinnersCSV(){
  var rows=[['Categoria','Produto referência','Qtd','Fornecedor','Produto cotado','Preço unit (R$)','Total (R$)']];
  products.forEach(function(p){
    if(!p.vencedor) return;
    var v=p.vencedor;
    rows.push([p.cat,p.name,p.qty,v.s,v.p||p.name,v.v.toFixed(2).replace('.',','),
      (v.v*p.qty).toFixed(2).replace('.',',')]);
  });
  if(rows.length===1){ alert('Nenhum vencedor marcado ainda.'); return; }
  var csv=rows.map(function(r){ return r.map(function(c){ return '"'+String(c).replace(/"/g,'""')+'"'; }).join(';'); }).join('\r\n');
  var blob=new Blob(['﻿'+csv],{type:'text/csv;charset=utf-8'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url; a.download='cotacao_vencedores.csv';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ── PARSER EXCEL (inalterado) ─────────────────────────────────────────────────
function readUint16(view,offset){ return view.getUint16(offset,true); }
function readUint32(view,offset){ return view.getUint32(offset,true); }

async function inflateRaw(bytes){
  var stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function unzipEntries(buffer){
  var view=new DataView(buffer),bytes=new Uint8Array(buffer),eocd=-1;
  for(var i=bytes.length-22;i>=Math.max(0,bytes.length-70000);i--){
    if(readUint32(view,i)===0x06054b50){ eocd=i; break; }
  }
  if(eocd<0) throw new Error('Arquivo Excel inválido.');
  var entriesCount=readUint16(view,eocd+10),centralOffset=readUint32(view,eocd+16);
  var decoder=new TextDecoder('utf-8'),files={},pos=centralOffset;
  for(var n=0;n<entriesCount;n++){
    if(readUint32(view,pos)!==0x02014b50) break;
    var method=readUint16(view,pos+10),compressedSize=readUint32(view,pos+20);
    var nameLength=readUint16(view,pos+28),extraLength=readUint16(view,pos+30);
    var commentLength=readUint16(view,pos+32),localOffset=readUint32(view,pos+42);
    var name=decoder.decode(bytes.slice(pos+46,pos+46+nameLength));
    var localNameLength=readUint16(view,localOffset+26),localExtraLength=readUint16(view,localOffset+28);
    var dataStart=localOffset+30+localNameLength+localExtraLength;
    var compressed=bytes.slice(dataStart,dataStart+compressedSize);
    files[name]=method===8?await inflateRaw(compressed):compressed;
    pos+=46+nameLength+extraLength+commentLength;
  }
  return files;
}
function xmlText(bytes){ return new TextDecoder('utf-8').decode(bytes); }
function parseXml(text){ return new DOMParser().parseFromString(text,'application/xml'); }
function textContent(node,selector){ var f=node.getElementsByTagName(selector)[0]; return f?f.textContent:''; }
function elements(node,tag){ return Array.from(node.getElementsByTagName(tag)); }
function columnIndex(cellRef){
  var letters=String(cellRef||'').replace(/[0-9]/g,''),index=0;
  for(var i=0;i<letters.length;i++) index=index*26+letters.charCodeAt(i)-64;
  return index-1;
}
function parseSharedStrings(files){
  if(!files['xl/sharedStrings.xml']) return [];
  var xml=parseXml(xmlText(files['xl/sharedStrings.xml']));
  return elements(xml,'si').map(function(si){ return elements(si,'t').map(function(t){ return t.textContent; }).join(''); });
}
function workbookSheetPaths(files){
  var workbook=parseXml(xmlText(files['xl/workbook.xml']));
  var rels=parseXml(xmlText(files['xl/_rels/workbook.xml.rels']));
  var relMap={};
  elements(rels,'Relationship').forEach(function(rel){ relMap[rel.getAttribute('Id')]='xl/'+rel.getAttribute('Target').replace(/^\/?xl\//,''); });
  var paths={};
  elements(workbook,'sheet').forEach(function(sheet){
    var relId=sheet.getAttribute('r:id')||sheet.getAttribute('id');
    paths[sheet.getAttribute('name')]=relMap[relId];
  });
  return paths;
}
function parseSheetRows(files,path,shared){
  var xml=parseXml(xmlText(files[path]));
  return elements(xml,'row').map(function(row){
    var values=[];
    elements(row,'c').forEach(function(cell){
      var idx=columnIndex(cell.getAttribute('r')),type=cell.getAttribute('t'),value='';
      if(type==='s') value=shared[Number(textContent(cell,'v'))]||'';
      else if(type==='inlineStr') value=elements(cell,'t').map(function(t){ return t.textContent; }).join('');
      else { var raw=textContent(cell,'v'); value=raw===''?'':(isNaN(Number(raw))?raw:Number(raw)); }
      values[idx]=value;
    });
    return values;
  });
}
async function readWorkbookRows(file){
  var buffer=await file.arrayBuffer(),files=await unzipEntries(buffer);
  var shared=parseSharedStrings(files),paths=workbookSheetPaths(files),rowsBySheet={};
  Object.keys(paths).forEach(function(name){
    rowsBySheet[name]=parseSheetRows(files,paths[name],shared);
    rowsBySheet[name.toLowerCase()]=rowsBySheet[name];
  });
  return rowsBySheet;
}
async function handleQuoteImport(file){
  var status=document.getElementById('importstatus');
  var supplierInput=document.getElementById('importsupplier');
  var supplierName=supplierInput.value.trim()||file.name.replace(/\.[^.]+$/,'');
  try {
    status.textContent='Importando...';
    var rowsBySheet=await readWorkbookRows(file);
    importQuoteRows(rowsBySheet,supplierName);
    renderApps();
    status.textContent='Cotação importada: '+supplierName+' (dados disponíveis nesta sessão)';
  } catch(err){
    status.textContent='Não consegui importar esta planilha.';
    alert(err.message||'Não consegui importar esta planilha.');
  }
}

// ── GERENCIAMENTO DE SAFRAS ──────────────────────────────────────────────────
function activeSafra(){
  return safras.find(function(s){ return s.active; }) || safras[0];
}

function renderSafras(){
  var row=document.getElementById('safrarow');
  if(!row) return;
  row.innerHTML='';
  safras.forEach(function(s){
    var group=document.createElement('div');
    group.className='safra-control'+(s.active?' active':'');

    var selectButton=document.createElement('button');
    selectButton.type='button';
    selectButton.className='safra-btn'+(s.active?' active':'');
    selectButton.dataset.safraid=s.id;
    selectButton.textContent=s.name;
    group.appendChild(selectButton);

    if(s.active){
      var editButton=document.createElement('button');
      editButton.type='button';
      editButton.className='safra-edit';
      editButton.id='editsafrabtn';
      editButton.title='Editar nome da safra';
      editButton.textContent='Editar';
      group.appendChild(editButton);
    }
    row.appendChild(group);
  });

  var addButton=document.createElement('button');
  addButton.type='button';
  addButton.className='safra-add';
  addButton.id='addsafrabtn';
  addButton.title='Adicionar nova safra';
  addButton.setAttribute('aria-label','Adicionar nova safra');
  addButton.textContent='+';
  row.appendChild(addButton);

  var activeName=document.getElementById('activesafraname');
  var current=activeSafra();
  if(activeName&&current) activeName.textContent=current.name;
}

function renderCulturaFilter(){
  var row=document.getElementById('culturafilterrow');
  if(!row) return;
  var sf=activeSafra();
  var appsOfSafra=sf?apps.filter(function(a){ return a.safraId===sf.id; }):apps;
  // Culturas presentes na safra ativa
  var culturas=[];
  appsOfSafra.forEach(function(a){
    if(a.cultura && culturas.indexOf(a.cultura)===-1) culturas.push(a.cultura);
  });
  if(culturas.length<=1){ row.innerHTML=''; return; } // sem filtro se só há uma cultura
  var colorMap={Soja:'c-soja',Canola:'c-canola',Milho:'c-milho',Trigo:'c-trigo',Outro:'c-outro'};
  var html='<button class="cultura-filter-btn all'+(culturaFilter===null?' active':'')+'" data-cultura="">Todas</button>';
  culturas.forEach(function(c){
    var cls=colorMap[c]||'c-outro';
    html+='<button class="cultura-filter-btn '+cls+(culturaFilter===c?' active':'')+'" data-cultura="'+c+'">'+c+'</button>';
  });
  row.innerHTML=html;
}

function cultureNames(){
  var names=['Soja','Canola','Milho','Trigo'];
  apps.forEach(function(a){
    var name=String(a.cultura||'').trim();
    if(name&&!names.some(function(existing){ return searchKey(existing)===searchKey(name); })) names.push(name);
  });
  return names.sort(function(a,b){ return a.localeCompare(b); });
}

function simulationProductNames(){
  var sf=activeSafra();
  var names=[];
  apps.forEach(function(app){
    if(sf&&app.safraId!==sf.id) return;
    app.items.forEach(function(it){
      var name=itemName(it).trim();
      if(name&&!names.some(function(existing){ return searchKey(existing)===searchKey(name); })) names.push(name);
    });
  });
  return names.sort(function(a,b){ return a.localeCompare(b); });
}

function renderSimulationProductSuggestions(value){
  var box=document.getElementById('simulationproductsuggestions');
  var query=searchKey(value||'');
  box.innerHTML='';
  if(query.length<3) return;
  simulationProductNames().filter(function(name){
    return searchKey(name).indexOf(query)===0;
  }).slice(0,10).forEach(function(name){
    var button=document.createElement('button');
    button.type='button';
    button.className='simulation-product-choice';
    button.dataset.product=name;
    button.textContent=name;
    box.appendChild(button);
  });
}

function setSimulationProductFilter(product){
  simulationProductFilter=product||null;
  var input=document.getElementById('simulationproductsearch');
  var clear=document.getElementById('clearsimulationproduct');
  var status=document.getElementById('simulationproductstatus');
  input.value=simulationProductFilter||'';
  clear.hidden=!simulationProductFilter;
  status.textContent=simulationProductFilter?'Mostrando aplicacoes com '+simulationProductFilter:'Digite pelo menos 3 letras';
  document.getElementById('simulationproductsuggestions').innerHTML='';
  renderApps();
}

function cropAreaForCulture(culture,safraId){
  var sf=safras.find(function(s){ return s.id===Number(safraId); })||activeSafra();
  if(!sf||!sf.cropAreas) return 0;
  return Number(sf.cropAreas[searchKey(culture||'')])||0;
}

function effectiveAppHectares(app){
  return Number(app.hectares)>0?Number(app.hectares):cropAreaForCulture(app.cultura,app.safraId);
}

function renderCropAreas(){
  var panel=document.getElementById('cropareaspanel');
  if(!panel) return;
  var sf=activeSafra();
  if(sf&&!sf.cropAreas) sf.cropAreas={};
  panel.innerHTML='';
  cultureNames().forEach(function(culture){
    var label=document.createElement('label');
    label.textContent=culture;
    var input=document.createElement('input');
    input.type='text';
    input.inputMode='decimal';
    input.className='crop-area-input';
    input.dataset.culture=culture;
    input.placeholder='Hectares';
    var area=cropAreaForCulture(culture,sf?sf.id:null);
    input.value=area?fmtS(area):'';
    label.appendChild(input);
    panel.appendChild(label);
  });
}

function updateEditorAreaHint(){
  var hint=document.getElementById('editappareahint');
  if(!hint) return;
  var culture=currentEditorCulture();
  var area=cropAreaForCulture(culture,activeSafra()?activeSafra().id:null);
  hint.textContent=area>0?'Area padrao de '+culture+': '+fmtS(area)+' ha. Preencha acima somente se esta aplicacao for diferente.':'Nenhuma area padrao cadastrada para esta cultura.';
}

function renderCultureOptions(selectedCulture){
  var select=document.getElementById('editappcultura');
  if(!select) return;
  var current=selectedCulture||'';
  var names=cultureNames();
  if(current&&!names.some(function(name){ return searchKey(name)===searchKey(current); })) names.push(current);
  select.innerHTML='<option value="">Selecione</option>';
  names.forEach(function(name){
    var option=document.createElement('option');
    option.value=name;
    option.textContent=name;
    select.appendChild(option);
  });
  var otherOption=document.createElement('option');
  otherOption.value='Outro';
  otherOption.textContent='Outro';
  select.appendChild(otherOption);
  select.value=current;
}

function sackPriceForCulture(culture){
  return sackPrices[searchKey(culture||'')]||0;
}

function formatSacks(cost,culture){
  var price=sackPriceForCulture(culture);
  return price>0?fmtS(cost/price)+' sc/ha':'Defina o valor da saca';
}

function sackPriceLabel(culture){
  var price=sackPriceForCulture(culture);
  return price>0?'Em sacas - saca '+fmt(price):'Em sacas';
}

function currentEditorCulture(){
  var custom=document.getElementById('newculturename');
  if(custom&&custom.value.trim()) return custom.value.trim();
  var select=document.getElementById('editappcultura');
  return select?select.value:'';
}

function renderSackPrices(){
  var panel=document.getElementById('sackpricespanel');
  if(!panel) return;
  panel.innerHTML='';
  cultureNames().forEach(function(culture){
    var label=document.createElement('label');
    label.textContent=culture;
    var input=document.createElement('input');
    input.type='text';
    input.inputMode='decimal';
    input.className='sack-price-input';
    input.dataset.culture=culture;
    input.placeholder='R$ por saca';
    var price=sackPriceForCulture(culture);
    input.value=price?fmtS(price):'';
    label.appendChild(input);
    panel.appendChild(label);
  });
}

// ── GERENCIAMENTO DE APLICAÇÕES ──────────────────────────────────────────────
function activeApp(){
  var sf=activeSafra();
  return apps.find(function(a){ return a.active&&a.safraId===sf.id; });
}
function setActiveApp(id){
  apps.forEach(function(a){ a.active=a.id===id; });
  renderApps();
}
function addProductToApp(idx){
  var a=activeApp();
  if(!a){ alert('Crie ou selecione uma aplicação primeiro.'); return; }
  if(a.items.find(function(it){ return it.idx===idx; })) return;
  a.items.push({idx:idx,dose:0});
  saveState(); renderApps(); showTab('simulations');
}
function addManualProductToApp(name,price){
  var a=activeApp();
  if(!a){ alert('Crie ou selecione uma aplicação primeiro.'); return; }
  a.items.push({manual:true,manualId:Date.now()+'-'+Math.random().toString(16).slice(2),name:name,price:price,dose:0});
  saveState(); renderApps(); showTab('simulations');
}
function itemKey(it){
  if(!it.manual&&it.offerId!==undefined) return 'offer-'+it.offerId;
  return it.manual?it.manualId:String(it.idx);
}
function itemName(it){
  if(it.manual) return it.name||'';
  if(it.offerId!==undefined&&offers[it.offerId]) return offers[it.offerId].offeredName;
  var p=products[it.idx];
  return p?p.name:'(produto removido)';
}
function itemPrice(it){
  if(it.manual) return it.price||0;
  if(it.offerId!==undefined&&offers[it.offerId]){
    var offer=offers[it.offerId];
    var offerPrazoOn=document.getElementById('prazotoggle').checked;
    return (offerPrazoOn&&offer.supplier==='Cotrijal')?offer.price/pvFactor():offer.price;
  }
  var p=products[it.idx];
  if(!p) return 0;
  var v=p.vencedor||bestQuote(p);
  if(!v) return 0;
  var prazoOn=document.getElementById('prazotoggle').checked;
  return (prazoOn&&v.s==='Cotrijal')?v.v/pvFactor():v.v;
}
function itemPriceSource(it){
  if(it.stockSource){
    var stock=findStock(it.name);
    var balance=stock?fmtS(stock[2])+' '+stock[1]:'saldo não localizado';
    return it.price?'Estoque: '+balance+' - custo médio '+fmt(it.price):'Estoque: '+balance+' - informe o custo';
  }
  if(it.manual) return it.price?fmt(it.price):'Informe o preço';
  if(it.offerId!==undefined&&offers[it.offerId]){
    var offer=offers[it.offerId];
    var adjusted=itemPrice(it);
    var prazoText=adjusted!==offer.price?' - valor presente '+fmt(adjusted):'';
    return offer.supplier+' - '+fmt(offer.price)+prazoText+(offer.isSimilar?' - substitui '+offer.requestedName:'');
  }
  var p=products[it.idx];
  if(!p) return '—';
  if(p.vencedor) return p.vencedor.s+' - '+fmt(p.vencedor.v);
  var best=bestQuote(p);
  return best?'Menor preço: '+best.s+' - '+fmt(best.v):'Sem preço na cotação';
}
function itemSupplier(it){
  if(it.manual) return 'Sem fornecedor';
  if(it.offerId!==undefined&&offers[it.offerId]) return offers[it.offerId].supplier;
  var p=products[it.idx];
  if(!p) return 'Sem fornecedor';
  var quote=p.vencedor||bestQuote(p);
  return quote?quote.s:'Sem fornecedor';
}
function bestQuote(prod){
  var best=null;
  suppliers.forEach(function(s){
    var cell=prod[s.key];
    if(cell&&cell.v>0&&(!best||cell.v<best.v)) best={s:s.label,v:cell.v};
  });
  return best;
}
function buildOffers(){
  offers=[];
  products.forEach(function(prod,productIndex){
    suppliers.forEach(function(supplier){
      var cell=prod[supplier.key];
      if(!cell||!cell.v||cell.v<=0) return;
      var offeredName=(cell.p&&String(cell.p).trim())?String(cell.p).trim():prod.name;
      offers.push({id:offers.length,productIndex:productIndex,requestedName:prod.name,offeredName:offeredName,
        cat:prod.cat,supplier:supplier.label,price:cell.v,isSimilar:searchKey(offeredName)!==searchKey(prod.name)});
    });
  });
}
function productSuggestions(prefix){
  var np=searchKey(prefix||'');
  if(np.length<3) return [];
  var quoteOptions=offers.filter(function(o){ return searchKey(o.offeredName).indexOf(np)===0; })
    .sort(function(a,b){ return a.offeredName.localeCompare(b.offeredName)||a.supplier.localeCompare(b.supplier); })
    .map(function(o){
      var label=o.offeredName+' - '+o.supplier+' - '+fmt(o.price);
      if(o.isSimilar) label+=' - substitui '+o.requestedName;
      return {type:'offer',offerId:o.id,label:label,name:o.offeredName};
    });
  var stockOptions=(window.stockItems||[]).filter(function(row){
    return searchKey(row[0]).indexOf(np)===0&&row[2]>0;
  }).map(function(row){
    var price=(window.stockUnitPrices&&window.stockUnitPrices[row[0]])||0;
    return {type:'stock',stockName:row[0],label:row[0]+' - Estoque '+fmtS(row[2])+' '+row[1]+(price?' - custo médio '+fmt(price):' - sem custo registrado')};
  });
  return quoteOptions.concat(stockOptions).sort(function(a,b){ return a.label.localeCompare(b.label); });
}

// ── DIALOGS ──────────────────────────────────────────────────────────────────
function openActivityMenu(){
  renderNewApplicationCultures();
  document.getElementById('activitydialog').showModal();
}
function closeActivityMenu(){
  var d=document.getElementById('activitydialog');
  if(d&&d.open) d.close();
}

function renderNewApplicationCultures(){
  var box=document.getElementById('newapplicationcultures');
  if(!box) return;
  box.innerHTML='';
  cultureNames().forEach(function(name){
    var button=document.createElement('button');
    button.type='button';
    button.className='activity-option culture-option';
    button.dataset.culture=name;
    button.textContent=name;
    box.appendChild(button);
  });
  var input=document.getElementById('quickculturename');
  if(input) input.value='';
}
function openApplicationEditor(app){
  editingAppId=app?app.id:null;
  draftItems=app?app.items.map(function(it){ return Object.assign({},it); }):[];
  document.getElementById('editapptype').textContent=app?(app.type||'Aplicação'):'Aplicação';
  document.getElementById('editapptitle').textContent=app?'Editar aplicação':'Nova aplicação';
  document.getElementById('editappname').value=app?app.name:'';
  renderCultureOptions(app?(app.cultura||''):'');
  var cultEl=document.getElementById('editappcultura');
  if(cultEl) cultEl.value=app?(app.cultura||''):'';
  var newCultureEl=document.getElementById('newculturename');
  if(newCultureEl) newCultureEl.value='';
  document.getElementById('editapphectares').value=app&&app.hectares?fmtS(app.hectares):'';
  updateEditorAreaHint();
  document.getElementById('editappnotes').value=app?(app.notes||''):'';
  document.getElementById('deleteeditappbtn').hidden=!app;
  renderEditItems();
  document.getElementById('appeditdialog').showModal();
}
function createApplicationFromType(type){
  closeActivityMenu();
  editingAppId=null;
  draftItems=[];
  document.getElementById('editapptype').textContent=type;
  document.getElementById('editapptitle').textContent='Nova '+type.toLowerCase();
  document.getElementById('editappname').value=type;
  renderCultureOptions('');
  var cultEl=document.getElementById('editappcultura');
  if(cultEl) cultEl.value='';
  var newCultureEl=document.getElementById('newculturename');
  if(newCultureEl) newCultureEl.value='';
  document.getElementById('editapphectares').value='';
  updateEditorAreaHint();
  document.getElementById('editappnotes').value='';
  document.getElementById('deleteeditappbtn').hidden=true;
  renderEditItems();
  addDraftItem();
  document.getElementById('appeditdialog').showModal();
}

function createApplicationForCulture(culture){
  var selectedCulture=String(culture||'').trim();
  if(!selectedCulture) return;
  closeActivityMenu();
  editingAppId=null;
  draftItems=[];
  document.getElementById('editapptype').textContent='Aplicacao';
  document.getElementById('editapptitle').textContent='Nova aplicacao';
  document.getElementById('editappname').value='Aplicacao - '+selectedCulture;
  renderCultureOptions(selectedCulture);
  var cultEl=document.getElementById('editappcultura');
  if(cultEl) cultEl.value=selectedCulture;
  var newCultureEl=document.getElementById('newculturename');
  if(newCultureEl) newCultureEl.value='';
  document.getElementById('editapphectares').value='';
  updateEditorAreaHint();
  document.getElementById('editappnotes').value='';
  document.getElementById('deleteeditappbtn').hidden=true;
  addDraftItem();
  document.getElementById('appeditdialog').showModal();
  var productInput=document.querySelector('.edit-product-name');
  if(productInput) productInput.focus();
}
function addDraftItem(){
  draftItems.push({manual:true,manualId:Date.now()+'-'+Math.random().toString(16).slice(2),name:'',price:0,dose:0});
  renderEditItems();
}
function removeDraftItem(key){
  draftItems=draftItems.filter(function(it){ return itemKey(it)!==String(key); });
  renderEditItems();
}
function setDraftProduct(key,value){
  var it=draftItems.find(function(item){ return itemKey(item)===String(key); });
  if(!it) return;
  var match=offers.find(function(o){ return String(o.id)===String(value); });
  if(match){ it.manual=false; it.idx=match.productIndex; it.offerId=match.id; delete it.name; delete it.price; delete it.stockSource; }
}
function setDraftStockProduct(key,stockName){
  var it=draftItems.find(function(item){ return itemKey(item)===String(key); });
  var stock=findStock(stockName);
  if(!it||!stock) return;
  it.manual=true;
  it.stockSource=true;
  it.name=stock[0];
  it.price=(window.stockUnitPrices&&window.stockUnitPrices[stock[0]])||0;
  delete it.offerId;
  delete it.idx;
}
function renderOfferOptions(key,value){
  var row=document.querySelector('.edit-item[data-key="'+key+'"]');
  if(!row) return;
  var box=row.querySelector('.offer-options');
  var options=productSuggestions(value);
  if(searchKey(value).length<3||options.length===0){ box.innerHTML=''; return; }
  box.innerHTML=options.slice(0,10).map(function(o){
    if(o.type==='stock') return '<button type="button" class="stock-choice" data-key="'+key+'" data-stockname="'+o.stockName+'">'+o.label+'</button>';
    return '<button type="button" class="offer-choice" data-key="'+key+'" data-offerid="'+o.offerId+'">'+o.label+'</button>';
  }).join('');
}
function updateDraftManual(key,field,value){
  var it=draftItems.find(function(item){ return itemKey(item)===String(key); });
  if(!it) return;
  if(field==='name'){
    it.manual=true;
    if(!it.manualId) it.manualId=Date.now()+'-'+Math.random().toString(16).slice(2);
    delete it.offerId; delete it.idx; delete it.stockSource;
    it.name=value;
    renderOfferOptions(key,value);
  }
  if(field==='price') it.price=parseMoney(value)||0;
  if(field==='dose') it.dose=parseDecimal(value);
  if(field!=='name') updateEditCalculations();
}
function updateEditCalculations(){
  var culture=currentEditorCulture();
  draftItems.forEach(function(it){
    var row=document.querySelector('.edit-item[data-key="'+itemKey(it)+'"]');
    if(!row) return;
    var cost=it.dose*itemPrice(it);
    var costBox=row.querySelector('.edit-cost');
    if(!costBox) return;
    costBox.querySelector('span').textContent=itemPriceSource(it);
    costBox.querySelector('strong').textContent=fmt(cost)+'/ha';
    costBox.querySelector('small').textContent=formatSacks(cost,culture);
  });
  var total=draftItems.reduce(function(sum,it){ return sum+it.dose*itemPrice(it); },0);
  document.getElementById('editapptotal').textContent=fmt(total)+'/ha';
  document.getElementById('editappsc').textContent=formatSacks(total,culture);
}
function renderEditItems(){
  var box=document.getElementById('edititems');
  if(!box) return;
  box.innerHTML=draftItems.map(function(it){
    var key=itemKey(it);
    var offer=it.offerId!==undefined?offers[it.offerId]:null;
    var nameValue=it.manual?(it.name||''):(offer?offer.offeredName:(products[it.idx]?products[it.idx].name:''));
    var priceValue=it.manual?(it.price?fmtS(it.price):''):'';
    var cost=it.dose*itemPrice(it);
    return '<div class="edit-item" data-key="'+key+'">'+
      '<div class="product-field">'+
        '<label>Produto<input class="edit-product-name" data-key="'+key+'" value="'+nameValue+'" placeholder="Digite 3 letras do produto"></label>'+
        '<div class="offer-options" data-key="'+key+'"></div>'+
      '</div>'+
      '<label>Dose L ou kg/ha<input class="edit-dose" data-key="'+key+'" inputmode="decimal" value="'+(it.dose?fmtS(it.dose):'')+'" placeholder="Ex: 0,60"></label>'+
      '<label>Preço<input class="edit-price" data-key="'+key+'" inputmode="decimal" value="'+priceValue+'" placeholder="'+itemPriceSource(it)+'" '+(it.manual?'':'disabled')+'></label>'+
      '<div class="edit-cost"><span>'+itemPriceSource(it)+'</span><strong>'+fmt(cost)+'/ha</strong><small>'+formatSacks(cost,currentEditorCulture())+'</small></div>'+
      '<button class="remove-edit-item" data-key="'+key+'" type="button">×</button>'+
    '</div>';
  }).join('');
  updateEditCalculations();
}
function saveApplicationEditor(){
  document.querySelectorAll('.edit-item').forEach(function(row){
    var key=row.dataset.key;
    var it=draftItems.find(function(item){ return itemKey(item)===String(key); });
    if(!it) return;
    if(it.manual){ it.name=row.querySelector('.edit-product-name').value.trim(); it.price=parseMoney(row.querySelector('.edit-price').value)||0; }
    it.dose=parseDecimal(row.querySelector('.edit-dose').value);
  });
  var name=document.getElementById('editappname').value.trim()||document.getElementById('editapptype').textContent;
  var type=document.getElementById('editapptype').textContent;
  var cultEl=document.getElementById('editappcultura');
  var newCultureEl=document.getElementById('newculturename');
  var cultura=newCultureEl&&newCultureEl.value.trim()?newCultureEl.value.trim():(cultEl?cultEl.value:'');
  var knownCulture=cultureNames().find(function(name){ return searchKey(name)===searchKey(cultura); });
  if(knownCulture) cultura=knownCulture;
  var hectares=parseDecimal(document.getElementById('editapphectares').value);
  var notes=document.getElementById('editappnotes').value.trim();
  draftItems=draftItems.filter(function(it){ return itemName(it).trim(); });
  if(editingAppId){
    var existing=apps.find(function(a){ return a.id===editingAppId; });
    existing.name=name; existing.type=type; existing.cultura=cultura; existing.hectares=hectares; existing.items=draftItems; existing.notes=notes;
  } else {
    var sf=activeSafra();
    apps.forEach(function(a){ a.active=false; });
    apps.push({id:nextAppId++,safraId:sf?sf.id:1,name:name,type:type,cultura:cultura,hectares:hectares,items:draftItems,active:true,compare:false,notes:notes});
  }
  document.getElementById('appeditdialog').close();
  saveState(); renderSackPrices(); renderApps(); renderPurchases();
}
function removeFromApp(appId,key){
  var a=apps.find(function(x){ return x.id===appId; });
  a.items=a.items.filter(function(it){ return itemKey(it)!==String(key); });
  saveState(); renderApps();
}
function appCost(a){
  var total=0;
  a.items.forEach(function(it){ total+=it.dose*itemPrice(it); });
  return total;
}

function culturaBadge(cultura){
  if(!cultura) return '';
  var cls={Soja:'c-soja',Canola:'c-canola',Milho:'c-milho',Trigo:'c-trigo'}[cultura]||'c-outro';
  return '<span class="cultura-badge '+cls+'">'+cultura+'</span>';
}

function renderApps(){
  var row=document.getElementById('appsrow');
  row.innerHTML='';
  var sf=activeSafra();
  renderCulturaFilter();
  var visibleApps=(sf?apps.filter(function(a){ return a.safraId===sf.id; }):apps)
    .filter(function(a){ return culturaFilter===null||a.cultura===culturaFilter; })
    .filter(function(a){
      return !simulationProductFilter||a.items.some(function(it){
        return searchKey(itemName(it))===searchKey(simulationProductFilter);
      });
    });
  if(visibleApps.length===0){
    row.innerHTML='<p style="font-size:13px;color:var(--text-tertiary);margin:12px 4px;">'+
      (simulationProductFilter?'Nenhuma aplicação contém '+simulationProductFilter+'.':'Nenhuma aplicação nesta safra. Clique + para criar.')+
      '</p>';
    updateCompareBanner(); return;
  }

  visibleApps.forEach(function(a){
    var card=document.createElement('div');
    card.className='appcard'+(a.active?' active':'');
    card.dataset.appid=a.id;
    var total=appCost(a);
    var itemsHtml=a.items.map(function(it){
      return '<li>'+itemName(it)+'</li>';
    }).join('');
    card.innerHTML=
      '<div class="apphead" data-appid="'+a.id+'">'+
        '<div class="app-title-block">'+
          culturaBadge(a.cultura)+
          '<strong class="app-name">'+a.name+'</strong>'+
          '<span class="app-area">'+(effectiveAppHectares(a)>0?fmtS(effectiveAppHectares(a))+' ha'+(Number(a.hectares)>0?' nesta aplicacao':' da cultura'):'Area nao informada')+'</span>'+
        '</div>'+
        '<input type="checkbox" class="comparecheck" data-appid="'+a.id+'" '+(a.compare?'checked':'')+' title="Marcar para comparar">'+
      '</div>'+
      '<div class="app-cost-highlight">'+
        '<div><span>Custo por hectare</span><strong>'+fmt(total)+'/ha</strong></div>'+
        '<div><span>'+sackPriceLabel(a.cultura)+'</span><strong>'+formatSacks(total,a.cultura)+'</strong></div>'+
      '</div>'+
      (itemsHtml?'<ul class="app-product-list">'+itemsHtml+'</ul>':'<p class="app-empty-products">Sem produtos</p>');
    row.appendChild(card);
  });
  updateCompareBanner();
  renderPurchases();
}

function compareCard(app){
  var card=document.createElement('div');
  card.className='compare-card';
  var total=appCost(app);
  var rows=app.items.map(function(it){
    var cost=it.dose*itemPrice(it);
    return '<div><span>'+itemName(it)+'</span><strong>'+fmt(cost)+'/ha</strong><small>'+formatSacks(cost,app.cultura)+'</small></div>';
  }).join('');
  card.innerHTML=culturaBadge(app.cultura)+'<h3>'+app.name+'</h3>'+
    '<div class="compare-total"><div><span>Custo por hectare</span><strong>'+fmt(total)+'/ha</strong></div>'+
    '<div><span>Em sacas</span><strong>'+formatSacks(total,app.cultura)+'</strong></div></div>'+
    '<div class="compare-items">'+(rows||'Sem produtos')+'</div>';
  return card;
}

// BUG FIX: função única (estava duplicada, a segunda sobrescrevia a primeira)
function updateCompareBanner(){
  var sf=activeSafra();
  var selected=apps.filter(function(a){ return a.compare&&(!sf||a.safraId===sf.id); });
  var banner=document.getElementById('comparebanner');
  var compareCards=document.getElementById('comparecards');
  var status=document.getElementById('comparestatus');
  if(compareCards) compareCards.innerHTML='';
  if(selected.length===2){
    var t0=appCost(selected[0]),t1=appCost(selected[1]);
    var diff=Math.abs(t0-t1);
    var cheaper=t0<t1?selected[0].name:selected[1].name;
    banner.style.display='block';
    banner.textContent=selected[0].name+': '+fmt(t0)+'/ha vs '+selected[1].name+': '+fmt(t1)+'/ha — '+cheaper+' é mais barata por '+fmt(diff)+'/ha';
    if(status) status.textContent='2 aplicacoes selecionadas';
    if(compareCards){ compareCards.appendChild(compareCard(selected[0])); compareCards.appendChild(compareCard(selected[1])); }
  } else {
    banner.style.display='none';
    if(status) status.textContent=selected.length===1?'Selecione mais uma aplicacao':'Selecione duas aplicacoes acima';
    if(compareCards){
      compareCards.innerHTML='<div class="compare-empty">'+
        (selected.length===1?'Uma aplicacao selecionada. Marque mais uma para comparar lado a lado.':'Marque a caixa de duas aplicacoes para comparar custos e produtos.')+
        '</div>';
    }
  }
}

// ── NECESSIDADE DE COMPRA ───────────────────────────────────────────────────
var stockAliases={
  odin:'odin430sc',
  odin430:'odin430sc',
  match:'matchec',
  unizeb:'unizebgold',
  brilhante:'brilhantebr',
  vertimec:'vertimec84',
  modus:'moddus',
  topik:'topic240ec',
  zetamax:'zethamaxx',
  zethamax:'zethamaxx',
  zappqi:'zappqi620',
  zapqi500:'zappqi620',
  heat350gr:'heat',
  ally40gr:'ally'
};

function stockProductKey(name){
  var key=searchKey(name);
  return stockAliases[key]||key;
}

function findStock(name){
  var wanted=stockProductKey(name);
  return (window.stockItems||[]).find(function(row){ return stockProductKey(row[0])===wanted; })||null;
}

function setSelectOptions(select,items,allLabel,preferred){
  if(!select) return;
  var current=select.dataset.ready==='1'?select.value:(preferred||'');
  select.innerHTML='';
  var all=document.createElement('option');
  all.value='';
  all.textContent=allLabel;
  select.appendChild(all);
  items.forEach(function(item){
    var option=document.createElement('option');
    option.value=String(item.value);
    option.textContent=item.label;
    select.appendChild(option);
  });
  if(Array.from(select.options).some(function(o){ return o.value===String(current); })) select.value=String(current);
  select.dataset.ready='1';
}

function renderPurchaseFilters(){
  var sfSelect=document.getElementById('purchase-safra-filter');
  var cultureSelect=document.getElementById('purchase-culture-filter');
  var supplierSelect=document.getElementById('purchase-supplier-filter');
  var sf=activeSafra();
  setSelectOptions(sfSelect,safras.map(function(s){ return {value:s.id,label:s.name}; }),'Todas as safras',sf?sf.id:'');

  var cultures=[];
  var suppliersList=[];
  apps.forEach(function(app){
    if(app.cultura&&cultures.indexOf(app.cultura)===-1) cultures.push(app.cultura);
    app.items.forEach(function(it){
      var supplier=itemSupplier(it);
      if(suppliersList.indexOf(supplier)===-1) suppliersList.push(supplier);
    });
  });
  setSelectOptions(cultureSelect,cultures.sort().map(function(c){ return {value:c,label:c}; }),'Todas as culturas','');
  setSelectOptions(supplierSelect,suppliersList.sort().map(function(s){ return {value:s,label:s}; }),'Todos os fornecedores','');
}

function purchaseNeeds(){
  var sfValue=document.getElementById('purchase-safra-filter').value;
  var cultureValue=document.getElementById('purchase-culture-filter').value;
  var grouped={};
  var applicationsWithoutArea=0;

  apps.forEach(function(app){
    if(sfValue&&String(app.safraId)!==sfValue) return;
    if(cultureValue&&app.cultura!==cultureValue) return;
    var hectares=effectiveAppHectares(app);
    if(hectares<=0){
      if(app.items.length) applicationsWithoutArea++;
      return;
    }
    app.items.forEach(function(it){
      var supplier=itemSupplier(it);
      var name=itemName(it);
      var key=stockProductKey(name);
      if(!grouped[key]){
        grouped[key]={name:name,required:0,plannedValue:0,hasPrice:false,missingPrice:false,usedStockCost:false,cultures:[],suppliers:[],applications:[],bySupplier:{},stock:findStock(name)};
      }
      var row=grouped[key];
      var required=(Number(it.dose)||0)*hectares;
      var price=itemPrice(it);
      var usedStockCost=false;
      // fallback: se não há preço na simulação, usa custo médio do estoque
      if(!price && window.stockUnitPrices){
        var stockRow=findStock(name);
        if(stockRow){
          var stockAvg=(window.stockUnitPrices[stockRow[0]])||0;
          if(stockAvg>0){ price=stockAvg; usedStockCost=true; }
        }
      }
      if(!row.bySupplier[supplier]){
        row.bySupplier[supplier]={required:0,plannedValue:0,hasPrice:false,missingPrice:false,cultures:[],applications:[]};
      }
      var supplierPart=row.bySupplier[supplier];
      row.required+=required;
      row.plannedValue+=required*price;
      if(price>0){ row.hasPrice=true; if(usedStockCost) row.usedStockCost=true; }
      else if(required>0) row.missingPrice=true;
      supplierPart.required+=required;
      supplierPart.plannedValue+=required*price;
      if(price>0) supplierPart.hasPrice=true;
      else if(required>0) supplierPart.missingPrice=true;
      if(row.cultures.indexOf(app.cultura)===-1) row.cultures.push(app.cultura);
      if(row.suppliers.indexOf(supplier)===-1) row.suppliers.push(supplier);
      if(row.applications.indexOf(app.name)===-1) row.applications.push(app.name);
      if(supplierPart.cultures.indexOf(app.cultura)===-1) supplierPart.cultures.push(app.cultura);
      if(supplierPart.applications.indexOf(app.name)===-1) supplierPart.applications.push(app.name);
    });
  });

  var rows=Object.keys(grouped).map(function(key){
    var row=grouped[key];
    row.stockTotal=row.stock?Number(row.stock[2])||0:0;
    row.unit=row.stock?row.stock[1]:'L ou kg';
    row.toBuy=Math.max(0,row.required-row.stockTotal);
    row.unitPrice=row.required>0?row.plannedValue/row.required:0;
    row.hasPrice=row.hasPrice&&!row.missingPrice;
    row.purchaseValue=row.toBuy*row.unitPrice;
    row.stockFound=!!row.stock;
    return row;
  }).sort(function(a,b){
    var alertA=(!a.stockFound&&!a.hasPrice)?2:(!a.stockFound||!a.hasPrice?1:0);
    var alertB=(!b.stockFound&&!b.hasPrice)?2:(!b.stockFound||!b.hasPrice?1:0);
    return alertB-alertA||b.toBuy-a.toBuy||a.name.localeCompare(b.name);
  });
  return {rows:rows,applicationsWithoutArea:applicationsWithoutArea};
}

function purchaseRowsForSupplier(rows,supplier){
  if(!supplier) return rows;
  return rows.filter(function(row){ return row.bySupplier[supplier]; }).map(function(row){
    var part=row.bySupplier[supplier];
    var share=row.required>0?part.required/row.required:0;
    var usableStock=Math.min(row.stockTotal,row.required)*share;
    return {
      name:row.name,
      required:part.required,
      plannedValue:part.plannedValue,
      cultures:part.cultures,
      suppliers:[supplier],
      applications:part.applications,
      stock:row.stock,
      stockFound:row.stockFound,
      hasPrice:part.hasPrice&&!part.missingPrice,
      stockTotal:usableStock,
      fullStockTotal:row.stockTotal,
      unit:row.unit,
      toBuy:Math.max(0,part.required-usableStock),
      unitPrice:part.required>0?part.plannedValue/part.required:0,
      purchaseValue:Math.max(0,part.required-usableStock)*(part.required>0?part.plannedValue/part.required:0)
    };
  }).sort(function(a,b){
    var alertA=(!a.stockFound&&!a.hasPrice)?2:(!a.stockFound||!a.hasPrice?1:0);
    var alertB=(!b.stockFound&&!b.hasPrice)?2:(!b.stockFound||!b.hasPrice?1:0);
    return alertB-alertA||b.toBuy-a.toBuy||a.name.localeCompare(b.name);
  });
}

function filterPurchaseRows(rows){
  var supplierValue=document.getElementById('purchase-supplier-filter').value;
  var situation=document.getElementById('purchase-situation-filter').value;
  var missingOnly=document.getElementById('purchase-missing-only').checked;
  var filtered=purchaseRowsForSupplier(rows,supplierValue);
  if(missingOnly) filtered=filtered.filter(function(r){ return r.toBuy>0; });
  if(situation==='buy') filtered=filtered.filter(function(r){ return r.toBuy>0; });
  if(situation==='sufficient') filtered=filtered.filter(function(r){
    return r.required>0&&r.stockFound&&r.toBuy<=0;
  });
  if(situation==='stock-missing') filtered=filtered.filter(function(r){ return !r.stockFound; });
  if(situation==='price-missing') filtered=filtered.filter(function(r){ return !r.hasPrice; });
  if(situation==='critical') filtered=filtered.filter(function(r){ return !r.stockFound&&!r.hasPrice; });
  return filtered;
}

function findMarketData(name){
  var key=searchKey(name);
  return (window.marketData||[]).find(function(m){ return searchKey(m.name)===key; })||null;
}

function marketMomentCell(quotePrice, md){
  if(!md||(!md.aegro&&!md.best)) return {label:'Sem dados',color:'#aaa',reason:'Produto sem histórico no Aegro.'};
  var trend=md.trend||'';
  var isAlta=trend.toLowerCase().indexOf('alta')>=0;
  var isQueda=trend.toLowerCase().indexOf('queda')>=0;
  var reason='';
  var label='';
  var color='';

  if(quotePrice&&md.best&&quotePrice<=md.best){
    label='Ótimo momento';
    color='#1a7a3c';
    reason='Cotação ('+fmt(quotePrice)+') igual ou abaixo do melhor preço histórico Aegro ('+fmt(md.best)+', '+md.bestMonth+').';
  } else if(quotePrice&&md.aegro&&quotePrice<=md.aegro*0.97){
    label='Bom momento';
    color='#27ae60';
    reason='Cotação ('+fmt(quotePrice)+') pelo menos 3% abaixo do Aegro atual ('+fmt(md.aegro)+').';
  } else if(isAlta&&quotePrice&&md.aegro&&quotePrice>=md.aegro*0.98){
    label='Comprar agora';
    color='#c0392b';
    reason='Tendência de alta ('+trend+'). Cotação próxima ao Aegro atual ('+fmt(md.aegro)+'). Aguardar pode encarecer.';
  } else if(isQueda&&quotePrice&&md.best&&quotePrice>md.best*1.05){
    label='Aguardar';
    color='#e67e22';
    reason='Tendência de queda ('+trend+'). Melhor preço histórico foi '+fmt(md.best)+' ('+md.bestMonth+'). Vale esperar.';
  } else if(!quotePrice){
    label='Sem cotação';
    color:'#aaa';
    reason='Informe o preço na simulação para análise.';
  } else {
    label='Mercado estável';
    color='#2980b9';
    reason='Tendência: '+trend+'. Aegro atual: '+(md.aegro?fmt(md.aegro):'—')+'. Melhor histórico: '+(md.best?fmt(md.best)+' ('+md.bestMonth+')':'—')+'.';
  }
  return {label:label,color:color,reason:reason};
}

function marketHistoryCell(quotePrice, md, stockAvgPrice){
  var lines=[];
  if(md&&md.best) lines.push('Melhor Aegro: '+fmt(md.best)+' ('+md.bestMonth+')');
  if(stockAvgPrice>0) lines.push('Custo médio estoque: '+fmt(stockAvgPrice));
  if(quotePrice>0){
    if(md&&md.best){
      var diffBest=((quotePrice-md.best)/md.best*100);
      lines.push('Vs. melhor Aegro: '+(diffBest>0?'+':'')+diffBest.toFixed(1)+'%');
    }
    if(stockAvgPrice>0){
      var diffStock=((quotePrice-stockAvgPrice)/stockAvgPrice*100);
      lines.push('Vs. estoque: '+(diffStock>0?'+':'')+diffStock.toFixed(1)+'%');
    }
  }
  return lines.length?lines.join(' | '):'Sem referência histórica';
}

function renderPurchases(){
  var body=document.getElementById('purchase-table-body');
  if(!body) return;
  renderPurchaseFilters();
  var result=purchaseNeeds();
  var supplierValue=document.getElementById('purchase-supplier-filter').value;
  var rows=filterPurchaseRows(result.rows);
  body.innerHTML='';

  rows.forEach(function(row){
    var tr=document.createElement('tr');
    var critical=!row.stockFound&&!row.hasPrice;
    var stockMissing=!row.stockFound;
    var priceMissing=!row.hasPrice;
    if(critical) tr.className='purchase-row-critical';
    else if(stockMissing||priceMissing) tr.className='purchase-row-alert';
    var locations=row.stock?row.stock[3].map(function(loc){ return loc[0]+': '+fmtS(loc[1])+' '+row.unit; }).join(' + '):'NÃO ENCONTRADO NO ESTOQUE. Necessidade integral de compra: '+fmtS(row.toBuy)+' '+row.unit;
    if(supplierValue&&row.fullStockTotal!==undefined) locations='Estoque total do produto: '+fmtS(row.fullStockTotal)+' '+row.unit+'. Parcela considerada neste fornecedor. '+locations;
    var statusText='Estoque suficiente';
    var statusClass='status-ok';
    if(row.required<=0){
      statusText='Dose ou quantidade não informada';
      statusClass='status-alert';
    } else if(critical){
      statusText='SEM ESTOQUE E SEM COTAÇÃO. Comprar '+fmtS(row.toBuy)+' '+row.unit;
      statusClass='status-critical';
    } else if(stockMissing){
      statusText='NÃO ENCONTRADO NO ESTOQUE. Comprar '+fmtS(row.toBuy)+' '+row.unit;
      statusClass='status-alert';
    } else if(priceMissing){
      statusText='SEM PREÇO/COTAÇÃO. Comprar '+fmtS(row.toBuy)+' '+row.unit;
      statusClass='status-alert';
    } else if(row.toBuy>0){
      statusText='Comprar '+fmtS(row.toBuy)+' '+row.unit;
      statusClass='status-buy';
    }
    var cells=[
      {text:row.name,small:locations},
      {text:row.cultures.join(', ')||'—'},
      {text:row.suppliers.join(', ')||'Sem fornecedor'},
      {text:fmtS(row.required)+' '+row.unit},
      {text:fmtS(row.stockTotal)+' '+row.unit},
      {text:fmtS(row.toBuy)+' '+row.unit,cls:row.toBuy>0?'purchase-required':'purchase-zero'},
      {text:priceMissing?'Sem cotação':fmt(row.unitPrice),cls:priceMissing?'purchase-required':'',note:(!priceMissing&&row.usedStockCost)?'custo médio':''},
      {text:priceMissing?'Não calculado':fmt(row.plannedValue),cls:priceMissing?'purchase-required':''},
      {text:priceMissing?'Não calculado':fmt(row.purchaseValue),cls:row.toBuy>0?'purchase-required':'purchase-zero'},
      {text:statusText,cls:statusClass}
    ];
    cells.forEach(function(cell){
      var td=document.createElement('td');
      if(cell.cls) td.className=cell.cls;
      var strong=document.createElement('strong');
      strong.textContent=cell.text;
      td.appendChild(strong);
      if(cell.small){
        var small=document.createElement('small');
        small.textContent=cell.small;
        td.appendChild(small);
      }
      if(cell.note){
        var note=document.createElement('small');
        note.textContent=cell.note;
        note.style.cssText='display:block;color:#888;font-style:italic;font-size:0.78em;';
        td.appendChild(note);
      }
      tr.appendChild(td);
    });

    // Colunas de análise de mercado
    var md=findMarketData(row.name);
    var stockAvg=(window.stockUnitPrices&&row.stock)?window.stockUnitPrices[row.stock[0]]||0:0;
    var quotePrice=row.hasPrice?row.unitPrice:0;

    var moment=marketMomentCell(quotePrice,md);
    var tdMoment=document.createElement('td');
    tdMoment.style.cssText='min-width:140px;vertical-align:top;';
    var momentStrong=document.createElement('strong');
    momentStrong.textContent=moment.label;
    momentStrong.style.cssText='display:block;color:'+moment.color+';font-size:0.85em;';
    var momentSmall=document.createElement('small');
    momentSmall.textContent=moment.reason;
    momentSmall.style.cssText='display:block;color:#555;font-size:0.78em;line-height:1.35;margin-top:3px;';
    tdMoment.appendChild(momentStrong);
    tdMoment.appendChild(momentSmall);
    tr.appendChild(tdMoment);

    var histText=marketHistoryCell(quotePrice,md,stockAvg);
    var tdHist=document.createElement('td');
    tdHist.style.cssText='min-width:160px;vertical-align:top;font-size:0.82em;color:#444;line-height:1.6;';
    histText.split(' | ').forEach(function(line){
      var d=document.createElement('div');
      // destaca linhas de comparação com cor
      if(line.indexOf('Vs.')>=0){
        var pct=parseFloat(line.replace(/[^0-9.\-+]/g,''));
        d.style.color=pct>5?'#c0392b':pct<-5?'#1a7a3c':'#555';
        d.style.fontWeight='600';
      }
      d.textContent=line;
      tdHist.appendChild(d);
    });
    tr.appendChild(tdHist);

    body.appendChild(tr);
  });

  if(!rows.length){
    body.innerHTML='<tr><td colspan="12" class="purchase-empty">Nenhum produto encontrado para os filtros selecionados.</td></tr>';
  }
  var missing=rows.filter(function(r){ return r.toBuy>0; });
  var sufficient=rows.filter(function(r){ return r.required>0&&r.stockFound&&r.toBuy<=0; });
  var stockNotFound=rows.filter(function(r){ return !r.stockFound; });
  var priceNotFound=rows.filter(function(r){ return !r.hasPrice; });
  var plannedTotal=rows.reduce(function(sum,r){ return sum+r.plannedValue; },0);
  var purchaseTotal=rows.reduce(function(sum,r){ return sum+r.purchaseValue; },0);
  var summary=document.getElementById('purchase-summary');
  summary.innerHTML='<div><span>Produtos planejados</span><strong>'+rows.length+'</strong></div>'+
    '<div><span>Com estoque suficiente</span><strong>'+sufficient.length+'</strong></div>'+
    '<div><span>Precisam de compra</span><strong>'+missing.length+'</strong></div>'+
    '<div class="summary-alert"><span>Não encontrados no estoque</span><strong>'+stockNotFound.length+'</strong></div>'+
    '<div class="summary-alert"><span>Sem preço/cotação</span><strong>'+priceNotFound.length+'</strong></div>'+
    '<div><span>Valor total planejado</span><strong>'+fmt(plannedTotal)+'</strong></div>'+
    '<div><span>Valor estimado da compra</span><strong>'+fmt(purchaseTotal)+'</strong></div>';
  document.getElementById('purchase-warning').textContent=result.applicationsWithoutArea?
    result.applicationsWithoutArea+' aplicação(ões) não entraram no cálculo porque os hectares planejados ainda não foram informados.':
    (stockNotFound.length||priceNotFound.length?'Atenção: existem produtos sem estoque cadastrado ou sem preço. Eles estão destacados em vermelho.':'Estoque consolidado da fazenda e dos fornecedores.');
}

function escapeReportText(value){
  return String(value===undefined||value===null?'':value)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function purchaseReportData(){
  var result=purchaseNeeds();
  var supplierValue=document.getElementById('purchase-supplier-filter').value;
  var rows=filterPurchaseRows(result.rows).filter(function(r){ return r.toBuy>0; });
  if(!rows.length){
    alert('Não há produtos com necessidade de compra para os filtros selecionados.');
    return null;
  }
  var sfSelect=document.getElementById('purchase-safra-filter');
  var cultureSelect=document.getElementById('purchase-culture-filter');
  return {
    supplier:supplierValue||'Todos os fornecedores / ainda não definidos',
    supplierSelected:!!supplierValue,
    safra:sfSelect.options[sfSelect.selectedIndex]?sfSelect.options[sfSelect.selectedIndex].text:'Todas as safras',
    culture:cultureSelect.options[cultureSelect.selectedIndex]?cultureSelect.options[cultureSelect.selectedIndex].text:'Todas as culturas',
    date:new Date().toLocaleDateString('pt-BR'),
    rows:rows,
    total:rows.reduce(function(sum,r){ return sum+(r.hasPrice?r.purchaseValue:0); },0)
  };
}

function purchaseReportTable(data){
  var rows=data.rows.map(function(r){
    return '<tr>'+
      '<td>'+escapeReportText(r.name)+'</td>'+
      '<td>'+escapeReportText(r.cultures.join(', '))+'</td>'+
      '<td>'+escapeReportText(r.suppliers.join(', ')||'Não definido')+'</td>'+
      '<td class="number">'+escapeReportText(fmtS(r.toBuy))+'</td>'+
      '<td>'+escapeReportText(r.unit)+'</td>'+
      '<td class="number">'+escapeReportText(r.hasPrice?fmt(r.unitPrice):'Sem cotação')+'</td>'+
      '<td class="number">'+escapeReportText(r.hasPrice?fmt(r.purchaseValue):'Não calculado')+'</td>'+
    '</tr>';
  }).join('');
  return '<table><thead><tr><th>Produto</th><th>Cultura</th><th>Fornecedor</th><th>Quantidade</th><th>Unidade</th><th>Preço unitário</th><th>Valor estimado</th></tr></thead><tbody>'+
    rows+'</tbody><tfoot><tr><td colspan="6">Total estimado</td><td class="number">'+escapeReportText(fmt(data.total))+'</td></tr></tfoot></table>';
}

function purchaseReportHtml(data,forPrint){
  var logoUrl=new URL('logo-budapest.png',window.location.href).href;
  return '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Solicitação de compra - '+escapeReportText(data.supplier)+'</title>'+
    '<style>'+
      '@page{size:A4 landscape;margin:14mm}*{box-sizing:border-box}body{font-family:Arial,sans-serif;color:#26332c;margin:0}'+
      '.head{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #11843f;padding-bottom:12px;margin-bottom:16px}'+
      '.head img{width:76px;height:58px;object-fit:contain}.eyebrow{color:#11843f;font-size:11px;font-weight:bold;text-transform:uppercase;margin:0 0 4px}'+
      'h1{font-size:23px;margin:0 0 4px}.meta{font-size:12px;color:#5e6961}.supplier{font-size:16px;font-weight:bold;text-align:right}'+
      'table{width:100%;border-collapse:collapse;font-size:11px}th{background:#e4f4dd;color:#23570e;text-align:left}th,td{border:1px solid #cfd8cc;padding:8px;vertical-align:top}'+
      '.number{text-align:right;white-space:nowrap}tfoot td{font-weight:bold;background:#f4f7f2}.note{margin-top:14px;font-size:11px;color:#657064}'+
      (forPrint?'':'')+
    '</style></head><body>'+
      '<div class="head"><div><p class="eyebrow">Fazenda Budapest</p><h1>Solicitação de compra</h1>'+
      '<div class="meta">'+escapeReportText(data.safra)+' | '+escapeReportText(data.culture)+' | Emitido em '+escapeReportText(data.date)+'</div></div>'+
      '<div><div class="supplier">'+escapeReportText(data.supplierSelected?data.supplier:'Relatório geral de compras')+'</div><img src="'+logoUrl+'" alt="Fazenda Budapest"></div></div>'+
      purchaseReportTable(data)+
      '<p class="note">Relação gerada a partir das aplicações planejadas, descontando o estoque cadastrado na fazenda e nos fornecedores.</p>'+
    '</body></html>';
}

function exportPurchaseExcel(){
  var data=purchaseReportData();
  if(!data) return;
  var blob=new Blob(['\uFEFF'+purchaseReportHtml(data,false)],{type:'application/vnd.ms-excel;charset=utf-8'});
  var link=document.createElement('a');
  link.href=URL.createObjectURL(blob);
  link.download=data.supplierSelected?'solicitacao_compra_'+searchKey(data.supplier)+'.xls':'relatorio_geral_compras.xls';
  link.click();
  URL.revokeObjectURL(link.href);
}

function exportPurchasePdf(){
  var data=purchaseReportData();
  if(!data) return;
  var reportWindow=window.open('','_blank');
  if(!reportWindow){
    alert('O navegador bloqueou a abertura do relatório. Permita a nova janela e tente novamente.');
    return;
  }
  reportWindow.document.open();
  reportWindow.document.write(purchaseReportHtml(data,true));
  reportWindow.document.close();
  setTimeout(function(){
    reportWindow.focus();
    reportWindow.print();
  },500);
}

function exportPurchaseList(){
  var data=purchaseReportData();
  if(!data) return;
  var rows=data.rows;
  var csv=[['Produto','Cultura','Fornecedor','Quantidade para comprar','Unidade','Preco unitario','Valor estimado']];
  rows.forEach(function(r){
    csv.push([r.name,r.cultures.join(', '),r.suppliers.join(', ')||'Não definido',fmtS(r.toBuy),r.unit,r.hasPrice?fmtS(r.unitPrice):'Sem cotação',r.hasPrice?fmtS(r.purchaseValue):'Não calculado']);
  });
  var content='\uFEFF'+csv.map(function(row){
    return row.map(function(value){ return '"'+String(value).replace(/"/g,'""')+'"'; }).join(';');
  }).join('\r\n');
  var blob=new Blob([content],{type:'text/csv;charset=utf-8'});
  var link=document.createElement('a');
  link.href=URL.createObjectURL(blob);
  link.download=data.supplierSelected?'solicitacao_compra_'+searchKey(data.supplier)+'.csv':'relatorio_geral_compras.csv';
  link.click();
  URL.revokeObjectURL(link.href);
}

// ── PERSISTÊNCIA ─────────────────────────────────────────────────────────────
var STORAGE_KEY='budapest_sim_v2';
var purchaseNotes={}; // key → {priority:'urgent'|'watch'|'wait'|'', note:''}

function saveState(){
  try {
    var winners={};
    products.forEach(function(p){ if(p.vencedor) winners[p.name+'|'+p.cat]=p.vencedor; });
    var supVis={};
    suppliers.forEach(function(s){ supVis[s.key]=s.visible; });
    localStorage.setItem(STORAGE_KEY,JSON.stringify({winners:winners,apps:apps,safras:safras,supVis:supVis,sackPrices:sackPrices,purchaseNotes:purchaseNotes}));
  } catch(e){}
}

function loadState(){
  try {
    var raw=localStorage.getItem(STORAGE_KEY);
    if(!raw) return false;
    var state=JSON.parse(raw);
    if(state.safras&&Array.isArray(state.safras)&&state.safras.length>0){
      safras=state.safras;
      nextSafraId=safras.reduce(function(max,s){ return Math.max(max,s.id+1); },1);
    }
    if(state.winners){
      products.forEach(function(p){ var w=state.winners[p.name+'|'+p.cat]; if(w) p.vencedor=w; });
    }
    if(state.apps&&Array.isArray(state.apps)){
      apps=state.apps;
      nextAppId=apps.reduce(function(max,a){ return Math.max(max,a.id+1); },1);
      // Remove referências quebradas a produtos que não existem mais
      apps.forEach(function(a){
        a.items=a.items.filter(function(it){
          if(it.manual) return true;
          if(it.offerId!==undefined) return offers[it.offerId]!==undefined;
          return products[it.idx]!==undefined;
        });
      });
    }
    if(state.supVis){
      suppliers.forEach(function(s){ if(state.supVis[s.key]!==undefined) s.visible=state.supVis[s.key]; });
    }
    if(state.sackPrices&&typeof state.sackPrices==='object') sackPrices=state.sackPrices;
    if(state.purchaseNotes&&typeof state.purchaseNotes==='object') purchaseNotes=state.purchaseNotes;
    return true;
  } catch(e){ return false; }
}

function correctCurrentSafraName(){
  var changed=false;
  safras.forEach(function(s){
    var oldName=String(s.name||'').trim().toLowerCase();
    if(oldName==='safra 2025/26'||oldName==='safra 2025-26'||oldName==='safra 2025/2026'||oldName==='safra 25/26'||oldName==='safra 25-26'){
      s.name='Safra 26-27';
      changed=true;
    }
  });
  return changed;
}

// ── APLICAÇÕES PRÉ-CARREGADAS (do planejamento da Fazenda Budapest) ───────────
function initDefaultApps(){
  var sf=safras[0].id;

  // Resolve índice de produto por nome (seguro mesmo com produtos dinâmicos)
  function ref(name,dose){
    var idx=products.findIndex(function(p){ return searchKey(p.name)===searchKey(name); });
    if(idx>=0) return {idx:idx,dose:dose};
    return {manual:true,manualId:'init-'+searchKey(name),name:name,price:0,dose:dose};
  }
  function man(name,dose){ return {manual:true,manualId:'init-'+searchKey(name),name:name,price:0,dose:dose}; }

  var defaultApps=[
    // ── SOJA ──────────────────────────────────────────────────────────────
    {safraId:sf,cultura:'Soja',name:'1ª Aplicação — V3-V4',type:'Aplicação',
      notes:'Elatus ou Vessarya conforme decisão de custo. Verdavis (pega tudo) ou outro inseticida / 50mL Vertimec.',
      items:[ref('Elatus',0.6),ref('Odin',0.25),ref('MATCH',0.25),ref('Verdavis',0.25)]},

    {safraId:sf,cultura:'Soja',name:'2ª Aplicação',type:'Aplicação',
      notes:'Fox Ultra 500mL. Unizeb Gold preferência (ou Prevenil/Absolut Fix). Verdavis conforme pressão de pragas.',
      items:[ref('FOXULTRA',0.5),ref('Unizeb',1.5),ref('Verdavis',0.25)]},

    {safraId:sf,cultura:'Soja',name:'3ª Aplicação',type:'Aplicação',
      notes:'Keyra só se houver problema grave de ferrugem. Inseticida: ver o que fica mais barato — Zeus 500mL, Expedition 250mL ou Connect 1L.',
      items:[ref('BELYAN',0.6),ref('Unizeb',1.5),ref('KEYRA',0.375),ref('Expedition',0.25)]},

    {safraId:sf,cultura:'Soja',name:'4ª Aplicação',type:'Aplicação',
      notes:'Perito ou outro acefato barato.',
      items:[ref('VESSARYA',0.6),ref('KEYRA',0.375),ref('Perito',1)]},

    {safraId:sf,cultura:'Soja',name:'Dessecação',type:'Preparo do solo',
      notes:'1º: Dessecar aveia com Select 1L/ha. Após 25/30 dias matar a ervilhaca. Pré-semeadura: Stone 1L + Zetha Max 250mL.',
      items:[ref('Select',1),ref('STONE',1),ref('ZETAMAX',0.25)]},

    // ── CANOLA ────────────────────────────────────────────────────────────
    {safraId:sf,cultura:'Canola',name:'Aplicação Canola',type:'Aplicação',
      notes:'Approach Power não precisa de óleo na formulação.',
      items:[man('Approach Power',0),ref('MATCH',0.25)]},

    // ── MILHO ─────────────────────────────────────────────────────────────
    {safraId:sf,cultura:'Milho',name:'Aplicação V4-V5',type:'Aplicação',
      notes:'Bacillus: ver com Débora. Unizeb ou Bravonil.',
      items:[man('Bacillus (ver com Débora)',0),ref('Miravis Duo',0.6),ref('Unizeb',1.5)]},

    {safraId:sf,cultura:'Milho',name:'Cigarrinha — Rotação',type:'Aplicação',
      notes:'Variar um inseticida em cada aplicação conforme rotação de princípio ativo.',
      items:[ref('Engeo Pleno S',0.25),ref('Verdavis',0.25),ref('Perito',1)]}
  ];

  defaultApps.forEach(function(a){
    apps.push(Object.assign({id:nextAppId++,active:false,compare:false,notes:a.notes||''},a));
  });
  if(apps.length>0) apps[0].active=true;
}

// ── INICIALIZAÇÃO ────────────────────────────────────────────────────────────
applyCotrijalLevantamento();
buildOffers();
var hadSavedState=loadState();
if(!hadSavedState) initDefaultApps();
if(correctCurrentSafraName()) saveState();
buildFilters();
renderSafras();
renderCropAreas();
renderSackPrices();
renderTable();
renderApps();
buildProductPicker();

// ── EVENTOS ──────────────────────────────────────────────────────────────────
document.getElementById('filtbtn').addEventListener('click',function(){
  var b=document.getElementById('filtbox');
  b.style.display=b.style.display==='none'?'block':'none';
});
document.getElementById('search').addEventListener('input',renderTable);
document.getElementById('exportcsvbtn').addEventListener('click',exportWinnersCSV);

document.querySelectorAll('.tab-button').forEach(function(button){
  button.addEventListener('click',function(){
    showTab(button.dataset.tab);
    if(button.dataset.tab==='purchases') renderPurchases();
  });
});

['purchase-safra-filter','purchase-culture-filter','purchase-supplier-filter','purchase-situation-filter','purchase-missing-only'].forEach(function(id){
  document.getElementById(id).addEventListener('change',renderPurchases);
});
document.getElementById('export-purchase-excel').addEventListener('click',exportPurchaseExcel);
document.getElementById('export-purchase-pdf').addEventListener('click',exportPurchasePdf);

document.getElementById('simulationproductsearch').addEventListener('input',function(e){
  if(simulationProductFilter&&searchKey(e.target.value)!==searchKey(simulationProductFilter)) simulationProductFilter=null;
  document.getElementById('clearsimulationproduct').hidden=!e.target.value;
  document.getElementById('simulationproductstatus').textContent=e.target.value.length>=3?'Selecione um produto abaixo':'Digite pelo menos 3 letras';
  renderSimulationProductSuggestions(e.target.value);
  if(!e.target.value) renderApps();
});
document.getElementById('simulationproductsuggestions').addEventListener('click',function(e){
  var button=e.target.closest('.simulation-product-choice');
  if(button) setSimulationProductFilter(button.dataset.product);
});
document.getElementById('clearsimulationproduct').addEventListener('click',function(){
  setSimulationProductFilter(null);
});

document.getElementById('togglesackprices').addEventListener('click',function(){
  var panel=document.getElementById('sackpricespanel');
  panel.hidden=!panel.hidden;
  if(!panel.hidden) renderSackPrices();
});
document.getElementById('togglecropareas').addEventListener('click',function(){
  var panel=document.getElementById('cropareaspanel');
  panel.hidden=!panel.hidden;
  if(!panel.hidden) renderCropAreas();
});
document.getElementById('cropareaspanel').addEventListener('change',function(e){
  if(!e.target.classList.contains('crop-area-input')) return;
  var sf=activeSafra();
  if(!sf) return;
  if(!sf.cropAreas) sf.cropAreas={};
  var key=searchKey(e.target.dataset.culture);
  var value=parseDecimal(e.target.value);
  if(value>0) sf.cropAreas[key]=value;
  else delete sf.cropAreas[key];
  saveState();
  renderApps();
  renderPurchases();
  if(document.getElementById('appeditdialog').open) updateEditorAreaHint();
});
document.getElementById('sackpricespanel').addEventListener('change',function(e){
  if(!e.target.classList.contains('sack-price-input')) return;
  var key=searchKey(e.target.dataset.culture);
  var value=parseMoney(e.target.value)||0;
  if(value>0) sackPrices[key]=value;
  else delete sackPrices[key];
  saveState();
  renderApps();
  if(document.getElementById('appeditdialog').open) updateEditCalculations();
});
document.getElementById('editappcultura').addEventListener('change',function(){
  updateEditCalculations();
  updateEditorAreaHint();
});
document.getElementById('newculturename').addEventListener('input',function(){
  updateEditCalculations();
  updateEditorAreaHint();
});

// BUG FIX: abre o menu de atividades (antes ia direto para 'Aplicação')
document.getElementById('openactivitybtn').addEventListener('click',openActivityMenu);
document.getElementById('closeactivitybtn').addEventListener('click',closeActivityMenu);
document.getElementById('newapplicationcultures').addEventListener('click',function(e){
  var button=e.target.closest('.culture-option');
  if(button) createApplicationForCulture(button.dataset.culture);
});
document.getElementById('quickculturebtn').addEventListener('click',function(){
  createApplicationForCulture(document.getElementById('quickculturename').value);
});
document.getElementById('quickculturename').addEventListener('keydown',function(e){
  if(e.key==='Enter'){
    e.preventDefault();
    createApplicationForCulture(e.target.value);
  }
});

document.getElementById('closeeditbtn').addEventListener('click',function(){ document.getElementById('appeditdialog').close(); });
document.getElementById('canceleditbtn').addEventListener('click',function(){ document.getElementById('appeditdialog').close(); });
document.getElementById('addedititembtn').addEventListener('click',addDraftItem);
document.getElementById('saveeditbtn').addEventListener('click',saveApplicationEditor);

// BUG FIX: confirmação antes de excluir
document.getElementById('deleteeditappbtn').addEventListener('click',function(){
  if(!editingAppId) return;
  if(!confirm('Excluir esta aplicação? Esta ação não pode ser desfeita.')) return;
  apps=apps.filter(function(a){ return a.id!==editingAppId; });
  document.getElementById('appeditdialog').close();
  saveState(); renderApps();
});

document.getElementById('addwinnerbtn').addEventListener('click',function(){
  var picker=document.getElementById('productpicker');
  if(!picker.value) return;
  addProductToApp(parseInt(picker.value));
});
document.getElementById('addmanualbtn').addEventListener('click',function(){
  var nameInput=document.getElementById('manualproductname');
  var priceInput=document.getElementById('manualproductprice');
  var name=nameInput.value.trim();
  var price=parseMoney(priceInput.value);
  if(!name){ nameInput.focus(); return; }
  if(price===null||price<0){ priceInput.focus(); return; }
  addManualProductToApp(name,price);
  nameInput.value=''; priceInput.value='';
});
document.getElementById('quoteimport').addEventListener('change',function(e){
  var file=e.target.files&&e.target.files[0];
  if(file) handleQuoteImport(file);
  e.target.value='';
});
document.getElementById('prazotoggle').addEventListener('change',function(){
  var cfg=document.getElementById('prazoconfig');
  if(cfg) cfg.style.display=this.checked?'flex':'none';
  renderApps();
});

document.body.addEventListener('change',function(e){
  if(e.target.classList.contains('supchk')){
    suppliers.find(function(x){ return x.key===e.target.dataset.key; }).visible=e.target.checked;
    saveState(); renderTable();
  }
  if(e.target.classList.contains('catchk')){
    catVisible[e.target.dataset.cat]=e.target.checked; renderTable();
  }
  if(e.target.id==='winneronly') renderTable();
  if(e.target.classList.contains('comparecheck')){
    var appid=parseInt(e.target.dataset.appid);
    var a=apps.find(function(x){ return x.id===appid; });
    var sf=activeSafra();
    var currentlyOn=apps.filter(function(x){ return x.compare&&(!sf||x.safraId===sf.id); }).length;
    if(!a.compare&&currentlyOn>=2){ e.target.checked=false; return; }
    a.compare=e.target.checked;
    updateCompareBanner();
  }
  if(e.target.classList.contains('doseinput')){
    var doseApp=apps.find(function(x){ return x.id===parseInt(e.target.dataset.appid); });
    var doseItem=doseApp.items.find(function(x){ return itemKey(x)===String(e.target.dataset.key); });
    doseItem.dose=parseDecimal(e.target.value);
    saveState(); renderApps();
  }
});

document.body.addEventListener('click',function(e){
  // Safra switch
  var safraBtnEl=e.target.closest('.safra-btn');
  if(safraBtnEl){
    safras.forEach(function(s){ s.active=s.id===parseInt(safraBtnEl.dataset.safraid); });
    culturaFilter=null;
    simulationProductFilter=null;
    document.getElementById('simulationproductsearch').value='';
    document.getElementById('clearsimulationproduct').hidden=true;
    document.getElementById('simulationproductstatus').textContent='Digite pelo menos 3 letras';
    saveState(); renderSafras(); renderCropAreas(); renderApps(); return;
  }
  // Filtro de cultura
  var cultBtnEl=e.target.closest('.cultura-filter-btn');
  if(cultBtnEl){
    culturaFilter=cultBtnEl.dataset.cultura||null;
    renderApps(); return;
  }
  // Nova safra
  if(e.target.id==='addsafrabtn'){
    var name=prompt('Nome da nova safra (ex: Safra 27-28):');
    if(!name||!name.trim()) return;
    safras.forEach(function(s){ s.active=false; });
    safras.push({id:nextSafraId++,name:name.trim(),active:true});
    saveState(); renderSafras(); renderCropAreas(); renderApps(); return;
  }
  // Editar o nome da safra selecionada
  if(e.target.id==='editsafrabtn'){
    var currentSafra=activeSafra();
    if(!currentSafra) return;
    var editedName=prompt('Editar nome da safra:',currentSafra.name);
    if(!editedName||!editedName.trim()) return;
    currentSafra.name=editedName.trim();
    saveState(); renderSafras(); renderApps(); return;
  }
  // Marcar vencedor na tabela
  if(e.target.classList.contains('winner-selected')){
    var winnerIdx=parseInt(e.target.dataset.idx);
    if(products[winnerIdx]){
      products[winnerIdx].vencedor=null;
      saveState(); renderTable(); renderApps();
    }
    return;
  }
  if(e.target.classList.contains('pricecell')){
    var idx=parseInt(e.target.dataset.idx);
    var skey=e.target.dataset.skey;
    var prod=products[idx];
    var s=suppliers.find(function(x){ return x.key===skey; });
    var cell=prod[skey];
    if(prod.vencedor&&prod.vencedor.s===s.label&&prod.vencedor.v===cell.v) prod.vencedor=null;
    else prod.vencedor={s:s.label,p:cell.p,v:cell.v};
    saveState(); renderTable(); renderApps(); return;
  }
  var appCardEl=e.target.closest('.appcard');
  if(appCardEl&&!e.target.classList.contains('comparecheck')){
    var app=apps.find(function(x){ return x.id===parseInt(appCardEl.dataset.appid); });
    if(app){ setActiveApp(app.id); openApplicationEditor(app); }
    return;
  }
  if(e.target.classList.contains('rmitem')){ removeFromApp(parseInt(e.target.dataset.appid),e.target.dataset.key); return; }
  if(e.target.classList.contains('remove-edit-item')){ removeDraftItem(e.target.dataset.key); return; }
  if(e.target.classList.contains('offer-choice')){ setDraftProduct(e.target.dataset.key,e.target.dataset.offerid); renderEditItems(); return; }
  if(e.target.classList.contains('stock-choice')){ setDraftStockProduct(e.target.dataset.key,e.target.dataset.stockname); renderEditItems(); return; }
});

document.body.addEventListener('input',function(e){
  if(e.target.classList.contains('doseinput')){
    var a=apps.find(function(x){ return x.id===parseInt(e.target.dataset.appid); });
    var it=a.items.find(function(x){ return itemKey(x)===String(e.target.dataset.key); });
    it.dose=parseDecimal(e.target.value);
  }
  if(e.target.classList.contains('notesinput')){
    apps.find(function(x){ return x.id===parseInt(e.target.dataset.appid); }).notes=e.target.value;
    saveState();
  }
  if(e.target.classList.contains('edit-product-name')) updateDraftManual(e.target.dataset.key,'name',e.target.value);
  if(e.target.classList.contains('edit-price')) updateDraftManual(e.target.dataset.key,'price',e.target.value);
  if(e.target.classList.contains('edit-dose')) updateDraftManual(e.target.dataset.key,'dose',e.target.value);
  if(e.target.id==='selicrate'||e.target.id==='prazodate') renderApps();
});

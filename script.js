const deliveryData=[
  {label:"DLV 1×24 Jam",value:1200,color:"#0808f5",className:"blue"},
  {label:"DLV 2×24 Jam",value:0,color:"#f4e600",className:"yellow"},
  {label:"DLV >2×24 Jam",value:0,color:"#f49a00",className:"orange"},
  {label:"CANCEL",value:23,color:"#ed1111",className:"red"},
  {label:"OPEN",value:0,color:"#999",className:"gray"}
];

const deliveryDetails=[
  {mobil:"A8322CN",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D015",driver:"JAKA",jam:"08:02:43",rpp:"21118052",open:2,terkirim:28,cancel:1,kasbon_dropping:500000,km_awal:150,km_akhir:225,ratio_bbm:7},
  {mobil:"B9249VCF",jenis:"L_300",kode:"D058",driver:"SOPIAN",jam:"08:03:26",rpp:"21118064",open:1,terkirim:9,cancel:0,kasbon_dropping:500000,km_awal:213,km_akhir:285,ratio_bbm:7},
  {mobil:"B9254VCF",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D057",driver:"JEFRIANUS BESA",jam:"08:07:51",rpp:"21118041",open:0,terkirim:19,cancel:0,kasbon_dropping:500000,km_awal:593,km_akhir:654,ratio_bbm:7},
  {mobil:"B9273VCF",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D056",driver:"A. YOGI",jam:"07:59:54",rpp:"21118056",open:0,terkirim:32,cancel:1,kasbon_dropping:500000,km_awal:342,km_akhir:389,ratio_bbm:7},
  {mobil:"B9308VCF",jenis:"GRANDMAX_BV",kode:"D045",driver:"M IRFAN",jam:"10:01:01",rpp:"21118006",open:0,terkirim:50,cancel:0,kasbon_dropping:500000,km_awal:123,km_akhir:159,ratio_bbm:7},
  {mobil:"B9310VCF",jenis:"GRANDMAX_BV",kode:"D046",driver:"MAULANA",jam:"08:45:29",rpp:"21118007",open:0,terkirim:59,cancel:1,kasbon_dropping:500000,km_awal:292,km_akhir:326,ratio_bbm:7},
  {mobil:"B9312VCF",jenis:"L_300",kode:"D009",driver:"MUHAEMIN",jam:"08:31:50",rpp:"21117994",open:0,terkirim:42,cancel:0,kasbon_dropping:500000,km_awal:421,km_akhir:451,ratio_bbm:7},
  {mobil:"B9413VDB",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D060",driver:"YANTO MISA",jam:"18:23:50",rpp:"21118786",open:0,terkirim:8,cancel:0,kasbon_dropping:500000,km_awal:654,km_akhir:700,ratio_bbm:7},
  {mobil:"B9688VCC",jenis:"CD_ENGKEL_FE71",kode:"D003",driver:"MUHAMMAD ALFI HASA",jam:"08:04:54",rpp:"21118042",open:0,terkirim:18,cancel:0,kasbon_dropping:500000,km_awal:122,km_akhir:199,ratio_bbm:7},
  {mobil:"B9690VCC",jenis:"CD_ENGKEL_FE71",kode:"",driver:"RENAL RAMADHAN",jam:"08:17:20",rpp:"21118001",open:0,terkirim:32,cancel:3,kasbon_dropping:500000,km_awal:144,km_akhir:189,ratio_bbm:7},
  {mobil:"B9893VCE",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D011",driver:"SIGIT JULIANTO",jam:"08:04:14",rpp:"21118054",open:0,terkirim:19,cancel:0,kasbon_dropping:500000,km_awal:200,km_akhir:225,ratio_bbm:7},
  {mobil:"B9899VCE",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D070",driver:"SAJIDI",jam:"08:22:02",rpp:"21117999",open:0,terkirim:46,cancel:1,kasbon_dropping:500000,km_awal:85,km_akhir:123,ratio_bbm:7},
  {mobil:"B9901VCE",jenis:"CD_ENGKEL_BOX_KECIL",kode:"D004",driver:"PATRISIUS KLAU",jam:"08:03:28",rpp:"21118062",open:0,terkirim:7,cancel:0,kasbon_dropping:500000,km_awal:135,km_akhir:175,ratio_bbm:7},
  {mobil:"B9916BCV",jenis:"CD_ENGKEL_FE71",kode:"D016",driver:"ARYO S",jam:"08:02:14",rpp:"21118061",open:0,terkirim:30,cancel:0,kasbon_dropping:500000,km_awal:120,km_akhir:156,ratio_bbm:7},
  {mobil:"B9964VCC",jenis:"CD_ENGKEL_FE71",kode:"D065",driver:"A NASUTION",jam:"15:07:35",rpp:"21117892",open:0,terkirim:7,cancel:0,kasbon_dropping:500000,km_awal:112,km_akhir:143,ratio_bbm:7},
  {mobil:"B9970VCC",jenis:"CD_ENGKEL_FE71",kode:"D007",driver:"MARLON F LEDE",jam:"10:50:31",rpp:"21118049",open:0,terkirim:18,cancel:1,kasbon_dropping:500000,km_awal:102,km_akhir:134,ratio_bbm:7}
];

const numberFormat=new Intl.NumberFormat("id-ID");
const startDate=document.getElementById("startDate");
const endDate=document.getElementById("endDate");

const customerNames=["NADINE GROSIR M3","TOKO SUMBER MAKMUR","CV CAHAYA ABADI","TOKO BERKAH JAYA","UD MITRA SEJAHTERA"];
function createInvoiceRecords(){
  const records=[];
  deliveryDetails.forEach((row,rowIndex)=>{
    ["open","terkirim","cancel"].forEach(status=>{
      for(let i=0;i<row[status];i++){
        const customer=customerNames[(rowIndex+i)%customerNames.length];
        records.push({mobil:row.mobil,status,kodeDriver:row.kode||"-",namaDriver:row.driver,noRpp:row.rpp,tglLhv:"03/07/2026",noInv:`IG${String(1144392+rowIndex*100+i).padStart(7,"0")}`,channel:"113-RT - RETAIL LAF",kodeCust:String(2164119+rowIndex*10+i),namaCust:customer,alamatCust:"AREA CIKUPA, TANGERANG",qtyInvoice:status==="cancel"?20:1+(i%24),nilaiInvoice:status==="cancel"?1240000:75000+(i%12)*50000,typeInvoice:status==="cancel"?"RETUR":"PENJUALAN",typePembayaran:"KREDIT",pembayaran:status==="terkirim"?75000+(i%12)*50000:0,scanDropping:"scan",keteranganDelivery:status==="terkirim"?"TERKIRIM":status.toUpperCase(),alasan:status==="cancel"?"AD-TOKO TIDAK OR CANCEL":status==="open"?"DALAM PROSES":"-",statusFaktur:status==="terkirim"?"DELIVERED":status.toUpperCase(),alasanGagal:status==="cancel"?"AD-TOKO TIDAK ORDER":"-"});
      }
    });
  });
  return records;
}
const invoiceRecords=createInvoiceRecords();

function formatDate(value){return new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(value+"T00:00:00"))}

function renderDashboard(){
  const total=deliveryData.reduce((sum,item)=>sum+item.value,0);
  const maximum=Math.max(...deliveryData.map(item=>item.value),1);
  document.getElementById("yAxis").innerHTML=[1200,1000,800,600,400,200,0].map(value=>`<span>${numberFormat.format(value)}</span>`).join("");
  document.getElementById("bars").innerHTML=deliveryData.map(item=>`<div class="bar-item"><span class="bar-value">${numberFormat.format(item.value)}</span><div class="bar" style="height:${item.value===0?1:(item.value/maximum)*100}%;background:${item.color}"></div></div>`).join("");
  document.getElementById("legend").innerHTML=deliveryData.map(item=>`<span><i style="background:${item.color}"></i>${item.label}</span>`).join("");
  const statusItems=deliveryData.map(item=>`<div class="percentage-item ${item.className}">% ${item.label.toUpperCase()}: <span>${total?((item.value/total)*100).toFixed(2):"0.00"}%</span></div>`);
  document.getElementById("percentageRow").innerHTML=`<div>${statusItems[0]}${statusItems[3]}</div><div>${statusItems[1]}${statusItems[4]}</div><div>${statusItems[2]}</div>`;
}

function renderTable(){
  const totals={open:0,terkirim:0,cancel:0};
  document.getElementById("deliveryTableBody").innerHTML=deliveryDetails.map(row=>{
    totals.open+=row.open;totals.terkirim+=row.terkirim;totals.cancel+=row.cancel;
    const total=row.open+row.terkirim+row.cancel;
    const statusCell=(status,value)=>value?`<button class="status-link ${status}" data-status="${status}" data-mobil="${row.mobil}">${value}</button>`:`<span class="empty-status">0</span>`;
    return `<tr><td>${row.mobil}</td><td>${row.jenis}</td><td>${row.kode||"(blank)"}</td><td>${row.driver}</td><td>${row.jam}</td><td>${row.rpp}</td><td>${statusCell("open",row.open)}</td><td>${statusCell("terkirim",row.terkirim)}</td><td>${statusCell("cancel",row.cancel)}</td><td><b>${total}</b></td><td><b>${row.km_awal}</b></td><td><b>${row.km_akhir}</b></td><td><button type="button" class="operations-link" data-rpp="${row.rpp}">Lihat Biaya</button></td></tr>`;
  }).join("");
  document.getElementById("tableDate").textContent=formatDate(startDate.value);
}

function formatMoney(value){return numberFormat.format(value)}
function showInvoices(status,mobil){
  const rows=invoiceRecords.filter(item=>item.status===status&&item.mobil===mobil);
  const labels={open:"OPEN",terkirim:"TERKIRIM",cancel:"CANCEL"};
  document.getElementById("invoiceTitle").textContent=`Daftar Faktur ${labels[status]}`;
  document.getElementById("invoiceSubtitle").textContent=`No. Mobil: ${mobil} • Status: ${labels[status]}`;
  document.getElementById("invoiceCount").textContent=`${rows.length} faktur`;
  document.getElementById("invoiceTableBody").innerHTML=rows.length?rows.map(item=>`<tr><td>${item.kodeDriver}</td><td>${item.namaDriver}</td><td>${item.noRpp}</td><td>${item.tglLhv}</td><td>${item.noInv}</td><td>${item.channel}</td><td>${item.kodeCust}</td><td>${item.namaCust}</td><td>${item.alamatCust}</td><td>${item.qtyInvoice}</td><td>${formatMoney(item.nilaiInvoice)}</td><td>${item.typeInvoice}</td><td>${item.typePembayaran}</td><td>${formatMoney(item.pembayaran)}</td><td>${item.scanDropping}</td><td>${item.keteranganDelivery}</td><td>${item.alasan}</td><td>${item.statusFaktur}</td><td>${item.alasanGagal}</td></tr>`).join(""):`<tr class="empty-invoices"><td colspan="19">Tidak ada faktur dengan status ${labels[status]}.</td></tr>`;
  document.getElementById("invoiceModal").hidden=false;
  document.getElementById("closeInvoice").focus();
}
function closeInvoice(){document.getElementById("invoiceModal").hidden=true}

const detailSection=document.getElementById("detailSection");
const detailButton=document.getElementById("detailButton");
function setDetail(open){detailSection.hidden=!open;detailButton.setAttribute("aria-expanded",String(open));if(open){renderTable();document.body.style.overflow="hidden";document.getElementById("closeDetail").focus()}else{document.body.style.overflow=""}}
detailButton.addEventListener("click",()=>setDetail(detailSection.hidden));
document.getElementById("deliveryTableBody").addEventListener("click",event=>{
  const button=event.target.closest(".status-link");
  if(button)showInvoices(button.dataset.status,button.dataset.mobil);
});
document.getElementById("closeDetail").addEventListener("click",()=>setDetail(false));
document.getElementById("modalBackdrop").addEventListener("click",()=>setDetail(false));
document.getElementById("closeInvoice").addEventListener("click",closeInvoice);
document.getElementById("backToDetail").addEventListener("click",closeInvoice);
document.getElementById("invoiceBackdrop").addEventListener("click",closeInvoice);
document.addEventListener("keydown",event=>{if(event.key==="Escape"){if(!document.getElementById("operationsModal").hidden){closeOperations();return}if(!document.getElementById("invoiceModal").hidden)closeInvoice();else if(!detailSection.hidden)setDetail(false)}});
startDate.addEventListener("change",()=>{endDate.min=startDate.value;renderDashboard();if(!detailSection.hidden)renderTable()});
endDate.addEventListener("change",()=>{startDate.max=endDate.value;renderDashboard()});
document.getElementById("refreshButton").addEventListener("click",function(){this.classList.add("is-refreshing");setTimeout(()=>{this.classList.remove("is-refreshing");renderDashboard();if(!detailSection.hidden)renderTable()},650)});
renderDashboard();


// Biaya operasional dipisahkan dari KM berangkat/pulang dan ratio_bbm lama.
const fuelStandards = {
  CD_ENGKEL_FE71:[7,8], GRANDMAX_BV:[9,11], L_300:[9,11],
  CD_DOUBLE_FE73:[5,6], CD_ENGKEL_BOX_KECIL:[7,8], CD_DOUBLE_LONG_FE74:[5,6]
};
const expenseLabels = {parkir:"Parkir",tol:"Tol",kuli:"Kuli",retribusi_pasar:"Retribusi Pasar",uang_makan_luar_kota:"Uang Makan Luar Kota",hotel:"Hotel",service_ringan:"Service Ringan"};
const costKeys = ["bbm", ...Object.keys(expenseLabels)];
const operationKeys = ["kasbon", ...costKeys, "km_isi_hari_ini", "km_isi_sebelumnya", "liter"];
const operationsModal = document.getElementById("operationsModal");
const operationsForm = document.getElementById("operationsForm");
let activeOperation = null;
let operationsTrigger = null;
const rupiah = value => "Rp " + numberFormat.format(value);
const decimalFormat = new Intl.NumberFormat("id-ID",{maximumFractionDigits:2});
document.getElementById("expenseFields").innerHTML = Object.entries(expenseLabels).map(([key,label]) => `<label>${label}<span class="money-input"><span>Rp</span><input name="${key}" type="text" readonly aria-readonly="true" placeholder="Belum diisi"></span></label>`).join("");
document.getElementById("fuelStandards").innerHTML = `<details><summary>Standar rasio semua kendaraan (KM/Liter)</summary><dl class="standards-list">${Object.entries(fuelStandards).map(([type,range])=>`<div><dt>${type}</dt><dd>${range[0]}–${range[1]}</dd></div>`).join("")}</dl></details>`;
// Angka ilustrasi untuk pratinjau; tidak mewakili transaksi aktual.
function exampleOperation(row) {
  const index=deliveryDetails.indexOf(row);
  // Data contoh: perjalanan yang masih Open belum memiliki realisasi biaya.
  if(row.open>0) return {
    kasbon:row.kasbon_dropping,...Object.fromEntries(costKeys.map(key=>[key,0])),
    km_isi_sebelumnya:null,km_isi_hari_ini:null,liter:0
  };
  const minimum=(fuelStandards[row.jenis]||[7])[0];
  const ratio=index%3===1 ? minimum-0.8 : minimum+[0.2,0.5,0.8][index%3];
  const previous=45000+index*1200;
  const liters=[12,16,20,24,28,32,18][index%7];
  const outOfTown=index%4===0;
  return {
    kasbon:row.kasbon_dropping,
    bbm:liters*15000,
    parkir:[5000,10000,15000,20000][index%4],
    tol:[0,25000,42500,65000,87500][index%5],
    kuli:[0,15000,25000,40000][index%4],
    retribusi_pasar:[0,5000,10000][index%3],
    uang_makan_luar_kota:outOfTown?50000+(index%3)*15000:0,
    hotel:outOfTown&&index%8===0?225000:0,
    service_ringan:index%5===0?35000+(index%3)*20000:0,
    km_isi_sebelumnya:previous,
    km_isi_hari_ini:Math.round((previous+ratio*liters)*10)/10,
    liter:liters
  };
}
function readOperationInputs() {
  // Perhitungan selalu membaca data, bukan nilai pada elemen tampilan.
  return {...activeOperation.values,kasbon:activeOperation.row.kasbon_dropping};
}
function calculateOperation(values, vehicleType) {
  const valid = value => typeof value === "number" && Number.isFinite(value) && value >= 0;
  const hasCost = costKeys.some(key=>valid(values[key]));
  const total = hasCost ? costKeys.reduce((sum,key)=>sum+(valid(values[key])?values[key]:0),0) : null;
  const remaining = total !== null && valid(values.kasbon) ? values.kasbon-total : null;
  let error = "Belum ada data pengisian BBM yang lengkap untuk menghitung rasio.";
  let ratio = null;
  if ([values.km_isi_hari_ini,values.km_isi_sebelumnya,values.liter].every(valid)) {
    if(values.liter <= 0) error="Jumlah liter harus lebih dari 0.";
    else if(values.km_isi_hari_ini < values.km_isi_sebelumnya) error="KM isi hari ini tidak boleh lebih kecil dari KM pengisian sebelumnya.";
    else {ratio=(values.km_isi_hari_ini-values.km_isi_sebelumnya)/values.liter;error="";}
  }
  const standard=fuelStandards[vehicleType];
  return {total,remaining,ratio,error,standard,below:ratio!==null && !!standard && ratio<standard[0]};
}
function updateOperationSummary() {
  const values=readOperationInputs();
  const result=calculateOperation(values,activeOperation.row.jenis);
  document.getElementById("totalCost").textContent=result.total===null?"—":rupiah(result.total);
  const remaining=document.getElementById("remainingCash");
  remaining.textContent=result.remaining===null?"—":rupiah(result.remaining);
  remaining.classList.toggle("below-standard",result.remaining!==null && result.remaining<0);
  const ratioResult=document.getElementById("ratioResult");
  ratioResult.classList.toggle("below-standard",result.below);
  ratioResult.replaceChildren();
  const number=document.createElement("strong");
  number.className="ratio-number";
  number.textContent=result.ratio===null?"Belum dapat dihitung":`${decimalFormat.format(result.ratio)} KM/Liter`;
  const status=document.createElement("p");
  status.textContent=result.error || (result.standard ? `${result.below?"Di bawah standar":result.ratio>result.standard[1]?"Di atas rentang standar":"Sesuai standar"} • Standar ${activeOperation.row.jenis}: ${result.standard[0]}–${result.standard[1]} KM/Liter` : "Standar kendaraan belum tersedia.");
  ratioResult.append(number,status);
  const ratioButton=document.getElementById("ratioButton");
  ratioButton.classList.toggle("below-standard",result.below);
  ratioButton.textContent=result.ratio===null?"Rasio BBM · —":`Rasio BBM · ${decimalFormat.format(result.ratio)} KM/L`;
  ratioButton.title=result.below?"Di bawah standar — klik untuk rincian":"Klik untuk rincian rasio BBM";
  operationsForm.elements.namedItem("km_isi_hari_ini").setCustomValidity(values.km_isi_hari_ini!==null && values.km_isi_sebelumnya!==null && values.km_isi_hari_ini<values.km_isi_sebelumnya ? "KM isi hari ini tidak boleh lebih kecil dari KM pengisian sebelumnya." : "");
}
function showOperations(rpp,trigger) {
  const row=deliveryDetails.find(item=>item.rpp===rpp);
  if(!row)return;
  activeOperation={row,date:startDate.value};operationsTrigger=trigger;
  operationsForm.reset();
  const saved=exampleOperation(row);
  activeOperation.values=Object.freeze({...saved});
  operationKeys.forEach(key=>{
    const value=saved[key];
    operationsForm.elements.namedItem(key).value=typeof value==="number" && Number.isFinite(value) && value>=0 ? (key==="kasbon" || costKeys.includes(key) ? numberFormat.format(value) : decimalFormat.format(value)) : "";
  });
  document.getElementById("operationsSubtitle").textContent=`${row.mobil} • ${row.driver} • RPP ${row.rpp} • ${formatDate(activeOperation.date)}`;
  document.getElementById("ratioDetails").hidden=true;
  document.getElementById("ratioButton").setAttribute("aria-expanded","false");
  document.getElementById("ratioButton").textContent="Lihat Rasio BBM";
  document.getElementById("operationsFeedback").textContent=row.open>0?"Contoh status Open: realisasi biaya Rp 0. Sisa uang masih sebesar kasbon Dropping.":"Klik Rasio BBM untuk melihat KM, liter, dan perhitungannya.";
  updateOperationSummary();operationsModal.hidden=false;
  detailSection.inert=true;
  document.getElementById("closeOperations").focus();
}
function closeOperations() {operationsModal.hidden=true;detailSection.inert=false;if(operationsTrigger)operationsTrigger.focus();}
document.getElementById("deliveryTableBody").addEventListener("click",event=>{const button=event.target.closest(".operations-link");if(button)showOperations(button.dataset.rpp,button);});
["closeOperations","operationsBackdrop","backFromOperations"].forEach(id=>document.getElementById(id).addEventListener("click",closeOperations));
document.getElementById("ratioButton").addEventListener("click",event=>{
  const panel=document.getElementById("ratioDetails");panel.hidden=!panel.hidden;
  event.currentTarget.setAttribute("aria-expanded",String(!panel.hidden));

});
operationsForm.addEventListener("submit",event=>event.preventDefault());
operationsModal.addEventListener("keydown",event=>{
  if(event.key!=="Tab")return;
  const elements=[...operationsModal.querySelectorAll("button,input,summary")].filter(el=>el.getClientRects().length);
  const first=elements[0],last=elements[elements.length-1];
  if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
});



let kaste = document.createElement("div");
kaste.id = "kaste";


let kaste2 = document.createElement("div");
kaste2.id = "kaste2";




let kaste4 = document.createElement("div");
kaste4.id = "kaste4";

document.body.appendChild(kaste);

let pogaSakt = document.createElement("button");
pogaSakt.innerHTML = "Sākt spēli!";
pogaSakt.id = "pogaSakt";
kaste.appendChild(pogaSakt);





let noteikumi = document.createElement("button");
noteikumi.id = "noteikumi";
noteikumi.innerHTML = "Noteikumi";
kaste.appendChild(noteikumi);

let punkti = 0;
const pretinieki = ["Monster", "Dino", "Lifestealer", "Axe", "Knight", "Lava Monster", "Skeleton", "Bounty Hunter", "Goblin", "Dragon"];
const pretiniekiAtteli = ["boss2.png", "boss7.png", "boss1.png", "boss3.png", "boss4.png", "boss10.png", "boss8.png", "boss5.png", "boss6.png", "boss9.png"];
let pretiniekaHP = 0;
let pretiniekaATK = 0;
let speletajaATK = 0;
let speletajaHP = 100;
let speletajs  =0
let eliksiri = 5;
let img = new Image();
let eliksiraC = 3;
let Maxeliksiru = 10;
let bossHP = 200;
let bossATK = 0.5;




pogaSakt.addEventListener("click", function(){
pogaSakt.style.display = "none";
noteikumi.style.display = "none";



let random = Math.floor(Math.random() * 8);
img.src = pretiniekiAtteli[random];

  

let punktiUzraksts = document.createElement("p");
punktiUzraksts.id = "punktiUzraksts";
punktiUzraksts.innerHTML = "Punkti: " + punkti;
kaste.appendChild(punktiUzraksts);

let pretiniekiUzraksts = document.createElement("p");
pretiniekiUzraksts.id = "pretiniekiUzraksts";
pretiniekiUzraksts.innerHTML = "Wild " + pretinieki[random] + " parādījās!"
kaste.appendChild(pretiniekiUzraksts);

pretiniekaHP = Math.floor(Math.random()*100)
let pretiniekaDzivibas = document.createElement("p");
pretiniekaDzivibas.id = "Pretiniekadzivibas";
pretiniekaDzivibas.innerHTML = pretinieki[random] + "dzīvības: " + pretiniekaHP;
kaste.appendChild(pretiniekaDzivibas);


if (punkti == 1){
  let bossDzivibas = document.createElement("p");
  bossDzivibas.id = "Bossdzivibas";
  bossDzivibas.innerHTML = "Bossdzīvības: " + bossHP;
  kaste.appendChild(bossDzivibas);

  let bossUzbrukums = document.createElement("p");
  bossUzbrukums.id = "bossUzbrukums";
  bossUzbrukums.innerHTML = "Boss uzbrukums: " + pretiniekaATK;
  kaste.appendChild(bossUzbrukums);
}


let laukums = document.createElement("canvas");
let ctx = laukums.getContext("2d");
laukums.id = "laukums";
laukums.width = 150;
laukums.height = 150;
kaste.appendChild(laukums);
img.onload = function(){
  ctx.clearRect(0,0,150,100);
  ctx.drawImage(img, 0,1, 150,100)
}

let pretiniekaUzbrukums = document.createElement("p");
pretiniekaUzbrukums.id = "pretiniekaUzbrukums";
pretiniekaUzbrukums.innerHTML = "Pretinieka uzbrukums: " + pretiniekaATK;
kaste.appendChild(pretiniekaUzbrukums);

let speletajaUzbrukums = document.createElement("p");
speletajaUzbrukums.id = "speletajaUzbrukums";
speletajaUzbrukums.innerHTML = "Speletaja uzbrukums: " + speletajaATK;
kaste.appendChild(speletajaUzbrukums);


let speletajaDzivibas = document.createElement("p");
speletajaDzivibas.id = "speletajaDzivibas";
speletajaDzivibas.innerHTML = "Speletaja dzivibas: " + speletajaHP;
kaste.appendChild(speletajaDzivibas);

let Eliksiri = document.createElement("p");
Eliksiri.id = "Eliksiri";
Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
kaste.appendChild(Eliksiri);


let pogaU = document.createElement("button");
pogaU.innerHTML = "U";
pogaU.id = "pogaU";
kaste.appendChild(pogaU);
pogaU.addEventListener("click", function(){
  if( speletajaHP > 0 && pretiniekaHP >0){
    speletajaATK = Math.floor(Math.random()*60+1);
    pretiniekaATK = Math.floor(Math.random()*20+1);
    speletajaUzbrukums.innerHTML = "Spēlētāja uzbrukums: " + speletajaATK;
    pretiniekaUzbrukums.innerHTML = "Pretinieka uzbrukums: " + pretiniekaATK;
    speletajaHP -= pretiniekaATK;
    pretiniekaHP -= speletajaATK;
    speletajaDzivibas.innerHTML = "Spēlētēja dzivibas: " + speletajaHP;
    pretiniekaDzivibas.innerHTML = pretinieki[random] + "dzīvības: " + pretiniekaHP;
  }
  if(pretiniekaHP < 0){
    pretiniekaHP = 0;
    pretiniekaDzivibas.innerHTML = pretinieki[random] + "dzīvības: " + pretiniekaHP;
    punkti += 1;
    punktiUzraksts.innerHTML = "Punkti: " + punkti;

    if (punkti === 10) {
      pretiniekiUzraksts.innerHTML = "Boss parādījās!";
      pretiniekaHP = bossHP;
      pretiniekaATK = bossATK;
      img.src = "boss_bilde.png";
      pretiniekaDzivibas.innerHTML = "Boss dzīvības: " + pretiniekaHP;
    } else {
      const iespejamiba = Math.random();
      if (iespejamiba <= 0.2) {
        eliksiri += 1;
        Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
      }
    }
  }
  if(pretiniekaHP <= 0 && punkti == 11){
      pretiniekaHP = 0;
      pretiniekaDzivibas.innerHTML = "Boss dzīvības: " + pretiniekaHP;
      punktiUzraksts.innerHTML = "Punkti: " + punkti;
      kaste.innerHTML = "";
      let uzvaraUzraksts = document.createElement("p");
      uzvaraUzraksts.id = "uzvaraUzraksts"
      uzvaraUzraksts.innerHTML = "Jūs uzvarējāt!";
      kaste.appendChild(uzvaraUzraksts);
      document.body.appendChild(kaste);
      let pogaBeigt = document.createElement("button");
      pogaBeigt.innerHTML = "Beigt";
      pogaBeigt.id = "pogaBeigt";
      kaste.appendChild(pogaBeigt);
      pogaBeigt.addEventListener("click", function(){
        location.reload();  
      })
  }
  if(speletajaHP < 0){
    //zaudešanas ekrāns
    speletajaHP = 0;
    kaste.style.display = "none";
    document.body.appendChild(kaste3);
  }
})



let pogaP = document.createElement("button");
pogaP.innerHTML = "P";
pogaP.id = "pogaP";
kaste.appendChild(pogaP);
pogaP.addEventListener("click", function(){
  if (punkti >= eliksiraC && eliksiri < Maxeliksiru) {
    punkti -= eliksiraC;
    eliksiri += 1;
    Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
    punktiUzraksts.innerHTML = "Punkti: " + punkti;
  }
})


let pogaT = document.createElement("button");
pogaT.innerHTML = "T";
pogaT.id = "pogaT";
kaste.appendChild(pogaT);
pogaT.addEventListener("click", function(){
  if(pretiniekaHP == 0){
    random = Math.floor(Math.random() * 8);
    img.src = pretiniekiAtteli[random];
    pretiniekaHP = Math.floor(Math.random()*100);
    pretiniekiUzraksts.innerHTML = "Wild " + pretinieki[random] + "parādījās!"
    pretiniekaDzivibas.innerHTML = pretinieki[random] + "dzīvības: " + pretiniekaHP;
  }
})


  

  

let pogaM = document.createElement("button");
pogaM.innerHTML = "M";
pogaM.id = "pogaM";
kaste.appendChild(pogaM);  
  


let pogaE = document.createElement("button");
pogaE.innerHTML = "E";
pogaE.id = "pogaE";
kaste.appendChild(pogaE);
pogaE.addEventListener("click", function(){
  if(eliksiri > 0 && speletajaHP < 100){
  const skaitlis = Math.random();
  if(skaitlis < 0.2){
    eliksiri -= 1;
    speletajaHP += 50;
  } 
  speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
  Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
  }
  if(speletajaHP > 100){
    speletajaHP = 100;
    speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
  }
  
});  

pogaM.addEventListener("click", function(){
kaste.style.display = "none";
document.body.appendChild(kaste3);
});  
  
let kaste2 = document.createElement("div");
kaste2.id = "kaste2";


  
})



let uzvara = document.createElement("p");
uzvara.id = "uzvara";
uzvara.innerHTML = "Tu uzvarēji! ";
kaste2.appendChild(uzvara);

let kaste3 = document.createElement("div");
kaste3.id = "kaste3";

let pogaBeigt = document.createElement("button");
pogaBeigt.innerHTML = "Beigt";
pogaBeigt.id = "pogaBeigt";
kaste3.appendChild(pogaBeigt); 

pogaBeigt.addEventListener("click", function(){
  location.reload();  
})

;



let Tuzaudeji = document.createElement("p");
Tuzaudeji.id = "Tuzaudeji";
Tuzaudeji.innerHTML = "Tu zaudēji! ";
kaste3.appendChild(Tuzaudeji);



pogaBeigt.addEventListener("click", function(){
  location.reload();  
})

pogaBeigt.addEventListener("click", function(){
kaste3.style.display = "none";
let kaste = document.createElement("div");
kaste.id = "kaste";
document.body.appendChild(kaste3);
});  



noteikumi.addEventListener("click", function(){
pogaSakt.style.display = "none";
noteikumi.style.display = 'none';
kaste4.innerHTML = "1) Spēlētājam spēles sākumā ir 100 dzīvības<br><br>2)Pretinieki tiek ģenerēti automātiski<br><br>3) Spēlētāja un pretinieka uzbrukums tiek ģenerēts nejauši;<br><br>4) Spēlētājam spēles sākumā tiek iedoti 5 eliksīri, par 3 punktiem var nopirkt 1 eliksīru;<br><br>5) Katru reizi, kad pretinieks tiek uzveikts, spēlētājam ir 20% iespējamība, ka izkrīt papildus eliksīrs;<br><br>6) Katru reizi, kad pretinieks tiek pieviekts, spēlētājs iegūst 1 punktu;<br><br>7) Kad saņemti 10 punkti, parādās galvenais boss.";
  kaste.appendChild(kaste4);

let atpakal = document.createElement("button");
atpakal.id = "atpakal";
atpakal.innerHTML = "Atpakaļ";
kaste.appendChild(atpakal);
  
atpakal.addEventListener("click", function(){
  location.reload();


});
 
  

});

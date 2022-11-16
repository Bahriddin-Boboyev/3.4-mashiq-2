alert("Bu saytga siz istalgan harflar va sonlarni kirinsangiz sizga sonlardan harflarni ajratib beradi")
let harflar = prompt("bu yerga istagan harf va soningizni kiriting!")

for (i = 0; i < harflar.length; i++){
  if(parseInt(harflar[i])) {
  }
  else{
    document.write(harflar[i])
  }
}
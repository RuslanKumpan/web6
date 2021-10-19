function click1() {
  let cena = document.getElementsByName("cena").value;
  let kol = document.getElementsByName("kol").value;
  if(cena == ""){
    alert("Вы не указали цену");
  } else if(kol == ""){
    alert("Вы не указали количество");
  }
  else{
    result = parseFloat(cena)*parseFloat(kol);
    document.getElementById("result").innerHTML = "Цена: " + result + "р. ";
  }
  return false;
  }


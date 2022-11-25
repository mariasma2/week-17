function check() {
    const result = document.querySelector('.result');
  
    const oneName = document.querySelector('.surname');
    const twoName = document.querySelector('.name');
    const threeName = document.querySelector('.patronymic');
    const Name = document.getElementById('name').value;
    let low = Name.toLowerCase();
  
    let arrayNew = low.split(" ");
    let one = arrayNew[0];
    let two = arrayNew[1];
    let three = arrayNew[2];
  
    one = one[0].toUpperCase() + one.slice(1, );
    two = two[0].toUpperCase() + two.slice(1, );
    three = three[0].toUpperCase() + three.slice(1, );
    
  
    oneName.innerHTML = `Фамилия: ${one}`;
    twoName.innerHTML = `Имя: ${two}`;
    threeName.innerHTML = `Отчество: ${three}`;
  
  }
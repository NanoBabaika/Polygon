let nameValue = document.getElementById('form_name');
let phoneValue = document.getElementById('form_phone');
let sendBtn = document.getElementById('submit_btn');
let contactInfo = [];



sendBtn.onclick = function (event) {
    event.preventDefault();
    console.log('клик по кнопке отправить')
    getValue ();
}
 

function getValue () {
    let inputValueName = document.getElementById('form_name').value;
    let inputValuePhone = document.getElementById('form_phone').value;
    let InfoValue = `Контакты клиента имя: ${inputValueName} контактный телефон ${inputValuePhone}`
    contactInfo.push(InfoValue);
    
}

console.log(contactInfo);
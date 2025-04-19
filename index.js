const phones = ['iPhone X'];
const price = [500];

function showPhones(){
    console.clear();
    console.log(phones);
    console.log(price);
}
function addNewPhone(){
    const new_phone_name = prompt('Please enter the phone name ..');
    const new_phone_price = +prompt('Please enter the new phone price ..');
    phones.push(new_phone_name);
    price.push(new_phone_price);
    showPhones();
}
function deletePhone(){
    const phone_index = +prompt('enter the phone number you want to delete..') - 1 ;
    delete phones[phone_index];
    delete price[phone_index];
    showPhones();
}
function editPhone(){
    const phone_number = +prompt('enter phone number you want to edit ..') - 1 ;
    const edited_version = prompt('enter the new version you want to add "the edited"');
    phones[phone_number] = edited_version;
    showPhones();
}
function editPrice(){
    const price_number = +prompt("enter phone number that you want to edit its price..") - 1;
    const edited_price = prompt('enter the edited price ..');
    price[price_number] = edited_price;
    showPhones();
}

// i didn't know if you want user to edit by index or name .. so i did it the two ways
function editPhoneByName(){
    const phone_name = prompt('please enter the name of the phone you want to edit ..');
    const phone_index = phones.indexOf(phone_name);
    phones[phone_index] = prompt('please enter the edited version of the phone name ..');
    showPhones();
}
// same thing for price but it's gonna get the first elemet with the number you provide ..
function editPriceByNum(){
    const phone_price = +prompt('enter the price you want to edit ..');
    const price_index = price.indexOf(phone_price);
    price[price_index] = +prompt('please enter the edited price ..');
    showPhones();
}

// in case you want the same thing "by name" to delete item .. 
function deletePhoneByName(){
    const phone_name = prompt('enter the phone name you want to delete ..');
    const phone_index = phones.indexOf(phone_name);
    const price_index = phone_index;
    if(phone_index < 0 ){
        console.log('the phone name provided is not on the list ..');
    }else {
        delete phones[phone_index];
        delete price[phone_index];
        // i placed the showPhones function here as it clears the console .. if the name is not on list the user will have no idea ..
        showPhones();
    }
}
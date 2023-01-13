let author = document.querySelector('#author');
let text = document.querySelector('#text');
const sendBtn = document.querySelector('.send');
const container = document.querySelector('.list');
class Message {
    constructor(name, text) {
        this.name = name;
        this.date = new Date();
        this.text = text;
    }

    toString() {
        let hour = this.date.getHours() > 9 ? this.date.getHours() : `0${this.date.getHours()}`;
        let minute = this.date.getMinutes() > 9 ? this.date.getMinutes() : `0${this.date.getMinutes()}`;

        return `${hour}:${minute} ${this.name} : ${this.text}`;
    }
   
}

class Messenger {
    constructor() {
        this.messages = [];
    }

    show_history() {
        textmsg.innerHTML=''
        for (let i=0; i<this.messages.length; i++) {
             textmsg.innerHTML +=this.messages[i].toHtml();
        }
    }

    send(author, text) {
        this.messages.push(new Message(author, text))

    }
    toHtml (){
        const d = new Date();
let time = `${d.getHours()}:${d.getMinutes()} ${d.text}, ${d.name}`;
let newElement = document.createElement('li');
newElement.classList.add('list');
newElement.appendChild(container);
newElement.innerHTML = time;
    }
}

sendBtn.addEventListener('click',()=>{
    // if(author.value.length !== 0 && text.value.length !== 0  )
    // {
    //     messenger.send(author.value,  text.value);
    //     messenger.show_history();
    //     messenger.toHtml()
    //  }
    // else {
    //     alert("wrong!");
    // }
    if(author.value='' && text.value==''){
        alert('You need to write something')
    }
    else{
        author.value = this.time
    }
    text.value = '';
})
// let messenger = new Messenger();

// let messenger = new Messenger()
// messenger.send('Sevil', 'tapsiriq bitdi')
// messenger.send('Algoritmika', 'hele bitmeyib')


// messenger.show_history();
// messenger.toHtml();
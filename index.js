let btn= document.querySelector('.talk');
let content= document.querySelector('.content');

function speak(sentence){
    const recognitions = new SpeechSynthesisUtterance(sentence)
    recognitions.pitch=0.009
    recognitions.rate=1
    recognitions.lang='en-US';
    // recognitions.voice[1]
    // recognitions.
    window.speechSynthesis.speak(recognitions)
}


// wishme after coming online
function wishme(){
    var day=new Date();
var hr=day.getHours();
if(hr>=0 && hr<12){
    speak('Good Morning Master');
}else if(hr==12 ){
    speak('Good noon Master');
}else if(hr>=12 && hr<18){
    speak('Good afternoon Master');
}else{
    speak('Good Evening Master');
}

}


// coming online
window.addEventListener('load', ()=>{
  speak('Activating jarvis. going online');
  wishme();
})

const speechrecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechrecognition();



recognition.onresult =(event)=> {
    const current= event.resultIndex;
    // console.log(current);
    const transcript = event.results[current][0].transcript;
    // console.log(transcript);
   
    content.textContent = transcript;
   
    console.log(transcript.toLowerCase())
    speakThis(transcript.toLowerCase());
    
}


btn.addEventListener('click',()=>{
    recognition.start();
})

function speakThis(message){
    const speech= new SpeechSynthesisUtterance();
    speech.text='i did not understand please try again';

    if(message.includes('hey, jarvis.') || message.includes('hello, jarvis.') || message.includes('hello') || message.includes('hey')){
        // let c= wishme()
        const finalText =`hello sir`;
        speech.text=finalText;
    }
   else if(message.includes('how are you')|| message.includes('how are you jarvis')){

        const finalText ='I am fine sir, what about you? tell me how can i assist you';
        speech.text=finalText;
    }
   else if(message.includes('tell me something about you')|| message.includes('tell me something about you jarvis')){

        const finalText ='i am a normal Artificial Inteligence, I can perform normal tasks like search on google, opening your normal files etc ';
        speech.text=finalText;
    }
   else if(message.includes('okay jarvis you can take the nap now') || message.includes('take the nap jarvis')|| message.includes('shut down jarvis') || message.includes('go offline jarvis') || message.includes('take the nap')){
        const finalText ='Ok sir , I am going to take a nap, you can call me whenever you want to take my help I will assist you with your work';
        speech.text=finalText;
        window.self.location=`https://www.google.com/`
    }
    
  else  if(message.includes('what is your name')|| message.includes("what's your name")){

        const finalText ='My name is Jarvis Sir';
        speech.text=finalText;
    }
   else if (message.includes('tell me your commands jarvis')|| message.includes('what are your commands ')){
        const finalText ='for my commands you can visit the repository on github ';

        speech.text=finalText;
    }
   else if (message.includes('what is your age')|| message.includes("what's your age") || message.includes('what is your age jarvis') || message.includes('what is your date of birth')){
        const dob= '18 february 2023'
        const finalText =`first of all I was not born, I was created by someone. my date of creation is ${dob}, and that day was saturday` 
        speech.text=finalText;
    }
 
   else if(message.includes('open calculator') || message.includes('open calculator jarvis')){
        window.open('calculator:///')
        const finalText ='opening calculator';
        speech.text=finalText;
    }
  else  if(message.includes('tell me the time ')){
        let date= new Date()
      let hour=  date.getHours()
      let minutes= date.getMinutes()

        const finalText =hour+ "hour" + minutes +"minutes";
        console.log(finalText);

        speech.text=finalText;
    }
   else if(message.includes('open my github') || message.includes('open github jarvis')){

        window.open(`https://github.com/`,"_blank");
        const finalText ='opening github in new tab sir';
        speech.text=finalText;
    }
  else  if(message.includes('open instagram') ||message.includes('open instagram jarvis') ||message.includes('jarvis open instagram')){

        window.open(`https://www.instagram.com/`,"_blank");
        const finalText ='opening instagram in new tab sir';
        speech.text=finalText;
    }
   else if(message.includes('open wikipidea') ||message.includes('jarvis open wikipidea') ||message.includes('open wikipidea jarvis')){

        window.open(`https://www.wikipedia.org/`,"_blank");
        const finalText ='opening wikipidea in new tab sir';
        speech.text=finalText;
    }
   else if(message.includes('open drive') ||message.includes(' open google drive') ||message.includes('jarvis open google drive')){
        window.open(`https://drive.google.com/drive/`,"_blank");
        const finalText ='opening Your google drive in new tab sir';
        speech.text=finalText;
     }
    else if(message.includes('open youtube library') ||message.includes(' open my youtube library') ||message.includes('jarvis open youtube library') || message.includes('jarvis open youtube library')){

        window.open(`https://www.youtube.com/feed/library`,"_blank");
        const finalText ='opening Your youtube library in new tab sir';
        speech.text=finalText;
     }
    else if(message.includes('open youtube history') ||message.includes(' open my youtube history') ||message.includes('jarvis open youtube history') || message.includes('jarvis open youtube library')){

        window.open(`https://www.youtube.com/feed/history`,"_blank");
        const finalText ='opening Your youtube history in new tab sir';
        speech.text=finalText;
     }
    else if(message.includes('open chrome history') ||message.includes(' open search history') ||message.includes('jarvis open history') || message.includes('jarvis open chrome history')){

        window.open(`https://myactivity.google.com/product/search?utm_source=privacy-advisor-search`, "_blank");
        const finalText ='opening Your search history in new tab sir';
        speech.text=finalText;
     }
   else if(message.includes('open masai') ||message.includes('open masai school') ||message.includes('jarvis open masai')){

        window.open(`https://course.masaischool.com/`,"_blank");
        const finalText ='opening Your masai school website in new tab sir';
        speech.text=finalText;
    }
    else if(message.includes('open my assignments') ||message.includes('open assignments') ||message.includes('jarvis open assignments')){
        window.open(`https://course.masaischool.com/assignments`, "_blank");
        const finalText ="opening Your masai school's assignment in new tab sir";
        speech.text=finalText;
    }
   else if(message.includes('who is') ||message.includes('what is')|| message.includes('why') || message.includes('when')){
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`, "_blank");
        const finalText ='I found some information for' + message + "on google";
        speech.text=finalText;
    }
   else if(message.includes('.com') ||message.includes('.in')|| message.includes('.org') || message.includes('.en')){
      message= message.replace("open ","");
        console.log(message);
        window.open(`https://${message}`, "_blank");
        const finalText ='I opened' + message + "on Internet";
        speech.text=finalText;
    }
  
    else if(message.includes('youtube ') ||message.includes('play') || message.includes('sing') ){
        message= message.replace("youtube ","");
        message= message.replace("play ","") ;
        message= message.replace("sing ","") 
        window.open(`https://www.youtube.com/search?q=${message.replace(" ","+")}`,"_blank");
        const finalText ='I found some information for' + message + "on youtube";
        speech.text=finalText;
    }
   else if(message.includes('google ')){
        message= message.replace("google ","");
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`,"_blank");
        const finalText ='I found some information for' + message + "on google";
        speech.text=finalText;
    }
    speech.volume=6
    speech.pitch=5
    speech.rate=1
    window.speechSynthesis.speak(speech);
}


function functionc(){
    
   let div= document.querySelector("#questions>div")
   div.style="display:block"
}

function functiono(){
    
    let div= document.querySelector("#questions>div")
    div.style="display:none"
 }
 
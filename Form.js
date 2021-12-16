class Form {

  constructor() {
    this.name = createInput("Name");
    
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton('Reset')

    this.q1 = createElement('h2');
    this.a1 = createInput("Enter your answer here");
    this.q2 = createElement('h2');
    this.a2 = createInput("Enter your answer here");
    this.q3 = createElement('h2');
    this.a3 = createInput("Enter your answer here");

    this.button = createButton('SUBMIT');

  }
  // hide(){
  //   this.greeting.hide();
  //   this.button.hide();
  //   this.input.hide();
  //   this.title.hide();
  // }

  display(){
    this.title.html("Go Corona Go");
    this.title.position(displayWidth/2 - 50, 0);

  
    this.name.position(displayWidth-1100 , displayHeight-700);
   
   // this.reset.position(displayWidth-100, 20);

    this.q1.html("1. What is Corona ?")
    this.q1.position(displayWidth-1100, displayHeight-650)
    this.a1.position(displayWidth-1100,displayHeight-580)
    this.q2.html("2. What are the symptoms of Corona ?")
    this.q2.position(displayWidth-1100, displayHeight-550)
    this.a2.position(displayWidth-1100,displayHeight-490)
    this.q3.html("3. What are the impacts of Corona on your body?")
    this.q3.position(displayWidth-1100, displayHeight-470)
    this.a3.position(displayWidth-1100,displayHeight-400)


    this.button.position(displayWidth/2, displayHeight-200);
    
    
    // this.reset.mousePressed(() =>{
    //   game.update(0);
    //   player.updateCount(0);
    // })
// 2
//     this.button.mousePressed(()=>{
//       this.input.hide();
//       this.button.hide();
//       player.name = this.input.value();
//       playerCount+=1;
//       player.index = playerCount;
//       player.update();
//       player.updateCount(playerCount);
//       this.greeting.html("Hello " + player.name)
//       this.greeting.position(displayWidth/2 - 70, displayHeight/4);
//     });

  }
}

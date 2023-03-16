import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true
handleTakeOff(){
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  if (result) {
    this.color = 'blue';
    this.height = 10000;
    this.width = 0;
    this.message = 'Shuttle in flight.';
    this.takeOffEnabled = false
  }
}
handleLanding(rocketImage){
  let result = window.confirm('Are you sure you want to land the shuttle?');
  if (result){
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle has landed.';
    let movementBottom = parseInt(rocketImage.style.bottom) * 0 + 'px'
    rocketImage.style.bottom = movementBottom
    let movementLeft = parseInt(rocketImage.style.left) * 0 + 'px'
    rocketImage.style.left = movementLeft
    this.takeOffEnabled = true
  }
}
handleAbortMission(rocketImage){
  let result = window.confirm("Are you sure you want to about the mission?");
  if (result){
    this.color = 'red';
    this.height = 0;
    this.width = 0;
    this.message = 'Mission aborted!'
    let movementBottom = parseInt(rocketImage.style.bottom) * 0 + 'px'
    rocketImage.style.bottom = movementBottom
    let movementLeft = parseInt(rocketImage.style.left) * 0 + 'px'
    rocketImage.style.left = movementLeft
    this.takeOffEnabled = true
  }
}
moveRocket(rocketImage, direction){
  if(direction === 'right'){
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    if(this.width>100000){
      this.color = 'orange'
      this.message = 'Rocket too far to the right!'
    } else {
      this.color = 'blue'
      this.message = 'Rocket flight nominal'
    }
  }
  else if(direction === 'left'){
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000
    if (this.width<-100000){
      this.color = 'orange'
      this.message = 'Rocket too far to the left!'
    } else {
      this.color = 'blue'
      this.message = 'Rocket flight nominal'
    }
  }
  else if(direction === 'up'){
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000 
    if(this.height>100000){
      this.color = 'orange'
      this.message = 'Rocket too high!'
    } else {
      this.color = 'blue'
      this.message = 'Rocket flight nominal'
    }
  } 
  else if(direction === 'down'){
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px'
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000
    if (this.height<-100000){
      this.color = 'orange'
      this.message = 'Rocket too... low?'
    } else {
      this.color = 'blue'
      this.message = 'Rocket flight nominal'
    }
  }
  }
  
}





import './App.css'
import { Component } from "react";
import { useEffect, useState, useContext, createContext } from 'react';
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const Power = createContext();

function DrumPad(props) {
  const { keyCode, keyTrigger, id, url } = props.drumPad;
  // console.log(url);
  const [padStyle, setPadStyle] = useState({ backgroundColor: 'darkgray' });
  const power = useContext(Power);

  function updateStyle() {
    setPadStyle({ backgroundColor: 'yellow' });
    setTimeout(() => setPadStyle({ backgroundColor: 'darkgray' }), 150);
  }
  function handleClick() {
    if (power) {
      playSound();
      props.displayClipName(id.replaceAll('-', ' '));
      updateStyle();
    }
  }

  function handleKeyPress(event) {
    if (power) {
      if (event.keyCode === keyCode) {
        playSound();
        updateStyle();
        props.displayClipName(id.replaceAll('-', ' '));
        // console.log(`Pressed the key ${keyTrigger}`);
      }
    }

  }
  useEffect(() => {
    // console.log("calling callback");
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  }, []);

  function playSound() {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
  }

  return (
    <div className="drum-pad" id={id} onClick={handleClick} style={padStyle}>
      <audio src={url} id={keyTrigger} className="clip"></audio>
      {keyTrigger}
    </div>
  );
}

function PadBank(props) {
  const padBank = props.padBank.map((drumPad) =>
    <DrumPad drumPad={drumPad} key={drumPad.id} displayClipName={props.displayClipName} />
  );
  return (
    <div className="pad-bank">
      {padBank}
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    };
    this.powerControl = this.powerControl.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.displayClipName = this.displayClipName.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    })
  };

  selectBank() {
    if (this.state.power) {
      if (this.state.currentPadBankId === 'Heater Kit') {
        this.setState({
          currentPadBank: bankTwo,
          currentPadBankId: 'Smooth Piano Kit',
          display: 'Smooth Piano Kit',
        })
      } else {
        this.setState({
          currentPadBank: bankOne,
          currentPadBankId: 'Heater Kit',
          display: 'Heater Kit',
        })
      }
    }
  }

  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    })
  }

  displayClipName(name) {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }

  adjustVolume(event) {
    if (this.state.power) {
      this.setState({
        sliderVal: event.target.value,
        display: `Volume: ${Math.round(event.target.value * 100)}`//update the display, showing current volume value
      })
    }
    setTimeout(() => this.clearDisplay(), 1000);//after 1 second, we will clear the display
  }
  render() {
    const clips = document.getElementsByClassName("clip");//calling array.slice method on HTMLCollection
    // console.log(clips);
    clips.forEach((clip) => { clip.volume = this.state.sliderVal });
    return (
      <div id="drum-machine">
        <div className="logo-container">
          <span id="logo-name">FCC</span><i className="fab fa-free-code-camp" id="logo"></i>
        </div>
        <div className="drum-controls-container">
          <div className="drum-pad-container">
            <Power.Provider value={this.state.power}>
              <PadBank padBank={this.state.currentPadBank} displayClipName={this.displayClipName} />
            </Power.Provider>
          </div>
          <div className="controls-container">

            <div className="control">
              <p>Power</p>
              <div className="select" onClick={this.powerControl}>
                <div className="button" style={{ float: this.state.power ? 'right' : 'left' }}></div>
              </div>
            </div>
            <p id="display">{this.state.display}</p>

            <div className="volume-slider">
              <input id="volumeSlider" type="range" max="1" min="0" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
            </div>
            <div className="control">
              <p>Bank</p>
              <div className="select" onClick={this.selectBank}>
                <div className="button" style={{ float: this.state.currentPadBankId === 'Heater Kit' ? 'left' : 'right' }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
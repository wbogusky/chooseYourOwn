import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/1d/8c/9d/tourist-information-stand.jpg",
    alt: "Pamphlet Rack",
    text: "Welcome, traveler! How would you like to get to your destination?",
    buttons: [
      { label: "Train", page: "onthetrain" },
      { label: "Ship", page: "ontheship" }
    ]
  },
  onthetrain: {
    image: "http://www.hunkabutta.com/photos/fullsize/ticket_checker.jpg",
    alt: "Ticket Checker Guy",
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    buttons: [
      { label: "12E", page: "death" },
      { label: "97C", page: "life" },
      { label: "45A", page: "relaxation" }
    ]
  },
  relaxation: {
    image: "https://cdn9.dissolve.com/p/D1282_9_967/D1282_9_967_1200.jpg",
    alt: "Out the window of a train",
    text: "You take your seat and sigh a deep breath of relaxation.",
    buttons: [{ label: "Breathe again.", page: "choke" }]
  },
  choke: {
    image: "https://cdn9.dissolve.com/p/D1282_9_967/D1282_9_967_1200.jpg",
    alt: "Out the window of a train",
    text: "You choke on your own spit.",
    buttons: [
      { label: "Cough", page: "life" },
      { label: "Asphyxiate", page: "death" }
    ]
  },
  ontheship: {
    image:
      "https://c8.alamy.com/comp/E4G9MD/business-man-reaches-out-his-arm-holding-his-hand-directly-into-the-E4G9MD.jpg",
    alt: "Will you hold my hand",
    text: "Welcome aboard the ship. Please hold my hand.",
    buttons: [
      { label: "Don't hold", page: "death" },
      { label: "Hold hand", page: "life" }
    ]
  },
  death: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkrLeDvx7ihikuV8RRdQGR1ur_gIPRIzLthLv1dkat-XbvwPf",
    alt: "Painful death",
    text: "You sadly pass away instantly with a look of intense pain.",
    buttons: [
      { label: "Restart", page: "start" }
      // {label: "Cry", page: "start"}
    ]
  },
  life: {
    image: "https://media1.giphy.com/media/cO8FXQClDjENKYdRGi/giphy.gif",
    alt: "Suspicion",
    text: "You continue to live... for now. What will you do?",
    buttons: [
      { label: "Walk around", page: "death" },
      { label: "Sit perfectly still", page: "death" },
      { label: "Sob while crawling toward the door", page: "death" },
      { label: "Jump", page: "death" },
      { label: "Check your pockets", page: "death" }
    ]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    if (pageData.buttons.length === 1) {
      div = (
        <div className="App">
          <img src={pageData.image} alt={pageData.alt} />
          <p>{pageData.text}</p>
          <button onClick={() => this.goToPage(pageData.buttons[0].page)}>
            {pageData.buttons[0].label}
          </button>
        </div>
      );
    } else if (pageData.buttons.length === 2) {
      var div = (
        <div className="App">
          <img src={pageData.image} alt={pageData.alt} />
          <p>{pageData.text}</p>
          <button onClick={() => this.goToPage(pageData.buttons[0].page)}>
            {pageData.buttons[0].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[1].page)}>
            {pageData.buttons[1].label}
          </button>
        </div>
      );
    } else if (pageData.buttons.length === 3) {
      var div = (
        <div className="App">
          <img src={pageData.image} alt={pageData.alt} />
          <p>{pageData.text}</p>
          <button onClick={() => this.goToPage(pageData.buttons[0].page)}>
            {pageData.buttons[0].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[1].page)}>
            {pageData.buttons[1].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[2].page)}>
            {pageData.buttons[2].label}
          </button>
        </div>
      );
    } else if (pageData.buttons.length === 4) {
      var div = (
        <div className="App">
          <img src={pageData.image} alt={pageData.alt} />
          <p>{pageData.text}</p>
          <button onClick={() => this.goToPage(pageData.buttons[0].page)}>
            {pageData.buttons[0].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[1].page)}>
            {pageData.buttons[1].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[2].page)}>
            {pageData.buttons[2].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[3].page)}>
            {pageData.buttons[3].label}
          </button>
        </div>
      );
    } else if (pageData.buttons.length === 5) {
      var div = (
        <div className="App">
          <img src={pageData.image} alt={pageData.alt} />
          <p>{pageData.text}</p>
          <button onClick={() => this.goToPage(pageData.buttons[0].page)}>
            {pageData.buttons[0].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[1].page)}>
            {pageData.buttons[1].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[2].page)}>
            {pageData.buttons[2].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[3].page)}>
            {pageData.buttons[3].label}
          </button>
          <button onClick={() => this.goToPage(pageData.buttons[4].page)}>
            {pageData.buttons[4].label}
          </button>
        </div>
      );
    }

    return div;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

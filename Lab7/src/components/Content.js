import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstElementClass: "blue",
      secondElementClass: "green",
    };
  }

  swapStyles = () => {
    this.setState((prevState) => ({
      firstElementClass:
        prevState.firstElementClass === "blue" ? "green" : "blue",
      secondElementClass:
        prevState.secondElementClass === "blue" ? "green" : "blue",
    }));
  };

  render() {
    const { firstElementClass, secondElementClass } = this.state;

    return (
      <div>
        <h2>Hobbies</h2>
        <ul>
          <li
            className={firstElementClass}
            id="first-element"
            onClick={this.swapStyles}
          >
            First hobby: photographing a snail
          </li>
          <li
            className={secondElementClass}
            id="second-element"
            onClick={this.swapStyles}
          >
            Second hobby: working out in the gym
          </li>
          <li>Third hobby: drinking coffee</li>
        </ul>

        <h2>Three favorite books or movies</h2>
        <ol>
          <li>Black Panther</li>
          <li>Your name</li>
          <li>1+1</li>
        </ol>

        <p>
          <a href="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e3/75/6d/20180929-181647-largejpg.jpg?w=500&h=300&s=1">
            Svyatogorsk
          </a>
          , a city located in eastern Ukraine, is renowned for its picturesque
          landscapes, cultural significance, and historical landmarks. Nestled
          along the banks of the Seversky Donets River, Svyatogorsk is embraced
          by the serene beauty of the surrounding Donetsk Upland. The city's
          name, derived from the Russian "Holy Mountain," alludes to the
          spiritual significance it holds for both locals and pilgrims alike.
        </p>
        <p>
          The city's rich history dates back centuries, with traces of its past
          visible in the architecture of its churches, monasteries, and ancient
          structures. The Svyatogorsk Lavra, a prominent Orthodox monastery
          perched atop a rocky hill, serves as a prominent spiritual center and
          a major tourist attraction. Its golden-domed churches and religious
          relics draw visitors seeking solace, spiritual rejuvenation, and a
          glimpse into the region's deep-rooted religious heritage.
        </p>
        <p>
          Beyond its spiritual prominence, Svyatogorsk also offers natural
          wonders for visitors to explore. The lush greenery of the surrounding
          hills, dotted with diverse flora and fauna, presents an ideal setting
          for outdoor activities such as hiking, trekking, and nature
          photography. The Seversky Donets River, flowing gracefully through the
          city, offers opportunities for leisurely boat rides, fishing
          excursions, and riverside picnics, fostering a sense of tranquility
          and relaxation for residents and tourists alike.
        </p>
      </div>
    );
  }
}

export default Content;

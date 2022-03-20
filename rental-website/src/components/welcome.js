import React from "react";
import "../App.css";

export default function Welcome() {
  return (
    <>
      <div className="header">
        <nav>
          <div>Logo</div>
          <div className="nav-right">
            <button>Explore</button>
            <button>About Us</button>
            <div>
              <button>Cities</button>
            </div>
            <button>Call</button>
          </div>
          <div className="hamburger">
            <svg
              width="15"
              height="18"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42857 6.78572H38.5714C39.3604 6.78572 40 6.14616 40 5.35715V1.78572C40 0.996701 39.3604 0.357147 38.5714 0.357147H1.42857C0.639554 0.357147 0 0.996701 0 1.78572V5.35715C0 6.14616 0.639554 6.78572 1.42857 6.78572ZM1.42857 21.0714H38.5714C39.3604 21.0714 40 20.4319 40 19.6429V16.0714C40 15.2824 39.3604 14.6429 38.5714 14.6429H1.42857C0.639554 14.6429 0 15.2824 0 16.0714V19.6429C0 20.4319 0.639554 21.0714 1.42857 21.0714ZM1.42857 35.3571H38.5714C39.3604 35.3571 40 34.7176 40 33.9286V30.3571C40 29.5681 39.3604 28.9286 38.5714 28.9286H1.42857C0.639554 28.9286 0 29.5681 0 30.3571V33.9286C0 34.7176 0.639554 35.3571 1.42857 35.3571Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>
        <div className="header-Text">
          <h1>
            Rethink your <br />
            living {"&"} Renting
          </h1>
          <p>Make your style painless with us</p>
        </div>
        <div className="header-Footer">
          <div>
            <label>City</label>
            <select>
              <option value="">Select your city</option>
              <option value="">Alwar</option>
              <option value="">Hydrabad</option>
              <option value="">Delhi</option>
            </select>
          </div>
          <div>
            <label for="Date">Dates</label>
            <input type="date" id="Date" />
          </div>
          <div>
            <label>Guests</label>
            <select>
              <option value="">Add guests</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div>
            <button className="search">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5898 25.9395L23.748 20.0977C23.4844 19.834 23.127 19.6875 22.752 19.6875H21.7969C23.4141 17.6191 24.375 15.0176 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.0176 24.375 17.6191 23.4141 19.6875 21.7969V22.752C19.6875 23.127 19.834 23.4844 20.0977 23.748L25.9395 29.5898C26.4902 30.1406 27.3809 30.1406 27.9258 29.5898L29.584 27.9316C30.1348 27.3809 30.1348 26.4902 29.5898 25.9395ZM12.1875 19.6875C8.04492 19.6875 4.6875 16.3359 4.6875 12.1875C4.6875 8.04492 8.03906 4.6875 12.1875 4.6875C16.3301 4.6875 19.6875 8.03906 19.6875 12.1875C19.6875 16.3301 16.3359 19.6875 12.1875 19.6875Z"
                  fill="white"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
        <img src="/images/Vector.png" alt="" />
      </div>
    </>
  );
}

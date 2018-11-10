import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="component-example">
          <h3 className="component-title">Radio button</h3>
          <div className="radio-option">
            <input type="radio" checked="checked" name="radio" value="anywhere" id="anywhere" />
            <span className="radio-button"></span>
            <label for="anywhere">Anywhere</label>
          </div>
          <div className="radio-option">
            <input type="radio" name="radio" value="specific" id="specific" />
            <span className="radio-button"></span>
            <label for="specific">A specific place</label>
          </div>
        </div>

        <div className="component-example">
          <h3 className="component-title">Checkbox</h3>
            <div className="check-option">
              <input type="checkbox" checked="checked" name="check" value="performance" id="performance" />
              <span className="checkbox"></span>
              <label for="performance">Performance</label>
            </div>
            <div className="check-option">
              <input type="checkbox" name="check" value="visual" id="visual" />
              <span className="checkbox"></span>
              <label for="visual">Visual</label>
            </div>
        </div>

        <div className="component-example">
          <h3 className="component-title">Info box</h3>
          <div className="info-box">
            <p>Enter your project details.</p>
          </div>
        </div>

        <div className="component-example">
          <h3 className="component-title">Standard Button</h3>
          <div>
            <button className="standard-button" type="button">Post</button>
            <button disabled className="standard-button" type="button">Post</button>
          </div>
        </div>
        <div className="component-example">
          <h3 className="component-title">Secondary and tertiary buttons</h3>
          <div>
            <button className="secondary-button" type="button">Post a project</button>
            <button disabled className="tertiary-button" type="button">Explore CollabCollective</button>
          </div>
        </div>
        <div className="component-example">
          <h3 className="component-title">Call-to-action button</h3>
          <div className="dark-theme">
            <button className="cta-outline-button" type="button">Make a post now</button>
          </div>
        </div>
        <div className="component-example">
          <h3 className="component-title">Descriptor text</h3>
          <p className="descriptor-text">POST A PROJECT</p>
          <p className="descriptor-text">Compensation</p>
        </div>

        <div className="component-example">
          <h3 className="component-title">Form container & divider</h3>
          <div className="light-theme">
            <div className="form-container">
               <div className="form-content-block">
                 <div className="descriptor-text">Name</div>
                 <div className="form-content">DJ Snake</div>
               </div>
               <div className="form-content-block">
                 <div className="descriptor-text">Profession</div>
                 <div className="form-content">Songwriter, composer, meme master</div>
               </div>
               <div className="divider"></div>
               <div className="form-content-block">
                 <div className="descriptor-text">Details</div>
                 <p className="form-content">Hello, I'm a DJ from California. Nice to meet you all</p>
               </div>
              <div className="button-area">
                <button className="standard-button" type="button">Message</button>
              </div>
            </div>
          </div>

        </div>

        <div className="component-example">
          <h3 className="component-title">Dropdown input</h3>

          <div className="dropdown-input">
            <div className="dropdown-item selected">Please select ↓</div>
          </div>

          <div className="dropdown-input">
            <div className="dropdown-item selected">Please select ↓</div>
            <div className="dropdown-item">Performance</div>
            <div className="dropdown-item">Visual</div>
            <div className="dropdown-item">Sound</div>
            <div className="dropdown-item">Word</div>
          </div>
        </div>

        <div className="component-example">
          <h3 className="component-title">Text input large</h3>
          <form>
            <div className="text-input-large">
              <input type="text" name="name" placeholder="e.g. a filmmaker" />
              <label className="descriptor-text" for="name">I am</label>
            </div>
            <div className="text-input-large">
              <input type="text" name="name" placeholder="e.g. a dancer" />
              <label className="descriptor-text" for="name">Looking for</label>
            </div>
            <div className="text-input-large">
              <input type="text" name="name" placeholder="e.g. shoot a music video" />
              <label className="descriptor-text" for="name">To</label>
            </div>
          </form>

        </div>

        <div className="component-example">
          <h3 className="component-title">Text input standard</h3>
          <form>
            <div className="text-input-standard">
              <label className="descriptor-text" for="name">Your name</label>
              <input type="text" name="name" placeholder="Could be a name you’d like to be known by" />
            </div>
          </form>
        </div>

        <div className="component-example">
          <h3 className="component-title">Textarea input</h3>
          <div className="textarea-input">
            <label className="descriptor-text" for="name">Detailed description</label>
            <textarea className="autoExpand" placeholder="This is a chance for you to expand on your project and let people know more about what you are working on. What is your project about? Are there any timelines?"></textarea>
          </div>
        </div>

        <div className="component-example">
          <h3 className="component-title">Error message</h3>
          <p className="error-message">Please enter a valid email address</p>
        </div>

        <div className="component-example">
          <h3 className="component-title">Text link input</h3>
        </div>

        <div className="component-example">
          <h3 className="component-title">Image selection caret</h3>
        </div>


        <div className="component-example">
          <h3 className="component-title">Portfolio item</h3>
        </div>

        <div className="component-example">
          <h3 className="component-title">Footer</h3>
            <div className="dark-theme">
              <div className="footer">
                <div className="top-content">
                  <p className="footer-item">About</p>
                  <p className="footer-item">Contact</p>
                  <p className="footer-item">Privacy policy</p>
                  <p className="footer-item">Terms of service</p>
                </div>
                <div className="bottom-content">
                  <p className="footer-item">© 2019 Collab Collective</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';




export default class Wizard extends Component {
  constructor(props) {
      super(props);

      this.state = {
          form: {},
          transitions: {
             
          },
      };
  }

  updateForm = (key, value) => {
      const { form } = this.state;

      form[key] = value;
      this.setState({ form });
  }

  onStepChange = (stats) => {
      // console.log({ stats });
  }

  render() {
      return (
          <div className='container'>
              <h3>React Step Wizard</h3>

              <div>
                  <div className='row'>
                      <div>
                          <StepWizard
                              onStepChange={this.onStepChange}
                              transitions={this.state.transitions} // comment out this line to use default transitions
                              // nav={<Nav />}
                          >
                              <First update={this.updateForm} />
                              
                              <Second form={this.state.form} />
                              <Progress />
                              <Third update={this.updateForm} />
                              <Last />
                          </StepWizard>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

/**
* Stats Component - to illustrate the possible functions
* Could be used for nav buttons or overview
*/
const Stats = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step,
}) => (
  <div>
      <hr />
      { step > 1 &&
          <button className='btn btn-default btn-block' onClick={previousStep}>Go Back</button>
      }
      { step < totalSteps ?
          <button className='btn btn-primary btn-block' onClick={nextStep}>Continue</button>
          :
          <button className='btn btn-success btn-block' onClick={nextStep}>Finish</button>
      }
      <hr />
      <div style={{ fontSize: '21px', fontWeight: '200' }}>
          <h4>Other Functions</h4>
          <div>Current Step: {currentStep}</div>
          <div>Total Steps: {totalSteps}</div>
          <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
          <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
          <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
      </div>
  </div>
);

/** Steps */

class First extends Component {
  update = (e) => {
      this.props.update(e.target.name, e.target.value);
  }

  render() {
      return (
          <div>
              <h3 className='text-center'>Welcome! Have a look around!</h3>

              <label>First Name</label>
              <input type='text' className='form-control' name='firstname' placeholder='First Name'
                  onChange={this.update} />
              <Stats step={1} {...this.props} />
          </div>
      );
  }
}

class Second extends Component {
  validate = () => {
      if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
          this.props.previousStep();
      }
  }

  render() {
      return (
          <div>
              { this.props.form.firstname && <h3>Hey {this.props.form.firstname}! 👋</h3> }
              I've added validation to the previous button.
              <Stats step={2} {...this.props} previousStep={this.validate} />
          </div>
      );
  }
}

class Third extends Component {
  validate = () => {
      if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
          this.props.previousStep();
      }
  }

  render() {
      return (
          <div>
              
              passo 2
              <Stats step={3} {...this.props} previousStep={this.validate} />
          </div>
      );
  }
}
class Progress extends Component {
  state = {
      isActiveClass: '',
      timeout: null,
  }
  componentDidUpdate() {
      const { timeout } = this.state;
      if (this.props.isActive && !timeout) {
          this.setState({
              isActiveClass: 'active',
              timeout: setTimeout(() => {
                  this.props.nextStep();
              }, 3000),
          });
      } else if (!this.props.isActive && timeout) {
          clearTimeout(timeout);
          this.setState({
              isActiveClass: '',
              timeout: null,
          });
      }
  }
  render() {
      return (
          <div className={'progress-wrapper'}>
              <p className='text-center'>Automated Progress...</p>
              <div className={`${this.state.isActiveClass}`}>
                  <div className={`progress-bar-striped`} />
              </div>
          </div>
      );
  }
}
class Last extends Component {
  submit = () => {
      alert('You did it! Yay!') // eslint-disable-line
  }
  render() {
      return (
          <div>
              <div className={'text-center'}>
                  <h3>This is the last step in this example!</h3>
                  <hr />
              </div>
              <Stats step={4} {...this.props} nextStep={this.submit} />
          </div>
      );
  }
}
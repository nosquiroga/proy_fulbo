import React from 'react';
import Calendar from 'rc-calendar';
import ReactDOM from 'react-dom';
import esES from 'rc-calendar/lib/locale/es_ES';
import 'rc-calendar/assets/index.css';
import PropTypes from 'prop-types';
import DatePicker from 'rc-calendar/lib/Picker';
//import 'rc-time-picker/assets/index.css';

import moment from 'moment';
import 'moment/locale/es-us';


const format = 'DD/MM/YYYY HH:mm:ss';

const now = moment();

function getFormat(time) {
  return time ? format : 'DD/MM/YYYY';
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');


function disabledTime(date) {
  console.log('disabledTime', date);
  if (date && (date.date() === 15)) {
    return {
      disabledHours() {
        return [3, 4];
      },
    };
  }
  return {
    disabledHours() {
      return [1, 2];
    },
  };
}


function disabledDate(current) {
  if (!current) {
    // allow empty select
    return false;
  }
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.valueOf() < date.valueOf();  // can not select days before today
}


class Calendario extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.object,
        defaultCalendarValue: PropTypes.object,
      }
    
    constructor(props) {
        super(props);
    
        this.state = {
          showTime: false,
          showDateInput: false,
          disabled: false,
          value: props.defaultValue,
        };
    }

    onChange = (value) => {
        console.log('DatePicker change: ', (value && value.format(format)));
        this.setState({
          value,
        });
      }
    
      onShowTimeChange = (e) => {
        this.setState({
          showTime: e.target.checked,
        });
      }
    
      onShowDateInputChange = (e) => {
        this.setState({
          showDateInput: e.target.checked,
        });
      }
    
      toggleDisabled = () => {
        this.setState({
          disabled: !this.state.disabled,
        });
      }
    

    render() {
        const state = this.state;
        const calendar = (<Calendar
          locale={esES}
          style={{ zIndex: 1000 }}
          dateInputPlaceholder="please input"
          formatter={getFormat(state.showTime)}
          disabledTime={state.showTime ? disabledTime : null}
          timePicker={null}
          defaultValue={this.props.defaultCalendarValue}
          showDateInput={state.showDateInput}
          //disabledDate={disabledDate}
            />);

        return (<div>
          <div style={{
            boxSizing: 'border-box',
            position: 'relative',
            display: 'block',
            lineHeight: 1.5,
            marginBottom: 22,
          }}
          >
            <DatePicker
              animation="slide-up"
              disabled={state.disabled}
              calendar={calendar}
              value={state.value}
              onChange={this.onChange}
            >
              {
                ({ value }) => {
                  return (
                    <span tabIndex="0">
                    <input
                      placeholder="please select"
                      disabled={state.disabled}
                      readOnly
                      tabIndex="-1"
                      className="form-control ant-calendar-picker-input ant-input"
                      value={value && value.format(getFormat(state.showTime)) || ''}
                    />
                    </span>
                  );
                }
              }
            </DatePicker>
          </div>
        </div>);
    }
}

export default Calendario;
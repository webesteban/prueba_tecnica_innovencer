class ScheduleFormDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 'monday',
      hour: 0,
      minute:  0,
      quote:  0,

    }
  }

  handleChange = (evt)=>  {
    const value = evt.target.value;
    if(this.state[evt.target.name] !== value) {
      this.setState({
        ...this.state,
        [evt.target.name]: value
      });
    }
  }

  saveDay = () => {
    const {handleSaveDay} = this.props
    const {day, hour, minute, quote} = this.state
    if(this.validationDay(hour, minute)) {
      handleSaveDay(day, hour, minute, quote)
    }
  }

  cancelCreate = () => {
    this.setState({day: 'monday', hour: 0, minute: 0, quote: 0})
    const {handleCloseForm} = this.props
    handleCloseForm()
  }

  validationDay = (hour, minute) => {
    if ((hour>= 0 && hour <= 23) && (minute>= 0 && minute <= 59)) {
      return true
    }
    alert("El formato de horas o minutos esta incorrecto!")
    return false
  }

  render() {
    const {day, hour, minute, quote} = this.state
    return (
      <div className="row">
        <div className="col-3">
          <div className="form-group">
            <label htmlFor="start_date">Día:</label>
            <select name="type_field" className="form-control" value={day} name="day"  onChange={this.handleChange}>
              <option value="monday">Lunes</option>
              <option value="tuesday">Martes</option>
              <option value="wednesday">Miercoles</option>
              <option value="thursday">Jueves</option>
              <option value="friday">Viernes</option>
              <option value="saturday">Sabado</option>
              <option value="sunday">Domingo</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="form-group">
            <label htmlFor="hours">Hora:</label>
            <input type="number" max="23" className="form-control" id="hours" name="hour"  value={hour} placeholder="Hora" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-2">
          <div className="form-group">
            <label htmlFor="minutes">Min:</label>
            <input type="number" max="59" className="form-control" name="minute"  value={minute} id="minutes" placeholder="Minutos" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-2">
          <div className="form-group">
            <label htmlFor="minutes">Cupos:</label>
            <input type="number" className="form-control" id="minutes" name="quote"  value={quote} placeholder="Cupos" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-info btn-sm mt-2" onClick={this.saveDay}>
            Guardar
          </button>
          <button type="button" className="btn btn-danger btn-sm mt-2" onClick={this.cancelCreate}>
            Cancelar
          </button>
        </div>
      </div>
    )
  }
}
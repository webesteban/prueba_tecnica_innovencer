class ScheduleForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      days: []
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

  handleSaveSchedule= () => {
    if (this.validateSchedule()) {
      this.createSchedule()
    }

  }

  validateSchedule = () => {

    const {startDate, endDate, days } = this.state;

    if (moment(startDate).isAfter(endDate)) {
      alert("La fecha de Inicio debe ser menor a la Fecha de Finalizacion")
      return false
    }

    const dateNow = moment().format('YYYY-MM-DD')

    if (moment(dateNow).isAfter(startDate) || moment(dateNow).isAfter(endDate)) {
      alert("La fecha de Inicio o Fecha de Finalizacion debe ser mayores a la fecha actual")
      return false
    }

    if (days.length <= 0) {
      alert("Debes agregar al menos un día")
      return false
    }

    return true

  }

  createSchedule = () => {

    const {startDate, endDate, days } = this.state;
    $.ajax({
      url: `/api/schedules/`,
      method: 'POST',
      data: {
        schedule:  {
          start_date: startDate,
          end_date: endDate,
        },
        schedule_days: JSON.stringify(days)

      },
      success: function (data) {
        alert( data['msg'] );
        window.location.reload(false);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText);
      }


    })
  }

  handleUpdateDays = (days) => {
    this.setState({days: days})
  }

  render() {
    const {startDate, endDate } = this.state;
    return (
      <div className="row p-5 mt-5">
        <div className="col-4">
          <div className="form-group">
            <label htmlFor="start_date">Fecha de Inicio:</label>
            <input type="date" className="form-control" name="startDate" id="start_date" value={startDate} placeholder="Fecha de Inicio" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label htmlFor="start_date">Fecha de Finalizacion:</label>
            <input type="date" className="form-control" name="endDate" id="end_date" value={endDate} placeholder="Fecha de Finalizacion" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-warning " onClick={this.handleSaveSchedule}>
            Crear Horario
          </button>
        </div>
        <div className="col-10">
          <ScheduleListDays handleUpdateDays={this.handleUpdateDays} />
        </div>
      </div>
    )
  }
}
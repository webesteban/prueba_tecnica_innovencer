class ScheduleListDays extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      days: [],
      enableCreateDay: false
    }
  }

  handleSaveDay = ( day, hour, minute, quote) => {
    const {days} = this.state;
    const {handleUpdateDays} = this.props;
    console.log( day, hour, minute, quote);
    if(!this.validationDay(day, hour, minute, quote)) {
      days.push({day: day, hour: hour , minute: minute, quote: quote});
      handleUpdateDays(days)
      this.closeFormCreate()
    } else {
      alert("El Horario ya esta creado")
    }
  }

  validationDay(day, hour, minute, quote) {
    const {days} = this.state;
    const dayFounds = days.filter(d => (d.day == day && d.hour == hour &&  d.minute == minute && d.quote == quote) )
    return dayFounds.length > 0
  }

  closeFormCreate = () => {
    this.setState({enableCreateDay: false})
  }

  openFormCreate = () => {
    this.setState({enableCreateDay: true})
  }

  render() {
    const {enableCreateDay, days} = this.state;
    return (
      <div>
        <div className="row mt-4">
          {!enableCreateDay ?
            (
              <div className="col-3">
                <button type="button" className="btn btn-danger btn-sm" onClick={this.openFormCreate}>
                  Agregar Día
                </button>

              </div>
            ):
            (
              <ScheduleFormDay handleSaveDay={this.handleSaveDay} handleCloseForm={this.closeFormCreate} />
            )
          }
        </div>
        {
          days.map((day, index) => {
            return (
              <ScheduleDayItem key={index} day={day}/>
            )
          })
        }
      </div>
    )
  }
}
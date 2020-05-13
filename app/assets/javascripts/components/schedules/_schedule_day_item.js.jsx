class ScheduleDayItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const {day} = this.props
    return (
        <div className="row mt-4">
          <div className="col-3">

              <span className="font-weight-bold">Dia:</span>
              <span className="font-weight-normal ml-3">{day.day}</span>


          </div>
          <div className="col-3">
            <span className="font-weight-bold">Hora:</span>
            <span className="font-weight-normal ml-3">{day.hour}:{day.minute}</span>
          </div>
          <div className="col-3">
            <span className="font-weight-bold">Cupos:</span>
            <span className="font-weight-normal ml-3">{day.quote}</span>
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-danger btn-sm" onClick={this.newFieldStep}>
              x
            </button>
          </div>

        </div>
    )
  }
}
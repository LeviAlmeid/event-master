import './style.scss'

export function Event(props) {
  var date = props.date;
  function getmonth() {
    let dat = new Date(date);
    dat = dat.getUTCMonth() + 1;
    var mon = ''

    switch (dat) {
      case 1:
        mon = "Jan";
        break;
      case 2:
        mon = "Fev";
        break;
      case 3:
        mon = "Mar";
        break;
      case 4:
        mon = "Abr";
        break;
      case 5:
        mon = "Mai";
        break;
      case 6:
        mon = "Jun";
        break;
      case 7:
        mon = "Jul";
        break;
      case 8:
        mon = "Ago";
        break;
      case 9:
        mon = "Set";
        break;
      case 10:
        mon = "Out";
        break;
      case 11:
        mon = "Nov";
        break;
      case 12:
        mon = "Dez";
        break;

    }

    return (
      <span className='text-danger'>{mon}</span>

    )
  }
  function getDat() {
    let dat = new Date(date);
    dat = dat.getDate() + 1
    return (
      <span className='text-body'>{dat}</span>

    )
  }


  function isExistsPicture() {
    if (props.linkPicture != "") {
      return (
        <div class="cont-picture">
          <img src={props.linkPicture} />
        </div>
      )
    } else {
      return (
        <div class="cont-picture ">
          <div className='d-flex descrip p-3 text-center align-items-center justify-content-center '>

            <h5 className='border border-danger p-4 rounded'>{props.description}</h5>
          </div>
        </div>
      )
    }
  }

  function isEditable() {
    if (props.options != "") {
      return (
        <div className='d-flex flex-column align-items-center '>
          <button type='button' className='border-0 bg-transparent '>
            <i class="bi bi-pen  bg-info p-1 rounded-circle"></i>
          </button>
          <button type='button' className='border-0 bg-transparent mt-1'>
            <i class="bi bi-trash-fill bg-danger p-1 rounded-circle"></i>
          </button>
        </div>
      )
    }
  }

  return (
    <div class="agendas bg-secondary bg-opacity-10">
      {isExistsPicture()}
      <div class="footer px-3 py-2 h-2 d-flex align-items-center ">
        <div className='featured-date d-flex flex-column bg-white  rounded align-items-center'>
          {getmonth()}
          {getDat()}
        </div>
        <div class="w-75 d-flex flex-column align-items-center">
          <h5>{props.name}</h5>
          <p>{props.start} - {props.finish}</p>
        </div>
        {isEditable()}

      </div>
    </div>

  )
}
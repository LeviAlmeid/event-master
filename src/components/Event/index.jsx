import './style.scss'

export function Event(props){
  return(
      <div class="agendas bg-secondary bg-opacity-10">
              
              <div class="cont-picture">
                <img src="https://picsum.photos/seed/picsum/500/300" alt="Imagem do evento" />
              </div>
              <div class="footer px-3 py-2 h-2 d-flex align-items-center ">
                <div className='featured-date d-flex flex-column bg-white  rounded align-items-center'>
                    <span className='text-danger'>Jun</span>
                    <span className='text-body'>25</span>
                </div>
                <div class=" ms-4">
                <h5>{props.name}</h5>
              </div>
              </div>
            </div>

  )
}
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top '>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
         
          <a className='navbar-brand page-scroll' href='#page-top'>
            emOG NFT
          </a>{' '}
          <img className="mainImage" src="/img/icons/MAIN.png" alt="emoji" />
        
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
          data-toggle='collapse'
          toggle="collapse" data-target=".navbar-collapse"
          
        >
          <ul className='nav navbar-nav navbar-right' toggle='collapse'>
            {/* <li>
              <a href='#' >
                Opensea
              </a>
            </li> */}
            <li>
              <a href='https://opensea.io/collection/emognft' target="_blank" rel="noreferrer">
                Buy on Opensea
              </a>
            </li>
            <li>
              <a href='#info' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>           
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            {/* <li>
              <a href='#about' className='page-scroll'>
                Shop
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

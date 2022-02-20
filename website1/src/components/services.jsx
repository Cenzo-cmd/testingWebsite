export const Services = (props) => {
  return (
    
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Join Us and Let Freedom Ring</h2>
          {/* <p>
          
          </p> */}
        </div>
        <div className='row'>
            <div className='col-md-6'>
            <a href="https://discord.gg/RKjsYfRbJg" target="_blank" rel="noreferrer">
                  <i className="fab fa-discord"></i>
                    </a>
                    <h3>Discord</h3>
                    <p>Jump in our community and give us a 👋</p>
            </div>
            <div className='col-md-6'>
            <a href="https://twitter.com/FreedoMojis" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter"></i>
                    </a>
                    <h3>Twitter</h3>
                    <p>Let's spread the word, one Tweet at a time 🐦</p>
            </div>  
        </div>
      </div>
    </div>
  )
}

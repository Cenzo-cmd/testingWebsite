export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Team & Story</h2>
          <p>
          I’m Vincent and I, along with my 8-year-old daughter, created emOG. While
showing her the Crypto Punks collection, my daughter asked, “Can we make a
collection of Pixel Art Emojis?” Immediately, the emOG idea was created. After
hours of laughing and drawing, we were able to put together a small collection of
layers and then generate random emoji images. This collaboration is yielding new
creations daily. Our intent is to donate to schools and youth programs that are in
need.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

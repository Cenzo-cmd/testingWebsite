export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Team & story</h2>
          <p>
            emOG was created by Vincent his 8 year old daughter.  I was showing my daughter the Crypto Punks collection and she asked "Can we make a collection of Pixel Art Emoji's?".  Immediately the emOG idea was created.  After hours of laughing and drawing, we were able to put togeather a small collection of layers which we were able to generate into random emoji images.  Add to story here......
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

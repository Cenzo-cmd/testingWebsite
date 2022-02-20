export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>How are FREEDOMojis created?</h2>
          <p>There are 6 layers to each FREEDOMoji.  Each layer has multiple traits options but each FREEDOMoji will randomly receive 1 trait per layer.  There are over 100 different traits which will make each NFT unique to the collection.</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4 col-lg-2'>
                  {' '}

                  <img src={d.img} alt={d.title} className='layerImg' />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <br/>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

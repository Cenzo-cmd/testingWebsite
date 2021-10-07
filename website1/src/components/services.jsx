export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Join Our Community</h2>
          <p>
          Community is the heart of our project. Join us in our Discord and on Twitter to
nominate a school or youth program for donations, provide feedback,
collaborate, enter our giveaways, and interact with other members. The creator
will be in the Discard channel, #chat-with-creator, every Monday-Friday, 11am-
6pm EST.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

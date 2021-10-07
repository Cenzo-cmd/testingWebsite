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
will be in the Discard channel, #chat-with-creator, to answer any questions.
          </p>
        </div>
        <div className='row'>
            <div className='col-md-6'>
            <a href="https://www.discord.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-discord"></i>
                    </a>
                    <h3>Discord</h3>
                    <p>Are you an emOG fan!?  Join the discussion in our discord channel.</p>
            </div>
            <div className='col-md-6'>
            <a href="https://twitter.com/emOG_NFT" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter"></i>
                    </a>
                    <h3>Twitter</h3>
                    <p>Let's spread the word, one Tweet at a time.</p>
            </div>  
        </div>
      </div>
    </div>
  )
}

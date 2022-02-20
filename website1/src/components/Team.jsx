export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Team & Story</h2>
          <p>
          All of the art was created by my 8 year old daughter and I.  In November, I showed my daughter the CryptoPunk collection and the first question she asked was if we could make a pixel art emoji collection.  This idea immediately motivated me do dive into solidity and understand how smart contracts work so I could start developing and building in this space. I am very passionate about the NFT community and am looking forward to growing in this space.  If you do not agree with this cause and project, I respect your beliefs and believe we can agree, to disagree and be civil adults.  The question is, how will I get labeled when others don't agree with my project and beliefs?  Time will tell.  I appreciate you all and let FREEDOM RING!          
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

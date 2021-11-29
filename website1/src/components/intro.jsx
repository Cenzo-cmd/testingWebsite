export const Intro = (props) => {
    
    return (
    
      <div id="info">
        <div className="container introCont">
          <div className="row">
            {/* <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.png" className="img-responsive" alt="" />{" "}
            </div> */}
            <div className="col-xs-12 col-md-12 col-lg-12">
              <div className="section-title text-center">
                <h2>What are emOG's?</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                {/* Mission statememnt below */}
                {/* <h2>Mission</h2>
                <p>{props.data ? props.data.secondP : "loading..."}</p> */}
                {/* <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
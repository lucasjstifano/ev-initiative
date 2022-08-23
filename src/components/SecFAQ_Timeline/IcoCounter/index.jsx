import { useEffect } from "react";
import { SlideCountdown } from "react-fancy-countdown";
import { Line } from "rc-progress";

const IcoCounter = () => {
  useEffect(() => {
    let PathProgs = document.querySelector(".rc-progress-line-trail");
    PathProgs.setAttribute("stroke", "transparent");
  }, []);

  return (
    <div className="ico-counter">
      <div className="counter-down">
        <div className="content">
          <div className="conuter-header">
            <h3 className="text-center mb-30">EVI TOKEN PRESALE</h3>
          </div>
          <div className="counterdown-content">
            <div className="count-down titled circled text-center">
              <SlideCountdown
                className=" tab-metr"
                deadline="2022-7-31 00:00:00"
              />
            </div>
            <div className="ico-progress">
              <ul className="list-unstyled list-percent list-inline clearfix mb-10">
                <li className="title">33m</li>
                <li className="strength">75m</li>
              </ul>
              <div className="current-progress">
                <Line
                  percent="70"
                  trailWidth="4"
                  strokeWidth="4"
                  strokeColor="#11bf1f"
                />
              </div>
              <span className="pull-left">Token Softcap</span>
              <span className="pull-right">Token Hardcap</span>
            </div>
            <div className="mt-60"></div>
            {/* <div className="text-center">
              <a href="/" className="counter-button mt-60">
                Buy More Tokens
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcoCounter;

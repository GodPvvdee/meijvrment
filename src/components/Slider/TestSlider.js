import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import imgHeader from "../../assets/image/png/cover 1.jpg";
import imgHeader2 from "../../assets/image/png/cover 4.jpg";
import imgHeader3 from "../../assets/image/png/Cover 3.jpg";

const slider = (props) => {
  const styles = (
    <style jsx>{`
      .aws-btn {
        --slider-height-percentage: 100%;
        --slider-transition-duration: 100ms;
        --organic-arrow-thickness: 4px;
        --organic-arrow-border-radius: 0px;
        --organic-arrow-height: 40px;
        --organic-arrow-color: #26456f;
        --control-button-width: 10%;
        --control-button-height: 25%;
        --control-button-background: transparent;
        --control-bullet-color: #2d5182;
        --control-bullet-active-color: #26456f;
        --loader-bar-color: #851515;
        --loader-bar-height: 6px;
      }
    `}</style>
  );
  return (
    <>
      <AutoplaySlider
        style={{ height: `${props.height}` }}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        transitionDelay={2000}
        interval={1000}
        cssModules={styles}
        onTransitionEnd={() => console.log("hello")}
        buttons={false}
        bullets={false}
      >
        <div data-src={imgHeader}></div>
        <div data-src={imgHeader2}></div>
        <div data-src={imgHeader3}></div>
      </AutoplaySlider>
    </>
  );
};

export default slider;

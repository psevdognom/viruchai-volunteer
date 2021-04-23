import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CandidateCard from "../../shared-components/CandidateCard";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Slick = () => (
    <Slider {...settings} className={"p-4 column"}>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
        <div>
            <CandidateCard/>
        </div>
    </Slider>
)

export default Slick
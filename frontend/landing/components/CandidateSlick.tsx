import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CandidateCard from "./CandidateCard";
import {Candidate} from "../interfaces/interfaces";

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

interface Props {
    candidates: Candidate[]
}

const CandidateSlick = ({candidates}: Props) => (
    <Slider {...settings} className={"p-4 column"}>
        { candidates.map(candidate =>
            <div>
                <CandidateCard candidate={candidate}/>
            </div>
        )}

    </Slider>
)

export default CandidateSlick
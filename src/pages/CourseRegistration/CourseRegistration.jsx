import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '../../utils/courses';
import "./CourseRegistration.css"
import '../Web-App-Development.css';
import BookDemo from '../BookDemo';
import EnrollForm from '../../components/EnrollForm/EnrollForm';

const CourseRegistration = () => {
    const [data, setData] = useState({});
    const whyChooseRef = useRef(null)
    const { courseId } = useParams()
    useEffect(() => {
        const selectedCourse = coursesData?.find((item) => item?.slug?.toLowerCase() == courseId?.toLowerCase())
        setData(selectedCourse)
    }, [courseId]);

    const handleKnowMoreClick = () => {
        if (whyChooseRef.current) {
            whyChooseRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isPopup, setIsPopup] = useState(false);

    const handleClose = () => {
        setIsPopup(false);
    };

    if (!data?.isAvail) {
        return (
            <>
                <div className="web-app-development">
                    <h1 dangerouslySetInnerHTML={{ __html: data?.name }} />
                    <h2>{data?.description}</h2>
                    <p>We are updating soon !</p>
                </div>
                <div className="book">
                    <BookDemo />
                </div>
            </>

        )
    }

    return (
        <div>
            <div className="Cyber-Security">
                <div className="Cyber-Security-Contents">
                    <div className='Cyber-Security-Content' >
                        <h1 dangerouslySetInnerHTML={{ __html: data?.name }} />
                        <h2>{data.description}</h2>
                        <div className="details">
                            <div className="detail">
                                <i className="icon-doc"></i>
                                <span>{data.module}</span>
                            </div>
                            <div className="detail">
                                <i className="icon-calendar"></i>
                                <span>{data.duration}</span>
                            </div>
                            <div className="detail">
                                <i className="icon-globe"></i>
                                <span>{data.type}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="enroll" onClick={() => setIsPopup(true)} >Enroll Now</button>
                            <button className="know-more" onClick={handleKnowMoreClick} >Know More <span className='sp'>↓</span></button>
                        </div>
                    </div>
                    <div className='Cyber-Security-Content' >
                        <div className="team">
                            <img src={data?.image} alt="" />
                            {/* <div className="member" style={{ backgroundImage: `url(${data?.image})` }}></div> */}
                        </div>
                    </div>
                </div>

                {/* New content */}
                <div className="why-choose-section" ref={whyChooseRef} >
                    <h2 dangerouslySetInnerHTML={{ __html: data?.info?.question }} />
                    <div className="content-wrapper">
                        <div className="description">
                            <p>{data?.info?.answer}</p>
                            <button className="start-learning">Start Learning Now →</button>
                        </div>
                    </div>
                </div>
            </div>
            {isPopup && <EnrollForm data={data?.name} onClose={handleClose} />}
        </div>
    )
}

export default CourseRegistration
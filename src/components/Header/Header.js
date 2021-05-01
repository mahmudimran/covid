import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
const Header = (props) => {
    console.log(props)
    return (
       
  


        <div>
            <div>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://www.tulsa-health.org/sites/default/files/styles/fhd/public/2020-09/GettyImages-1215392772.jpg?itok=aOUQtP4J"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Global Coronavirus</h3>
                <p>  Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://olesnicainfo.pl/wp-content/uploads/2020/03/koronawiruscoronavirus-4914026_1920-20200314-1280x720.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Global Coronavirus</h3>
                <p>  Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://news.cgtn.com/news/2020-06-01/Building-a-better-post-pandemic-world-for-our-children-QYrQm3dtoQ/img/a9487aaeec084921abe8954b21c9af08/a9487aaeec084921abe8954b21c9af08.jpeg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Global Coronavirus</h3>
                <p>  Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>

        </div>
        
    );
};

export default Header;
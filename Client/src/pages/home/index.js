import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import Topic from "./components/Topic";
import { actionCreators } from './store';
import { Link } from "react-router-dom";
import { HomeWrapper, HomeLeft } from "./style";
import Button from 'react-bootstrap/Button'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption'
class Home extends PureComponent {
    // handleScrollTop() {
    //     window.scrollTo(0, 0);
    // }
    render() {
        return (
            <div>
                {/*// style={{*/}
                {/*//     height: 800,*/}
                {/*//     backgroundImage: "url(" + require("../../statics/background.jpg") + ")"}}>*/}

                <HomeWrapper>
                    <HomeLeft style={{ display: "block" }}>
                        <Figure>
                            <Figure.Image
                                fluid
                                alt="171x180"
                                src="https://cdn.onebauer.media/one/media/5d94/d7c8/c11f/b27f/c031/c3fc/mcu-endgame-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
                            />
                            <Figure.Caption>
                                Welcome to Marvel Cinematic Universe
                            </Figure.Caption>
                        </Figure>
                        {/* <img className='banner-img' alt=''
                            src="https://cdn.onebauer.media/one/media/5d94/d7c8/c11f/b27f/c031/c3fc/mcu-endgame-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" /> */}
                        {/* <Image src="https://cdn.onebauer.media/one/media/5d94/d7c8/c11f/b27f/c031/c3fc/mcu-endgame-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" fluid /> */}

                        <div>
                            <Link to='/quiz'>
                                <Button variant="dark" className='writing' size="lg">
                                    Pick Your Ideal Marvel Boyfriend/Girlfriend!
                            </Button>
                            </Link></div>
                        <Topic />

                    </HomeLeft>


                    {/*{this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Back to Top</BackTop> : null}*/}

                </HomeWrapper>
            </div>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    },
    changeUser() {
        dispatch(actionCreators.getRandomUser());
    }
});

export default connect(mapState, mapDispatch)(Home);

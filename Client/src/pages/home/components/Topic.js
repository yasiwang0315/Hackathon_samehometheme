import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';

class Topic extends PureComponent {

    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                                <TopicItem key={item.get('id')}>
                                    {/* <Image src={item.get('imgUrl')} alt="" /> */}
                                    {/* <Col xs={6} md={4}>
                                        <Image src={item.get('imgUrl')} alt="" responsive />
                                    </Col> */}
                                    <img alt=''
                                        className='topic-pic'
                                        src={item.get('imgUrl')} />
                                    {item.get('title')}
                                </TopicItem>
                            </Link>
                        )
                    })
                }
            </TopicWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
});


export default connect(mapState, null)(Topic);

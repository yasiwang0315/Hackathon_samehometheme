import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper
} from './style';
import { Link } from "react-router-dom";

class Header extends PureComponent {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = []

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Hot Characters
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
                            Change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <Link to='/main'>
                        <NavItem className='left active'>Main</NavItem>
                    </Link>
                    <Link to='/search'>
                        <NavItem className='left'>Detail</NavItem>
                    </Link>
                    {/* {
                        login ?
                            <NavItem className='right' onClick={logout}>Log out</NavItem> :
                            <Link to='/login'>
                                <NavItem className='right'>Log in</NavItem>
                            </Link>
                    } */}

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                {/* <Addition>
                    <Link to='/quiz'>
                        <Button className='writing'>
                            Take a quiz
                        </Button>
                    </Link>
                    <Link to='/write'>
                        <Button className='reg'>Sign up</Button>
                    </Link>
                </Addition> */}
            </HeaderWrapper>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused') // 跟上面是一样的
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) { //避免多次无意义的Ajax发送
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }
            else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

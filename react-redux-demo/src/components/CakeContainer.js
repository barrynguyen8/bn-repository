import React from 'react'

import { connect } from 'react-redux'
import { buyCake } from '../redux' //action creator 

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => { //maps state from redux store to component props
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => { //maps dispatch of an action creator to component prop
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)


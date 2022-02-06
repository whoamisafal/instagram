import React, { useEffect } from "react";



class PopupMessage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            message: this.props.data.message,
            title: this.props.data.title,
            status: this.props.data.status,
            isShow: true,
            toggle: () => { },
            isMounted: true
        }

    }

    componentDidMount() {
        if(this.state.isMounted)
        setTimeout(() => {

            this.setState({
                isShow: false
            })
            this.state.toggle()


        }, 4000)

    }
    onComponentUpdate(){
        this.setState({
            isMounted:true
        })
    }
    componentWillUnmount() {
        this.setState({
            isMounted: false
        })
    }

    render() {
        if (!this.state.isShow) {
            return <div className="popup-message-hide"></div>
        }

        return <>
            <div className={"popup-message-show"}>
                <h3>{this.state.title}</h3>
                <p>
                    {this.state.message}
                </p>
            </div>

        </>
    }



}

export function PopupViewPost(props) {
    let url = props.url
    let [isShow, setIsShow] = React.useState(true)
    let [counter, setCounter] = React.useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(counter + 1)
            if (counter >= 5) {
                setIsShow(false)
                clearInterval(interval)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [counter])


    if (!isShow) {
        return <div className="popup-view-post-container-disable"></div>
    }
    return <div className="popup-view-post-container-active">
        <a href={url} rel="noopener noreferrer" target="_blank">{"View post"}</a>
    </div>





}





export default PopupMessage
import React from "react";


class CreateStory extends React.Component {

    constructor(props) {
        super(props)


    }

    handleChange(e) {
        e.preventDefault()
       
    }


    render() {

        let style={
            
        }



        return <>
            <div className="create-post-container">

                <section className="create-post-section">
                    <h2>Create Story</h2>
                    <hr />

                    <div className="create-post-form">

                        <p>Select Photos and Videos </p>
                        
                        <label htmlFor="post-file">
                        Select

                        </label>

                        <input type="file" accept="image/*,video/*" hidden  name="post-file" id="post-file" onChange={this.handleChange}/>


                    </div>


                </section>


            </div>


        </>


    }



}

export default CreateStory
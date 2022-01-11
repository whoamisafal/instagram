import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/create-post.css';
import HOST_URL from "../proxy";
import Cookies from 'js-cookie'
import PopupMessage, { PopupViewPost } from "./pop-up-message";
import Toast from "./toast";


function FileViewer(props) {
    let removeFile = props.removeFile
    let file = props.file;
    let fileType = file.type;
    let style = {
        contentStyle: {
            position: 'relative',
            display: 'block',
            backgroundColor: 'rgba(14, 128, 173, 1)',
            borderRadius: '5px',
            boxShadow: "0px 0px 5px #ccc",
            padding: '0.35rem',
            cursor: 'pointer',
            userSelect: 'none',
            height: '150px',
            width: '150px',
            margin: '7px',

        },
        removeFile: {
            position: 'relative',
            float: 'right',
            top: '-20px',
            backgroundColor: 'rgba(14, 128, 173, 1)',
            borderRadius: '100%',
            boxShadow: "0px 0px 5px #ccc",
            padding: '0.35rem',
            cursor: 'pointer',
            userSelect: 'none',
            height: '15px',
            width: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            color: '#fff',
            fontWeight: 'bold',

        }
    }
    const remove = () => {
        removeFile(file)
    }


    if (fileType.includes('image')) {
        return (
            <div className="file-viewer-container" >

                <img src={URL.createObjectURL(file)} alt="" style={style.contentStyle} />
                <div className="remove-file" style={style.removeFile} onClick={remove}>&times;</div>
            </div>
        );
    } else if (fileType.includes('video')) {
        return (
            <div className="file-viewer-container" >

                <video src={URL.createObjectURL(file)} controls style={style.contentStyle}></video>
                <div className="remove-file" style={style.removeFile} onClick={remove}>&times;</div>
            </div>
        );
    }




}

function CreatePost(props) {
    let [selectedFile, setSelectedFile] = useState([]);
    let [caption, setCaption] = useState('');
    let [tags, setTags] = useState([]);
    let [isPosting, setIsPosting] = useState(false);
    let [progress, setProgress] = useState(0);
    let [isLoading, setIsLoading] = useState(false);
    let [isError, setIsError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [isSuccess, setIsSuccess] = useState(false);
    let [postUrl, setPostUrl] = useState('');

    let sfiles = []
    let [isMounted, setIsMounted] = useState(true);
    useEffect(() => {
        if (isMounted)
            for (let index = 0; index < selectedFile.length; index++) {
                sfiles.push(selectedFile[index])
            }
        return () => {
            if (!isMounted) {
                setIsMounted(false)
                sfiles = []
            }
        }
    }, [selectedFile])

    const handleChange = (e) => {

        let files = e.target.files;
        let currentFile = sfiles
        for (let i = 0; i < files.length; i++) {
            currentFile.push(files[i])
        }

        if (files.length > 12) {
            alert("You can select maximum 12 files")
            return
        }
        if (files.length > 0) {

            setSelectedFile(currentFile);
            setIsSuccess(false)
            setIsError(false)
            setIsLoading(false)
        }

    }
    const onChangeCaptionField = (e) => {
        let value = e.target.value
        setCaption(value)
        let patternForTags = /#[a-zA-Z0-9]+/g
        let tag = value.match(patternForTags)

        setTags(tag)


    }
    const removeFile = (file) => {

        let files = Array.from(selectedFile)
        let sf = files.filter(f => {

            return f !== file
        })

        setSelectedFile(sf)
    }

    const createPost = (e) => {
        e.preventDefault();
        let formData = new FormData();
        setIsPosting(true);
        for (let i = 0; i < selectedFile.length; i++) {
            formData.append('files', selectedFile[i]);
        }

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total);
                setProgress(percent);
            }
        }
        formData.append('caption', caption)
        formData.append('tags', tags)

        axios.post(HOST_URL + '/create-post/', formData, options).then(res => {
            if (res.status === 200) {
                let data = res.data
                if (data.status === 200) {
                    setIsSuccess(true)
                    setIsPosting(false);
                    setPostUrl(data.url)
                    setProgress(0);
                    setSelectedFile([]);
                    setCaption('');
                    setTags([]);
                } else {
                    setPostUrl('')
                    setIsError(true)
                    setErrorMessage(data.message)
                    setIsPosting(false);
                    setProgress(0);
                }
            }
        }).catch(err => {
            console.log(err);
        })

    }

    return <>
        {
            isSuccess ? <PopupViewPost url={postUrl} /> : null
        }
        {
            isSuccess ? <Toast message="Post created" /> : null
        }
        {
            isError ? <Toast message="Something wrong happened" /> : null
        }
        <div className="create-post-main-container">
            <div className="create-post-container">

                <section className="create-post-section">
                    <h2>Create Post</h2>
                    <hr />

                    <div className="create-post-form">

                        <p>Select Photos and Videos</p>

                        <label htmlFor="post-file" className="select-file">
                            Select
                        </label>

                        <input type="file" accept="image/*,video/*" multiple hidden name="post-file" id="post-file" onChange={handleChange} />
                    </div>
                </section>
                <section className="selected-file-viewer">
                    {
                        Array.from(selectedFile).map((file, index) => {
                            return <FileViewer file={file} key={index} removeFile={removeFile} />
                        })
                    }
                </section>
                <section className="create-caption">
                    <textarea className="caption-field" rows={5} maxLength={200} placeholder="Write a caption..."
                        value={caption}
                        onChange={onChangeCaptionField}
                    ></textarea>

                </section>
                <div className="progress-container">

                    {
                        isPosting ? <progress value={progress} max={100} /> : null
                    }
                </div>
                <section className="create-post-button-section">

                    <button onClick={createPost} className="create-post-btn" disabled={selectedFile.length > 0 ? false : true} >Post</button>
                </section>
            </div>
        </div>
    </>



}



export default CreatePost
import style from './AddFiles.module.css'
import React, { useState } from "react";

const Upload = () => {
    const [image, setImage] = useState('')




    const submitImage = () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset','i5hof6um ')
        data.append('cloud_name', 'dlqnb6csq')

        fetch ('https://api.cloudinary.com/v1_1/dlqnb6csq/image/upload',{
            method: 'post',
            body: data
        })
        .then ((res) =>res.json())
        .then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })

    }

    return(
        <div className={style.containerUpload}>
            <div>
                <div className={style.select}>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className={style.image}>
                { image ? <img alt="Preview" height="60" src={URL.createObjectURL(image)} /> : null }
                </div>
                <div className={style.button}>
                <button onClick={submitImage}>Upload</button>
                </div>
            </div>
        </div>
    )
};

export default Upload
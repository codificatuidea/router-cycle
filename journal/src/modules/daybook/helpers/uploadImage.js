import axios from 'axios'

const uploadImage = async(file) => {
    if (!file) return

    const formData = new FormData()
    formData.append('upload_preset', 'vue_demo')
    formData.append('file', file)

    const url = 'https://api.cloudinary.com/v1_1/depr3caic/image/upload'
    const { data } = await axios.post(url, formData)
    
    return data.secure_url

}

export default uploadImage
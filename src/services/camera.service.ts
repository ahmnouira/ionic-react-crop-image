import { Camera, CameraOptions, CameraOriginal } from '@ionic-native/camera';

const options: CameraOptions = {
    allowEdit: true,  // alow simple editing of the image before selection
    saveToPhotoAlbum: true,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
  }

export async function getPicture  () {

    try {
        const imageData  = await  Camera.getPicture(options)
         // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        return base64Image
    } catch (error) {
        console.error(error)
    }
}
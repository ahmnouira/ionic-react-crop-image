import { Camera, CameraOptions } from '@ionic-native/camera';

export enum PictureSourceType  {
        /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
        PHOTOLIBRARY  = 0,
        /** Take picture from camera */
        CAMERA = 1,
        /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
        SAVEDPHOTOALBUM = 2
}

export async function getPicture(source: PictureSourceType): Promise<string> {

    const options: CameraOptions = {
        allowEdit: true,                    //alow simple editing of the image before selection
        saveToPhotoAlbum: true,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: source,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
      }

    try {
        const imageData  = await  Camera.getPicture(options)
         // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        return imageData;
    } catch (error) {
        throw error
    }
}


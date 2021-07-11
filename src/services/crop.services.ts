import { Crop } from '@ionic-native/crop';

export async function cropPicture(path: string): Promise<string> {
    try {
        const cropedImage  = await  Crop.crop(path) 
        return cropedImage
    } catch (error) {
       throw error
    }
}
import {File} from '@ionic-native/file'

export const dataPath = File.dataDirectory

export async function copyFile  (path: any , fileName:any, newPath: any, newFilename: any)  {
    try {
     const  entryPoint  =    await   File.copyFile(path , fileName, newPath, newFilename)
        return entryPoint
    } catch (error) {
        throw error
    }
}
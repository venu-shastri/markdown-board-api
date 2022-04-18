import axios from "axios";
const isBrowser=typeof window!=="undefined";

export function getAllMarkerKeysFromStorage_local(inDocumentID) {

    if(!isBrowser){
        return;
    }
  const markerKeys = [ ];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`getAllMarkersFromStorage(): key=${key}`);
    // If this marker belongs to this document then add it to our markers object.
    if (key.startsWith(inDocumentID)) {
      markerKeys.push(key);
    }
  }
  console.log("getAllMarkersFromStorage(): markerKeys", markerKeys);
  return markerKeys;

} /* End getAllMarkerKeysFromStorage(). */


/**
 * Gets a specific marker from storage.
 *
 * @param  inKey The key of the marker.
 * @return       An object with all marker data.
 */
export function getMarkerFromStorage_local(inKey) {
    if(!isBrowser){
        return;
    }
  return JSON.parse(localStorage.getItem(inKey));

} /* End getMarkerFromStorage(). */


/**
 * Saves a marker to storage.
 *
 * @param inKey    The key of the marker.
 * @param inMarker An object containing all marker data.
 */

export function saveMarkerToStorage_local(inKey, inMarker) {
    if(!isBrowser){
        return;
    }
  localStorage.setItem(inKey, JSON.stringify(inMarker));

} /* End saveMarker */

export function getName(){
    if(!isBrowser){
        return;
    }
  return  localStorage.getItem("username");

}

export function setName(name){
    if(!isBrowser){
        return;
    }
    localStorage.setItem("username", name);
}



/**
 * Returns all the keys of markers for the specified document from storage.
 *
 * @param  inDocumentID The ID of the document.
 * @return              An array where each element is the key of a marker for the specified document.
 */
 export async function getAllMarkerKeysFromStorage(inDocumentID) {

    console.log("StorageManager.getAllMarkerKeysFromStorage()", inDocumentID);
  
    global.maskScreen(true);
    try {
      const res = await axios.get("/.netlify/functions/getAllMarkerKeysFromStorage",
        { params : { documentID : inDocumentID } }
      );
      console.log("getAllMarkersFromStorage(): res", res);
      console.log("getAllMarkersFromStorage(): res.data", res.data);
      global.maskScreen(false);
      return res.data;
    } catch (inError) {
      console.log("getAllMarkersFromStorage(): inError", inError);
      global.maskScreen(false);
      return [ ];
    }
  
  } /* End getAllMarkerKeysFromStorage(). */
  
  
  /**
   * Gets a specific marker from storage.
   *
   * @param  inKey The key of the marker.
   * @return       An object with all marker data.
   */
  export async function getMarkerFromStorage(inKey) {
  
    console.log("getMarkerFromStorage()", inKey);
  
    global.maskScreen(true);
    try {
      const res = await axios.get("/.netlify/functions/getMarkerFromStorage",
        { params : { key : inKey } }
      );
      console.log("getMarkerFromStorage(): res", res.data.data);
      global.maskScreen(false);
      return res.data.data;
    } catch (inError) {
      console.log("getMarkerFromStorage(): inError", inError);
      global.maskScreen(false);
      throw inError;
    }
  
  } /* End getMarkerFromStorage(). */
  
  
  /**
   * Saves a marker to storage.
   *
   * @param inKey      The key of the marker.
   * @param inMarker   An object containing all marker data.
   * @param inIsUpdate True if we're doing an update (when adding a comment).
   */
  export async function saveMarkerToStorage(inKey, inMarker, inIsUpdate) {
  
    console.log("saveMarkerToStorage()", inKey, inMarker);
  
    global.maskScreen(true);
    try {
      await axios.post("/.netlify/functions/saveMarkerToStorage", {
        key : inKey, marker : inMarker, isUpdate : inIsUpdate
      });
    } catch (inError) {
      console.log("saveMarkerToStorage(): inError", inError);
    }
    global.maskScreen(false);
  
  } /* End saveMarkerToStorage(). */
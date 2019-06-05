/** The Nlib library. */
const nlib = {
    // common functions.
    //? =============================
    //? Object manipulation methods.
    //? =============================
    /** Create New object with clone all properties with supports ignore case sensitive. */
    clone: (o, caseSensitive) => {
        let result = {}
        let ignoreCase = (caseSensitive) ? false : true;
        let keys = Object.keys(o);
        keys.forEach((key) => { result[(ignoreCase) ? key.toLowerCase() : key] = o[key]; });
        return result;
    },
    /** 
     * Set dest object's properties that match src object's property with case insensitive.
     * If dest property not exist in src obj and overwrite flag is set so null value is assigned
     * otherwise if overwrite flag is not set the original dest property will not changed.
     * */
    setValues: (dest, src, overwrite) => {
        let keys = Object.keys(dest);
        keys.forEach(key => {
            let dKey = key.toLowerCase();
            dest[key] = (!src[dKey]) ? (!overwrite) ? dest[key] : null : src[dKey];
        });
    }
}

/** The Nlib library. */
module.exports = exports = nlib;

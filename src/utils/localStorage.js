
export const savePreference = (key , value)=>{
    localStorage.setItem(key = JSON.stringify(value))
}


export const getPreference = (key, defaultValue)=>{
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue;

}



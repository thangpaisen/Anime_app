export const joinCategory = (genres)=>{
        var data=''
        genres?.forEach(item => {
            if (data) {
                data = data+', '+item.name
            }
            else
                 data =item.name
        })
        return data
    }
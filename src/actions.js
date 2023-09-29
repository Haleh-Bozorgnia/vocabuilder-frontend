import url from "./url";
import { redirect } from "react-router";

//Create Action
export const createAction = async ({request})=> {
    const formData = await request.formData()
    const newVocab = {
      vocab: formData.get("vocab"),
      translation: formData.get("translation"),
      pronounciation: formData.get("pronounciation"),
      type : formData.get("type")
    };
    await fetch(url,{
        method :"post", 
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(newVocab)

    })
    return redirect("/")
 
}

//Update Action 
export const updateAction = async ({request,params})=> {
    const id = params.id
    const formData = await request.formData();
    const updatedVocab = {
      vocab: formData.get("vocab"),
      translation: formData.get("translation"),
      pronounciation: formData.get("pronounciation"),
      type: formData.get("type"),
    };
    await fetch (url + id,{
        method :"put",
        headers : {
            "content-Type" : "application/json"
        },
        body : JSON.stringify(updatedVocab)
    })
    return redirect (`/post/${id}`)

}

//Delete Action
export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch (url + id,{
        method : "delete"
    })
    return redirect ("/")

}
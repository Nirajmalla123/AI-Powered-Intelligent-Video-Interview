import api from "./api";


export const resumeService = {


uploadResume: async(file: File)=>{

    const formData = new FormData();

    formData.append(
        "file",
        file
    );


    const response = await api.post(
        "/resume/upload",
        formData
    );


    return response.data;

},



getResume: async()=>{

    const response = await api.get(
        "/resume"
    );


    return response.data;

},



deleteResume: async()=>{

    const response = await api.delete(
        "/resume"
    );


    return response.data;

}


};
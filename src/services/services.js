import axiosConfig from './axiosConfig' ;

export const getSlideAnime = async ()=>{
    const res = await axiosConfig.get('/slide')
    return res.data.data;
}
export const getAnimeRecently = async ()=>{
    const res = await axiosConfig.get('/recently')
    return res.data.data;
}
export const getAnimeRecommended = async ()=>{
    const res = await axiosConfig.get('/recommended')
    return res.data.data;
}
export const getAnimeRanking = async (slug)=>{
    //slug :ngay, tuan, thang, nam
    const res = await axiosConfig.get(`/ranking/${slug}`)
    return res.data.data;
}
export const getAnimeDetails = async (slug)=>{
    //slug :ngay, tuan, thang, nam
    const res = await axiosConfig.get(`/anime/${slug}`)
    return res.data.data;
}
export const getAnimeEpisodes = async (animeId,episodesIndex)=>{
    //slug :ngay, tuan, thang, nam
    const res = await axiosConfig.get(`/anime/${animeId}/episodes/${episodesIndex}`)
    return res.data.data;
}

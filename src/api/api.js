const baseUrl = "https://rotarymidtown.org.np/admin/wp-json/wp/v2/";
import axios from "axios";

class APIService {
    getBoardMembers(){
        return axios.get(process.env.VUE_APP_BASE_URL + '/board-members?populate=*&sort=rank:asc')
    }

    getMembers(){
        return axios.get(process.env.VUE_APP_BASE_URL + '/members?populate=*&pagination[page]=1&pagination[pageSize]=100')
    }

    getSiteDetails(){
        return axios.get(process.env.VUE_APP_BASE_URL + '/site-detail?populate=*&sort=rank:asc')
    }

    getMessages(){
        return axios.get(process.env.VUE_APP_BASE_URL + '/messages?populate=*&sort=rank:asc')
    }

    getMessagesFromId(id){
        return axios.get(process.env.VUE_APP_BASE_URL + "/messages/"+id+'?populate=*')
    }


    getEvents() {
        return axios.get(baseUrl + 'events?per_page=100');
    }

    getSlider() {
        return axios.get(baseUrl + 'slider');
    }

    getMonths() {
        return axios.get(baseUrl + 'designated_months?per_page=100');
    }

    getNews() {
        return axios.get(baseUrl + 'news');
    }
    getNewsById(id) {
        return axios.get(baseUrl + 'news/' + id);
    }

    getVideos() {
        return axios.get(baseUrl + 'videos');
    }
    getFeaturedVideo() {
        return axios.get(baseUrl + "featured_video")
    }

    sendContactUs(data) {
        return axios.post("https://rotarymidtown.org.np/admin/wp-json/contact-form-7/v1/contact-forms/127/feedback", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

    }

    getPhotos() {
        return axios.get("https://rotarymidtown.org.np/admin/wp-json/wp/v2/year_category");
    }

    getCatwisePhotos(id) {
        return axios.get("https://rotarymidtown.org.np/admin/wp-json/wp/v2/rotary_year_photos?year_category=" + id);
    }

    getFlags(){
        return axios.get(baseUrl + "flags")
    }
    getMessagesFrom(){
        return axios.get(baseUrl + "messages_from")
    }
    getMessagesFromSlug(slug){
        return axios.get(baseUrl + "messages_from?slug="+slug)
    }
}

export default APIService
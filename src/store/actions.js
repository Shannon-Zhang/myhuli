import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9000';

// 获取new组件bannerList的数据
export function getBannerList({commit}) {
    axios.get('/bannerList').then((data)=>{
        console.log(data);
        commit('addBannerList', data.data);
    },(err)=>{
        console.log(err);
    });
}

// 获取newAry的数据
export function getNewAry({commit}) {
    axios.get('/new_content_partOne').then((data)=>{
        console.log(data);
        commit('addNewAry', data.data);
    },(err)=>{
        console.log(err);
    });
}

// 获取newAry2的数据
export function getNewAry2({commit}) {
    axios.get('/new_content_partTwo').then((data)=>{
        console.log(data);
        commit('addNewAry2', data.data);
    },(err)=>{
        console.log(err);
    });
}

// 获取profile组件profileList的数据
export function getProfileList({commit}) {
    axios.get('/profileList').then((data)=>{
        console.log(data);
        commit('addProfileList', data.data);
    },(err)=>{
        console.log(err);
    });
}

// 获取manage组件manageList的数据
export function getManageList({commit}) {
    axios.get('/manageList').then((data)=>{
        console.log(data);
        commit('addManageList', data.data);
    },(err)=>{
        console.log(err);
    });
}

// 获取home组件bannerList的数据
export function getHomeBannerList({commit}, option) {
    axios.get('/homeBannerList').then((data)=>{
        // console.log(33333);
        // console.log(data);
        commit('addHomeBannerList', data.data);
        // option && option(data.data);
    },(err)=>{
        console.log(err);
    });
}

// 获取home组件contentList的数据
export function getHomeContentList({commit}) {
    axios.get('/homeContentList').then((data)=>{
        console.log(data);
        commit('addHomeContentList', data.data);
    },(err)=>{
        console.log(err);
    });
}
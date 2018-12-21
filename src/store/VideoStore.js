import { observable, action } from "mobx";

class VideoStore {

  @observable shortVideoIndex = 0; //短视频索引页面

  
}

const videoStore = new VideoStore();
export { videoStore };
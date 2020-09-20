import {
    IronSource,
    IronSourceRewardedVideo,
    IronSourceOfferwall,
  } from '@wowmaking/react-native-iron-source';
import {user} from '../user/user';
class IronSourceController{
    IronSourceController(){
        this.componentDidMount();
    }

    state = {
        hasRewardedVideo: false,
      };
    
      componentDidMount() {
        // It’s recommended to set consent prior to SDK Initialization.
        IronSource.setConsent(true);
    
        //segment.setCustomValue('VALUE').forKey('KEY');
        //segment.setSegmentName('NAME');
        //segment.activate();
    
        IronSource.initializeIronSource('b36b0ff5', user?.id, {
          validateIntegration: false,
        }).then(() => {
          IronSourceRewardedVideo.addEventListener('ironSourceRewardedVideoAvailable', () => {
            this.state.hasRewardedVideo = true;
            console.warn('Rewarded video became available');
          });
          IronSourceRewardedVideo.addEventListener('ironSourceRewardedVideoUnavailable', () => {
            this.state.hasRewardedVideo = false;
          });
          IronSourceRewardedVideo.initializeRewardedVideo();
    
          IronSourceOfferwall.initializeOfferwall();
        });
      }

      showRewardedVideo = () => {
        if (!this.state.hasRewardedVideo) {
          console.warn('Rewarded video is not available');
        }
    
        const onClose = () => IronSourceRewardedVideo.removeAllListeners();
    
        IronSourceRewardedVideo.addEventListener('ironSourceRewardedVideoAdRewarded', res => {
          console.warn('Rewarded!', res);
        });
    
        IronSourceRewardedVideo.addEventListener('ironSourceRewardedVideoClosedByUser', onClose);
        IronSourceRewardedVideo.addEventListener('ironSourceRewardedVideoClosedByError', onClose);
    
        IronSourceRewardedVideo.isRewardedVideoAvailable().then((available) => {
          if (available) {
            IronSourceRewardedVideo.showRewardedVideo();
          } else {
            console.warn('No Video available');
          }
        });
      };

      showOfferwall = () => {
        IronSourceOfferwall.showOfferwall();
        IronSourceOfferwall.addEventListener('ironSourceOfferwallReceivedCredits', res => {
          console.warn('Got credits', res)
        });
      };
}

export default IronSourceController;
/*------------------------------------*
 * Author : Prashant Gaurav           *
 *------------------------------------*/
const userFeed = new Instafeed({
    get: 'user',
    userId: 'InstaUserID',
    clientId: 'YouClientID',
    accessToken: 'InstaAccessToken',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" ></img></a>',
    sortBy: 'most-recent',
    limit: false,  // you can limit no of post ie 6
    links: false
});
userFeed.run();


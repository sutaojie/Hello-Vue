import AV from 'leancloud-storage'

var APP_ID = 'BJshbxLEfGTo9jJxjKUCy3ji-gzGzoHsz';
var APP_KEY = 'bcbmn2kY7W1Yaw14H8WYRcVA';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  // 启用美国节点
  region: 'us'


});
export default AV
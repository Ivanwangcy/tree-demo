// this.$http.get('/user/getTree?userPin=USER_1') // 树信息
// this.$http.get('/user/getUnusedWater?userPin=USER_1') // 获取用户未使用的水
// this.$http.get('/user/getTreeGrowValue?userPin=USER_1') // 获取该树已经浇水的量
// this.$http.get('/user/getAwardsByCredits?credit=3') // 获取该树积分对应的礼品列表
// this.$http.get('/user/getFriendsInfo?userPin=USER_1') // 获取个人基本信息
// this.$http.get('/user/getStealWaterInfo?userPin=USER_1') // 用户偷水详情
// this.$http.get('/growUp/watering?userPin=USER_1&waterId=1')  // 点击水珠，浇水
// this.$http.get('/growUp/creditsConvertGoods?userPin=USER_1&fruitId=2') // 兑换礼物
this.$http.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2') // 偷水


export const stealWater = (context) => {
  return context.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2')
}

export const stealWater = (context) => {
  return context.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2')
}

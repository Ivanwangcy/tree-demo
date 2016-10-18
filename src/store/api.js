// this.$http.get('/user/getTree?userPin=USER_1') // 树信息
// this.$http.get('/user/getUnusedWater?userPin=USER_1') // 获取用户未使用的水
// this.$http.get('/user/getTreeGrowValue?userPin=USER_1') // 获取该树已经浇水的量
// this.$http.get('/user/getAwardsByCredits?credit=3') // 获取该树积分对应的礼品列表
// this.$http.get('/user/getFriendsInfo?userPin=USER_1') // 获取个人基本信息
// this.$http.get('/user/getStealWaterInfo?userPin=USER_1') // 用户偷水详情
// this.$http.get('/growUp/watering?userPin=USER_1&waterId=1')  // 点击水珠，浇水
// this.$http.get('/growUp/creditsConvertGoods?userPin=USER_1&fruitId=2') // 兑换礼物
// this.$http.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2') // 偷水


// this.$http.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2') // 偷水
// 偷水
export const stealWater = (context, options) => {

  return context.get(`
    /growUp/stealWater
    ?srcUserPin=${options.srcUserPin || 'USER_1'}
    &stolenUserPin=${options.stolenUserPin || 'USER_2'}
    &waterId=${options.waterId || 2}
  `)
}

// this.$http.get('/growUp/creditsConvertGoods?userPin=USER_1&fruitId=2') // 兑换礼物
// 兑换礼物
export const creditsConvertGoods = (context, options) => {

  return context.get(`
    /growUp/creditsConvertGoods
    ?userPin=${options.userPin || 'USER_1'}
    &fruitId=${options.fruitId || 2}
  `)
}

// this.$http.get('/growUp/watering?userPin=USER_1&waterId=1')  // 点击水珠，浇水
// 点击水珠，浇水
export const watering = (context, options) => {

  return context.get(`
    /growUp/watering
    ?userPin=${options.userPin || 'USER_1'}
    &waterId=${options.waterId || 2}
  `)
}

// 用户偷水详情
export const getStealWaterInfo = (context, options) => {

  return context.get(`
    /user/getStealWaterInfo
    ?userPin=${options.userPin || 'USER_1'}
  `)
}

// this.$http.get('/user/getFriendsInfo?userPin=USER_1') // 获取个人基本信息
// 获取个人基本信息
export const getFriendsInfo = (context, options) => {

  return context.get(`
    /user/getFriendsInfo
    ?userPin=${options.userPin || 'USER_1'}
  `)
}

// this.$http.get('/user/getAwardsByCredits?credit=3') // 获取该树积分对应的礼品列表
// 获取该树积分对应的礼品列表
export const getAwardsByCredits = (context, options) => {

  return context.get(`
    /user/getAwardsByCredits
    ?credit=${options.credit || 3}
  `)
}

// this.$http.get('/user/getTreeGrowValue?userPin=USER_1') // 获取该树已经浇水的量
// 获取该树已经浇水的量
export const getTreeGrowValue = (context, options) => {

  return context.get(`
    /user/getTreeGrowValue
    ?userPin=${options.userPin || 'USER_1'}
  `)
}

// this.$http.get('/user/getUnusedWater?userPin=USER_1') // 获取用户未使用的水
// 获取用户未使用的水
export const getUnusedWater = (context, options) => {

  return context.get(`
    /user/getUnusedWater
    ?userPin=${options.userPin || 'USER_1'}
  `)
}

// this.$http.get('/user/getTree?userPin=USER_1') // 树信息
// 树信息
export const getTree = (context, options) => {

  return context.get(`
    /user/getTree
    ?userPin=${options.userPin || 'USER_1'}
  `)
}

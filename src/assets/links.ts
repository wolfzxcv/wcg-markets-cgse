export const links = {
  majkf: 'https://majkf.yunhujiaozhongxin.net/Web/im.aspx?_=t&accountid=135464',
  liveChat: 'https://direct.lc.chat/11929440/4',
  weibo: 'https://m.weibo.cn/u/7727884823',
  wechat: 'http://weixin.qq.com/r/eRIzKz3E0mCtrXlI90dr',
  // MT4 Google play link
  mt4Android:
    'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&referrer=ref_id%3d5189084203383832573%26server%3dWenChuanGlobalLtd-Demo%252cWenChuanGlobalLtd-Live',
  // MT4 Apple store link
  mt4IOS: 'https://apps.apple.com/us/app/metatrader-4/id496212596',
  // MT4 Windows version
  mt4App:
    process.env.NEXT_PUBLIC_MT4_APP ||
    'https://download.mql5.com/cdn/web/asa.group.trading/mt4/asa4setup.exe',
  // MT4 Android version-APK
  mt4Apk:
    process.env.NEXT_PUBLIC_MT4_APK ||
    'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/metatrader4.apk?utm_source=www.metatrader4.com&utm_campaign=install.metaquotes',
  // MT4 Web Trader
  mt4Web: process.env.NEXT_PUBLIC_MT4_WEB || 'https://trade.asawcgm.com/',

  // 用戶中心註冊
  register:
    process.env.NEXT_PUBLIC_REGISTER_REAL ||
    'https://my.wcgmarkets-global.com/register',
  // 用戶中心
  userCenter:
    process.env.NEXT_PUBLIC_USERS_CENTER ||
    'https://my.wcgmarkets-global.com/login',
  // 聯絡電話
  tel: '+852 38963600',
  // 聯絡信箱
  email: 'support@wcghk.com'
};

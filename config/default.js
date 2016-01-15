var path = require('path');

module.exports = {
    debug: true,
    
    // 是否启用静态文件的合并压缩(详见视图中的Loader)
    get mini_assets() {
        return !this.debug;
    },

    name: 'mblog', // 社区名字
    description: '多用户博客系统', // 社区的描述
    keywords: 'mbolg, nodejs, node, 博客',

    // 添加到 html head 中的信息
    site_headers: [
        '<meta name="author" content="mblog" />'
    ],
    site_logo: '/public/images/mblog@2x.png', // default is `name`
    site_icon: '/public/images/icon_40.png', // 默认没有 favicon, 这里填写网址
    // 右上角的导航区
    site_navs: [
        // 格式 [ path, title, [target=''] ]
        ['/about', '关于']
    ],
    // cdn host，如 http://xxx.qiniudn.com
    site_static_host: '', // 静态文件存储域名
    // 域名
    host: 'localhost',
    // google tracker ID
    google_tracker_id: '',
    // cnzz tracker ID
    cnzz_tracker_id: '',

    // mongodb 配置
    db: 'mongodb://127.0.0.1/node_club_dev',

    // redis 配置，默认是本地
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0,

    session_secret: 'node-session-secret-for-test', // 务必修改
    auth_cookie_name: 'mblog',

    // 程序运行的端口
    port: 3000,

    // 话题列表显示的话题数量
    list_topic_count: 20,

    // RSS配置
    rss: {
        title: 'mblog：多用户博客系统',
        link: 'http://localhost',
        language: 'zh-cn',
        description: 'mblog：多用户博客系统',
        //最多获取的RSS Item数量
        max_rss_items: 50
    },

    // 邮箱配置
    mail_opts: {
        host: 'smtp.126.com',
        port: 25,
        auth: {
            user: 'username@126.com',
            pass: 'password'
        }
    },

    //weibo app key
    weibo_key: '',
    weibo_id: '',

    // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
    admins: {
        user_login_name: true
    },

    // github 登陆的配置
    GITHUB_OAUTH: {
        clientID: 'GITHUB_CLIENT_ID',
        clientSecret: 'GITHUB_CLIENT_SECRET',
        callbackURL: 'http://localhost/auth/github/callback'
    },
    
    // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,

    // oneapm 是个用来监控网站性能的服务
    oneapm_key: '',

    // 下面两个配置都是文件上传的配置

    // 7牛的access信息，用于文件上传
    qn_access: {
        accessKey: '',
        secretKey: '',
        bucket: '',
        origin: '',
        // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
        // 如果在国内，此项请留空
        uploadURL: ''
    },

    // 文件上传配置
    // 注：如果填写 qn_access，则会上传到 7牛，本地上传配置无效
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    },

    file_limit: '1MB',

    // 版块
    tabs: [
        ['share', '分享'],
        ['ask', '问答'],
        ['job', '招聘'],
    ],

    // 极光推送
    jpush: {
        appKey: '', // YourAccessKey
        masterSecret: '', // YourSecretKey
        isDebug: false,
    },

    create_post_per_day: 1000, // 每个用户一天可以发的主题数
    create_reply_per_day: 1000, // 每个用户一天可以发的评论数
    visit_per_day: 1000, // 每个 ip 每天能访问的次数
};
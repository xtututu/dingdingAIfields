import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';


const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com','token.yishangcloud.cn','open.feishu.cn','pay.xunkecloud.cn']);

fieldDecoratorKit.setDecorator({
  name: '抖音视频数据提取',
  // 定义AI 字段的i18n语言资源
  i18nMap: {
    'zh-CN': {
        'videoUrl': '视频链接',
        "aweme_id": "内容ID",
        "nickname": "作者昵称",
        "unique_id": "抖音号",
        "uid": "作者ID",
        "desc": "标题/正文",
        "hashtags": "标签",
        "digg_count": "点赞数",
        "comment_count": "评论数",
        "collect_count": "收藏数",
        "share_count": "分享数",
        "duration_seconds": "时长（秒）",
        "content_url": "内容链接",
        "cover_url": "封面图",
        "create_time": "发布时间",
        "fetched_at": "抓取时间",
        'errorTips1': 'AI 字段异常，维护中可联系开发者咨询', 
        'errorTips2': '令牌配置有误，请检查您的令牌是否正确，如仍有疑问可加入钉钉群咨询',
        'errorTips3': '官方任务超时，请稍后重试',
        'errorTips4': '提示词不能为空',
        

      },
      'en-US': {
       "videoUrl": "Video URL",
        "aweme_id": "Content ID",
        "nickname": "Author Nickname",
        "unique_id": "Douyin ID",
        "uid": "Author ID",
        "desc": "Title/Body",
        "hashtags": "Hashtags",
        "digg_count": "Digg Count",
        "comment_count": "Comment Count",
        "collect_count": "Collect Count",
        "share_count": "Share Count",
        "duration_seconds": "Duration (Seconds)",
        "content_url": "Content URL",
        "cover_url": "Cover Image",
        "create_time": "Create Time",
        "fetched_at": "Fetched At",
        'errorTips1': 'Model selection is required',
        'errorTips2': 'The token configuration is wrong. Please check whether your token is correct. If you still have any questions, you can join the Dingding group for consultation.',
        'errorTips3': 'Official task timeout, please try again later',
        'errorTips4': 'Image editing prompt cannot be empty',
       
      },
      'ja-JP': {
         "videoUrl": "動URL",
        "aweme_id": "コンテンツID",
        "nickname": "作者ニックネーム",
        "unique_id": "Douyin ID",
        "uid": "作者ID",
        "desc": "タイトル/本文",
        "hashtags": "タグ",
        "digg_count": "いいね数",
        "comment_count": "コメント数",
        "collect_count": "コレクション数",
        "share_count": "シェア数",
        "duration_seconds": "再生時間（秒）",
        "content_url": "コンテンツURL",
        "cover_url": "カバー画像",
        "create_time": "作成日時",
        "fetched_at": "取得日時",
        'errorTips1': 'モデル選択は必須です',
        'errorTips2': 'トークンの設定が間違っています。トークンが正しいかどうかを確認してください。まだ疑問がある場合は、DingDingグループに参加して相談してください。',
        'errorTips3': '公式タスクのタイムアウトが発生しました。後でもう一度お試しください。',
        'errorTips4': '画像編集提示詞は空にすることはできません',
      },
  },
    errorMessages: {
    // 定义错误信息集合
    'error2': t('errorTips2'),
    'error1': t('errorTips1'),
    'error3': t('errorTips3'),
    'error4': t('errorTips4'),
  },
  authorizations: 
    {
      id: 'auth_id',// 授权的id，用于context.fetch第三个参数指定使用
      platform: 'yishangcloud',// 授权平台，目前可以填写当前平台名称
      type: AuthorizationType.HeaderBearerToken, // 授权类型
      required: true,// 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
      instructionsUrl: "https://token.yishangcloud.cn/",// 帮助链接，告诉使用者如何填写这个apikey
      label: '关联账号', // 授权平台，告知用户填写哪个平台的信息
      tooltips: '请配置授权', // 提示，引导用户添加授权
      icon: { // 当前平台的图标
        light: 'https://token.yishangcloud.cn/logo1.png', 
        dark: 'https://token.yishangcloud.cn/logo1.png'
      }
    },
  // 定义AI 字段的入参
  formItems: [
    {
      key: 'videoUrl',
      label: t('videoUrl'),
      component: FormItemComponent.FieldSelect,
      tooltips: {
        title:  '请传入抖音视频链接'
      },
      props: {
        mode: 'single',
        supportTypes: [FieldType.Text],
      },
      validator: {
        required: true,
      }
    }
  ],
  // 定义AI 字段的返回结果类型
  resultType: {
    type: FieldType.Object,
     extra: {
      icon: {
        light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/abjayvoz/ljhwZthlaukjlkulzlp/2025Q4/common_pack/7572513111346167811_%E6%8A%96%E9%9F%B3.png',
      },
      properties: [
        {
          key: 'aweme_id',
          type: FieldType.Text,
          title: t('aweme_id'),
          primary: true,
        },
        {
          key: 'nickname',
          type: FieldType.Text,
          title: t('nickname'),
        },
        {
          key: 'unique_id',
          type: FieldType.Text,
          title: t('unique_id'),
        },
        {
          key: 'uid',
          type: FieldType.Text,
          title: t('uid'),
        },
        {
          key: 'desc',
          type: FieldType.Text,
          title: t('desc'),
        },
        {
          key: 'hashtags',
          type: FieldType.Text,
          title: t('hashtags'),
        },
        {
          key: 'digg_count',
          type: FieldType.Number,
          title: t('digg_count'),
         
        },
        {
          key: 'comment_count',
          type: FieldType.Number,
          title: t('comment_count'),
          
        },
        {
          key: 'collect_count',
          type: FieldType.Number,
          title: t('collect_count'),
          
        },
        {
          key: 'share_count',
          type: FieldType.Number,
          title: t('share_count'),

        },
        {
          key: 'duration_seconds',
          type: FieldType.Number,
          title: t('duration_seconds'),
          
        },
        {
          key: 'content_url',
          type: FieldType.Text,
          title: t('content_url'),
        },
        {
          key: 'cover_url',
          type: FieldType.Text,
          title: t('cover_url'),
          
        },
        {
          key: 'create_time',
          type: FieldType.Text,
          title: t('create_time'),
         
        },
        {
          key: 'fetched_at',
          type: FieldType.Text,
          title: t('fetched_at'),
        },
    ]
  }
    
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
execute: async (context: any, formItemParams: any) => {
  const { videoUrl } = formItemParams;
  console.log(videoUrl);
  

  // 日志工具
  const debugLog = (arg: any) => {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      ...arg
    }));
  };


  try {

    function normalizeInput(input: any): { fullText: string; douyinUrl: string } {
      let fullText = '';
      let douyinUrl = '';

      if (Array.isArray(input)) {
        // 富文本数组
        for (const node of input) {
          if (typeof node === 'string') {
            fullText += node;
          } else if (node && typeof node === 'object') {
            fullText += node.text ?? '';
            // url 节点的 link 可能被反引号包裹
            const link = (node.link || node.text || '').replace(/^`|`$/g, '');
            if (/https?:\/\/[^\s`]+/.test(link)) {
              douyinUrl = douyinUrl || link;
            }
          }
        }
      } else if (typeof input === 'string') {
        fullText = input;
        const urlMatch = input.match(/https?:\/\/[^\s`]+/);
        douyinUrl = urlMatch ? urlMatch[0] : '';
      } else if (input != null) {
        fullText = String(input);
      }

      return { fullText, douyinUrl };
    }

    const { fullText, douyinUrl } = normalizeInput(videoUrl);

    let toolId: string;
    let toolArgs: Record<string, string>;

    // 优先从完整文本里找 modal_id（两种输入格式都可能包含）
    const modalIdMatch = fullText.match(/[?&]modal_id=(\d+)/);
    if (modalIdMatch) {
      toolId = 'action.tikhub-v3-fetch-one-video-aecdea599710';
      toolArgs = { aweme_id: modalIdMatch[1] };
    } else {
      // 分享文案场景：优先用提取出的短链，兜底用完整文本
      toolId = 'action.tikhub-v3-fetch-one-video-by-share-url-70b798703a3a';
      toolArgs = { share_url: douyinUrl || fullText };
    }

    const requestBody = {
      name: 'execute_tools',
      arguments: { toolId, arguments: toolArgs }
    };

    console.log('===请求参数===', JSON.stringify(requestBody, null, 2));

    const resp = await context.fetch(
      'https://token.yishangcloud.cn/api/super-link/tool-calls',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      },
      'auth_id'
    );
    

    const data: any = await resp.json();
    console.log(data);
    if (!resp.ok) {
      if (data.success === false) {
        throw new Error(data.message || data)
      } else {
        throw new Error(data.error.message || data.message)
      }
    }

    return {
      code: FieldExecuteCode.Success,
      data: {
        id: `${Math.random()}`,
        aweme_id: data.data.result.value.data.aweme_detail.aweme_id,
        nickname: data.data.result.value.data.aweme_detail.author.nickname,
        unique_id: data.data.result.value.data.aweme_detail.author.unique_id,
        uid: data.data.result.value.data.aweme_detail.author.uid,
        desc: data.data.result.value.data.aweme_detail.desc,
        hashtags: (data.data.result.value.data.aweme_detail.text_extra ?? []).filter(item => item.hashtag_name).map(item => '#' + item.hashtag_name).join(' '),
        play_count: data.data.result.value.data.aweme_detail.statistics.play_count,
        digg_count: data.data.result.value.data.aweme_detail.statistics.digg_count,
        comment_count: data.data.result.value.data.aweme_detail.statistics.comment_count,
        collect_count: data.data.result.value.data.aweme_detail.statistics.collect_count,
        share_count: data.data.result.value.data.aweme_detail.statistics.share_count,
        duration_seconds: data.data.result.value.data.aweme_detail.video.duration / 1000,
        content_url: data.data.result.value.data.aweme_detail.share_url,
        cover_url: data.data.result.value.data.aweme_detail.video.cover.url_list[0],
        create_time: ((t)=>{const d=new Date(t*1000);return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`})(data.data.result.value.data.aweme_detail.create_time),
        fetched_at: new Date().toLocaleString('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).replace(/\//g,'/').replace(/\s+/,' ').replace(/:/,':'),
      },
    };
  } catch (err: any) {
    let errMsg = String(err?.message || err);
    errMsg = errMsg.replace(/\s*[Rr]equest id: .*$/, '');
    console.log(errMsg);

    if (errMsg.includes('令牌额度已用尽') || errMsg.includes('quota') || errMsg.includes('额度')) {
      return { code: FieldExecuteCode.QuotaExhausted };
    }
    if (errMsg.includes('gemini image generation failed') || errMsg.includes('当前分组上游负载已饱和') || errMsg.includes('request') || errMsg.includes("google gemini timeout") || errMsg.includes('官方超时')) {
      return { code: FieldExecuteCode.Error, errorMessage: 'error3' };
    }
    if (errMsg.includes('无效的令牌')) {
      return { code: FieldExecuteCode.AuthorizationError };
    }

    return {
      code: FieldExecuteCode.Error,
      extra: { errorMessage: errMsg }
    };
  }
}
});
export default fieldDecoratorKit;

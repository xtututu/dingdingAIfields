import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';


const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com','token.yishangcloud.cn','open.feishu.cn','pay.xunkecloud.cn']);

fieldDecoratorKit.setDecorator({
  name: '抖音商品数据采集',
  // 定义AI 字段的i18n语言资源
  i18nMap: {
    'zh-CN': {
         'goodsUrl': '抖音商品链接',
        "product_id": "商品ID",
        "title": "商品标题",
        "shop_id": "店铺ID",
        "shop_name": "店铺名称",
        "seller_id": "卖家ID",
        "cover_url": "封面图",
        "main_images": "商品图链接",
        "detail_images": "详情图链接",
        "sold_count": "销量",
        "positive_review_rate": "好评率",
        "assurances": "服务保障",
        "variant_groups": "SKU规格信息",
        "fetched_at": "提取时间",
        'errorTips1': 'AI 字段异常，维护中可联系开发者咨询', 
        'errorTips2': '令牌配置有误，请检查您的令牌是否正确，如仍有疑问可加入钉钉群咨询',
        'errorTips3': '官方任务超时，请稍后重试',
        'errorTips4': '提示词不能为空',
        

      },
      'en-US': {
        "goodsUrl": "Goods URL",
        "product_id": "Product ID",
        "title": "Title Title",
        "shop_id": "Shop ID",
        "shop_name": "Shop Name",
        "seller_id": "Seller ID",
        "cover_url": "Cover Image",
        "main_images": "Main Image URLs",
        "detail_images": "Detail Image URLs",
        "sold_count": "Sold Count",
        "positive_review_rate": "Positive Review Rate",
        "assurances": "Assurances",
        "variant_groups": "Variant Groups",
        "fetched_at": "Fetched At",
        'errorTips1': 'Model selection is required',
        'errorTips2': 'The token configuration is wrong. Please check whether your token is correct. If you still have any questions, you can join the Dingding group for consultation.',
        'errorTips3': 'Official task timeout, please try again later',
        'errorTips4': 'Image editing prompt cannot be empty',
       
      },
      'ja-JP': {
        "goodsUrl": "商品URL",
        "product_id": "商品ID",
        "title": "商品タイトル",
        "shop_id": "店舗ID",
        "shop_name": "店舗名",
        "seller_id": "売上ID",
        "cover_url": "売上画像",
        "main_images": "商品画像URL",
        "detail_images": "商品画像URL",
        "sold_count": "売上数",
        "positive_review_rate": "好评率",
        "assurances": "サービス保障",
        "variant_groups": "SKU仕様",
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
      key: 'goodsUrl',
      label: t('goodsUrl'),
      component: FormItemComponent.FieldSelect,
      tooltips: {
        title:  '请传入抖音商品链接'
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
          key: 'product_id',
          type: FieldType.Text,
          title: t('product_id'),
          primary: true,
        },
        {
          key: 'title',
          type: FieldType.Text,
          title: t('title'),
        },
        {
          key: 'shop_id',
          type: FieldType.Text,
          title: t('shop_id'),
        },
        {
          key: 'shop_name',
          type: FieldType.Text,
          title: t('shop_name'),
        },
        
        {
          key: 'cover_url',
          type: FieldType.Text,
          title: t('cover_url'),
        },
        {
          key: 'main_images',
          type: FieldType.Text,
          title: t('main_images'),
        },
        {
          key: 'detail_images',
          type: FieldType.Text,
          title: t('detail_images'),
        },
        {
          key: 'sold_count',
          type: FieldType.Number,
          title: t('sold_count'),
         
        },
        {
          key: 'positive_review_rate',
          type: FieldType.Number,
          title: t('positive_review_rate'),
          
        },
        {
          key: 'assurances',
          type: FieldType.Text,
          title: t('assurances'),
        },
        {
          key: 'variant_groups',
          type: FieldType.Text,
          title: t('variant_groups'),
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
  const { goodsUrl } = formItemParams;
  console.log(goodsUrl);
  

  // 日志工具
  const debugLog = (arg: any) => {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      ...arg
    }));
  };


  try {

      let toolId: string;
      let toolArgs: Record<string, string>;

      toolId = 'action.douyin-get-product-detail';
      toolArgs = { url: goodsUrl };

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
        product_id: data.data.result.value[0].product_id,
        title: data.data.result.value[0].title,
        shop_id: data.data.result.value[0].shop_id,
        shop_name: data.data.result.value[0].shop_name,
          // seller_id: null,
        cover_url: data.data.result.value[0].main_images?.[0]?.image_url ?? '',
        main_images: (data.data.result.value[0].main_images ?? []).map(item => item.image_url).filter(Boolean).join(','),
        detail_images: (data.data.result.value[0].detail_images ?? []).map(item => item.image_url).filter(Boolean).join(','),
        sold_count: data.data.result.value[0].sold_count,
        positive_review_rate: data.data.result.value[0].positive_review_rate/100,
        assurances: data.data.result.value[0].assurances.join(','),
        variant_groups: (data.data.result.value[0].variant_groups ?? []).map(group => group.name + '：' + (group.options ?? []).map(option => option.name).filter(Boolean).join('、')).join('\\n'),  
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

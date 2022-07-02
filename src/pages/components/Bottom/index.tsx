import React from 'react';
import { useNavigate } from 'react-router-dom';
import bottom from './index.less';

const Bottom: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<div id={bottom.bottom}>
				<div className={bottom.bottom}>
					<div className={bottom.bottomCopyright}>
						<header>
							<img src='https://cdn.ncxicn.cn/Web/logo.webp' alt='' srcSet='' />
						</header>
						<div>尊重学术，敬畏知识，永远保持一颗学徒的心</div>
						<div>
							<div className={bottom.bottomCopyrightContent}>
								<a
									href='http://localhost:3000/agreement/statement'
									target='_blank'
									rel='noopener noreferrer'
								>
									<span>网站声明</span>
								</a>
								<a
									href='http://localhost:3000/agreement/disclaimer'
									target='_blank'
									rel='noopener noreferrer'
								>
									<span>免责声明</span>
								</a>
								<a
									href='http://localhost:3000/agreement/license'
									target='_blank'
									rel='noopener noreferrer'
								>
									<span>开源许可协议</span>
								</a>
								<a href='https://beian.miit.gov.cn/'>
									<span>陕ICP备2022003802号-1</span>
								</a>
							</div>
							<span className={bottom.Copyright}>
								Copyright © 2022 NCXICN.CN All Rights Reserved. 前端技术宅
								版权所有
							</span>
						</div>
					</div>
					<div className={bottom.bottomFeedback}>
						<div className={bottom.bottomFeedbackContent}>
							<div>
								<span onClick={() => navigate('')}>网站日志</span>
								<span onClick={() => navigate('')}>合作洽谈</span>
								<span onClick={() => navigate('')}>反馈投诉</span>
								<span>
									反馈邮箱：
									<a href='mailto: heip@ncxicn.cn'>heip@ncxicn.cn</a>
								</span>
							</div>
						</div>
						<div className={bottom.wechat}>
							<img
								src='https://cdn.ncxicn.cn/Web/WechatImg.webp'
								alt='图片加载失败'
								title='微信公众号'
								className={bottom.wechats}
							/>
							<img
								src='https://cdn.ncxicn.cn/Web/WechatPlay.webp'
								alt='图片加载失败'
								title='支持我们'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bottom;

import React from 'react';
import Switch from '@/components/Switch';
import SearchBox from '@/components/SearchBox';
import { useNavigate } from 'react-router-dom';
import IMGS from '@/images/logo.png';
import header from './index.less';

const Header: React.FC = (props) => {
	const to = useNavigate();
	return (
		<>
			<div id={header.app}>
				<div className={header.app}>
					<div id={header.logo}>
						<img src={IMGS} alt='图片加载失败' srcSet='' />
					</div>
					<div id={header.header}>
						<span
							onClick={() => {
								to('/');
							}}
						>
							首页
						</span>
						<span
							onClick={() => {
								to('/article');
							}}
						>
							文章
						</span>
						<span
							onClick={() => {
								to('/cooperation');
							}}
						>
							合作
						</span>
						<span
							onClick={() => {
								to('/feedback');
							}}
						>
							反馈
						</span>
						<span
							onClick={() => {
								to('/access');
							}}
						>
							开源
						</span>
					</div>
					<div id={header.header}>
						<span>
							<SearchBox />
						</span>
						<span>版本</span>
						<span>语言</span>
						<span>
							<Switch />
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;

import React, { useRef, useState } from 'react';
import Label from '../Label';
import { failApi } from '@/api';
import NoContent from '@/images/NoContent.svg';
import searchbox from './index.less';

const SearchBox: React.FC = () => {
	const [state, setState] = useState<boolean>(false);
	const [hunt, setHunt] = useState<boolean>(false);
	const [condition, setCondition] = useState<boolean>(false);
	const searchboxValueElement = useRef<HTMLInputElement>(null);
	const [searchboxList, setSearchboxList] = useState([]);
	const SearchBoxs = () => {
		const res = document.getElementsByTagName('input');
		for (let index = 0; index < res.length; index++) {
			res[index].value = '';
		}
		setState(false);
		setHunt(false);
	};
	const eliminate = (e: any) => {
		const value = e.target.value;
		const NewVlaue = value.replace(/\s+/g, '');
		if (NewVlaue.length !== 0) {
			setState(true);
		} else {
			setState(false);
			setHunt(false);
		}
	};
	const seek = async () => {
		setSearchboxList([]);
		const value = searchboxValueElement.current?.value.replace(/\s+/g, '');
		if (value !== '') {
			try {
				const res = await failApi({ content: value });
				if (res.data.data.length > 0) {
					setSearchboxList(res.data.data);
					setHunt(true);
					setCondition(false);
				} else {
					setCondition(true);
					setHunt(true);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	const searchboxInput = (e: any) => {
		if (e.keyCode === 13) {
			seek();
		}
	};
	return (
		<>
			<div id={searchbox.searchbox}>
				<div id={searchbox.searchboxContnet}>
					<input
						type='text'
						className={searchbox.searchbox}
						ref={searchboxValueElement}
						onChange={eliminate}
						maxLength={100}
						autoComplete='off'
						placeholder='请输入搜索内容后回车'
						onKeyDown={searchboxInput}
					/>
					<div
						id={searchbox.off}
						onClick={SearchBoxs}
						style={{ visibility: state ? 'visible' : 'hidden' }}
					>
						<span className={searchbox.offRight}></span>
						<span className={searchbox.offLeft}></span>
					</div>
					<div className={searchbox.seekIcon} onClick={seek}>
						🔍
					</div>
				</div>
				<div
					className={searchbox.searchboxList}
					style={{ visibility: hunt ? 'visible' : 'hidden' }}
				>
					<div className={searchbox.searchboxList_list}>
						{searchboxList?.map((item: any, index) => {
							return <Label key={index} content={item.title} />;
						})}
					</div>
					<div className={searchbox.searchboxList_list_con}>
						<div style={{ display: condition ? 'block' : 'none' }}>
							<img src={NoContent} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBox;

'use client';
import React from 'react';
import Image from 'next/image';
import { useThemeStore } from '../store/useThemeStore';
import HomeBodyLink from './homeBodyLink';
import useTypingEffect from '@/hook/useTypingEffect';
import { Link } from './types';
import { useIcon } from '@/hook/useIcon';


const links: Link[] = [
	{
		text: 'Email',
		type: 'email',
		url: 'mailto:jukrap628@gmail.com',
	},
	{
		text: '[정지] Github',
		type: 'github',
		url: 'https://github.com/jukrap',
		isExternal: true,
	},
	{
		text: '[임시] Github',
		type: 'github',
		url: 'https://github.com/jukrap2',
		isExternal: true,
	},
	{
		text: 'Blog',
		type: 'blog',
		url: 'https://valur.tistory.com/',
		isExternal: true,
	},
	{
		text: 'LinkedIn',
		type: 'linkedin',
		url: 'https://www.linkedin.com/in/jukrap/',
		isExternal: true,
	},
];

export default function HomePage() {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const { getIcon } = useIcon();
	const names = ['Ju-cheol Park', 'Jukrap'];
	const typedText = useTypingEffect(names, {
		typingSpeed: 150,
		deletingSpeed: 100,
		pauseDuration: 2000,
	});

	return (
		<main className="w-fixed flex flex-col items-center gap-24 pt-44 pb-48">
			<section className="flex flex-col items-center gap-10 pt-30">
				<div className="flex items-center border-foreground leading-6 py-3 border-t border-b gap-65">
					<h1 className="font-bold text-8xl text-center text-foreground min-h-[4.5rem] select-none">
						{typedText.split('').map((char, index) => (
							<span
								key={index}
								className={index === typedText.length - 1 ? 'underline-wide' : ''}
							>
								{char}
							</span>
						))}
						{typedText === '' && <span className="opacity-0">_</span>}
					</h1>
				</div>
				<div className="flex items-center gap-65">
					{' '}
					{/* 여기 여차하면 삭제하는 게 좋을 듯. 조금 부자연스러움. */}
					<p className="font-bold text-3xl leading-auto text-center text-foreground">
						Jukrap의 개인 사이트에 오신 것을 환영합니다.
					</p>
				</div>
			</section>
			<section className="flex flex-row items-center justify-center gap-10">
				{links.map((link) => (
					<HomeBodyLink key={link.url} {...link} icon={getIcon(link.type)} />
				))}
			</section>
			<section className="flex flex-col items-center gap-16">
				<div className="flex flex-col items-center gap-8">
					<p className="font-medium text-2xl leading-8 text-center text-foreground">
						혹시 저의 <span className="font-bold">포트폴리오 파일</span>이
						필요하신가요?
						<br />
						그렇다면 아래의 <span className="font-bold">PDF 다운로드 버튼</span>을
						눌러주세요!
					</p>
					<a
						href="/files/Ju-cheol-Park_Frontend.pdf"
						download
						className="relative flex items-center gap-2 px-4 py-2 font-bold text-xl leading-5 text-center text-background bg-foreground rounded-lg hover:bg-accent transition-colors duration-300 select-none"
					>
						<div className="relative w-6 h-6 flex items-center justify-center no-select">
							<Image
								src={getIcon('downArrow')}
								alt="Download Icon"
								width={24}
								height={24}
								className="absolute top-0 left-0 animate-downloadArrow"
							/>
						</div>
						<span className="ml-2">portfolio.PDF</span>
					</a>
				</div>
			</section>
		</main>
	);
}

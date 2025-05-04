import React from 'react';
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const StartupCard = ({ post }: { post: any }) => {
	const {
		_createdAt,
		views,
		auther: { _id: autherId, name },
		title,
		category,
		_id,
		image,
        description,
	} = post;
	return (
		<li className="startup-card hover:bg-primary-100 shadow-200  hover:border-primary hover:shadow-300 group">
			<div className="flex-between">
				<p className="startup_card_date">{formatDate(_createdAt)}</p>
				<div className="flex gap-1.5">
					<EyeIcon className="size-6 text-primary" />
					<span className="text-16-medium">{views}</span>
				</div>
			</div>

			<div className="flex-between mt-5 gap-5">
				<div className="flex-1">
					<Link href={`/user/${autherId}`}>
						<p className="text-16-medium line-clamp-1">{name}</p>
					</Link>
					<Link href={`/startup/${_id}`}>
						<h3 className="text-26-semibold line-clamp-1">{title}</h3>
					</Link>
				</div>
				<Link href={`/user/${autherId}`}>
					<Image
						src={'https://placehold.co/48*48'}
						alt="placeholder"
						width={48}
						height={48}
						className="rounded-full"
					/>
				</Link>
			</div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc text-black-100">
                    {description}
                </p>

                <img src={image} alt="placeholder" className='startup-card_img' />
            </Link>

            <div className="flex-between gap-2 mt-5">
                <Link href={`/?query-${category.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
		</li>
	);
};

export default StartupCard;

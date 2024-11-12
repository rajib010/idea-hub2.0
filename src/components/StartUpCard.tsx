import React from 'react'
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

// export type StartupCardType = {
//     _id?: string;
//     _createdAt?: Date;
// }

const StartUpCard = ({ post }: { post: StartupCardType }) => {

    const { _createdAt,_id, author, views, description, image, category, title } = post;

    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>
            <div className="flex-between gap-5 mt-5">
                <div className='flex-1'>
                    <Link href={`/user/${author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src={"https://placehold.co/600x400"} alt='userProfile' width={48} height={48} className='rounded-full'/>
                </Link>
            </div>
            <Link href={`/user/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
                <img src={image} alt="startup-image" className='startup-card_img' />
            </Link>
            <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup-card_btn' asChild>
                <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>
    )
}

export default StartUpCard
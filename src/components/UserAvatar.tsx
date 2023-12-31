import {User} from 'next-auth';
import {FC} from 'react';
import {Avatar, AvatarFallback, AvatarImage} from './ui/Avatar';
import {Icons} from './Icons';
import {AvatarProps} from '@radix-ui/react-avatar';

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'name' | 'image'>;
}

const UserAvatar: FC<UserAvatarProps> = ({user, ...props}) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage
          src={user.image}
          alt='profile picture'
          referrerPolicy='no-referrer'
        />
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user.name}</span>
          <Icons.user className='h-4 w-4' />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;

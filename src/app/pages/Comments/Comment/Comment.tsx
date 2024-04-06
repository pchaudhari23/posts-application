import { FC } from 'react';
import { CommentType } from '../../../../types';
import Typography from '@mui/material/Typography';

interface CommentProps {
    comment: CommentType
}

const Comment: FC<CommentProps> = ({ comment }) => {
    return (
        <div>
            {/* <h1>Comment</h1> */}
            <Typography variant="h6" gutterBottom>{comment.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>{comment.body}</Typography>
        </div>
    )
}

export default Comment
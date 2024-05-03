import { Star } from './Star'
import './Stars.css'
import uniqid from 'uniqid';

interface Props {
  count: number;
}

export  const Stars = ({ count = 0 } : Props) => {
  if (!count || count > 5 || count < 0) {
    return null
  }

  return (
    <div className='card-body-stars u-clearfix'>
      {[...Array(count)].map(() => (
        <li key={uniqid()}>
          <Star key={uniqid()}/>
        </li>
      ))}
    </div>
  )
}

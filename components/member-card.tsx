import { Member } from '../util/types'
import ReactMarkdown from 'react-markdown'

interface MemberCardProps {
  member: Member | string
}

const MemberCard = (props: MemberCardProps) => {
  const { member } = props

  if (typeof member === 'string') {
    return (
      <div className='container max-w-md p-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-center rounded'>
        {member}
      </div>
    )
  } else {
    return (
      <div className='container max-w-md p-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-center rounded flex flex-col items-center gap-2'>
        {member.banner && (
          <img
            className='max-h-48 object-cover rounded'
            src={member.banner}
            alt={member.name}
          />
        )}
        <div>
          {member.avatar_url && (
            <img
              className='max-h-48 border-4 object-cover rounded float-left mr-2'
              src={member.avatar_url}
              alt={member.name}
              style={{
                borderColor: `#${member.color}`,
              }}
            />
          )}
          <div>
            <h1 className='text-xl font-bold'>{member.name}</h1>
            {member.display_name && (
              <h2 className='text-lg italic'>{member.display_name}</h2>
            )}
            {member.pronouns && (
              <div className='font-bold'>{member.pronouns}</div>
            )}
            {member.birthday && <div className='italic'>{member.birthday}</div>}
            {member.description && (
              <ReactMarkdown className='text-justify max-w-prose whitespace-pre-line'>
                {member.description}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default MemberCard

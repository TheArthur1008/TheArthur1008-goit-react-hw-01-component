import Profile from './Profile/Profile';
import user from './JSON/user.json'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101'
      }}
    >

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

    </div>
  );
};

import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Ismael',
    src: 'https://avatars.githubusercontent.com/u/68153258?v=4',
    profile: 'https://avatars.githubusercontent.com/u/68153258?v=4',
  },
  {
    name: 'Jeff Besos',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Bill gates',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <>
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        </>
      ))}
    </div>
  );
}

export default Stories;

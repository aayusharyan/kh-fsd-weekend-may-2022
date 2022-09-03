import Emojis from '../components/Emojis';
import emojiList from '../data';

const Home = _ => {
  return (
    <>
    {/* <h2>Home</h2> */}
    <Emojis data={emojiList} />
    </>
  )
}

export default Home;
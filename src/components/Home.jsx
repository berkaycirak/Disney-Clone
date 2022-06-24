import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Viewers from './Viewers';
// import { addCollectionAndDocuments } from '../firebase';
// import data from '../disneyPlusMoviesData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { collection, onSnapshot } from 'firebase/firestore';
import Trendings from './Trendings';

function Home(props) {
  // When we add data into firebase, we can delete below useEffect.
  // useEffect(() => {
  //   addCollectionAndDocuments('movies', data);
  // }, []);

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    const collectionRef = collection(db, 'movies');
    onSnapshot(collectionRef, (snapshot) => {
      snapshot.docs.map((item) => {
        switch (item.data().type) {
          case 'recommend':
            recommends = [
              ...recommends,
              { id: item.data().id, ...item.data() },
            ];

            break;

          case 'new':
            newDisneys = [
              ...newDisneys,
              { id: item.data().id, ...item.data() },
            ];
            break;
          case 'original':
            originals = [...originals, { id: item.data().id, ...item.data() }];
            break;
          case 'trending':
            trendings = [...trendings, { id: item.data().id, ...item.data() }];
            break;
          default:
            console.log('Hello');
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/assets/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
      <div>
        <img src="images/user.svg" alt="" />
        <button>Start a post</button>
      </div>
      <div>
        <button>
          <img src="/images/photo-icon.svg" alt="" />
          <span>Photo</span>
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgb(0 0 0 1/20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
`;
export default Main;
